import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type MidCarouselProps = {
  link: string;
  handleManually: (flag: string) => void;
};

const MidCarousel = ({ link, handleManually }: MidCarouselProps) => {
  const router = useRouter();
  const handleProductClick = () => {
    router.push(`rs_motors/${3}`);
  };
  return (
    <div className="grid items-center justify-center gap-10 md:flex">
      <FaAngleLeft
        className="mx-auto text-4xl rotate-90 cursor-pointer md:rotate-0 text-light hover:text-primary"
        onClick={() => handleManually("R")}
      />
      <div
        onClick={handleProductClick}
        className="shadow-red__md bg-dark relative cursor-pointer hover:scale-[1.02] transition ease-in-out delay-100 duration-150 overflow-auto w-[65vw] h-[65vw] md:w-[45vw] md:h-[45vw] lg:w-[30vw] lg:h-[30vw] rounded-full "
      >
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
  );
};

export default MidCarousel;
