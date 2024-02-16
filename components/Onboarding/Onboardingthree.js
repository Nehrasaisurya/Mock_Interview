"use client";

import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuFilePlus2 } from "react-icons/lu";

const Onboardingthree = ({ handlecount }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div>
      <div
        className="p-20 rounded-md text-center relative border border-blue-500"
        style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
      >
        <h1 className="text-3xl font-bold z-50">Upload your Resume</h1>
        <h1 className="text-sm mt-3">
          To provide you with tailored mock interviews, please upload <br />
          your resume. This will help us suggest relevant
          <br /> interviews based on your background.
        </h1>
        <div className="flex items-center justify-center gap-7 mt-10">
          <input
            type="file"
            accept=".pdf"
            className="max-w-fit"
            hidden
            id="resume"
            name="resume"
            onChange={handleFileChange}
          />
          <label
            htmlFor="resume"
            className={`p-3 border rounded-md truncate ${
              fileName ? "w-[300px]" : "w-fit"
            }`}
          >
            {fileName ? fileName : <LuFilePlus2 />}
          </label>
          <button
            className="bg-[#1F2544] text-white py-2 font-semibold rounded-md w-6/12 flex justify-center items-center gap-2"
            onClick={handlecount}
          >
            Continue
            <FaArrowRightLong className="text-xs" />
          </button>
        </div>
      </div>
      <div className="w-full h-3 bg-gray-100 rounded-full mt-7 relative">
        <div
          className={`h-3 absolute left-0 bg-green-500 rounded-full ${
            fileName ? "w-full" : "w-0"
          } transition-all duration-600 ease-out`}
        ></div>
      </div>
    </div>
  );
};

export default Onboardingthree;
