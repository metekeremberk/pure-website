"use client";

import { useState } from "react";
import Arrow from "../../../public/navbar/arrow.svg";
import Image from "next/image";

function FalcataKullanimi() {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        className="group mb-1 flex w-full justify-between border-b pb-1"
        onClick={() => setOpen(!open)}
      >
        <p className="group-hover:underline">Falçata kullanımı</p>
        <Image
          src={Arrow}
          height={10}
          className="transition-transform delay-75 duration-300 group-hover:rotate-180"
        />
      </button>
      <ul
        className={
          "list-disc space-y-2 pl-10 text-sm transition-all " +
          `${open ? "mb-10 h-80 scale-100" : "h-0 scale-0"}`
        }
      >
        <li>
          Maket bıçağı kullanırken yaptığınız işe konsantre olunuz. Diğer
          çalışanlarla sohbet etmek, başka işlere odaklanmak gibi dikkatinizi
          başka yöne çekecek hareketlerden kaçınınız.
        </li>
        <li>
          Kullandığınız bıçak ucunun yeni ve keskin olduğundan emin olunuz.
          Körelmiş bıçak ucu ile kesmek daha çok uğraş ve baskı gerektirdiği
          için iş kazalarına sebep olma ihtimali daha fazladır. Körelmiş bıçak
          uçlarını değiştiriniz.
        </li>
        <li>
          Maket bıçağınıza uygun uzunlukta bıçak kullanmaya dikkat ediniz ve
          bıçağın olabildiğince az açılacak nitelikte ayarlanmasına dikkat
          ediniz. Bıçak kullanımında en fazla bir dilim açılması güvenliğiniz
          için önemlidir.
        </li>
        <li>
          Maket bıçağını sadece gerçek amacı yani kesmek için kullanınız. Kazıma
          vb. amaçlarla kesinlikle kullanmayınız.
        </li>
        <li>
          Eliniz yağlı veya benzer kaygan maddelere bulaşmışsa elinizi iyice
          temizlemeden maket bıçağını kullanmayınız.
        </li>
        <li>
          Maket bıçağını kullanırken elinizden düşürdüğünüzde bir adım geri
          atınız ve kesinlikle yakalamaya çalışmayınız.
        </li>
        <li>
          Maket bıçağını kullandığınız kutu vb. maddelerin yüzeylerinin düz ve
          uygun olduğunu kontrol ediniz. Diğer maddeleri uygun bir yüzey
          üzerinde kesmeye dikkat ediniz. Kablo vb. cisimlerin kesilmesini asla
          sabit bir yüzeye dayamadan havada gerçekleştirmeyiniz.
        </li>
        <li>
          Vücudunuzu ve uzuvlarınızı kesim çizgisinden her zaman uzak tutunuz.
          Kesim çizgisini her zaman vücudunuza paralel olacak şekilde belirleyin
          ve kontrol dışı bir harekette vücudunuza gelmesini engel olunuz.
        </li>
        <li>
          Maket bıçağı kullanırken EN 388 ve (x5xx) (kesilme direnci 5)
          standartına sahip iş eldiveni kullanınız.
        </li>
      </ul>
    </li>
  );
}

function HavyaKullanimi() {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        className="group mb-1 flex w-full justify-between border-b pb-1"
        onClick={() => setOpen(!open)}
      >
        <p className="group-hover:underline">Havya kullanımı</p>
        <Image
          src={Arrow}
          height={10}
          className="transition-transform delay-75 duration-300 group-hover:rotate-180"
        />
      </button>
      <ul
        className={
          "list-disc space-y-2 pl-10 text-sm transition-all " +
          `${open ? "mb-10 h-20 scale-100" : "h-0 scale-0"}`
        }
      >
        <li>
          Sadece lehim yaparken tutulacak (falçata elde tutulurken kablo
          düzeltme vs. yapılmayacak).
        </li>
        <li>Lehim bitince istasyona geri konacak.</li>
        <li>Tüm lehim işi bitince fişten sekilecek.</li>
        <li>
          Tek başına havya ile çalısılmayacak, havya kullanımı sırasında en az
          bir kişi daha en azından gözlemler için ortamda bulunacak.
        </li>
      </ul>
    </li>
  );
}

export default function page() {
  return (
    <div className="flex h-auto w-full flex-col px-40 py-10">
      <div className="rounded border px-10 py-5">
        <p className="mb-6 border-b pb-2 text-2xl">Güvenlik Talimatları</p>
        <ul className="flex h-auto w-full flex-col gap-4 px-5">
          <FalcataKullanimi />
          <HavyaKullanimi />
          <li className="mb-1 border-b pb-1">
            Çalışma masalarında yiyecek ve içecek olmayacak
          </li>
          <li className="mb-1 border-b pb-1">
            Hiç bir malzeme ağız ile tutulmayacak
          </li>
        </ul>
      </div>
    </div>
  );
}
