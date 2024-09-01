"use client";

import { Gallery, Hero } from "@/components";
import useHelper from "@/utils/useHelper";
import { useEffect } from "react";

export default function Home() {

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
