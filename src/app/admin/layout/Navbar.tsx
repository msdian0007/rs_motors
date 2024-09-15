import { getSession, logout } from "@/actions";
import Link from "next/link";
import React from "react";
import NavList from "./NavList";

const Navbar = async () => {
  const session = await getSession();

  return (
    <header>
      <nav className="fixed inset-x-0 z-10 top-0 text-light flex-between bg-black/30 padding-x min-h-[50px]">
        <Link href={"/"}>
          <span className="text-2xl text-primary">RS</span> Motors
        </Link>
        <NavList />
        {session.isLoggedIn && (
          <form action={logout}>
            <button type="submit" className="cursor-pointer">
              Logout
            </button>
          </form>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
