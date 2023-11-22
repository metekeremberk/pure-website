import Link from "next/link";

const icerik = [
  { desc: "CanSat Alt Sistemleri ve Bileşenleri" },
  { desc: "Arduino IDE" },
  { desc: "ESP32 ile Blink kodu testi" },
  { desc: "Breadboard kullanımı" },
  { desc: "Basınç ve yükseklik ölçümü" },
  { desc: "Açısal hız ve ivme ölçümü" },
  { desc: "Manyetik alan ölçümü" },
  { desc: "Toplanan verilerin SD kartta saklanması" },
  { desc: "Buzzer kullanımı" },
  { desc: "GPS alıcısı ile konum belirleme" },
  { desc: "CanSat'tan yer istasyonuna veri alma" },
  { desc: "Kamera kullanımı" },
  { desc: "CanSat'in bir prototip kart üzerine entegrasyonu" },
  { desc: "Uçuş" },
];
export default function Cansat() {
  return (
    <div className="mx-5 flex flex-col child:border-b child:p-4">
      <div>
        <h3 className="pb-5 pt-2 text-2xl">CanSat Yapımına Başlamadan Önce</h3>
        <ul className="list-inside list-disc">
          <li>Her grup için en az 1 tane bilgisayar.</li>
          <li>Her bilgisayar için internet bağlantısı.</li>
          <li>Herkesin aktif olduğu bir takım ortamı.</li>
          <li>
            Falçata ve havya kullanırken{" "}
            <Link href={"/guvenlik"} className="underline hover:text-zinc-600">
              güvenlik kurallarını
            </Link>{" "}
            unutulmamalı.
          </li>
          <li>
            Grupların kullandığı masalar arasında güvenlik için mesafe
            bırakılmalı.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="pb-5 pt-2 text-2xl">CanSat Kursunun İçeriği</h3>
        <ul className="list-inside list-disc">
          {icerik.map((item, i) => {
            return <li key={i}>{item.desc}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
