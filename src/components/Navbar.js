import Link from "next/link";
import Image from "next/image";
import { cansat, tavsiyeler, talimatlar } from "@/content";
import Arrow from "../../public/arrow.svg";

function NavLink({ href, title, content }) {
  return (
    <Link
      href={href}
      className="h-20 rounded p-2 font-medium hover:bg-slate-200"
    >
      {title}
      <div className="line-clamp-2 text-sm font-light text-gray-600">
        {content}
      </div>
    </Link>
  );
}

function NavButton({ items, title }) {
  return (
    <li className="group relative flex flex-col items-end">
      <button className="flex items-center gap-2 rounded-lg px-4 py-2 transition-all group-hover:bg-slate-300">
        {title}
        <Image
          src={Arrow}
          height={10}
          className="transition-transform delay-75 duration-300 group-hover:rotate-180"
        />
      </button>
      <div className="absolute top-14 flex w-80 scale-0 flex-col gap-2 rounded-lg border bg-white p-2 transition-all delay-75 group-hover:scale-100">
        {items.map((item) => {
          return (
            <NavLink
              href={item.href}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>
    </li>
  );
}

export default function Navbar() {
  return (
    <div className="flex h-20 items-center justify-between border-b px-10">
      <h1 className="cursor-default">Logo</h1>
      <ul className="flex flex-row gap-5">
        <NavButton items={cansat} title={"CanSat"} />
        <NavButton items={talimatlar} title={"Talimatlar"} />
        <NavButton items={tavsiyeler} title={"Tavsiyeler"} />
      </ul>
      {/* <Link href="/">Anasayfa</Link> */}
    </div>
  );
}
