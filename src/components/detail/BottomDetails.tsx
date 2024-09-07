import React from "react";
import LeftSideDetails from "./LeftSideDetails";
import RightSideDetails from "./RightSideDetails";
import { Vehicle } from "@/types";

const BottomDetails = ({ data }: { data: Vehicle }) => {
  return (
    <div className="w-[100%]">
      <div className="grid gap-2">
        <LeftSideDetails data={data} />
        <RightSideDetails data={data} />
      </div>
    </div>
  );
};

export default BottomDetails;
