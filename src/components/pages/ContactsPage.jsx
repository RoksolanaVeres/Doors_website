import { Helmet } from "react-helmet-async";
import Map from "../Map";
import emailImg from "../../assets/email.png";
import locationImg from "../../assets/location.png";
import phoneImg from "../../assets/phone.png";
import scheduleImg from "../../assets/schedule.png";

export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>Вікна & Двері | Контакти</title>
      </Helmet>
      <h2 className="mb-14 text-center text-2xl font-bold">
        Наші двері завжди* відчинені для Вас
      </h2>
      <div id="text-map__container" className="grid gap-20 md:grid-cols-2">
        <div id="text__container" className="grid gap-10">
          <div id="locationImg-text__container" className="flex gap-4">
            <div className="grid size-[80px] items-center justify-center rounded-full bg-background_secondary">
              <img src={locationImg} className="size-[40px]" alt="" />
            </div>
            <div id="locationText__container" className="">
              <h2 className="text-lg font-bold uppercase">Де знайти?</h2>
              <p>м.Івано-Франківськ, вулиця Тичини 19А</p>
              <p>Орієнтир: між ТЦ "Бельведер" та "Майстер"</p>
            </div>
          </div>

          <div
            id="phoneImg-text__container"
            className="flex justify-center gap-4"
          >
            <div className="grid size-[80px] items-center justify-center rounded-full bg-background_secondary">
              <img src={phoneImg} className="size-[40px]" alt="" />
            </div>
            <div id="all-phones__container" className="grid gap-2">
              <h2 className="text-lg font-bold uppercase">Куди дзвонити?</h2>

              <div id="doorsInfo-phones__container" className="">
                <h3>З питань вікон та дверей:</h3>
                <div className="flex gap-2">
                  <a
                    href="tel:+380992236426"
                    className="flex items-center gap-2"
                  >
                    +380992236426
                  </a>
                  <p>(Оксана)</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="tel:+380682349404"
                    className="flex items-center gap-2"
                  >
                    +380682349404
                  </a>
                  <p>(Тарас)</p>
                </div>
              </div>

              <div id="glassInfo-phones__container" className="">
                <h3>Якщо потрібно врізати скло:</h3>
                <div className="flex gap-2">
                  <a
                    href="tel:+380999568789"
                    className="flex items-center gap-2"
                  >
                    +380999568789
                  </a>
                  <p>(Богдан)</p>
                </div>
              </div>

              <div id="glassInfo-phones__container" className="">
                <h3>Якщо зламалась техніка:</h3>
                <div className="flex gap-2">
                  <a
                    href="tel:+380959246208"
                    className="flex items-center gap-2"
                  >
                    +380959246208
                  </a>
                  <p>(Микола)</p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="email-schedule__container"
            className="flex flex-wrap justify-between gap-6"
          >
            <div id="emailImg-text__container" className="flex gap-4">
              <div className="grid size-[80px] items-center justify-center rounded-full bg-background_secondary">
                <img src={emailImg} className="size-[40px]" alt="" />
              </div>
              <div id="emailText__container" className="">
                <h2 className="text-lg font-bold uppercase">Куди писати?</h2>
                <a
                  href="mailto:taras-oksana@ukr.net"
                  className="flex items-center gap-2"
                >
                  taras-oksana@ukr.net
                </a>
              </div>
            </div>

            <div id="scheduleImg-text__container" className="flex gap-4">
              <div className="grid size-[80px] items-center justify-center rounded-full bg-background_secondary">
                <img src={scheduleImg} className="size-[40px]" alt="" />
              </div>
              <div id="emailText__container" className="">
                <h2 className="text-lg font-bold uppercase">
                  *Коли це "завжди"?
                </h2>
                <h3 className="text-base font-bold">Або наш графік роботи</h3>
                <dl>
                  <dt className="mt-1">Понеділок - Пятниця:</dt>
                  <dd>9:00 - 18:00</dd>
                  <dt className="mt-1">Субота:</dt>
                  <dd>9:00 - 16:00</dd>
                  <dt className="mt-1">Неділя:</dt>
                  <dd className="text-destructive">Вихідний</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <Map />
      </div>
    </>
  );
}
