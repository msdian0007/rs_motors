"use client";

import React, { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import useHelper from "@/utils/useHelper";
import { Vehicle } from "@/types";
import { vehicleServices } from "@/apis/vehicle.service";

const Gallery = () => {
  const [data, setData] = useState<Vehicle[]>();

  const { deBouncer, scrollToGallery } = useHelper();

  useEffect(() => {
    async function fetchData() {
      let data = await vehicleServices.getAll();
      setData(data);
    }
    fetchData();
  }, []);

  const handleScroll = deBouncer(scrollToGallery, 100);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-[100vh] md:p-8" id="gallery">
      <div className="flex flex-wrap justify-center gap-1 md:gap-4">
        {/* CARD */}
        {data && data.map((v) => <GalleryCard data={v} />)}
      </div>
    </div>
  );
};

export default Gallery;
