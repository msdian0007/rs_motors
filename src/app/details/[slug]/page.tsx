import { vehicleServices } from "@/apis/vehicle.service";
import { Details } from "@/components";
import { Vehicle } from "@/types";
import React from "react";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  let data:Vehicle[] = await vehicleServices.getAll();
  return data?.map((obj) => ({
    id: obj._id,
  }));
}

// { params }: { params: { slug: string } }

const fetchVehicleDetails = async (id: string) => {
  return await vehicleServices.getVehicleDetail(id);
};

const VehicleDetail = async ({ params }: { params: { slug: string } }) => {
  let data = await fetchVehicleDetails(params?.slug);
  return (
    <>
      <Details data={data} />
    </>
  );
};

export default VehicleDetail;
