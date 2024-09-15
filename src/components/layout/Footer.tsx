import React, { useState } from "react";
import FooterContact from "./FooterContact";

const Footer = () => {
  let contactNumber = process.env.CONTACT_NUMBER;
  return (
    <div className="flex-center flex-wrap bg-secondary py-3">
      <span className="text-light/40">
        © copyright {new Date().getFullYear()}{" "}
        <span className="text-light font-semibold">RS Motors</span> All Right
        Reserved &nbsp;
      </span>
      <span className="hidden sm:block">|</span>
      <FooterContact contactNumber={contactNumber ?? ""} />
    </div>
  );
};

export default Footer;
