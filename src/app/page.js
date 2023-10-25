import React from "react";
import Image from "next/image";
import Link from "next/link";
import CansatImage from "public/CanSat_Logo.png";

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex h-2/3 w-2/3 items-center rounded-lg border p-5 pl-10">
        <Image
          src={CansatImage}
          width={300}
          height={300}
          className="h-[300px] w-[300px] rounded border object-contain p-3"
          placeholder="blur"
        />
        <div className="flex flex-col justify-around gap-4 p-2 pl-5">
          <h1 className="pt-10 text-3xl font-medium">CanSat Nedir?</h1>
          <p className="text-base">
            Cansat, düşük maliyetli ve kompakt bir uydu benzeri cihazdır.
            Genellikle eğitim ve araştırma amaçları için kullanılır. Öğrenciler
            ve amatörler, Cansat'lar aracılığıyla temel uzay görevlerini
            tasarlayabilir ve gerçekleştirebilirler. Bu cihazlar, atmosfer
            ölçümleri, görüntü yakalama, veri iletimi ve deneysel çalışmalar
            gibi çeşitli görevleri gerçekleştirmek için kullanılabilir.
          </p>
          <Link
            href="/cansat"
            className="ml-auto rounded bg-slate-300 px-4 py-2 hover:bg-slate-400"
          >
            Daha Fazla
          </Link>
        </div>
      </div>
    </div>
  );
}
