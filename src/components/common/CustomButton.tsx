import React from "react";
import { PiSpinnerLight } from "react-icons/pi";

type customButtonTypes = {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const CustomButton = (data: customButtonTypes) => {
    let size = ''
    if(data.size === 'lg'){
        size = 'py-4 px-4'
    }else if(data.size === 'sm'){
        size = 'py-1 px-2'
    }else{
        size = 'py-2 px-2'
    }
  return (
    <button
      onClick={data.onClick}
      disabled={data.disabled || data.loading}
      className={`rounded-md flex-center gap-1 bg-primary text-light ${
        data.loading && "bg-primary/50"
      } ${size}`}
    >
      {data.loading && <PiSpinnerLight className="animate-spin text-xl" />}
      {data.title}
    </button>
  );
};

export { CustomButton };
