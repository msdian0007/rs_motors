"use client";
import Image from "next/image";
import React, { useState } from "react";
import DetailSpecification from "./DetailSpecification";
import { GrSchedule } from "react-icons/gr";
import LeftSideDetails from "./LeftSideDetails";
import RightSideDetails from "./RightSideDetails";
import ImageDetails from "./ImageDetails";
import { vehicles } from "@/constants";
import BottomDetails from "./BottomDetails";

const Details = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handelNext = (index: number) => {
    if (index < 0 || index >= vehicles.length) return;
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-[calc(100vh-50px)] md:flex md:justify-center md:items-center grid gap-4 px-2 md:px-10">
      <div className="w-[90%] hidden md:flex flex-col gap-6 items-start">
        <LeftSideDetails />
      </div>
      <ImageDetails
        link={vehicles[currentIndex]}
        index={currentIndex}
        handelNext={handelNext}
      />
      <div className="w-[90%] hidden md:flex flex-col gap-4 items-end">
        <RightSideDetails />
      </div>
      <div className="md:hidden flex">
        <BottomDetails />
      </div>
    </div>
  );
};

export default Details;
