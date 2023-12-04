import ESP32 from "public/icerik/bilesenler/esp32.png";
import ESP32_CAM from "public/icerik/bilesenler/esp32-cam.png";
import BMP180 from "public/icerik/bilesenler/bmp180.png";
import MPU6050 from "public/icerik/bilesenler/mpu6050.png";
import HMC5883L from "public/icerik/bilesenler/hmc5883l.png";
import CP2102 from "public/icerik/bilesenler/cp2102.png";
import SD_CARD_ADAPTOR from "public/icerik/bilesenler/sd-card-adaptor.png";
import BUZZER from "public/icerik/bilesenler/buzzer.png";
import NEO6M from "public/icerik/bilesenler/neo6m.png";
import BATTERY from "public/icerik/bilesenler/9v-battery.png";
import BUTTON from "public/icerik/bilesenler/push-button.png";
import MONTAJ_KABLOSU from "public/icerik/bilesenler/montaj-kablosu.png";
import LEHIM_KABLOSU from "public/icerik/bilesenler/lehim-kablosu.png";
import HAVYA from "public/icerik/bilesenler/havya.png";
import BREADBOARD from "public/icerik/bilesenler/breadboard.png";
import PERTINAX from "public/icerik/bilesenler/pertinax.png";
import CONNECTOR from "public/icerik/bilesenler/connector.png";
import JUMPER from "public/icerik/bilesenler/jumper.png";

export const bilesenler = [
  {
    isim: "ESP32-WROOM-32",
    bilgi: [
      "Xtensa®32-bit LX6 mikroişlemci",
      "240 MHz CPU Frekansı",
      "520 kB SRAM",
      "4 MB Flash",
      "Çalışma sıcaklığı -40 °C - 125 °C",
      "3.3V Mantık",
      "ADC (16), SPI (2), I2C (1), UART (1), PWM (32), SDIO (50 Mhz)",
      "WiFi Verici 802.11BGN HT40",
      "Minimum hassasiyet -98 dBm",
      "Maksimum transfer hızı 150Mbps",
      "WiFi Menzili 500m'ye kadar",
      "Gömülü anten bulunuyor",
      "Frekans Aralığı 2.4GHz - 2.5GHz",
    ],
    foto: ESP32,
    link: "esp32",
  },
  {
    isim: "ESP32 CAM Module",
    bilgi: [
      "Kablosuz Modül - ESP32-S WiFi 802.11 b/g/n",
      "32Mbit SPI flash, 4MBit PSRAM",
      "Harici Depolama - micro SD kart yuvası, maksimum 4GB",
      "OV2640 sensör",
      "Görüntü Formatı - JPEG (OV2640 sadece), BMP, gri tonlama",
      "LED flaş ışığı",
      "Flash LED kapalı - 180mA @ 5V",
      "Flash LED en yüksek parlaklıkta - 310mA @ 5V",
      "Derin uyku - 6mA @ 5V min.",
      "Modem uyku - 20mA @ 5V min.",
      "Hafif uyku - 6.7mA @ 5V min.",
      "Boyutlar - 40.5 x 27 x 4.5 mm",
      "Ağırlık - 10 gram",
      "Sıcaklık Aralığı - Çalışma: -20 ℃ ~ 85 ℃; depolama: -40 ℃ ~ 90 ℃ @ < 90%RH",
    ],
    foto: ESP32_CAM,
    link: "esp32-cam",
  },
  {
    isim: "BMP 180 Pressure Sensor",
    bilgi: [
      "Boyutlar: 21mm x 18mm",
      "1.8V - 3.6V Güç Besleme Hattı",
      "Düşük Güç Tüketimi - 1Hz'de 0.5uA",
      "I2C Arayüzü",
      "Kalibre Edilmiş",
      "Basınç Ölçeği: 300hPa - 1100hPa (+ 9000m - -500m)",
    ],
    foto: BMP180,
    link: "bmp180",
  },
  {
    isim: "MPU 6050 Accelerometer & Gyro",
    bilgi: [
      "PU-6050 (3 eksenli Jiroskop + 3 eksenli ivmeölçer)",
      "Güç Girişi: 3.3V - 5V",
      "I2C Protokolü",
      "Açısal Hız için Ölçek: 250 500 1000 2000 °/s",
      "İvmeölçer için Ölçek: 2 4 8 16g",
    ],
    foto: MPU6050,
    link: "mpu6050",
  },
  {
    isim: "HMC5883L Magnetometer",
    bilgi: [
      "Giriş Gerilimi: 3.3V - 5V",
      "I2C Protokolü",
      "Ölçek: ±1.3-8 Gauss",
      "Pano Boyutları: 14x13mm",
    ],
    foto: HMC5883L,
    link: "hmc5883l",
  },
  {
    isim: "CP2102 Uart-USB Converter",
    bilgi: [
      "ESP32 Kamera Modülüne kod yüklemek için kullanılır",
      "USB TTL Dönüştürücü",
      "Lojik 3.3V ve 5V için kullanılır",
    ],
    foto: CP2102,
    link: "cp2102",
  },
  {
    isim: "SD Card Adapter",
    bilgi: [
      "3.3V ile çalışır",
      "Toplanan sensör verilerini depolamak için kullanılır",
    ],
    foto: SD_CARD_ADAPTOR,
    link: "sd-card-adaptor",
  },
  {
    isim: "Buzzer Board",
    bilgi: [
      "Çalışma Gerilimi: 3.3V - 5V",
      "Güç sağlandığında ses çıkarır",
      "İniş sonrasında CanSat'i bulmak için kullanılır",
    ],
    foto: BUZZER,
    link: "buzzer",
  },
  {
    isim: "NEO-6M GPS Module",
    bilgi: ["Gerilim: 3.3V", "Boyut: 36mm * 24mm", "Arayüz: UART"],
    foto: NEO6M,
    link: "neo6m",
  },
  {
    isim: "9V Pil",
    bilgi: ["Gerilim: 9V", "Uçuş sırasında CanSat'e güç sağlar"],
    foto: BATTERY,
    link: "9v-battery",
  },
  {
    isim: "Push Button",
    bilgi: ["Pilden gelen gücü kesmek için kullanılır"],
    foto: BUTTON,
    link: "push-button",
  },
  {
    isim: "Montaj Kablosu",
    bilgi: [
      "Pertinax için kablo bağlantısı",
      "Kablo bağlantısı için jumper kablo kullanılmayacak",
    ],
    foto: MONTAJ_KABLOSU,
    link: "montaj-kablosu",
  },
  {
    isim: "Lehim Kablosu",
    bilgi: ["Pertinaxtaki bileşenleri bağlamak için lehimleme teli"],
    foto: LEHIM_KABLOSU,
    link: "lehim-kablosu",
  },
  {
    isim: "Havya",
    bilgi: ["Lehimleme için için lehim kablosu ile kullanılır"],
    foto: HAVYA,
    link: "havya",
  },
  {
    isim: "Breadboard",
    bilgi: [],
    foto: BREADBOARD,
    link: "breadboard",
  },
  {
    isim: "Pertinax",
    bilgi: [],
    foto: PERTINAX,
    link: "pertinax",
  },
  {
    isim: "Connector",
    bilgi: [],
    foto: CONNECTOR,
    link: "connector",
  },
  {
    isim: "Jumper Kablo",
    bilgi: [
      "Jumper kabloları sensörleri ve ESP32'yi breadboard üzerinde bağlamak için kullanılır",
    ],
    foto: JUMPER,
    link: "jumper",
  },
];
