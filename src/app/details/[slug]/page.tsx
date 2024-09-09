import { jsonConfig } from "@/apis/common.service";
import { baseURL } from "@/apis/helper/constants";
import { Details } from "@/components";
import { Vehicle } from "@/types";
import axios from "axios";
import React from "react";

export const revalidate = 60;
export const dynamicParams = true;

const url = `${baseURL}/vehicles`;

const fetchVehicleDetails = async (id: string): Promise<Vehicle> => {
  const response = await axios.get(`${url}/${id}`, jsonConfig);
  return response.data;
};

export async function generateStaticParams() {
  let { data }: { data: Vehicle[] } = await axios.get(`${url}/`, jsonConfig);
  return data.map((obj) => {
    id: obj._id;
  });
}

// { params }: { params: { slug: string } }

const VehicleDetail = async ({ params }: { params: { slug: string } }) => {
  let data = await fetchVehicleDetails(params?.slug);
  return (
    <>
      <Details data={data} />
    </>
  );
};

export default VehicleDetail;
