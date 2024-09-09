import React from "react";
import { GrSchedule } from "react-icons/gr";
import { GiLifeBar } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { Vehicle } from "@/types";
import useHelper from "@/hooks/useHelper";

const LeftSideDetails = ({ data }: { data: Vehicle }) => {
  const { ageCalculator, getOwnerSup } = useHelper();
  return (
    <>
      {/* MODAL */}
      <div className="grid grid-cols-5 rounded-md bg-light/10 md:w-1/2 w-3/5 mx-auto md:mx-0">
        <div className=" col-span-2 text-center bg-gray-300 rounded-l-md p-1">
          <GrSchedule className="mx-auto text-base text-yellow-600 md:text-xl " />
          <div className="text-xs  md:text-base font-sans text-dark ">
            Modal
          </div>
        </div>
        <div className="col-span-3 content-center text-center text-primary text-sm font-semibold md:text-xl">
          {data.modelYear}
        </div>
      </div>
      {/* AGE */}
      <div className="grid grid-cols-5 rounded-md bg-light/10 md:w-1/2 w-3/5 mx-auto md:mx-0">
        <div className=" col-span-2 text-center bg-gray-300 rounded-l-md p-1">
          <GiLifeBar className="mx-auto text-base text-red-600 md:text-xl" />
          <div className="text-xs  md:text-base font-sans text-dark ">Age</div>
        </div>
        <div className="col-span-3 content-center text-center text-primary text-sm font-semibold md:text-xl">
          {ageCalculator(data.modelYear)}{" "}
          <span className="text-light">year</span>
        </div>
      </div>
      {/* OWNER */}
      <div className="grid grid-cols-5 rounded-md bg-light/10 md:w-1/2 w-3/5 mx-auto md:mx-0">
        <div className=" col-span-2 text-center bg-gray-300 rounded-l-md p-1">
          <IoIosPeople className="mx-auto text-base text-blue-600 md:text-2xl " />
          <div className="text-xs  md:text-base font-sans text-dark ">
            Owner
          </div>
        </div>
        <div className="col-span-3 content-center text-center text-primary text-sm font-semibold md:text-xl">
          {data.owner}
          <sup className="text-light">{getOwnerSup(data.owner)}</sup>
        </div>
      </div>
    </>
  );
};

export default LeftSideDetails;
