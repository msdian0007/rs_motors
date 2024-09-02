import Image from "next/image";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type ImageDetailsProps = {
  link: string;
  index: number;
  handelNext: (index: number) => void;
};

const ImageDetails = ({ link, index, handelNext }: ImageDetailsProps) => {
  return (
    <div className="w-[100%] flex-center gap-4 md:gap-8">
      <FaAngleLeft
        className="mx-auto text-4xl cursor-pointer text-light hover:text-primary"
        onClick={() => handelNext(index - 1)}
      />
      <div className="grid gap-6 w-full">
        <div className="flex-center">
          <span className="font-semibold text-2xl">YAMAHA-FZ</span>
        </div>
        <div className="h-[400px] w-full relative bg-light rounded-md">
          <Image
            src={link}
            alt="product_image"
            sizes="auto"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="flex-center">
          <span className="font-semibold text-2xl">₹35,00,000</span>
          <span className="px-2 text-gray-500 line-through text-xl">
            ₹39,00,000
          </span>
          <span className="text-sm font-semibold bg-green-600 text-dark rounded-full  px-2">
            24% off
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
        onClick={() => handelNext(index + 1)}
      />
    </div>
  );
};

export default ImageDetails;
