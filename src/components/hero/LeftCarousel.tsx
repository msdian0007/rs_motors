import React from "react";
import SideCarousel from "./SideCarousel";

const LeftCarousel = ({ newStocks }: { newStocks: string[] }) => {
  let mid = Math.floor(newStocks.length / 2);

  let leftStock = newStocks.slice(0, mid);
  return (
    <>
      {leftStock.map((ele, i) => {
        return (
          <div
            className={`${
              i < mid ? "md:-mr-[75px] ml-0 md:mb-0 -mb-[55px]" : ""
            } `}
          >
            <SideCarousel key={ele} link={ele} />
          </div>
        );
      })}
    </>
  );
};

export default LeftCarousel;
