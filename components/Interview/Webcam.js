"use client";

import React, { useRef } from "react";

const Webcam = () => {
  const videoRef = useRef(null);
  const stopButtonRef = useRef(null);
  const startButtonRef = useRef(null);

  const handleStartStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.log("something went wrong");
    }
  };

  const handleStopStream = () => {
    if (videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  return (
    <div
      id="container"
      className="absolute top-10 right-10"
      style={{ boxShadow: "0 0 5px rgba(0,0,0,0.1)" }}
    >
      <video
        id="videoElement"
        ref={videoRef}
        autoPlay
        className=" w-[800px] h-[450px]"
      />
      <button id="startButton" ref={startButtonRef} onClick={handleStartStream}>
        Start Camera
      </button>
      <button id="stopButton" ref={stopButtonRef} onClick={handleStopStream}>
        Stop Camera
      </button>
    </div>
  );
};

export default Webcam;
