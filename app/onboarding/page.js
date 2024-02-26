"use client";

import { IoIosArrowRoundBack } from "react-icons/io";
import React, { useState } from "react";
import Onboardingone from "@/components/Onboarding/Onboardingone";
import Onboardingtwo from "@/components/Onboarding/Onboardingtwo";
import Onboardingthree from "@/components/Onboarding/Onboardingthree";
import Onboardingfour from "@/components/Onboarding/Onboardingfour";
import Onboardingfive from "@/components/Onboarding/Onboardingfive";
import Onboardingsix from "@/components/Onboarding/Onboardingsix";

const page = () => {
  const [count, setcount] = useState(1);
  const handlecount = () => {
    if (count < 6) {
      setcount(count + 1);
    }
  };
  const handlecountback = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-3 w-9/12 fixed top-16 lg:top-20 xl:top-24">
        {count > 1 ? (
          <button onClick={handlecountback}>
            <IoIosArrowRoundBack className="text-2xl opacity-70" />
          </button>
        ) : (
          <button onClick={handlecountback} disabled>
            <IoIosArrowRoundBack className="text-2xl opacity-0" />
          </button>
        )}
        <div className="w-[75%] bg-gray-100 h-3 rounded-md ">
          <div
            style={{
              width: `${count * 16.67}%`,
            }}
            className="rounded-md bg-[#0066FF] h-3 duration-700 transform"
          ></div>
        </div>
      </div>
      <div className="w-full h-screen flex items-center justify-center p-10">
        {count === 1 && <Onboardingone handlecount={handlecount} />}
        {count === 2 && <Onboardingtwo handlecount={handlecount} />}
        {count === 3 && <Onboardingthree handlecount={handlecount} />}
        {count === 4 && <Onboardingfour handlecount={handlecount} />}
        {count === 5 && <Onboardingfive handlecount={handlecount} />}
        {count === 6 && <Onboardingsix handlecount={handlecount} />}
      </div>
    </div>
  );
};

export default page;
