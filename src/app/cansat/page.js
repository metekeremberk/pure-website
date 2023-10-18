import Navbar from "@/components/Navbar";
import React from "react";

export default function Cansat() {
  return (
    <main className="flex h-screen w-auto flex-col">
      <Navbar />
      <div className="flex h-full flex-col items-center justify-center">
        <div className="w-1/2">
          <h1 className="pb-16 text-6xl">CanSat Nedir?</h1>
          <div className="child:pb-5 text-lg leading-loose">
            <p>
              A CanSat, gerçek bir uydu simülasyonudur ve bir gazoz kutusunun
              hacmi ve şekli içine entegre edilir. Öğrenciler için meydan okuma,
              bir uydu içinde bulunan ana alt sistemleri, güç, sensörler ve
              iletişim sistemini bu sınırlı hacme sığdırmaktır. CanSat daha
              sonra bir roketle birkaç yüz metre yüksekliğe fırlatılır veya bir
              platformdan veya hava balonundan bırakılır ve görevi başlar:
              bilimsel bir deney yapmak ve güvenli bir iniş gerçekleştirmektir.
            </p>
            <p>
              CanSats, öğrencilere gerçek bir uzay projesinin ilk pratik
              deneyimini yaşama fırsatı sunar. Öğrenciler, CanSat'ı tasarlama,
              misyonunu seçme, bileşenleri entegre etme, test etme, fırlatmaya
              hazırlık yapma ve verileri analiz etme gibi tüm yönlerden
              sorumludur.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
