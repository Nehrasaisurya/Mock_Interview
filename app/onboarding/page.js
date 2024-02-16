"use client";

import { IoIosArrowRoundBack } from "react-icons/io";
import React, { useState } from "react";
import Onboardingone from "@/components/Onboarding/Onboardingone";
import Onboardingtwo from "@/components/Onboarding/Onboardingtwo";
import Onboardingthree from "@/components/Onboarding/Onboardingthree";

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
      <div className="flex items-center justify-center gap-3 w-9/12 fixed top-24">
        <button onClick={handlecountback}>
          <IoIosArrowRoundBack className="text-2xl opacity-70" />
        </button>
        <div className="w-9/12 bg-gray-100 h-3 rounded-md "></div>
      </div>
      <div className="w-full min-h-screen flex items-center justify-center">
        {count === 1 && <Onboardingone handlecount={handlecount} />}
        {count === 2 && <Onboardingtwo handlecount={handlecount} />}
        {count === 3 && <Onboardingthree handlecount={handlecount} />}
        {/* <Onboardingthree /> */}
        {/* {count === 1 && <Onboardingone handlecount={handlecount} />}
        {count === 1 && <Onboardingone handlecount={handlecount} />}
        {count === 1 && <Onboardingone handlecount={handlecount} />} */}
      </div>
    </div>
  );
};

export default page;
