"use client";

import React, { useState, useEffect, useRef } from "react";
import Rules from "@/components/Interview/Rules";
import Webcam from "@/components/Interview/Webcam";

const page = () => {
  const [count, setcount] = useState(1);
  const [gofull, setgofull] = useState(false);

  useEffect(() => {
    const element = document.getElementById("elem");
    element?.requestFullscreen();
  }, [gofull]);

  const handlecount = () => {
    setgofull(!gofull);
    if (count < 3) {
      setcount(count + 1);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {count === 1 && <Rules handlecount={handlecount} />}
      {count === 2 && (
        <div id="elem">
          <img src="/Images/Julia.jpg" className="w-full h-screen" />
          <Webcam />
        </div>
      )}
    </div>
  );
};

export default page;
