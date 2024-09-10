import Link from "next/link";
import React from "react";

const Navbar = async () => {
  return (
    <header>
      <nav className="text-light flex-between bg-secondary padding-x min-h-[50px]">
        <div className="">
          <span className="text-2xl text-primary">RS</span> Motors
        </div>
        <Link href={"/admin"}>Admin</Link>
      </nav>
    </header>
  );
};

export default Navbar;
