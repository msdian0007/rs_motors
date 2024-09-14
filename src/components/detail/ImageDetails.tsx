"use client";

import useHelper from "@/hooks/useHelper";
import { Vehicle } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaCheckCircle } from "react-icons/fa";

type ImageDetailsProps = {
  data: Vehicle;
  index: number;
  handelNext: (flag: number) => void;
};

const ImageDetails = ({ data, index }: ImageDetailsProps) => {
  const [interested, setInterested] = useState("");
  const [allImages, setAllImages] = useState([data.coverImage, ...data.images]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const router = useRouter();

  const { calcDiscount, updateIsInterested, isAlreadyInterested } = useHelper();

  const handelNext = (index: number) => {
    if (index < 0 || index >= data.images?.length + 1) return; // +1 ADDED BCZ COVER-IMAGE AND IMAGES MERGED
    setCurrentIndex(index);
  };

  const handleIsInterested = async (id: string) => {
    const response = await updateIsInterested(id);
    if (response) {
      setInterested(id);
    } else {
      router.push(`/userRgister/${id}`, { scroll: false });
    }
  };
  return (
    <div className="w-[100%] flex-center gap-4 md:gap-8">
      <FaAngleLeft
        className="mx-auto text-4xl cursor-pointer text-light hover:text-primary"
        onClick={() => handelNext(currentIndex - 1)}
      />
      <div className="grid gap-6 w-full">
        <div className="flex-center">
          <span className="font-semibold text-2xl">
            {data.brand}-{data.modelName}
          </span>
        </div>
        {allImages.map((img, i) => {
          return (
            <div key={img} className={`h-[400px] w-full relative bg-light rounded-md ${i !== currentIndex && 'hidden'}`}>
              <Image
                src={img}
                alt="product_image"
                sizes="auto"
                fill
                priority
                className="object-contain"
              />
            </div>
          );
        })}
        <div className="flex-center">
          <span className="font-semibold text-2xl">
            ₹{data.sellingPrice.toLocaleString()}
          </span>
          <span className="px-2 text-gray-500 line-through text-xl">
            ₹{data.price.toLocaleString()}
          </span>
          <span className="text-sm font-semibold bg-green-600 text-dark rounded-full  px-2">
            {calcDiscount(data.price, data.sellingPrice)}% off
          </span>
        </div>
        <div className="flex-center">
          {(isClient && interested === data._id) ||
          isAlreadyInterested(data?._id ?? " ") ? (
            <button
              disabled
              className="w-full py-2 rounded-md text-light bg-green-600 flex-center"
            >
              <FaCheckCircle className="text-2xl" />
            </button>
          ) : (
            <button
              onClick={() => handleIsInterested(data?._id ?? "")}
              className="w-full py-2 rounded-md text-light bg-rose-600"
            >
              Interested
            </button>
          )}
        </div>
      </div>
      <FaAngleRight
        className="mx-auto text-4xl cursor-pointer text-light hover:text-primary"
        onClick={() => handelNext(currentIndex + 1)}
      />
    </div>
  );
};

export default ImageDetails;
