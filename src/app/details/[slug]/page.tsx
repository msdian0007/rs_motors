import { Details } from "@/components";
import { getAll, getVehicleDetail } from "@/utils/vehicleServices";
import React from "react";
import { notFound } from "next/navigation";

export const revalidate = 60;
export const dynamicParams = true;


const fetchVehicleDetails = async (id: string) => {
  try {
    const data = await getVehicleDetail(id);
    return data ?? null;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("fetchVehicleDetails error:", err);
    return null;
  }
};

export async function generateStaticParams() {
  try {
    const response = await getAll();
    const items = response?.data ?? [];
    // Limit number of generated params to avoid huge builds; adjust as needed
    const limit = 1000;
    return items.slice(0, limit).map((obj) => ({ slug: String(obj._id) }));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("generateStaticParams error:", err);
    return [];
  }
}

// { params }: { params: { slug: string } }

const VehicleDetail = async ({ params }: { params: { slug: string } }) => {
  const slug = params?.slug;
  if (!slug) return notFound();

  const data = await fetchVehicleDetails(slug);
  if (!data) return notFound();

  return <Details data={data} />;
};

export default VehicleDetail;
