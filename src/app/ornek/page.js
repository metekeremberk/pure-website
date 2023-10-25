import React from "react";
import Drawer from "@/components/Drawer";

export default function Ornek() {
  return (
    <div className="flex h-full w-auto items-stretch justify-center">
      <Drawer></Drawer>
      <div className="flex basis-3/4 items-center justify-center"></div>
    </div>
  );
}
