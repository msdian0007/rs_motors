"use client";

import React, { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import useHelper from "@/hooks/useHelper";
import { Vehicle } from "@/types";
import { getAll } from "@/utils/vehicleServices";
import { unstable_cache } from "next/cache";

const Gallery = () => {
  const [data, setData] = useState<Vehicle[]>([]);

  const { deBouncer, scrollToGallery } = useHelper();

  useEffect(() => {
    const fetchData = unstable_cache(
      async () => {
        let data = await getAll();
        setData(data);
      },
      ["getAll"],
      { revalidate: 60, tags: ["getAll"] }
    );
    fetchData();
  }, []);

  const handleScroll = deBouncer(scrollToGallery, 50);
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
        {data.length > 0 &&
          data.map((v) => <GalleryCard key={v._id} data={v} />)}
      </div>
    </div>
  );
};

export default Gallery;
