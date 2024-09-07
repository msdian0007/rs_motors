"use client";

import { vehicleServices } from "@/apis/vehicle.service";
import { Gallery, Hero } from "@/components";
import { Vehicle } from "@/types";
import useHelper from "@/utils/useHelper";
import { useEffect, useState } from "react";

export default function Home() {
  const [vehicles, setVehicles] = useState<Vehicle[]>();

  useEffect(() => {
    async function fetchData() {
      let data = await vehicleServices.getAll();
      console.log(data)
      setVehicles(data);
    }
    fetchData();
  }, []);
  console.log(vehicles);

  const { deBouncer, scrollToGallery } = useHelper();
  const handleScroll = deBouncer(scrollToGallery, 100);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="">
      <Hero />
      <Gallery />
    </main>
  );
}
