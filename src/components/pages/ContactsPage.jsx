import { Helmet } from "react-helmet-async";
import Map from "../Map";
import emailImg from "../../assets/icons/email.png";
import locationImg from "../../assets/icons/location.png";
import phoneImg from "../../assets/icons/phone.png";
import scheduleImg from "../../assets/icons/schedule.png";

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
            <div id="locationText__container" className="font-roboto">
              <h3 className="font-inter text-lg font-bold uppercase">
                Де знайти?
              </h3>
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
            <div id="all-phones__container" className="grid gap-2 font-roboto">
              <h3 className="text-lg font-bold uppercase font-inter">Куди дзвонити?</h3>

              <div id="doorsInfo-phones__container" className="">
                <h4 className="font-inter">З питань вікон та дверей:</h4>
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
                <h4 className="font-inter">Якщо потрібно врізати скло:</h4>
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
                <h4 className="font-inter">Якщо зламалась техніка:</h4>
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
              <div id="emailText__container" className="font-roboto">
                <h3 className="text-lg font-bold uppercase font-inter">Куди писати?</h3>
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
              <div id="emailText__container" className="font-roboto">
                <h3 className="font-inter text-lg font-bold uppercase">
                  *Коли це "завжди"?
                </h3>
                <h4 className="font-inter text-base font-bold">Або наш графік роботи</h4>
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
