import React from "react";
import GalleryCard from "./GalleryCard";



const Gallery = () => {

  return (
    <div className="min-h-[100vh] md:p-8" id="gallery">
      <div className="flex flex-wrap justify-center gap-1 md:gap-4">
        {/* CARD */}
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </div>
    </div>
  );
};

export default Gallery;
