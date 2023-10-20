export const cansat = [
  {
    title: "CanSat Nedir?",
    content: "CanSat küçük uydu benzeri bir cihazdır",
    href: "/cansat",
  },
  {
    title: "CanSat Kuralları ve Telemetri",
    content: "CanSat takımlarının uyması beklenen kurallar",
    href: "/cansat-kurallari",
  },
  {
    title: "CanSat Kodları",
    content: "Mevcut CanSat kodları",
    href: "https://github.com/metekeremberk/pure-website",
  },
];

export const talimatlar = [
  {
    title: "CanSat Yapımında Adımlar",
    content:
      "CanSat yapılışında yapılması gereken aktiviteler adım adım bulunmaktadır.",
    href: "/adim-adim",
  },
  {
    title: "Test Raporları",
    content:
      "Önceki yıllarda yaptığımız testlere ve deneylere dair ayrıntılı raporlar, projemizin belgeleri arasında bulunmaktadır.",
    href: "/test-raporlari",
  },
];

export const tavsiyeler = [
  {
    title: "Örnek Uygulamalar",
    content:
      "Atmosfer ölçümleri, görüntü yakalama, yerden uzaya iletişim, deneyler yapmak gibi uygulamalar mümkündür.",
    href: "/ornek",
  },
  {
    title: "Sıkça Görülen Hatalar",
    content:
      "Daha önce karşılaştığımız sorunları ve bu hataları nasıl aştığımızı paylaşıyoruz. Bu deneyimler, projenizi daha verimli hale getirmenize yardımcı olacaktır",
    href: "/hatalar",
  },
];

export const kurallar = [
  {
    index: 1,
    rule: "İniş süresince model uydu yükseklik, basınç, sıcaklık, pil voltajı, ve GPS konum verisini saniyede 1 kez (1 Hz frekansta) saat bilgisiyle beraber toplamalıdır.",
  },
  {
    index: 2,
    rule: "İniş sırasında uydu tüm telemetri verilerini sürekli olarak göndermelidir.",
  },
  {
    index: 3,
    rule: "Telemetri görev zamanını 1 saniye veya daha az hassasiyetle içermelidir.",
  },
  {
    index: 4,
    rule: "Her takımın haberleşme kanalı, takım numaraları kullanılarak senkronize edilecektir.",
  },
  {
    index: 5,
    rule: "Telemetri verileri doğru mühendislik birimleriyle yazdırılmalıdır ve alınan veriler PFR raporunda grafik halinde sunulmalıdır.",
  },
  {
    index: 6,
    rule: "Takımlar, tüm telemetri verilerini eş zamanlı olarak yer istasyonunda göstermeli ve yer istasyonunda, alınan verilerin grafiklerini çizdirmelidir.",
  },
  {
    index: 7,
    rule: "Yer istasyonu bilgisayarının 1 saat çalışacak kadar enerjisi olmalıdır.",
  },
  {
    index: 8,
    rule: "Uydunun üstünde takımın iletişim bilgilerinin yazdığı bir etiket olmalıdır.",
  },
  {
    index: 9,
    rule: "Model uydu kolay ulaşılabilen bir güç anahtarına (switch) sahip olmalıdır.",
  },
  {
    index: 10,
    rule: "Model uydu bir buzzer’a sahip olmalıdır. Uydu yere indiği zaman (~10 m civarında) buzzer ses çıkarmalıdır.",
  },
  {
    index: 11,
    rule: "Uydunun yere düşme hızı 6-8 m/s olmalıdır.",
  },
  {
    index: 12,
    rule: "Piller alkalin, Ni-cad, Ni-mh veya lityum olabilir. LiPo pillerin kullanımı yasaktır.",
  },
  {
    index: 13,
    rule: "Bir eğim sensörü (jiroskop) uçuş sırasında uydunun kararlılığını göstermek için kullanılmalıdır.",
  },
  {
    index: 14,
    rule: "Paket sayısı ve görev zamanı, işlemci yeniden başladığında bile kaldığı yerden devam etmelidir.",
  },
  {
    index: 15,
    rule: "Her takım kendisine özgü bir yer istasyonu tasarlamalıdır.",
  },
  {
    index: 16,
    rule: "Uydu üzerinde bulunan kamera uçuş boyunca yeri çekmelidir. En az 640x480 piksel çözünürlüğe ve saniyede 30 kare çekim gücüne (30 fps) sahip olmalıdır.",
  },
  {
    index: 17,
    rule: "Lityum - Polimer pillerin kullanımı kesinlikle yasaktır.",
  },
];

