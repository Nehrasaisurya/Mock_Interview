import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Onboardingone = ({ handlecount }) => {
  return (
    <div
      className="p-20 rounded-md text-center relative border border-blue-500"
      style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
    >
      <h1 className="text-3xl font-bold z-50">Welcome to Platform name</h1>
      <h1 className="text-sm mt-3">
        Enhance your mock interview experience by personalizing <br />
        your preferences. Let's get started!
      </h1>
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

export default Onboardingone;
