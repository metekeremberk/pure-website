import Link from "next/link";

function Drawer() {
  const url = "/icerik";

  const links = [
    { href: "/bilesenler", desc: "CanSat Alt Sistemleri ve Bileşenleri" },
    { href: "/arduino-ide", desc: "Arduino IDE Kurulumu" },
  ];

  return (
    <div className="flex w-full basis-1/4 flex-col justify-start space-y-2 overflow-y-auto border-r px-4 py-4">
      <Link href={url} className="border-b pb-2 text-lg hover:underline">
        CanSat Kursunun İçeriği
      </Link>
      {links.map((link, i) => {
        return (
          <Link key={i} className="hover:underline" href={url + link.href}>
            {link.desc}
          </Link>
        );
      })}
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
