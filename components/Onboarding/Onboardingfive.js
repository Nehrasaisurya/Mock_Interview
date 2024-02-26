import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const data = [
  {
    name: "Julia",
    role: "Software Developer",
    image: "/Images/Julia.jpg",
    id: "1",
  },
  {
    name: "Andrew",
    role: "ML Expert",
    image: "/Images/Andrew.jpg",
    id: "2",
  },
  {
    name: "Tom",
    role: "Others",
    image: "/Images/Tom.jpg",
    id: "3",
  },
];

const Onboardingfive = ({ handlecount }) => {
  const [Interviewer, setinterviewer] = useState(null);

  const handleinterview = (item) => {
    setinterviewer(item);
  };
  return (
    <div className="flex gap-10 items-start" data-aos="fade-left">
      <div
        className="px-16 py-16 rounded-md text-center relative border border-blue-500"
        style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
      >
        <h1 className="text-4xl font-bold z-50">Select Your Interviewer</h1>
        <h1 className="text-md opacity-70 mt-3">
          Choose whoever makes you feel comfortable. You <br />
          can always try again with another one.
        </h1>
        <div>
          {data.map((item) => (
            <button
              className={`py-4 px-7 mt-6 flex items-center justify-between rounded-md border ${
                Interviewer?.id === item.id
                  ? "border-green-500"
                  : "border-transparent"
              } w-full`}
              style={{ boxShadow: "0 0 4px rgba(0,0,0,0.1)" }}
              onClick={() => handleinterview(item)}
            >
              <h1 className="text-lg font-bold">{item?.name}</h1>
              <h1 className="text-xs capitalize opacity-50 font-bold">
                {item?.role}
              </h1>
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <img
            src={Interviewer?.image ? Interviewer?.image : "/Images/Julia.jpg"}
            className="w-[500px] aspect-video  rounded-md"
          />
          <h1 className="text-xl mt-6 font-bold tracking-wider">
            {Interviewer?.name ? Interviewer?.name : "Julia"}
          </h1>
          <h1 className="text-sm opacity-60">
            {Interviewer?.role ? Interviewer?.role : "Software Developer"}
          </h1>
        </div>
        <button
          className="bg-[#1F2544] text-white py-2 font-semibold rounded-md  px-8 flex justify-center items-center gap-2 ml-auto mt-6 mx-6"
          onClick={handlecount}
        >
          Next
          <FaArrowRightLong className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default Onboardingfive;
