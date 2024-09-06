import { Details, DetailSpecification } from "@/components";
import Image from "next/image";
import React from "react";

export function generateStaticParams() {
  return [{ slug: "a" }];
}

// { params }: { params: { slug: string } }

const VehicleDetail = () => {
  return (
    <>
      <Details />
    </>
  );
};

export default VehicleDetail;
