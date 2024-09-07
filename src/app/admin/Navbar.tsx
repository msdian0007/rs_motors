import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="text-light flex-between bg-secondary padding-x min-h-[50px]">
        <Link href={"/"}>
          <span className="text-2xl text-primary">RS</span> Motors
        </Link>
        <div className="flex gap-6">
          <Link className="hover:text-primary" href={"/admin"}>
            Dashboard
          </Link>
          <Link className="hover:text-primary" href={"/admin"}>
            Add-New
          </Link>
          <Link className="hover:text-primary" href={"/admin"}>
            Sold
          </Link>
        </div>
        <Link href={"/"}>Logout</Link>
      </nav>
    </header>
  );
};

export default Navbar;
