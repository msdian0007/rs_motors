import React from "react";
import Navbar from "./layout/Navbar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-[calc(100svh-50px)]">
      <Navbar />
      <div className="pt-[50px] px-1 md:px-4">{children}</div>
    </div>
  );
};

export default Layout;
