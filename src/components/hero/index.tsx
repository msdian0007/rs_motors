import React from "react";
import Carousel from "./Carousel";
import { getNewStock } from "@/utils/vehicleServices";

export const revalidate = 3600

const fetchNewStock = async () => {
  return await getNewStock();
};

const Hero = async () => {
  const data = await fetchNewStock();
  return (
    <div className="flex-center h-[calc(100svh)]">
      {data?.length > 0 && <Carousel data={data} />}
    </div>
  );
};

export default Hero;
