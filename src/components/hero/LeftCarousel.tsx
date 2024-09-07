import React from "react";
import SideCarousel from "./SideCarousel";
import { newStock } from "@/types";

const LeftCarousel = ({ newStocks }: { newStocks: newStock[] }) => {
  let mid = Math.floor(newStocks.length / 2);

  let leftStock = newStocks.slice(0, mid);
  return (
    <>
      {leftStock.map((ele, i) => {
        return (
          <div
            key={i}
            className={`${
              i < mid ? "md:-mr-[75px] ml-0 md:mb-0 -mb-[55px]" : ""
            } `}
          >
            <SideCarousel key={ele.coverImage} link={ele.coverImage} />
          </div>
        );
      })}
    </>
  );
};

export default LeftCarousel;
