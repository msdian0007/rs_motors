import { vehicleServices } from "@/apis/vehicle.service";
import { Details, DetailSpecification } from "@/components";
import { Vehicle } from "@/types";
import Image from "next/image";
import React from "react";

export const revalidate = 60;

// export async function generateStaticParams() {
//   let vehicles = await vehicleServices.getAll();
//   return vehicles.map((vehicle) => ({
//     id: vehicle._id,
//   }));
// }

// { params }: { params: { slug: string } }

const VehicleDetail = async () => {
  // let vehicles = await vehicleServices.getAll();
  // console.log(vehicles);
  return (
    <>
      <Details />
    </>
  );
};

export default VehicleDetail;
