"use client";

import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import ReactSpeedometer from "react-d3-speedometer";

const data = [
  {
    company: "Amazon",
    role: "FullStack Developer",
    icons: <FaAmazon />,
    color: "#22C55E",
    perc: "80%",
    id: "1",
  },
  {
    company: "Google",
    role: "Backend Developer",
    icons: <FaGoogle />,
    color: "#F97316",
    perc: "40%",
    id: "2",
  },
  {
    company: "Netflix",
    role: "Web Designer",
    icons: <SiNetflix />,
    color: "#EAB308",
    perc: "60%",
    id: "3",
  },
];

const Onboardingfour = ({ handlecount }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const [job, setjob] = useState(null);

  const handlejob = (item) => {
    setjob(item);
  };

  const handleChange = (event) => {
    const selectedOptions = event.target.selectedOptions;
    if (selectedOptions.length > 0) {
      setSelectedOption(selectedOptions[0].value);
    }
  };
  return (
    <div className="flex items-center gap-10">
      <div
        className="py-14 px-16 rounded-md text-center relative border border-blue-500"
        style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
      >
        <h1 className="text-4xl font-extrabold z-50 tracking-wide mb-10">
          Suggested Interviews
        </h1>
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <button
              style={{
                boxShadow: "0 0 5px rgba(0,0,0,0.1)",
                border:
                  job?.id === item.id
                    ? `1px solid ${item.color}`
                    : "1px solid transparent",
              }}
              className="px-5 py-3 rounded-sm w-96 border-opacity-80"
              onClick={() => handlejob(item)}
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                  <h1 className="text-2xl font-bold">{item?.company}</h1>
                  <h1 className="text-md opacity-70">{item?.role}</h1>
                </div>
                <div className="text-2xl p-3 bg-gray-100 rounded-md">
                  {item?.icons}
                </div>
              </div>
              <div className="w-12/12 h-2 bg-gray-100 rounded-full px-7 relative mt-4">
                <div
                  className={`h-2 absolute left-0 rounded-full`}
                  style={{ backgroundColor: item?.color, width: item?.perc }}
                ></div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div
          className="py-14 px-16 rounded-md text-center relative border border-blue-500 mb-auto"
          style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        >
          <h1 className="text-4xl font-bold z-50">Choose Interview Type</h1>
          <div className="flex items-center justify-between gap-8 mt-10">
            <h1 className="text-lg font-bold">Choose Your Preference:</h1>
            <select
              className="border px-3 py-2 rounded-md outline-none "
              value={selectedOption}
              onChange={handleChange}
            >
              <option>Company</option>
              <option>Domain</option>
            </select>
          </div>
          <div className="flex items-center justify-between mt-7">
            <h1 className="text-lg font-bold">
              {selectedOption ? selectedOption : "Company"} Name:
            </h1>
            <input
              type="text"
              className="border px-3 py-2 rounded-md outline-none"
            />
          </div>
          <div className="flex items-center justify-between mt-7">
            <h1 className="text-lg font-bold">Job Role:</h1>
            <input
              type="text"
              className="border px-3 py-2 rounded-md outline-none"
            />
          </div>
        </div>
        <div
          className="pb-7 pt-2 px-4 rounded-md text-center relative border border-blue-500 flex justify-evenly"
          style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        >
          <div
            className=""
            style={{
              width: "200px",
              height: "100px",
            }}
          >
            <ReactSpeedometer
              value={600}
              needleHeightRatio={0.7}
              fluidWidth={true}
              textColor="transparent"
            />
          </div>
          <div>
            <button
              className="bg-[#1F2544] text-white py-2 font-semibold rounded-md mt-10 px-5  flex justify-center items-center gap-2"
              onClick={handlecount}
            >
              Start Interview
              <FaArrowRightLong className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboardingfour;
