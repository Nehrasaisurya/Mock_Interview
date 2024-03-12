import React from "react";

const Aboutpage = () => {
  return (
    <div className="bg-white py-32 px-20 flex items-center justify-evenly">
      <div className="w-5/12">
        <h1 className="text-5xl font-bold">
          Empowering individuals to excel through effective interview
          preparation.
        </h1>
        <h1 className="opacity-80 mt-4">
          With a team of experienced professionals and cutting-edge technology,
          we're dedicated to helping you tackle tough interview questions,
          refine your communication skills, and stand out in today's competitive
          job market. Join us on this journey to career advancement and unlock
          your full potential
        </h1>
      </div>
      <div className="w-4/12">
        <img src="./Images/about.png" />
      </div>
    </div>
  );
};

export default Aboutpage;
