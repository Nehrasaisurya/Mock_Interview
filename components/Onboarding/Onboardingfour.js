"use client";

import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import ReactSpeedometer from "react-d3-speedometer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

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
    perc: "30%",
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
  const [selectedOption, setSelectedOption] = useState("Company");
  const [metervalue, setmetervalue] = useState(500);
  const [job, setjob] = useState(null);

  const handlejob = (item) => {
    setjob(item);
    setmetervalue(Number(item.perc.slice(0, 2)) * 10);
  };

  const handleChangeOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center gap-8"
      data-aos="fade-left"
    >
      <div
        className="py-16 px-16 rounded-md text-center relative border border-blue-500"
        style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
      >
        <h1 className="text-4xl font-extrabold z-50 tracking-wide mb-10">
          Suggested Interviews
        </h1>
        <div className="flex flex-col gap-4">
          {data.map((item) => (
            <button
              key={item.id}
              style={{
                boxShadow:
                  job?.id === item.id
                    ? `0 0 2px ${item.color}`
                    : "0 0 5px rgba(0,0,0,0.1)",
                border:
                  job?.id === item.id
                    ? `1px solid ${item.color}`
                    : "1px solid transparent",
              }}
              className="px-5 pt-3 pb-4 rounded-sm w-96 border-opacity-80"
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
              <div className="w-12/12 h-2 bg-gray-100 rounded-full px-7 relative mt-2">
                <div
                  className={`h-2 absolute left-0 rounded-full`}
                  style={{ backgroundColor: item?.color, width: item?.perc }}
                ></div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div
          className="py-16 px-16 rounded-md text-center relative border border-blue-500 mb-auto"
          style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        >
          <h1 className="text-4xl font-bold z-50">Choose Interview Type</h1>
          <div className="flex items-center justify-between gap-8 mt-10">
            <h1 className="text-lg font-bold">Choose Your Preference:</h1>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  value="Company"
                  checked={selectedOption === "Company"}
                  onChange={() => handleChangeOption("Company")}
                  className="mr-1"
                />
                Company
              </label>
              <label>
                <input
                  type="radio"
                  value="Domain"
                  checked={selectedOption === "Domain"}
                  onChange={() => handleChangeOption("Domain")}
                  className="mr-1"
                />
                Domain
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between mt-7">
            <h1 className="text-lg font-bold">{selectedOption} Name:</h1>
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
          className="pb-7 pt-1 px-4 rounded-md text-center relative border border-blue-500 flex justify-evenly"
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
              value={metervalue}
              maxValue={1000}
              needleHeightRatio={0.7}
              fluidWidth={true}
              textColor="transparent"
            />
            <h1 className="text-sm opacity-90 mt-1 text-gray-500">
              Resume match - {metervalue}
            </h1>
          </div>
          <div>
            <button
              className="bg-[#1F2544] text-white py-2 font-semibold rou nded-md mt-10 px-5  flex justify-center items-center gap-2 rounded-md"
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
