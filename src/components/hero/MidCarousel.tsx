import Image from "next/image";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type MidCarouselProps = {
  link: string;
  handleManually: (flag: string) => void;
};

const MidCarousel = ({ link, handleManually }: MidCarouselProps) => {
  return (
    <div className="absolute flex flex-col items-center w-full h-full gap-6 justify-evenly">
      <h1 className="w-full py-2 text-3xl text-center text-light bg-black/80">New Stock</h1>
      <div className="grid items-center justify-center gap-10 md:flex">
        <FaAngleLeft
          className="mx-auto text-4xl rotate-90 cursor-pointer md:rotate-0 text-light hover:text-primary"
          onClick={() => handleManually("R")}
        />
        <div className="shadow-red__md bg-dark relative cursor-pointer hover:scale-[1.02] transition ease-in-out delay-100 duration-150 overflow-auto w-[65vw] h-[65vw] md:w-[45vw] md:h-[45vw] lg:w-[30vw] lg:h-[30vw] rounded-full ">
          <Image
            src={link}
            sizes="auto"
            fill
            priority
            alt="latest-main-pic"
            className="object-contain"
          />
        </div>
        <FaAngleRight
          className="mx-auto text-4xl rotate-90 cursor-pointer md:rotate-0 text-light hover:text-primary"
          onClick={() => handleManually("F")}
        />
      </div>
      <div className="items-center w-full py-2 text-xl text-center text-primary bg-black/80">YAMAHA - <span className="text-white">FZ</span></div>
    </div>
  );
};

export default MidCarousel;
