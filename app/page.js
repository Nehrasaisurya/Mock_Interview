import Navbar from "@/components/Navbar";
import Aboutpage from "@/components/Pages/Aboutpage";
import Featurespage from "@/components/Pages/Featurespage";
import Homepage from "@/components/Pages/Homepage";
import Marquee from "@/components/Pages/Marquee";
import Typing from "@/components/Typing";

import React from "react";

const page = () => {
  return (
    <main className="">
      <Navbar />
      <Homepage />
      <Marquee />
      <Aboutpage />
      <Featurespage />
      <Typing />
    </main>
  );
};

export default page;
