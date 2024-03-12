"use client";

import React, { useRef, useEffect } from "react";

const Webcam = () => {
  const videoRef = useRef(null);

  const handleStartStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    handleStartStream();
  }, []);
  return (
    <div id="container" className="absolute top-10 right-10">
      <video
        id="videoElement"
        ref={videoRef}
        autoPlay
        className="w-[500px] h-[450px]"
      />
    </div>
  );
};

export default Webcam;
