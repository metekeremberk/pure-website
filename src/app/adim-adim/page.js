"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { adim_adim } from "./content";
import Drawer from "@/components/Drawer";

export default function Cansat() {
  const [index, setIndex] = useState(0);
  const [displayedContent, setDisplayedContent] = useState(
    adim_adim[index].content,
  );

  const handleClick = (x) => {
    setIndex(x);
  };

  useEffect(() => {
    console.log(index);
    setDisplayedContent(adim_adim[index].content);
  }, [index]);

  return (
    <main className="flex h-screen w-auto flex-col">
      <Navbar />
      <div className="flex h-full w-auto items-stretch justify-center">
        <Drawer func={handleClick} list={adim_adim} />
        <div className="flex basis-3/4 items-center justify-center">
          {displayedContent}
        </div>
      </div>
    </main>
  );
}
