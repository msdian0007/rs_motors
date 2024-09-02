import { Details, DetailSpecification } from "@/components";
import Image from "next/image";
import React from "react";

const VehicleDetail = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  return (
    <>
      <Details />
    </>
  );
};

export default VehicleDetail;
