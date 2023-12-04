const content = [
  {
    gün: "1. Gün",
    detay:
      "CanSat takımlarının oluşturulması (takım başına 5-6 öğrenci). CanSat tanıtımı, görev tanımı, Cansat elektronik ekipmanlarının ve sensörlerin tanıtım.\n Uzaya Erişim Yöntemleri ve Önemi (sunum)",
  },
  {
    gün: "2. Gün",
    detay:
      "CanSat donanımı ve yazılımının tanıtılması, \nMikroişlemcilerin programlanmasına giriş (arduino),\n Breadboard üzerinde sensörler ile çalışmalar,\nSensörlerden toplanan verilerin uydu üstünde depolanması\nUydular için yer ortamı ve uzay ortamı (sunum)",
  },
  {
    gün: "3. Gün",
    detay:
      "CanSat yer istasyonu kurulması,\nSensörlerden toplanan verilerin kablosuz iletişim ile yer istasyonuna aktarılması,\nUydu kamerasının test edilmesi,\nYörüngeler ve uzay radyasyonu (sunum)",
  },
  {
    gün: "4. Gün",
    detay: "TATİL",
    kalın: true,
  },
  {
    gün: "5. Gün",
    detay:
      "CanSat mekanik tasarımı,\nSensörlerden toplanan verilerin uydu üstünde depolanması,\nUydu görevi tasarım prensipleri",
  },
  {
    gün: "6. Gün",
    detay:
      "Sensörlerden toplanan verilerin uydu üstünde depolanması devam,\nCanSat alçalma ve iniş sistemi tasarımı,\nIrtifaya bağlı davranış, inişin video kaydı yada fotoğraflanması gibi uydu görevlerinin fırlatma öncesi test edilmesi.",
  },
  {
    gün: "7. Gün",
    detay:
      "CanSat yüksekten bırakma, yer istasyonu takip ve kontrol,\nİniş sonrası analizi,\nRapor (taslak paylaşılacaktır) ve sunum",
  },
];

export default function page() {
  return (
    <div className=" h-full w-full px-20 py-10">
      <div className="justify-betwee flex h-full flex-col rounded border p-10">
        <h1 className="border-b-2 px-10 py-4 text-3xl">Zaman Çizelgesi</h1>
        <div className="flex h-full flex-col justify-around">
          {content.map((item, i) => {
            return (
              <div key={i} className="flex h-full items-center border-b">
                <p className="w-[100px] min-w-[100px] text-center font-semibold">
                  {item.gün}
                </p>
                <p className={"px-5 " + `${item.kalın && "font-bold"}`}>
                  {item.detay}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
