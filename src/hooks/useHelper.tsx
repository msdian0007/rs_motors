import { baseURL } from "@/constants";
import { User } from "@/types";
import { customerInterestNotification } from "@/utils/commonServices";
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
    paginationScrollToGallery: () => {
      const ele = document.getElementById("gallery");
      ele?.scrollIntoView({ behavior: "smooth" });
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
    calcDiscount: (p: number, sp: number) => {
      return Math.floor(p / (p - sp));
    },
    isUserDataAvailable: async () => {
      const user = localStorage.getItem("rs_motors_user");
      if (user) {
        return JSON.parse(user);
      }
      return false;
    },
    updateIsInterested: async (id: string) => {
      const { isUserDataAvailable, updateInterestList } = useHelper();
      let user = await isUserDataAvailable();
      if (user) {
        const response = await customerInterestNotification({
          name: user?.name,
          phoneNumber: user?.phoneNumber,
          productLink: `${baseURL}/details/${id}`,
        });
        if (response.status === 200) {
          updateInterestList(id);
          return true;
        }
        return true;
      } else {
        return false;
      }
    },
    setUserData: (data: User) => {
      localStorage.setItem("rs_motors_user", JSON.stringify(data));
    },
    updateInterestList: (id: string) => {
      let list = localStorage.getItem("list_of_interest");
      if (list) {
        let strList: [string] = JSON.parse(list);
        strList.push(id);
        localStorage.setItem("list_of_interest", JSON.stringify(strList));
      } else {
        localStorage.setItem("list_of_interest", JSON.stringify([id]));
      }
    },
    isAlreadyInterested: (id: string) => {
      const ISSERVER = typeof window === "undefined";
      if (!ISSERVER) {
        let list = localStorage.getItem("list_of_interest");
        if (list) {
          let strList: [string] = JSON.parse(list);
          return strList.includes(id);
        } else {
          return false;
        }
      }
    },
  };
};

export default useHelper;
