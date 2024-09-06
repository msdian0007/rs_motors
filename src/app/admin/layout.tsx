import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="min-h-[calc(100svh-50px)]">
    {children}
    </div>;
};

export default Layout;
