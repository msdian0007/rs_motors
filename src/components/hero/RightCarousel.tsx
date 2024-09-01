import React from "react";
import SideCarousel from "./SideCarousel";

const RightCarousel = ({ newStocks }: { newStocks: string[] }) => {
  let mid = Math.floor(newStocks.length / 2);
  let rightStock = newStocks.slice(mid + 1, newStocks.length);
  return (
    <>
      {rightStock.toReversed().map((ele, i) => (
        <div
          key={i}
          className={`${
            i < newStocks.length ? "md:-ml-[75px] ml-0 md:mt-0 -mt-[55px]" : ""
          } `}
        >
          <SideCarousel key={i} link={ele} />
        </div>
      ))}
    </>
  );
};

export default RightCarousel;
