"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Drawer() {
  const url = "/adim-adim";
  return (
    <div className="basis-1/4 overflow-y-auto border-r px-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Link href={url + "/kurulum"}>Kurulum</Link>
          </AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>
                <Link
                  href={url + "/kurulum/arduino-ide-kurulumu"}
                  className="hover:underline"
                >
                  Arduino IDE kurulumu
                </Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
