import React from "react";

const useHelper = () => {
  let isScrolled = false;
  return {
    deBouncer: (cb: () => void, delay: number) => {
      let timer: any;
      return () => {
        if (timer) window.clearTimeout(timer);
        timer = setTimeout(() => {
          cb();
        }, delay);
      };
    },
    scrollToGallery: () => {
      if (window.scrollY >= 100 && !isScrolled) {
        const ele = document.getElementById("gallery");
        isScrolled = true;
        ele?.scrollIntoView({ behavior: "smooth" });
      } else if (window.scrollY < 100) {
        isScrolled = false;
      }
    },
    getListOfYear: (): number[] => {
      let years = [];
      for (let i = 2000; i <= new Date().getFullYear(); i++) {
        years.push(i);
      }
      return years;
    },
  };
};

export default useHelper;
