import { newStock } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type MidCarouselProps = {
  data: newStock;
  handleManually: (flag: string) => void;
};

const MidCarousel = ({ data, handleManually }: MidCarouselProps) => {
  const router = useRouter();
  const handleProductClick = () => {
    router.push(`details/${data._id}`, { scroll: false });
  };
  return (
    <div className="grid items-center justify-center gap-10 sm:flex">
      <FaAngleLeft
        className="mx-auto text-4xl rotate-90 cursor-pointer sm:rotate-0 text-light hover:text-primary"
        onClick={() => handleManually("R")}
      />
      <div
        onClick={handleProductClick}
        className="shadow-red__md bg-light relative cursor-pointer hover:scale-[1.02] transition ease-in-out delay-100 duration-150 overflow-auto size-[78vw] sm:size-[45vw] md:size-[45vw] lg:size-[32vw] rounded-full "
      >
        <Image
          src={data.coverImage}
          sizes="auto"
          fill
          priority
          alt="latest-main-pic"
          className="object-contain"
        />
      </div>
      <FaAngleRight
        className="mx-auto text-4xl rotate-90 cursor-pointer sm:rotate-0 text-light hover:text-primary"
        onClick={() => handleManually("F")}
      />
    </div>
  );
};

export default MidCarousel;
