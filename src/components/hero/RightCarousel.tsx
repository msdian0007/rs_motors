import React from "react";
import SideCarousel from "./SideCarousel";
import { newStock } from "@/types";

const RightCarousel = ({ newStocks }: { newStocks: newStock[] }) => {
  let mid = Math.floor(newStocks.length / 2);
  let rightStock = newStocks.slice(mid + 1, newStocks.length);
  return (
    <>
      {rightStock.toReversed().map((ele, i) => (
        <div
          key={ele._id}
          className={`${
            i < newStocks.length ? "sm:-ml-[75px] ml-0 sm:mt-0 -mt-[65px]" : ""
          } `}
        >
          <SideCarousel key={i} link={ele.coverImage} index={i}/>
        </div>
      ))}
    </>
  );
};

export default RightCarousel;
