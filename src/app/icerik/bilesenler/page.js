import Image from "next/image";
import { bilesenler } from "./content";

export default function page() {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-5 p-5 xl:grid-cols-2">
      {bilesenler.map((bilesen, i) => {
        return (
          <div
            key={i}
            className="flex flex-col justify-between rounded border p-4"
          >
            <p>{bilesen.isim}</p>
            <ul className="list-inside list-disc">
              {bilesen.bilgi.map((item, j) => {
                return (
                  <li key={j} className="text-sm">
                    {item}
                  </li>
                );
              })}
            </ul>
            <Image
              src={bilesen.foto}
              className="mx-auto max-h-60 object-contain py-3"
              alt={bilesen.isim}
              placeholder="blur"
            />
          </div>
        );
      })}
    </div>
  );
}
