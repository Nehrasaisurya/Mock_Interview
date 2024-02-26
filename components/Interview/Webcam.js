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
    <div id="container">
      <video id="videoElement" ref={videoRef} autoPlay />
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
