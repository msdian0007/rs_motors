import { Details } from "@/components";
import { getAll, getVehicleDetail } from "@/utils/vehicleServices";
import React from "react";

export const revalidate = 60;
export const dynamicParams = true;


const fetchVehicleDetails = async (id: string) => {
  return await getVehicleDetail(id);
};

export async function generateStaticParams() {
  let response = await getAll();
  return response.data.map((obj) => {
    id: obj._id;
  });
}

// { params }: { params: { slug: string } }

const VehicleDetail = async ({ params }: { params: { slug: string } }) => {
  let data = await fetchVehicleDetails(params?.slug);
  return (
    <>
      {data ? <Details data={data} /> : null}
    </>
  );
};

export default VehicleDetail;
