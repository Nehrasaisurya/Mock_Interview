import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center">
      <h1>Main Page</h1>
      <Link href={"/login"}>
        <button className="bg-slate-950 text-white px-5 py-1 rounded-md m-5">
          Login
        </button>
      </Link>
    </main>
  );
};

export default page;