export const telemetri = [
  {
    isim: "Takım Numarası",
    telemetri:
      "Yarışma komitesi tarafından her bir takıma ayrı ayrı verilen 4 haneli bir tam sayıdır.",
  },
  {
    isim: "Paket Numarası",
    telemetri:
      "Görev Yükü’nden yer istasyonuna aktarılan telemetrilerin paket sayısını verir. Haberleşme frekansına göre birer birer ardışık bir şekilde artacaktır. İlk paket numarası 1’dir.",
  },
  {
    isim: "Gönderme Zamanı",
    telemetri:
      "Telemetri paketinin gönderildiği zamanı ve tarihi içerir. Gün/Ay/Yıl – Saat:Dakika:Saniye formatında olmalıdır.",
  },
  {
    isim: "Uydu Statüsü",
    telemetri:
      "Model Uydu’nun görev süresince içinde bulunduğu durumu gösteren anlamlı bilgilerdir. (Bekleme, Yükselme, İniş, Kurtarma vb.)",
  },
  {
    isim: "Yükseklik",
    telemetri:
      "Görev Yükü’nün anlık yüksekliğidir. Uçuşa başlayacağı konumu referans sıfır noktası kabul edilecektir. Biriminin metre (m) cinsinden olması gerekir. Veri hassasiyeti en az 0.01 m olmalıdır.",
  },
  {
    isim: "Basınç",
    telemetri:
      "Görev Yükü’nün ölçtüğü anlık atmosferik basınç değeridir. Biriminin Paskal (Pa) olması gerekmektedir. Veri hassasiyeti en az 1 Pa olmalıdır.",
  },
  {
    isim: "Sıcaklık",
    telemetri:
      "Görev Yükü’nün ölçtüğü anlık hava sıcaklığı verisidir. Biriminin derece Selsiyus (°C) olması gerekmektedir. Veri hassasiyeti en az 0.1 °C olmalıdır.",
  },
  {
    isim: "Pil Gerilimi",
    telemetri:
      "Görev Yükü’nde bulunan tüm elektronik parçaları beslemek için kullanılan pilin gerilim değeridir. Biriminin Voltaj (V) olması gerekir. Veri hassasiyeti en az 0.1 V olmalıdır.",
  },
  {
    isim: "Yunuslama",
    telemetri:
      "Görev Yükü’nün yunuslama (pitch) şeklindeki eğim açısıdır. Biriminin Derece (°) olması gerekmektedir. Veri hassasiyeti en az 0.1° olmalıdır.",
  },
  {
    isim: "Yalpalanma",
    telemetri:
      "Görev Yükü’nün yalpalanma (roll) şeklindeki eğim açısıdır. Biriminin Derece (°) olması gerekmektedir. Veri hassasiyeti en az 0.1° olmalıdır.",
  },
  {
    isim: "Yuvarlanma",
    telemetri:
      "Görev Yükü’nün yuvarlanma (yaw) şeklindeki eğim açısıdır. Biriminin Derece (°) olması gerekir. Veri hassasiyeti en az 0.1° olmalıdır.",
  },
  {
    isim: "GPS Boylam",
    telemetri:
      "Görev Yükü’nün boylamsal konumudur. Biriminin Derece (°) olması gerekmektedir. Veri hassasiyeti en az 0.01° olmalıdır.",
  },
  {
    isim: "GPS Enlem",
    telemetri:
      "Görev Yükü’nün enlemsel konumudur. Biriminin Derece (°) olması gerekir. Veri hassasiyeti en az 0.01° olmalıdır.",
  },
  {
    isim: "GPS Yükseklik",
    telemetri:
      "Görev Yükü’nün deniz seviyesinden kaç metrede (m) olduğunu gösteren veridir. Biriminin Metre (m) olması gerekmektedir. Veri hassasiyeti en az 0.1 m olmalıdır.",
  },
];
