import React from "react";
import Carousel from "./Carousel";
import { getNewStock } from "@/utils/vehicleServices";
import { unstable_cache } from "next/cache";

export const revalidate = 60;

const fetchNewStock = unstable_cache(
  async () => {
    return await getNewStock();
  },
  ["newStock"],
  { revalidate: 60, tags: ["newStock"] }
);

const Hero = async () => {
  const data = await fetchNewStock();
  return (
    <div className="flex-center h-[calc(100svh)]">
      {data?.length > 0 && <Carousel data={data} />}
    </div>
  );
};

export default Hero;
