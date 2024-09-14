"use client";

import React, { useState } from "react";
import LeftSideDetails from "./LeftSideDetails";
import RightSideDetails from "./RightSideDetails";
import ImageDetails from "./ImageDetails";
import BottomDetails from "./BottomDetails";
import { Vehicle } from "@/types";

const Details = ({ data }: { data: Vehicle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handelNext = (index: number) => {
    if (index < 0 || index >= data.images?.length) return;
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-[calc(100vh)] md:flex md:justify-center md:items-center grid gap-4 px-2 md:px-10">
      <div className="w-[90%] hidden md:flex flex-col gap-6 items-start">
        <LeftSideDetails data={data} />
      </div>
      <ImageDetails data={data} index={currentIndex} handelNext={handelNext} />
      <div className="w-[90%] hidden md:flex flex-col gap-4 items-end">
        <RightSideDetails data={data} />
      </div>
      <div className="md:hidden flex">
        <BottomDetails data={data} />
      </div>
    </div>
  );
};

export default Details;
