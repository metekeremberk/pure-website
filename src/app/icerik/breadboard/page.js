import breadboard from "public/icerik/breadboard/breadboard.png";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <h1 className="m-10 mb-0 border-b-2 pb-3 text-3xl">
        Breadboard kullanımı
      </h1>
      <div className="flex flex-col p-10 pt-0">
        <h2 className="border-b pb-3 pt-6 text-2xl">
          Neden breadboard kullanılır?
        </h2>
        <p className="pt-5 text-justify">
          Elektronik breadboard, aslında lehim gerektirmeyen bir breadboard'u
          ifade eder.
          <br />
          Bunlar geçici devreler oluşturmak ve prototip yapmak için harika
          ünitelerdir ve hiç lehimleme gerektirmez.
          <br />
          Aşağıda görebileceğiniz şekilde breadboard üzerinde bulunan delikler
          birbirlerine bağlıdır.
        </p>
        <div className="px-14 py-10">
          <Image
            src={breadboard}
            className="mx-auto object-contain shadow-lg"
            alt={"breadboard"}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
