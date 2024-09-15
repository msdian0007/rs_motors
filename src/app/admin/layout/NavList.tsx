"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavList = () => {
  const pathName = usePathname();
  return (
    <div>
      <div className="flex gap-6">
        <Link
          className={`hover:text-primary ${
            pathName === "/admin" && "text-primary font-semibold"
          }`}
          href={"/admin"}
        >
          Dashboard
        </Link>
        <Link
          className={`hover:text-primary ${
            pathName === "/admin/addNew" && "text-primary font-semibold"
          }`}
          href={"/admin/addNew"}
        >
          Add-New
        </Link>
        {/* <Link className="hover:text-primary" href={"/admin"}>
      Sold
    </Link> */}
      </div>
    </div>
  );
};

export default NavList;
