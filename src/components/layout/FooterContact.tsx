"use client";
import React, { useState } from "react";

const FooterContact = ({ contactNumber }: { contactNumber: string }) => {
  const [toggleContact, setToggleContact] = useState(false);
  return (
    <span
      className="cursor-pointer text-primary"
      onClick={() => setToggleContact((prev) => !prev)}
    >
      {toggleContact ? (
        <span>&nbsp; +91-{contactNumber}</span>
      ) : (
        <span>&nbsp; Contact Us</span>
      )}
    </span>
  );
};

export default FooterContact;
