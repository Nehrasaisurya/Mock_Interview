import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex ">
      <div className="w-full md:w-6/12 min-h-screen bg-[#0066FF] text-white px-20 py-44">
        <h1 className="text-6xl font-bold">Platform Name</h1>
        <h1 className="mt-3 text-justify">
          Conquer job interviews with our Mock Interview App! Practice with
          diverse, pre-recorded scenarios & craft custom questions. Receive
          AI-powered feedback on communication & body language. Hone skills with
          tutorials & exercises. Master interview etiquette & network with
          mentors. Download today & ace your next interview!
        </h1>
      </div>
      <div className="w-full md:w-6/12 min-h-screen flex items-center justify-center">
        <div className="">
          <form className="flex flex-col">
            <label className="flex items-center gap-2 opacity-70 text-lg">
              <MdOutlineMailOutline />
              Email
            </label>
            <input
              type="email"
              className="border-b w-96 py-2 outline-none px-1"
            />
            <Link
              href={"/onboarding"}
              className="flex items-center justify-center"
            >
              <button
                type="submit"
                className="bg-[#1F2544] text-white py-2 font-bold rounded-md mt-7 w-8/12 mx-auto"
              >
                Enter
              </button>
            </Link>
          </form>
          <div className="mt-10 flex items-center gap-2 ">
            <div className="border-b w-3/12 ml-auto"></div>
            <h1 className="text-xs text-gray-400">OR</h1>
            <div className="border-b w-3/12 mr-auto"></div>
          </div>
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-sm  mt-10 justify-center cursor-pointer"
            style={{ boxShadow: "0 0 7px rgba(0,0,0,0.1" }}
          >
            <FcGoogle className="text-2xl" />
            <h1>Sign in with google</h1>
          </div>
          <h1 className="text-sm text-center mt-5">
            By continuing, you agree to our
            <span className="text-green-500"> Terms of Services</span>
            <br /> and
            <span className="text-green-500"> Privacy Policy</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
