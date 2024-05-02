import Aboutpage from "@/components/Pages/Aboutpage";
import Featurespage from "@/components/Pages/Featurespage";
import Homepage from "@/components/Pages/Homepage";
import Marquee from "@/components/Pages/Marquee";

import React from "react";

const page = () => {
  return (
    <main className="">
      <Homepage />
      <Marquee />
      <Aboutpage />
      <Featurespage />
    </main>
  );
};

export default page;
