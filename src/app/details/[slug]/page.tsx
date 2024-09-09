import { Details } from "@/components";
import { getAll, getVehicleDetail } from "@/utils/vehicleServices";
import React from "react";

export const revalidate = 60;
export const dynamicParams = true;


const fetchVehicleDetails = async (id: string) => {
  return await getVehicleDetail(id);
};

// export async function generateStaticParams() {
//   let data = await getAll();
//   return data.map((obj) => {
//     id: obj._id;
//   });
// }

// { params }: { params: { slug: string } }

const VehicleDetail = async ({ params }: { params: { slug: string } }) => {
  let data = await fetchVehicleDetails(params?.slug);
  console.log(data)
  return (
    <>
      <Details data={data} />
    </>
  );
};

export default VehicleDetail;
