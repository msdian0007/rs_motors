import Image from "next/image";
import React from "react";
import Specifications from "./Specifications";

const MainCard = () => {
  return (
    <div className="flex flex-col md:gap-2 bg-light md:p-2 rounded-md w-[48%] h-[356px] sm:w-[275px] sm:h-[400px]">
      <div className="w-full max-h-[175px] min-h-[175px] sm:max-h-[200px] sm:min-h-[200px] relative">
        <Image
          src="/rs_motors/hero.png"
          alt="product_image"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col h-full gap-1 mx-2 mb-2 md:gap-2">
        <span className="font-semibold text-gray-500">Toyota-Fortuner</span>
        <span className="font-semibold flex flex-wrap text-black text-[16px]">
          ₹35,00,000
          <span className="px-2 text-gray-500 line-through">₹39,00,000</span>
          <span className="text-sm font-semibold text-green-600">24% off</span>
        </span>
        <div className="h-full flex-center ">
          <div className="grid w-full h-full grid-cols-2 gap-1 text-black md:gap-2">
            <Specifications />
          </div>
        </div>
        <div className="flex-center">
          <button className="w-full py-2 rounded-md text-light bg-rose-600">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
