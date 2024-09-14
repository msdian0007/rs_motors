"use client";
import React, { useState } from "react";

const Footer = () => {
  const [openContact, setOpenContact] = useState(false);
  return (
    <div className="flex-center bg-secondary py-2">
      <span className="text-light/40">
        © copyright {new Date().getFullYear()} <span className="text-light font-semibold">RS Motors</span> All Right Reserved
        &nbsp;
      </span>
      |
      <span
        className="cursor-pointer text-primary"
        onClick={() => setOpenContact((prev) => !prev)}
      >
        {openContact ? (
          <span>&nbsp; +91-7774976106</span>
        ) : (
          <span>&nbsp; Contact Us</span>
        )}
      </span>
    </div>
  );
};

export default Footer;
