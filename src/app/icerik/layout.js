import Link from "next/link";

function Drawer() {
  const url = "/icerik";

  const links = [
    { href: "/bilesenler", desc: "CanSat Alt Sistemleri ve Bileşenleri" },
    { href: "/arduino-ide", desc: "Arduino IDE Kurulumu" },
    { href: "/blink-test", desc: "ESP32 ile Blink kodu testi" },
  ];

  return (
    <div className="flex flex-col justify-start space-y-2 overflow-y-auto border-r px-4 py-4 lg:w-[350px] lg:min-w-[350px]">
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
    <div className="flex h-full items-stretch justify-center">
      <Drawer />
      <div className="h-full w-full overflow-y-auto">{children}</div>
    </div>
  );
}
