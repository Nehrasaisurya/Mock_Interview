"use client";

import Sidebar from "@/components/Sidebar";
import Top from "@/components/Top";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaAmazon } from "react-icons/fa6";

const data = [
  {
    id: 1,
    company: "Amazon",
    role: "Software Development",
    icons: <FaAmazon />,
  },
  {
    id: 2,
    company: "Amazon",
    role: "Software Development",
    icons: <FaAmazon />,
  },
  {
    id: 3,
    company: "Amazon",
    role: "Software Development",
    icons: <FaAmazon />,
  },
  {
    id: 4,
    company: "Amazon",
    role: "Software Development",
    icons: <FaAmazon />,
  },
  {
    id: 5,
    company: "Amazon",
    role: "Software Development",
    icons: <FaAmazon />,
  },
  {
    id: 6,
    company: "Amazon",
    role: "Software Development",
    icons: <FaAmazon />,
  },
  {
    id: 7,
    company: "Amazon",
    role: "Software Development",
    icons: <FaAmazon />,
  },
  {
    id: 8,
    company: "Amazon",
    role: "Software Development",
    icons: <FaAmazon />,
  },
];

const page = () => {
  const [loadmore, setloadmore] = useState(4);
  const [text, settext] = useState("Show More");

  const handleloadmore = () => {
    if (loadmore < data.length) {
      setloadmore(data.length);
      settext("Show Less");
    } else {
      setloadmore(4);
      settext("Show More");
    }
  };
  return (
    <main>
      <Sidebar />
      <Top />
      <div className="pl-28 pr-8 py-24 bg-gray-50">
        <div className="bg-blue-600 px-10 py-8 rounded-md flex flex-col lg:flex-row items-center justify-between">
          <div className="">
            <h1 className="uppercase text-sm text-gray-100 opacity-80">
              Platform Name
            </h1>
            <h1 className="text-4xl  font-bold text-white mt-3">
              Ready to Practice?
            </h1>
            <h1 className="mt-1 text-gray-200 text-md">
              Start a new mock interview to increase your skills and boost your
              confidence. Choose a company, domain, or job role, and let's get
              started!
            </h1>
            <button className="bg-[#FEF9C3] font-bold px-5 py-2 mt-5 rounded-lg flex items-center gap-2">
              Start Mock Interview
              <FaArrowRightLong />
            </button>
          </div>
          <div>
            <img src="/Images/online-interview-2.png" className="w-96 " />
          </div>
        </div>
        <div className="mt-14 mb-12 flex items-center gap-2 ">
          <div className="border-b  w-11/12 mx-auto"></div>
        </div>
        <div className="px-5">
          <h1 className="text-4xl font-bold">Suggested Mock Interviews</h1>
          <h1 className="text-md opacity-70 mt-1">
            Based on your preferences and past performance, here are some
            tailored mock interviews for you. Practice for success!
          </h1>
          <div className="flex flex-col lg:flex-row gap-10 mt-7">
            <div className="w-full lg:w-8/12 flex flex-col gap-7">
              {data &&
                data.slice(0, loadmore).map((item) => (
                  <div
                    className={`border rounded-md px-10 py-10 border-blue-500 bg-white flex items-center gap-14`}
                    style={{ boxShadow: "0 0 3px rgba(0,0,0,0.1)" }}
                  >
                    <div>
                      <h1 className="text-xl font-bold">
                        Mock Interview {item?.id}
                      </h1>
                      <div className="flex items-center gap-1 text-sm text-neutral-400">
                        <h1>{item?.company}</h1>
                        <h1>|</h1>
                        <h1>{item?.role}</h1>
                      </div>
                    </div>
                    <button className="bg-[#1F2544] text-white py-2 px-10 rounded-md  ml-auto ">
                      Start
                    </button>
                  </div>
                ))}
              <button className="mx-auto" onClick={handleloadmore}>
                {text}
              </button>
            </div>
            <div
              className="w-full lg:w-4/12 bg-white h-96 rounded-md sticky top-28"
              style={{ boxShadow: "0 0 3px rgba(0,0,0,0.1)" }}
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
