import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="flex-center min-h-[100svh]">{children}</div>;
};

export default layout;
