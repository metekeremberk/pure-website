import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.jsx";

function Drawer() {
  const url = "/adim-adim";

  return (
    <div className="basis-1/4 overflow-y-auto border-r px-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger>
            <Link href={url + "/kurulum"}>Kurulum</Link>
          </AccordionTrigger>
          <AccordionContent className="ml-1 border-l pl-3">
            <ul className="child:py-1 child:child:block child:child:h-full child:child:w-full">
              <li>
                <Link
                  href={url + "/kurulum/arduino-ide-kurulumu"}
                  className="hover:underline"
                >
                  Arduino IDE Kurulumu
                </Link>
              </li>
              <li>
                <Link
                  href={url + "/kurulum/esp32-surucusu-kurulumu"}
                  className="hover:underline"
                >
                  ESP32 Sürücüsü Kurulumu
                </Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default function AdimAdimLayout({ children }) {
  return (
    <div className="flex h-full w-auto items-stretch justify-center">
      <Drawer />
      <div className="h-full basis-3/4 overflow-y-auto">{children}</div>
    </div>
  );
}
