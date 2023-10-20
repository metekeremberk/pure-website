"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { adim_adim } from "./content";

function Drawer({ func }) {
  return (
    <div className="basis-1/4 overflow-y-scroll border-r px-4">
      <div className="h-[80vh] first:mt-2">
        {adim_adim.map((adim, index) => {
          return (
            <button
              className="my-1 w-full rounded border py-2 hover:bg-slate-300"
              onClick={() => {
                func(index);
              }}
            >
              {adim.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

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
        <Drawer func={handleClick} />
        <div className="flex basis-3/4 items-center justify-center">
          {displayedContent}
        </div>
      </div>
    </main>
  );
}
