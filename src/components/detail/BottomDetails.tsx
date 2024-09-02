import React from "react";
import LeftSideDetails from "./LeftSideDetails";
import RightSideDetails from "./RightSideDetails";

const BottomDetails = () => {
  return (
    <div className="w-[100%]">
      <div className="grid gap-2">
        <LeftSideDetails />
        <RightSideDetails />
      </div>
    </div>
  );
};

export default BottomDetails;
