import React from "react";
import Carousel from "./Carousel";
import { vehicleServices } from "@/apis/vehicle.service";

const getNewStock = async () => {
  return await vehicleServices.getNewStock();
};

const Hero = async () => {
  const data = await getNewStock();
  return (
    <div className="flex-center h-[calc(100vh-50px)]">
      <Carousel data={data} />
    </div>
  );
};

export default Hero;
