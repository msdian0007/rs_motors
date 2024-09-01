import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="text-light flex-between bg-secondary padding-x min-h-[50px]">
        <div className="">
          <span className="text-2xl text-primary">RS</span> Motors
        </div>
        {/* <div className="">Sign-In</div> */}
      </nav>
    </header>
  );
};

export default Navbar;
