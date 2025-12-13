import React from "react";
import Carousel from "./Carousel";
import { getNewStock } from "@/utils/vehicleServices";
import { unstable_cache } from "next/cache";

export const revalidate = 60;

const fetchNewStock = unstable_cache(
  async () => {
    try {
      const data = await getNewStock();
      return data ?? [];
    } catch (err) {
      // Log server-side so production errors are visible in logs
      // keep function resilient: return empty array on failure
      // eslint-disable-next-line no-console
      console.error("fetchNewStock error:", err);
      return [];
    }
  },
  ["newStock"],
  { revalidate: 10, tags: ["newStock"] }
);

const Hero = async () => {
  const data = await fetchNewStock();
  return (
    <div className="flex-center h-[calc(100svh)]">
      {data?.length > 0 ? (
        <Carousel data={data} />
      ) : (
        <div className="text-center">No new vehicles available</div>
      )}
    </div>
  );
};

export default Hero;
