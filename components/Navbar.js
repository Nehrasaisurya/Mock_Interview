import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="text-white">
      <div className="flex items-center justify-between fixed top w-full px-4 lg:px-10 py-7 ">
        <h1 className="text-md lg:text-2xl">Platform Name</h1>
        <div className="flex items-center gap-5  ">
          <div className="hidden md:flex items-center gap-5 opacity-70">
            <h1>Home</h1>
            <h1>About Us</h1>
            <h1>Documentation</h1>
            <h1>Pricing</h1>
          </div>
          <Link href={"/login"}>
            <button className="bg-white text-black px-7 py-2 rounded-md ">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
