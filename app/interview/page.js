"use client";

import React from "react";
import Rules from "@/components/Interview/Rules";
import Webcam from "@/components/Interview/Webcam";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* <Rules /> */}
      <img src="/Images/Julia.jpg" className="w-full h-screen" />
      <Webcam />
    </div>
  );
};

export default page;
