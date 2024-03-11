"use client";

import React from "react";
import { GoHome } from "react-icons/go";
import { GiTwoCoins } from "react-icons/gi";
import { SiGoogleanalytics } from "react-icons/si";
import { GoBell } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();
  const pathname = path;

  const isDashboardActive = pathname === "/dashboard";
  const isCreditActive = pathname === "/credits";
  const isAnalyticsActive = pathname === "/analytics";
  const isNotificationActive = pathname === "/notification";

  return (
    <div className="w-20 h-screen fixed left-0 bg-white flex flex-col items-center  py-6 z-50 ">
      <div className="py-2 px-3 rounded-md bg-blue-600 text-white text-2xl font-bold">
        Pn
      </div>
      <div className="mt-44 text-2xl flex flex-col gap-6 ">
        <Link
          href={"/dashboard"}
          className={`flex flex-col items-center p-3 rounded-md ${
            isDashboardActive ? "active" : null
          }`}
        >
          <GoHome />
        </Link>
        <Link
          href={"/credits"}
          className={` p-3 rounded-md ${isCreditActive ? "active" : null}`}
        >
          <GiTwoCoins />
        </Link>
        <Link
          href={"/analytics"}
          className={` p-3 rounded-md ${isAnalyticsActive ? "active" : null}`}
        >
          <SiGoogleanalytics />
        </Link>
        <Link
          href={"/notification"}
          className={` p-3 rounded-md ${
            isNotificationActive ? "active" : null
          }`}
        >
          <GoBell />
        </Link>
      </div>
      <div className="mt-auto text-xl mb-2 border-2 rounded-full p-2">
        <LuUser2 />
      </div>
    </div>
  );
};

export default Sidebar;
