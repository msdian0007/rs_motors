import React from "react";
import Navbar from "./Navbar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-[calc(100svh-50px)]">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
