import Image from "next/image";

import ESP32_CAM from "public/icerik/bilesenler/esp32-cam.png";
import BMP180 from "public/icerik/bilesenler/bmp180.png";
import MPU6050 from "public/icerik/bilesenler/mpu6050.png";
import HMC5883L from "public/icerik/bilesenler/hmc5883l.png";
import SD_CARD_ADAPTOR from "public/icerik/bilesenler/sd-card-adaptor.png";
import BUZZER from "public/icerik/bilesenler/buzzer.png";
import NEO6M from "public/icerik/bilesenler/neo6m.png";
import BATTERY from "public/icerik/bilesenler/9v-battery.png";

export default function page() {
  return (
    <div>
      <h1 className="m-10 mb-0 border-b-2 pb-3 text-3xl">
        ESP32 Bağlantı Diagramı
      </h1>
      <div className="grid grid-cols-1 gap-2 p-10 text-center lg:grid-cols-2 xl:grid-cols-3">
        <div className="flex items-center rounded border p-2">
          <Image
            src={BMP180}
            className="mx-auto max-h-32 w-1/3 min-w-[1/3] object-contain"
            alt={"bmp180"}
            placeholder="blur"
          />
          <div className="grid w-full grid-cols-2">
            <p className="border-b border-r font-semibold">BMP180</p>
            <p className="border-b font-semibold">ESP32</p>
            <p className="border-r">GND</p>
            <p>GND</p>
            <p className="border-r">3.3V</p>
            <p>3.3V</p>
            <p className="border-r">SCL</p>
            <p>D22</p>
            <p className="border-r">SDA</p>
            <p>D21</p>
          </div>
        </div>
        <div className="flex items-center rounded border p-2">
          <Image
            src={MPU6050}
            className="mx-auto max-h-32 w-1/3 min-w-[1/3] object-contain"
            alt={"mpu6050"}
            placeholder="blur"
          />
          <div className="grid w-full grid-cols-2">
            <p className="border-b border-r font-semibold">MPU6050</p>
            <p className="border-b font-semibold">ESP32</p>
            <p className="border-r">GND</p>
            <p>GND</p>
            <p className="border-r">3.3V</p>
            <p>3.3V</p>
            <p className="border-r">SCL</p>
            <p>D22</p>
            <p className="border-r">SDA</p>
            <p>D21</p>
          </div>
        </div>
        <div className="flex items-center rounded border p-2">
          <Image
            src={HMC5883L}
            className="mx-auto max-h-32 w-1/3 min-w-[1/3] object-contain"
            alt={"hmc5883l"}
            placeholder="blur"
          />
          <div className="grid w-full grid-cols-2">
            <p className="border-b border-r font-semibold">MPU6050</p>
            <p className="border-b font-semibold">ESP32</p>
            <p className="border-r">GND</p>
            <p>GND</p>
            <p className="border-r">3.3V</p>
            <p>3.3V</p>
            <p className="border-r">SCL</p>
            <p>D22</p>
            <p className="border-r">SDA</p>
            <p>D21</p>
          </div>
        </div>
        <div className="flex items-center rounded border p-2">
          <Image
            src={SD_CARD_ADAPTOR}
            className="mx-auto max-h-32 w-1/3 min-w-[1/3] object-contain"
            alt={"mpu6050"}
            placeholder="blur"
          />
          <div className="grid w-full grid-cols-2">
            <p className="border-b border-r font-semibold">SD Card</p>
            <p className="border-b font-semibold">ESP32</p>
            <p className="border-r">GND</p>
            <p>GND</p>
            <p className="border-r">3.3V</p>
            <p>3.3V</p>
            <p className="border-r">CS</p>
            <p>D5</p>
            <p className="border-r">MOSI</p>
            <p>D23</p>
            <p className="border-r">SCK</p>
            <p>D18</p>
            <p className="border-r">MISO</p>
            <p>D19</p>
          </div>
        </div>
        <div className="flex items-center rounded border p-2">
          <Image
            src={NEO6M}
            className="mx-auto max-h-32 w-1/3 min-w-[1/3] object-contain"
            alt={"neo6m"}
            placeholder="blur"
          />
          <div className="grid w-full grid-cols-2">
            <p className="border-b border-r font-semibold">ESP32</p>
            <p className="border-b font-semibold">GPS</p>
            <p className="border-r">3.3V</p>
            <p>VCC</p>
            <p className="border-r">GND</p>
            <p>GND</p>
            <p className="border-r">RX2</p>
            <p>TX</p>
            <p className="border-r">TX2</p>
            <p>RX</p>
          </div>
        </div>
        <div className="flex items-center rounded border p-2">
          <div className="mx-auto flex w-1/3 min-w-[1/3] flex-col">
            <Image
              src={BATTERY}
              className="max-h-32 object-contain"
              alt={"battery"}
              placeholder="blur"
            />
            <Image
              src={ESP32_CAM}
              className="max-h-32 object-contain"
              alt={"esp32-cam"}
              placeholder="blur"
            />
          </div>
          <div className="flex h-full w-full flex-col justify-around">
            <div className="grid w-full grid-cols-4">
              <p className="col-span-2 border-b border-r font-semibold">
                BATTERY
              </p>
              <p className="col-span-2 border-b font-semibold">ESP32</p>
              <p className="col-span-2 border-r">9V(RED)</p>
              <p className="col-span-2">VIN</p>
              <p>GND(BLACK)</p>
              <p className="col-span-2">SWITCH</p>
              <p>GND</p>
            </div>
            <div className="grid w-full grid-cols-4">
              <p className="col-span-2 border-b border-r font-semibold">
                BATTERY
              </p>
              <p className="col-span-2 border-b font-semibold">ESP32-CAM</p>
              <p className="col-span-2 border-r">9V(RED)</p>
              <p className="col-span-2">VIN</p>
              <p>GND(BLACK)</p>
              <p className="col-span-2">SWITCH</p>
              <p>GND</p>
            </div>
          </div>
        </div>
        <div className="flex items-center rounded border p-2">
          <Image
            src={BUZZER}
            className="mx-auto max-h-32 w-1/3 min-w-[1/3] object-contain"
            alt={"buzzer"}
            placeholder="blur"
          />
          <div className="grid w-full grid-cols-2">
            <p className="border-b border-r font-semibold">BUZZER</p>
            <p className="border-b font-semibold">ESP32</p>
            <p className="border-r">GND</p>
            <p>GND</p>
            <p className="border-r">3.3V</p>
            <p>3.3V</p>
            <p className="border-r">I/O</p>
            <p>D4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
