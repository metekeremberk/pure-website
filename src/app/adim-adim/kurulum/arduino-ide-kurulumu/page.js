import Image from "next/image";
import { ideSetupImages } from "./imports";

export default function ArduinoIDEKurulumu() {
  return (
    <div className="child:border-b child:p-4 mx-5 flex flex-col">
      <div>
        <h1 className="pb-6 pt-2 text-3xl">Arduino IDE Kurulumu</h1>
        <p>
          Arduino IDE kurulumu oldukça basit bir işlemdir. Arduino IDE'nin nasıl
          indirildiğini öğrenmek için bu kılavuzu takip edebilirsiniz.
        </p>
      </div>
      <div>
        <h3 className="pb-5 pt-2 text-2xl">Arduino IDE İndirme</h3>
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
          <Image
            src={ideSetupImages[0]}
            className="mx-auto shadow-lg"
            alt="ideSetup1"
            placeholder="blur"
          />
          <Image
            src={ideSetupImages[1]}
            className="mx-auto shadow-lg"
            alt="ideSetup2"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="border-b p-4">
        <h3 className="pb-5 pt-2 text-2xl">Arduino IDE Kurulum Sihirbazı</h3>
        <p>
          Arduino IDE'yi indirmeye devam etmek için "İndirilenler" dosyanızdan
          kurulum sihirbazını açın.
        </p>
        <Image
          src={ideSetupImages[2]}
          className="mx-auto my-8 shadow-lg"
          alt="ideSetup3"
          placeholder="blur"
        />
        <p>
          Arduino IDE kurulum sihirbazı açıldığında bu pencere ile
          karşılaşacaksınız. "Kabul Ediyorum" düğmesine basıp devam edin.
        </p>
        <Image
          src={ideSetupImages[3]}
          className="mx-auto my-8 shadow-lg"
          alt="ideSetup4"
          placeholder="blur"
        />
        <p>
          Sonraki pencerede ise Arduino IDE'nin bilgisayarınızda hangi
          kullanıcılar için indireleceğini seçeceksiniz. Her kullanıcı için
          inmesini istiyorsanız "Bu bilgisayarı kullanan herkes" düğmesine
          basın. Sadece kendi kullanıcı hesabınızda kullanılmasını istiyorsanız
          "Sadece benim için" düğmesine basın. Sonrasında ise "İleri" düğmesine
          basın.
        </p>
        <Image
          src={ideSetupImages[4]}
          className="mx-auto my-8 shadow-lg"
          alt="ideSetup5"
          placeholder="blur"
        />
        <p>
          Sonraki pencerede ise Arduino IDE'nin bilgisayarınızda nereye
          indireleceğini belirleyeceksiniz. Bu konumu değiştirmeden "Kur"
          düğmesine basın.
        </p>
        <Image
          src={ideSetupImages[5]}
          className="mx-auto my-8 shadow-lg"
          alt="ideSetup6"
          placeholder="blur"
        />
        <p>
          "Kur" düğmesine bastıktan sonra bu pencerede Arduino IDE'nin
          indirilmeye başladığını göreceksiniz.
        </p>
        <Image
          src={ideSetupImages[6]}
          className="mx-auto my-8 shadow-lg"
          alt="ideSetup7"
          placeholder="blur"
        />
        <p>
          "Bitir" düğmesine basarak Arduino IDE kurulumunu bitirebilirsiniz.
        </p>
        <Image
          src={ideSetupImages[7]}
          className="mx-auto my-8 shadow-lg"
          alt="ideSetup8"
          placeholder="blur"
        />
      </div>
      <div>
        <h3 className="pb-5 pt-2 text-2xl">Arduino IDE Kurulum Sonrası</h3>
        <p>
          Arduino IDE kurulumu bittikten sonra uygulamayı açınca buna benzer bir
          pencere ile karşılaşacaksınız.
        </p>
        <Image
          src={ideSetupImages[8]}
          className="mx-auto my-8 shadow-lg"
          alt="ideSetup9"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
