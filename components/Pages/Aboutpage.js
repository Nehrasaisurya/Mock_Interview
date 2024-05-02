import React from "react";

const data = [
  {
    name: "Julia",
    role: "Software Developer",
    image: "/Images/Julia.jpg",
    id: "1",
  },
  {
    name: "Andrew",
    role: "ML Expert",
    image: "/Images/Andrew.jpg",
    id: "2",
  },
  {
    name: "Tom",
    role: "Others",
    image: "/Images/Tom.jpg",
    id: "3",
  },
];

const Aboutpage = () => {
  return (
    <div className="bg-white py-32 px-20 flex justify-evenly">
      <div className="text-center ">
        <h1 className="opacity-70 text-sm">About Us</h1>
        <h1 className="text-6xl font-extrabold">Empowering Individuals</h1>
        <h1 className="opacity-80 mt-4">
          Our virtual mock interview platform provides a seamless and
          interactive experience,
          <br />
          allowing you to practice interviews with experienced professional.
        </h1>
      </div>
      <div>
        <img src="./Images/ai virtual.jpg" className="rounded-md" />
      </div>
    </div>
  );
};

export default Aboutpage;
