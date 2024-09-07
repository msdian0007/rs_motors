import React from "react";
import { CgSpinner } from "react-icons/cg";
import { PiSpinnerLight } from "react-icons/pi";

const SpinnerSm = () => {
  return (
    <div className="flex-center h-screen w-full">
      <PiSpinnerLight className="text-xl animate-spin" />
    </div>
  );
};
const SpinnerMd = () => {
  return (
    <div className="flex-center h-screen w-full">
      <PiSpinnerLight className="text-2xl animate-spin" />
    </div>
  );
};
const SpinnerLg = () => {
  return (
    <div className="flex-center h-screen w-full">
      <PiSpinnerLight className="text-5xl animate-spin" />
    </div>
  );
};

export { SpinnerSm, SpinnerMd, SpinnerLg };
