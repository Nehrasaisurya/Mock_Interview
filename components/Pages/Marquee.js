"use  client";
import React from "react";

const Marquee = () => {
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];
  return (
    <div className="w-full py-20 relative flex items-center justify-center">
      <div className="w-full h-fit flex items-center justify-center flex-col">
        <div className=" flex w-[800px] overflow-hidden select-none ">
          <div className=" flex-shrink-0 flex items-center justify-center whitespace-nowrap width-[100%] marqueegroup">
            {row1.map((el) => (
              <div className="grid place-items-center w-[200px] p-5 ">
                <img
                  src={el}
                  alt="..."
                  className="object-contain w-full h-full p-5 "
                />
              </div>
            ))}
          </div>
          <div className=" flex-shrink-0 flex items-center justify-center whitespace-nowrap width-[100%] marqueegroup">
            {row1.map((el) => (
              <div className="grid place-items-center w-[200px] p-5 ">
                <img
                  src={el}
                  alt="..."
                  className="object-contain w-full h-full rounded-md aspect-video p-5 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
