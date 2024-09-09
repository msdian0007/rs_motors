import React from "react";
import Carousel from "./Carousel";
import { getNewStock } from "@/utils/vehicleServices";

const fetchNewStock = async () => {
  return await getNewStock()
};

const Hero = async () => {
  const data = await fetchNewStock();
  return (
    <div className="flex-center h-[calc(100vh-50px)]">
      <Carousel data={data} />
    </div>
  );
};

export default Hero;
