import { getSession } from "@/actions";
import AddNewVehicle from "@/components/admin/AddNewVehicle";
import AllVehicleTable from "@/components/admin/AllVehicleTable";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    redirect("/signIn");
  }
  return (
    <div>
      <AllVehicleTable />
    </div>
  );
};

export default Home;
