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
    ageCalculator: (year: number) => {
      const currentYear = new Date().getFullYear();
      return currentYear - year;
    },
    getOwnerSup: (val: string) => {
      if (val == "1") {
        return "st";
      } else if (val == "2") {
        return "nd";
      } else if (val == "3") {
        return "rd";
      } else {
        return "th";
      }
    },
  };
};

export default useHelper;
