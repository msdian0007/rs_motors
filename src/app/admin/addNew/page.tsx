import { getSession } from "@/actions";
import AddNewVehicle from "@/components/admin/AddNewVehicle";
import { redirect } from "next/navigation";
import React from "react";

const AddNew = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/signIn");
  }
  return (
    <>
      <AddNewVehicle />
    </>
  );
};

export default AddNew;
