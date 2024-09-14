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
              i < mid ? "sm:-mr-[75px] ml-0 sm:mb-0 -mb-[65px]" : ""
            } `}
          >
            <SideCarousel key={ele.coverImage} link={ele.coverImage} index={i}/>
          </div>
        );
      })}
    </>
  );
};

export default LeftCarousel;
