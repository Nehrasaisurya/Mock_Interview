import React from "react";
import { PiMonitorLight } from "react-icons/pi";
import { FaRankingStar } from "react-icons/fa6";
import { GiEarthAfricaEurope } from "react-icons/gi";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import Example from "@/components/LineChart";
import Sidebar from "@/components/Sidebar";
import Top from "@/components/Top";

const data = [
  {
    strengths: [
      "Technical proficiency ",
      "Problem-solving skills ",
      "Collaboration and communication",
      "Continuous learning mindset",
    ],
  },
  {
    areasforimprovement: [
      "Lack of experience",
      "Time management",
      "Code documentation",
      "Soft skills development",
    ],
  },
  {
    feedback: [
      "Strengths: Impressive technical skills",
      "Areas to Improve: Work on code documentation",
      "Overall Performance: Great potential, refine time management",
      "Constructive Criticism: Focus on code optimization",
    ],
  },
];

const page = () => {
  return (
    <main>
      <Sidebar />
      <Top />
      <div className="pl-28  py-24 bg-gray-50">
        <div>
          <h1 className="text-4xl font-bold">Performance Insights</h1>
          <h1 className="text-md mt-1 opacity-60">
            Track your progress and review feedback from previous mock
            interviews. Identify strengths and areas for improvement to enhance
            your interview skills.
          </h1>
        </div>
        <div className="mt-5 flex gap-5">
          <div className="flex flex-col gap-5 w12">
            <div className="flex items-end gap-5">
              <div
                className="bg-white rounded-md px-7 py-10 flex items-center gap-5 w-6/12"
                style={{ boxShadow: "0 0 3px rgba(0,0,0,0.1)" }}
              >
                <div className="p-5 bg-gray-100 rounded-full ">
                  <PiMonitorLight className="text-3xl" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-md">Interviews attended</h1>
                  <h1 className="text-4xl font-bold text-blue-600">16</h1>
                </div>
              </div>
              <div
                className="bg-white rounded-md px-7 py-10  flex items-center gap-5 w-6/12"
                style={{ boxShadow: "0 0 3px rgba(0,0,0,0.1)" }}
              >
                <div className="p-5 bg-gray-100 rounded-full ">
                  <FaRankingStar className="text-3xl" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-md">Interview Ranking</h1>
                  <h1 className="text-4xl font-bold text-blue-600">1,736</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div
                className="bg-white rounded-md px-7 py-10 flex items-center gap-5 w-6/12"
                style={{ boxShadow: "0 0 3px rgba(0,0,0,0.1)" }}
              >
                <div className="p-5 bg-gray-100 rounded-full ">
                  <GiEarthAfricaEurope className="text-3xl" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-md">Global Ranking</h1>
                  <h1 className="text-4xl font-bold text-blue-600">
                    49,442
                    <span className="text-sm ml-2 text-black opacity-50">
                      /490,939
                    </span>
                  </h1>
                </div>
              </div>
              <div
                className="bg-white rounded-md px-7 py-10  flex items-center gap-5 w-6/12"
                style={{ boxShadow: "0 0 3px rgba(0,0,0,0.1)" }}
              >
                <div className="p-5 bg-gray-100 rounded-full ">
                  <FaRankingStar className="text-3xl" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-md">Interview Ranking</h1>
                  <h1 className="text-4xl font-bold text-blue-600">1,736</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 w-6/12">
            <div
              className="w-6/12 bg-white rounded-md"
              style={{ boxShadow: "0 0 3px rgba(0,0,0,0.1)" }}
            >
              <LineChart />
            </div>
            <div
              className="w-6/12  bg-white rounded-md"
              style={{ boxShadow: "0 0 3px rgba(0,0,0,0.1)" }}
            ></div>
          </div>
        </div>
        <div className="flex items-start gap-5 mt-5">
          <div
            className="bg-white rounded-md  flex flex-col justify-center gap-5 w-6/12 py-10 px-10"
            style={{ boxShadow: "0 0 3px rgba(0,0,0,0.1)" }}
          >
            <div>
              <h1 className="text-2xl font-bold">Strengths</h1>
              <ul className="list-inside list-disc pl-3 mt-2 opacity-70 sm:text-md">
                {data[0].strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Areas for improvement</h1>
              <ul className="list-inside list-disc pl-3 mt-2 opacity-70 sm:text-md ">
                {data[1].areasforimprovement.map(
                  (areasforimprovement, index) => (
                    <li key={index}>{areasforimprovement}</li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Feedback from interview</h1>
              <ul className="list-inside list-disc pl-3 mt-2 opacity-70 sm:text-md ">
                {data[2].feedback.map((feedback, index) => (
                  <li key={index}>{feedback}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
