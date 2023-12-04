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
    href: "https://github.com/exeokan/cansat_pure23/",
    newTab: true,
  },
];

export const talimatlar = [
  {
    title: "Zaman Çizelgesi",
    content: "CanSat yapılışını öğrenirken günlerinin nasıl geçeceğini öğren.",
    href: "/zaman-cizelgesi",
  },
  {
    title: "CanSat Kursunun İçeriği",
    content:
      "CanSat yapılışında yapılması gereken aktiviteler adım adım bulunmaktadır.",
    href: "/icerik",
  },
  {
    title: "Güvenlik Talimatları",
    content: "CanSat yapımına başlamadan önce güvenlik kurallarına göz at.",
    href: "/guvenlik",
  },
];

export const tavsiyeler = [
  {
    title: "Test Raporları",
    content:
      "Önceki yıllarda yaptığımız testlere ve deneylere dair ayrıntılı raporlar, projemizin belgeleri arasında bulunmaktadır.",
    href: "/test-raporlari",
  },
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
  { isim: "TEAM_ID", telemetri: "Takımın benzersiz tanımlayıcısı." },
  {
    isim: "MISSION_TIME",
    telemetri: "Görevin başlangıcından itibaren geçen süre.",
  },
  { isim: "PACKET_COUNT", telemetri: "Gönderilen veri paketlerinin sayısı." },
  { isim: "MODE", telemetri: "Mevcut işletim modu (örneğin, UÇUŞ, BEKLEME)." },
  {
    isim: "STATE",
    telemetri: "Sistemin mevcut durumu (örneğin, BEKLEME, AKTİF).",
  },
  { isim: "ALTITUDE", telemetri: "Deniz seviyesine göre mevcut yükseklik." },
  {
    isim: "PC_DEPLOYED",
    telemetri:
      "Paraşütün açılıp açılmadığını gösteren bir bayrak (1 açıldı, 0 açılmadı).",
  },
  { isim: "TEMPERATURE", telemetri: "Mevcut sıcaklık ölçümü." },
  { isim: "VOLTAGE", telemetri: "Sistemin mevcut voltaj seviyesi." },
  { isim: "PRESSURE", telemetri: "Mevcut atmosferik basınç ölçümü." },
  { isim: "GPS_TIME", telemetri: "GPS modülünden gelen zaman verisi." },
  { isim: "GPS_ALTITUDE", telemetri: "GPS modülünden gelen irtifa verisi." },
  { isim: "GPS_LATITUDE", telemetri: "GPS modülünden gelen enlem verisi." },
  { isim: "GPS_LONGITUDE", telemetri: "GPS modülünden gelen boylam verisi." },
  {
    isim: "GPS_SATS",
    telemetri: "GPS modülü tarafından algılanan uydu sayısı.",
  },
  { isim: "ACC_X", telemetri: "X ekseni boyunca ivme." },
  { isim: "ACC_Y", telemetri: "Y ekseni boyunca ivme." },
  { isim: "ACC_Z", telemetri: "Z ekseni boyunca ivme." },
  { isim: "MAG_X", telemetri: "X ekseni boyunca manyetik alan şiddeti." },
  { isim: "MAG_Y", telemetri: "Y ekseni boyunca manyetik alan şiddeti." },
  { isim: "MAG_Z", telemetri: "Z ekseni boyunca manyetik alan şiddeti." },
];
