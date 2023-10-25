import Image from "next/image";
// import { ideSetupImages } from "./imports";

export default function ESP32SurucusuKurulumu() {
  return (
    <div className="child:border-b child:p-4 mx-5 flex flex-col">
      <div>
        <h1 className="pb-6 pt-2 text-3xl">ESP32 Sürücüsü Kurulumu</h1>
        <p>
          Arduino IDE kurulumu oldukça basit bir işlemdir. Arduino IDE'nin nasıl
          indirildiğini öğrenmek için bu kılavuzu takip edebilirsiniz.
        </p>
      </div>
      <div>
        <h3 className="pb-5 pt-2 text-2xl">ESP32 Sürücüsü İndirme</h3>
        <p>
          Arduino IDE'yi indirmek için Arduino'nun resmi{" "}
          <span className="underline hover:text-gray-500">
            <a href={"https://www.arduino.cc/en/software"} target="_blank">
              web sitesini
            </a>
          </span>{" "}
          ziyaret edin. Web sitesine gidin ve "Download Options" bölümünden
          bilgisayarınıza uygun olan Arduino IDE sürümünü seçin. Sonrasında
          açılan sayfada "Just Download" düğmesine basarak indirme işlemini
          başlatın.
        </p>
        <div className="child:my-8">
          {/* <Image
            src={ideSetupImages[0]}
            className="mx-auto shadow-lg"
            alt="ideSetup1"
          />
          <Image
            src={ideSetupImages[1]}
            className="mx-auto shadow-lg"
            alt="ideSetup2"
          /> */}
        </div>
      </div>
    </div>
  );
}
