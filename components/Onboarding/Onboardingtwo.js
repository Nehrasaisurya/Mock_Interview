import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Onboardingtwo = ({ handlecount }) => {
  return (
    <div
      className="px-20 py-16 rounded-md text-center relative border border-blue-500"
      style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
    >
      <h1 className="text-4xl font-bold z-50">
        Hi There!
        <br />
        What do we call you...?
      </h1>
      <div className="flex flex-col pt-2">
        <label className="flex items-center gap-2 opacity-70 text-sm mt-5">
          Name
        </label>
        <input type="email" className="border-b w-96 py-2 outline-none px-1" />
      </div>
      <button
        className="bg-[#1F2544] text-white py-2 font-semibold rounded-md mt-10 w-6/12 mx-auto flex justify-center items-center gap-2"
        onClick={handlecount}
      >
        Continue
        <FaArrowRightLong className="text-xs" />
      </button>
    </div>
  );
};

export default Onboardingtwo;
