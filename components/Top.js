"use client";

import React from "react";
import { usePathname } from "next/navigation";

const Top = () => {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 w-full bg-white pl-28 font-bold shadow-sm px-0 py-5 text-xl z-40">
      <h1 className="capitalize text-blue-700">{pathname.slice(1)}</h1>
    </div>
  );
};

export default Top;
