"use client";

import Image from "next/image";
import React, { MouseEvent } from "react";
import Specifications from "./Specifications";
import { useRouter } from "next/navigation";
import { Vehicle } from "@/types";
import useHelper from "@/hooks/useHelper";

const GalleryCard = ({ data }: { data: Vehicle }) => {
  const {calcDiscount} = useHelper()
  const router = useRouter();
  const handleProductClick = () => {
    router.push(`details/${data._id}`);
  };
  return (
    <div className="flex flex-col md:gap-2 bg-light md:p-2 rounded-md w-[48%] h-[356px] sm:w-[275px] sm:h-[405px]">
      <div
        onClick={handleProductClick}
        className="w-full cursor-pointer max-h-[175px] min-h-[175px] sm:max-h-[200px] sm:min-h-[200px] relative"
      >
        <Image
          src={data.coverImage}
          alt="product_image"
          sizes="auto"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="flex flex-col h-full gap-1 mx-2 mb-2 md:gap-2">
        <span className="font-semibold text-gray-500">
          {data.brand}-{data.modelName}
        </span>
        <span className="font-semibold flex flex-wrap text-black text-[16px]">
          ₹{data.sellingPrice.toLocaleString()}
          <span className="px-2 text-gray-500 line-through">₹{data.price.toLocaleString()}</span>
          <span className="text-sm font-semibold text-green-600">{calcDiscount(data.price, data.sellingPrice)}% off</span>
        </span>
        <div className="h-full flex-center ">
          <div className="grid w-full h-full grid-cols-2 gap-1 text-black md:gap-2">
            <Specifications data={data} />
          </div>
        </div>
        <div className="flex-center">
          <button className="w-full py-2 rounded-md text-light bg-rose-600">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
