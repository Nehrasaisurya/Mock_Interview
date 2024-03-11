"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { VscLoading } from "react-icons/vsc";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

AOS.init();

const Onboardingsix = ({ handlecount }) => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const [hasCameraAccess, setHasCameraAccess] = useState(false);
  const [hasMicrophoneAccess, setHasMicrophoneAccess] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
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

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div
      className="px-16 py-16 rounded-md text-center relative border border-blue-500"
      style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
      data-aos="fade-left"
    >
      <h1 className="text-4xl font-bold z-50">System Requirements Check</h1>
      <h1 className="text-md opacity-70 mt-3">
        Before you begin your mock interview, please ensure that
        <br /> the following requirements are met:
      </h1>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-start mt-6 gap-2 text-lg my-4">
          <div className="flex items-center justify-start gap-3">
            {hasMicrophoneAccess ? (
              "✅"
            ) : (
              <VscLoading className="animate-spin" />
            )}
            <h1>🎙️ Microphone Permission</h1>
          </div>
          <div className="flex items-center justify-start gap-3">
            {hasCameraAccess ? "✅" : <VscLoading className="animate-spin" />}
            <h1>🎥 Camera Permission </h1>
          </div>
          <div className="flex items-center justify-start gap-3">
            {loading ? "✅" : <VscLoading className="animate-spin" />}
            <h1> 🔒 Screen Sharing and External Devices</h1>
          </div>
          <div className="flex items-center justify-start gap-3">
            {loading ? "✅" : <VscLoading className="animate-spin" />}
            <h1>💻 Other Windows</h1>
          </div>
          <div className="flex items-center justify-start gap-3">
            {isOnline ? "✅" : <VscLoading className="animate-spin" />}
            <h1>🌐 Stable Internet Connection</h1>
          </div>
        </div>
      </div>
      <Link href={"/interview"}>
        <button
          className="bg-[#1F2544] text-white py-2 font-semibold rounded-md mt-10 w-6/12 mx-auto flex justify-center items-center gap-2"
          onClick={handlecount}
        >
          Next
          <FaArrowRightLong className="text-xs" />
        </button>
      </Link>
    </div>
  );
};

export default Onboardingsix;
