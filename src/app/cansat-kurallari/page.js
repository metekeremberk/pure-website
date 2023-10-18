import Navbar from "@/components/Navbar";
import React from "react";
import { kurallar, telemetri } from "@/content";

export default function Cansat() {
  return (
    <main className="flex w-auto flex-col">
      <Navbar />
      <div className="flex h-full flex-col items-center justify-center">
        <div className="mb-12 mt-24 w-4/5 rounded-lg border p-14">
          <h1 className="text-2xl">CanSat Kurallar</h1>
          <div className="mb-2 w-full border" />
          <ul className="">
            {kurallar.map((kural, key) => {
              return (
                <li className="flex items-stretch py-1" key={key}>
                  <div className="flex items-center border-b pr-3 text-lg">
                    <p>{kural.index}.</p>
                  </div>
                  <p className="border-b">{kural.rule}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-24 mt-12 w-4/5 rounded-lg border p-14">
          <h1 className="text-2xl">Telemetri Formatı</h1>
          <div className="mb-2 w-full border" />
          <ul className="">
            {telemetri.map((tele, key) => {
              const telemetriIsim = `<${tele.isim}>`;
              return (
                <li className="flex items-stretch py-1" key={key}>
                  <div className="flex basis-1/4 items-center border-b text-lg font-semibold">
                    <p>{telemetriIsim}</p>
                  </div>
                  <p className="basis-3/4 border-b">{tele.telemetri}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
