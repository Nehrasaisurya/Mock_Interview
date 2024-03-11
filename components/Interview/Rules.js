import React from "react";

const Rules = ({ handlecount }) => {
  return (
    <div
      className="p-16 rounded-md text-center relative border border-blue-500"
      style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
      data-aos="fade-left"
    >
      <h1 className="text-4xl font-bold z-50">Rules to Follow</h1>

      <div className="flex flex-col items-start mt-10">
        <div className="flex flex-col items-start mb-2">
          <h1 className="text-xl font-bold">• Prepare thoroughly:</h1>
          <h1 className="indent-10 opacity-70">
            Research questions and the company.
          </h1>
        </div>
        <div className="flex flex-col items-start mb-2">
          <h1 className="text-xl font-bold">• Maintain professionalism:</h1>
          <h1 className="indent-10 opacity-70">
            Dress appropriately and use polite language..
          </h1>
        </div>
        <div className="flex flex-col items-start mb-2">
          <h1 className="text-xl font-bold">• Manage time effectively: </h1>
          <h1 className="indent-10 opacity-70">
            Allocate time for each question.
          </h1>
        </div>
        <div className="flex flex-col items-start mb-2">
          <h1 className="text-xl font-bold">• Seek feedback: </h1>
          <h1 className="indent-10 opacity-70">
            Reflect on performance and ask for constructive criticism.
          </h1>
        </div>
        <div className="flex flex-col items-start mb-2">
          <h1 className="text-xl font-bold">• Respect confidentiality:</h1>
          <h1 className="indent-10 opacity-70">
            Keep interview content private.
          </h1>
        </div>
      </div>
      <button
        className="bg-[#1F2544] text-white py-2 font-semibold rounded-md mt-10 w-6/12 mx-auto flex justify-center items-center gap-2"
        onClick={handlecount}
      >
        Next
      </button>
    </div>
  );
};

export default Rules;
