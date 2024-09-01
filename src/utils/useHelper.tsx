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
  };
};

export default useHelper;
