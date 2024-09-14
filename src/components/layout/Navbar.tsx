import Link from "next/link";
import React from "react";

const Navbar = async () => {
  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-10 text-light flex-between bg-black/30 padding-x min-h-[50px]">
        <div className="">
          <span className="text-2xl text-primary">RS</span> Motors
        </div>
        <Link href={"/admin"}>Admin</Link>
      </nav>
    </header>
  );
};

export default Navbar;
