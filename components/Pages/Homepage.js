import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";

const Homepage = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-between py-10 px-10 bg-black text-white"
      id="home"
    >
      <span></span>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-8xl">
          <span className="text-5xl lg:text-7xl">
            Unlock Your Potential with
          </span>
          <br />{" "}
          <span className=" text-4xl lg:text-7xl text-blue-500 font-bold">
            Realistic Mock Interviews
          </span>
        </h1>
        <h1 className="text-md lg:text-lg mt-5 opacity-70">
          Boost Your Interview Performance -- Practice Smarter, Not Harder
        </h1>
        <button className="bg-white text-black w-40 py-2 rounded-md font-semibold mt-5 mb-4">
          Explore Us
        </button>
      </div>
      <span className="text-sm animate-bounce flex items-center gap-2">
        Scroll <FaArrowDown className="text-xs" />
      </span>
      <div className="absolute bottom-10 right-10 flex flex-col gap-5">
        <FaGithub />
        <FaLinkedinIn />
        <FaXTwitter />
      </div>
    </div>
  );
};

export default Homepage;
