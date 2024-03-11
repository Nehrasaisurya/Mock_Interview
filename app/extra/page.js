"use client";

import React, { useState } from "react";

const Webcam = () => {
  const [hasCameraAccess, setHasCameraAccess] = useState(false);
  const [hasMicrophoneAccess, setHasMicrophoneAccess] = useState(false);
  const handleStartStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setHasCameraAccess(true);
      setHasMicrophoneAccess(true);
    } catch (error) {
      console.log("something went wrong");
    }
  };
  handleStartStream();

  return (
    <div>
      {hasCameraAccess && <h1>True</h1>}
      {hasMicrophoneAccess && <h1>True</h1>}
    </div>
  );
};
export default Webcam;
