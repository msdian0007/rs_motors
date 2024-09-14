import Image from "next/image";
import React from "react";

const sizes = [
  "size-[10vw] sm:size-[9vw] lg:size-[9vw]",
  "size-[20vw] sm:size-[13vw] lg:size-[11vw]",
  "size-[30vw] sm:size-[19vw] lg:size-[13vw]",
  "size-[45vw] sm:size-[24vw] lg:size-[17vw]",
  "size-[60vw] sm:size-[32vw] lg:size-[22vw]",
];

const SideCarousel = ({ link, index }: { link: string, index:number }) => {
  return (
    <div className="flex-center">
      <div
        className={`relative transition-all bg-dark overflow-auto ${sizes[index % sizes.length]} rounded-full shadow-red`}
      >
        <Image
          src={link}
          sizes="auto"
          fill
          priority
          alt="latest-main-pic"
          className="object-contain opacity-25"
        />
      </div>
    </div>
  );
};

export default SideCarousel;
