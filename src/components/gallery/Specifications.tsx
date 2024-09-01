import React from "react";
import { GiLifeBar } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { PiEngine } from "react-icons/pi";

const Specifications = () => {
  return (
    <>
      <div className="grid w-full grid-cols-4 rounded-md bg-gray-400/20 ">
        <div className="content-center col-span-1 bg-gray-300 rounded-l-md">
          <GrSchedule className="mx-auto text-base text-green-600 md:text-lg " />
        </div>
        <div className="grid col-span-3 text-center">
          <div className="text-xs md:text-sm text-gray-500 border-b-[1px] border-gray-400/30">
            modal
          </div>
          <div className="w-full text-xs font-semibold text-center md:text-sm flex-center">
            2022
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-4 rounded-md bg-gray-400/20 ">
        <div className="content-center col-span-1 bg-gray-300 rounded-l-md">
          <GiLifeBar className="mx-auto text-base text-green-600 md:text-lg " />
        </div>
        <div className="grid col-span-3 text-center">
          <div className="text-xs md:text-sm text-gray-500 border-b-[1px] border-gray-400/30">
            age
          </div>
          <div className="w-full text-xs font-semibold text-center md:text-sm flex-center">
            2.6
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-4 rounded-md bg-gray-400/20 ">
        <div className="content-center col-span-1 bg-gray-300 rounded-l-md">
          <PiEngine className="mx-auto text-base text-green-600 md:text-lg " />
        </div>
        <div className="grid col-span-3 text-center">
          <div className="text-xs md:text-sm text-gray-500 border-b-[1px] border-gray-400/30">
            engine
          </div>
          <div className="w-full text-xs font-semibold text-center md:text-sm flex-center">
            650cc
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-4 rounded-md bg-gray-400/20 ">
        <div className="content-center col-span-1 bg-gray-300 rounded-l-md">
          <IoIosPeople className="mx-auto text-base text-green-600 md:text-lg " />
        </div>
        <div className="grid col-span-3 text-center">
          <div className="text-xs md:text-sm text-gray-500 border-b-[1px] border-gray-400/30">
            owner
          </div>
          <div className="w-full text-xs font-semibold text-center md:text-sm flex-center">
            2<sup>nd</sup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specifications;
