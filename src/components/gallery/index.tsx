"use client";

import React, { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import useHelper from "@/hooks/useHelper";
import { paginationParams, Vehicle } from "@/types";
import { getAllWithPagination } from "@/utils/vehicleServices";
import { CustomButton } from "../common/CustomButton";

const Gallery = () => {
  const [data, setData] = useState<Vehicle[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [nextLoading, setNextLoading] = useState(false);
  const [prevLoading, setPrevLoading] = useState(false);

  const { deBouncer, scrollToGallery, paginationScrollToGallery } = useHelper();

  const fetchData = async (page: number) => {
    setLoading(true);
    let params: paginationParams = {
      page,
      limit: 10,
    };
    let response = await getAllWithPagination(params);

    setData(response.data);
    setTotalPages(response.totalPages);
    setLoading(false);
    currentPage > 1 && paginationScrollToGallery();
    return true;
  };

  const handleNext = async (page: number) => {
    if (currentPage < totalPages) {
      setNextLoading(true);
      const response = await fetchData(page);
      if (response) {
        setCurrentPage(page);
        setNextLoading(false);
      }
    }
  };

  const handlePrevious = async (page: number) => {
    if (currentPage > 1) {
      setPrevLoading(true);
      const response = await fetchData(page);
      if (response) {
        setCurrentPage(page);
        setPrevLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, []);

  // SMOOTH SCROLLING AT LANDING PAGE
  const handleScroll = deBouncer(scrollToGallery, 50);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className="min-h-[100vh] flex flex-col justify-around md:p-8"
      id="gallery"
    >
      {data && (
        <>
          <div className="flex flex-wrap justify-center gap-1 md:gap-3">
            {/* CARD */}
            {data.length > 0 &&
              data.map((v) => <GalleryCard key={v._id} data={v} />)}
          </div>
          {/* PAGINATION ACTIONS */}
          <div className="flex justify-center items-center gap-4 pt-8 pr-2">
            <CustomButton
              onClick={() => handlePrevious(currentPage - 1)}
              title="Previous"
              loading={prevLoading}
            />
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <CustomButton
              onClick={() => handleNext(currentPage + 1)}
              title="Next"
              loading={nextLoading}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
