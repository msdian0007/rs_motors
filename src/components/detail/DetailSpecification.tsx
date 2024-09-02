import React from "react";
import { GiLifeBar } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { PiEngine } from "react-icons/pi";

const DetailSpecification = () => {
  return (
    <>
      <div className="grid w-full grid-cols-4 rounded-md bg-gray-400/20 ">
        <div className="content-center col-span-1 bg-gray-300 rounded-l-md">
          <GrSchedule className="mx-auto text-base text-green-600 md:text-lg " />
        </div>
        <div className="grid col-span-3 text-center">
          <div className="text-xs md:text-sm font-sans text-green-600 ">
            Modal
          </div>
          <div className="w-full text-xs font-semibold md:text-sm">2022</div>
        </div>
      </div>
      <div className="grid w-full grid-cols-4 rounded-md bg-gray-400/20 ">
        <div className="content-center col-span-1 bg-gray-300 rounded-l-md">
          <GiLifeBar className="mx-auto text-base text-red-600 md:text-lg " />
        </div>
        <div className="grid col-span-3 text-center">
          <div className="text-xs md:text-sm font-sans text-red-600 ">Age</div>
          <div className="w-full text-xs font-semibold md:text-sm">2.6</div>
        </div>
      </div>
      <div className="grid w-full grid-cols-4 rounded-md bg-gray-400/20 ">
        <div className="content-center col-span-1 bg-gray-300 rounded-l-md">
          <PiEngine className="mx-auto text-base text-gray-600 md:text-lg " />
        </div>
        <div className="grid col-span-3 text-center">
          <div className="text-xs md:text-sm font-sans text-gray-600 ">
            Engine
          </div>
          <div className="w-full text-xs font-semibold md:text-sm">650cc</div>
        </div>
      </div>
      <div className="grid w-full grid-cols-4 rounded-md bg-gray-400/20 ">
        <div className="content-center col-span-1 bg-gray-300 rounded-l-md">
          <IoIosPeople className="mx-auto text-base text-blue-600 md:text-lg " />
        </div>
        <div className="grid col-span-3 text-center">
          <div className="text-xs md:text-sm font-sans text-blue-600 ">
            Owner
          </div>
          <div className="w-full text-xs font-semibold md:text-sm">
            2<sup>nd</sup>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSpecification;
