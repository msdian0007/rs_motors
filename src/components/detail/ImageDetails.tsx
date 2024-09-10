import useHelper from "@/hooks/useHelper";
import { Vehicle } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type ImageDetailsProps = {
  data: Vehicle;
  index: number;
  handelNext: (flag: number) => void;
};

const ImageDetails = ({ data, index }: ImageDetailsProps) => {
  const [allImages, setAllImages] = useState([data.coverImage, ...data.images]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { calcDiscount } = useHelper();

  const handelNext = (index: number) => {
    if (index < 0 || index >= data.images?.length + 1) return; // +1 ADDED BCZ COVER-IMAGE AND IMAGES MERGED
    setCurrentIndex(index);
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
        <div className="h-[400px] w-full relative bg-light rounded-md">
          <Image
            src={allImages[currentIndex]}
            alt="product_image"
            sizes="auto"
            fill
            priority
            className="object-contain"
          />
        </div>
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
          <button className="md:w-full w-1/2 py-2 rounded-md text-light bg-rose-600">
            Interested
          </button>
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
