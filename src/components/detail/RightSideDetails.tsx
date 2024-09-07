import { Vehicle } from "@/types";
import React from "react";
import { BsFuelPump } from "react-icons/bs";
import { MdOutlinePolicy } from "react-icons/md";
import { PiEngine } from "react-icons/pi";

const RightSideDetails = ({ data }: { data: Vehicle }) => {
  return (
    <>
      <div className="grid grid-cols-5 rounded-md bg-light/10 md:w-1/2 w-3/5 mx-auto md:mx-0">
        <div className="col-span-3 content-center text-center text-primary text-sm font-semibold md:text-xl">
          655-CC
        </div>
        <div className=" col-span-2 text-center bg-gray-300 rounded-r-md p-1">
          <PiEngine className="mx-auto text-base text-dark md:text-2xl " />
          <div className="text-xs  md:text-base font-sans text-dark ">
            Engine
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 rounded-md bg-light/10 md:w-1/2 w-3/5 mx-auto md:mx-0">
        <div className="col-span-3 content-center text-center text-primary text-sm font-semibold md:text-xl">
          {data?.bsStage}
        </div>
        <div className=" col-span-2 text-center bg-gray-300 rounded-r-md p-1">
          <MdOutlinePolicy className="mx-auto text-base text-orange-600 md:text-2xl " />
          <div className="text-xs  md:text-base font-sans text-dark ">
            BS-Stage
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 rounded-md bg-light/10 md:w-1/2 w-3/5 mx-auto md:mx-0">
        <div className="col-span-3 content-center text-center text-primary text-sm font-semibold md:text-xl">
          {data.mileage} kmpl
        </div>
        <div className=" col-span-2 text-center bg-gray-300 rounded-r-md p-1">
          <BsFuelPump className="mx-auto text-base text-green-600 md:text-2xl " />
          <div className="text-xs  md:text-base font-sans text-dark ">
            Milage
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideDetails;
