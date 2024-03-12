import React from "react";
import { FaArrowDown } from "react-icons/fa";

import Link from "next/link";

const Homepage = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-between fixed top w-full px-10 py-7 ">
        <h1 className="text-2xl">Platform Name</h1>
        <div className="flex items-center gap-5  ">
          <div className="flex items-center gap-5 opacity-70">
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
      <div
        className="w-full h-screen flex flex-col items-center justify-between py-10"
        id="home"
      >
        <span></span>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-8xl">
            <span className="text-7xl">Unlock Your Potential with</span>
            <br />{" "}
            <span className="text-blue-500 font-bold">
              Realistic Mock Interviews
            </span>
          </h1>
          <h1 className="text-xl mt-5 opacity-70">
            Boost Your Interview Performance -- Practice Smarter, Not Harder
          </h1>
          <button className="bg-white text-black w-40 py-2 rounded-md font-semibold mt-5 mb-4">
            Explore Us
          </button>
        </div>
        <span className="animate-bounce flex items-center gap-2">
          Scroll <FaArrowDown className="text-sm" />
        </span>
      </div>
    </div>
  );
};

export default Homepage;
