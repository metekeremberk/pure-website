import Image from "next/image";
import blinkTest1 from "public/icerik/blink-test/blink-test1.png";
import blinkTest2 from "public/icerik/blink-test/blink-test2.png";
import blinkTest3 from "public/icerik/blink-test/blink-test3.png";
import blinkTest4 from "public/icerik/blink-test/blink-test4.png";

const content = [
  {
    paragraf:
      'ESP32\'nin düzgün bir şekilde çalışıp bilgisayarınızla ESP32 arası iletişim sağlanabildiğini test etmek için "Blink" testi yapacağız. Bu test ESP32 üzerinde bulunan LED ışığı 1 saniye aralıklarla açıp kapatacaktır. Öncelikle File->Examples->Basics->Blink seçeneğini açın.',
    foto: blinkTest1,
  },
  {
    paragraf:
      "Bu seçeneği seçince içinde blink testinin kodu bulunan yeni bir sekme açılacak. Bu kodda setup() fonksiyonundan önce \"#define LED_BUILTIN 2\" yazmanız gerekiyor. Bunun sebebi ESP32'nin üzerinde bulunan LED ESP32'nin ikinci pinine bağlı olmasındandır. Bu satırı ekledikten sonra ESP32'yi USB kablosuyla bilgisayara bağlayıp kod parçasının üstünde bulunan kart seçme menüsüne tıklayıp bağladığımız ESP32'yi seçiyoruz.",
    foto: blinkTest2,
  },
  {
    paragraf:
      'ESP32 kartınızı seçtikten sonra kart menüsünün yanında bulunan "Compile" tuşuna basarak kodunuzu ESP32\'nize gönderiyorsunuz. Eğer bu adımda konsolda hatayla karşılaşırsanız yeniden "Compile" tuşuna basıp kod kartınıza yüklenirken kartın üzerindeki BOOT tuşuna basılı tutun.',
    foto: blinkTest3,
  },
  {
    paragraf:
      "Kodunuz kartınıza gönderildikten sonra kartın üzerindeki EN tuşuna basın. Bunu yaptıktan sonra blink testinin çalışmaya başlaması gerekiyor.\n ESP32 kartınızın bu test sürecinde elektriğe ihtiyacı olduğunu unutmayın. USB kablosu test devam ettiği sürece takılı kalmalı.",
    foto: blinkTest4,
  },
];

export default function page() {
  return (
    <div>
      <h1 className="m-10 mb-0 border-b-2 pb-3 text-3xl">
        ESP32 ile Blink kodu testi
      </h1>
      <div className="flex flex-col p-10 pt-0">
        {content.map((item, i) => {
          return (
            <div key={i}>
              <p className="pt-5 text-justify">{item.paragraf}</p>
              <div className="border-b px-14 py-10">
                <Image
                  src={item.foto}
                  className="mx-auto object-contain shadow-lg"
                  alt={"blinkTest" + i}
                  placeholder="blur"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
