import Drawer from "@/components/Drawer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Hatalar() {
  return (
    <main className="flex h-screen w-auto flex-col">
      <Navbar />
      <div className="flex h-full w-auto items-stretch justify-center">
        <Drawer></Drawer>
        <div className="flex basis-3/4 items-center justify-center"></div>
      </div>
    </main>
  );
}
