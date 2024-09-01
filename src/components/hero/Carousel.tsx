"use client";

import React, { useEffect, useState } from "react";
import MidCarousel from "./MidCarousel";
import { vehicles } from "@/constants";
import LeftCarousel from "./LeftCarousel";
import RightCarousel from "./RightCarousel";

const Carousel = () => {
  const [newStocks, setNewStocks] = useState(vehicles);
  const [isManually, setIsManually] = useState(false);

  const handleManually = (flag: string) => {
    setIsManually(true);
    let temp = newStocks;
    if (flag === "F") {
      temp.push(newStocks[0]);
      temp.shift();
    } else {
      temp.unshift(newStocks[newStocks.length - 1]);
      temp.pop();
    }
    setNewStocks([...temp]);
  };

  useEffect(() => {
    let intervalId: any;
    if (!intervalId && !isManually) {
      intervalId = setInterval(() => {
        let temp = newStocks;
        temp.push(newStocks[0]);
        temp.shift();
        setNewStocks([...temp]);
      }, 5000);
    }

    return () => clearInterval(intervalId);
  }, [vehicles.length, isManually]);

  let mid = Math.floor(vehicles.length / 2);

  return (
    <div className="relative flex-center h-full gap-[100px] w-full overflow-hidden">
      <div className="flex-center relative flex-col md:flex-row md:gap-[350px] lg:gap-[400px] gap-[275px]">
        {/* LEFT */}
        <div className="flex flex-col items-center md:flex-row">
          <LeftCarousel newStocks={newStocks} />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col-reverse items-end w-full md:flex-row-reverse">
          <RightCarousel newStocks={newStocks} />
        </div>
      </div>
      
      {/* MID */}
      <MidCarousel link={newStocks[mid]} handleManually={handleManually} />
    </div>
  );
};

export default Carousel;
