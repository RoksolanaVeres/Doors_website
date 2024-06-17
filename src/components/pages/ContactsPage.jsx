import { Suspense, lazy, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaTelegramPlane, FaViber } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { GrSchedule } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const Map = lazy(() => import("../Map"));

export default function ContactsPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Вікна & Двері | Контакти</title>
      </Helmet>
      <div id="ourContacts" className="pt-20">
        <div
          id="contactsInfo"
          className="mx-auto grid max-w-[1600px] gap-10 px-container-padding py-20 md:grid-cols-3"
        >
          <div
            id="email-container"
            className="flex justify-center rounded-md bg-background_secondary p-10 shadow-lg"
          >
            <div className="grid w-full content-start justify-center gap-2 text-center">
              <IoIosMail className="mx-auto text-2xl" />
              <h2 className="font-semibold uppercase tracking-wider">Пишіть</h2>
              <a
                href="mailto:taras-oksana@ukr.net"
                className="flex items-center gap-2 text-secondary-foreground"
              >
                taras-oksana@ukr.net
              </a>
              <div className="flex items-center gap-2">
                <FaViber className="text-xl text-secondary-foreground" />
                <a href="tel:+380999568789">+380992236426</a>
              </div>
              <div className="flex items-center gap-2">
                <FaTelegramPlane className="text-xl text-secondary-foreground" />
                <a href="tel:+380999568789">+380992236426</a>
              </div>
            </div>
          </div>

          <div
            id="phones-container"
            className="flex justify-center rounded-md bg-background_secondary p-10 shadow-lg"
          >
            <div className="grid w-full content-start justify-center gap-2 text-center">
              <FaPhone className="mx-auto text-xl text-secondary-foreground" />
              <h2 className="font-semibold uppercase tracking-wider">
                Дзвоніть
              </h2>
              <div id="doors-phones">
                <h3 className="text-secondary-foreground">
                  З питань вікон та дверей:
                </h3>
                <ul>
                  <li className="flex justify-center gap-2 text-sm">
                    <a
                      href="tel:+380992236426"
                      className="flex items-center gap-2"
                    >
                      +380992236426
                    </a>
                    <p>(Оксана)</p>
                  </li>
                  <li className="flex justify-center gap-2 text-sm">
                    <a
                      href="tel:+380682349404"
                      className="flex items-center gap-2"
                    >
                      +380682349404
                    </a>
                    <p>(Тарас)</p>
                  </li>
                </ul>
              </div>

              <div id="glass-phone">
                <h3 className="text-secondary-foreground">Порізка скла:</h3>
                <div className="flex justify-center gap-2 text-sm">
                  <a
                    href="tel:+380999568789"
                    className="flex items-center gap-2"
                  >
                    +380999568789
                  </a>
                  <p>(Богдан)</p>
                </div>
              </div>

              <div id="electronics-phone">
                <h3 className="text-secondary-foreground">
                  Телерадіомайстерня:
                </h3>
                <div
                  id="electronics-phone"
                  className="flex justify-center gap-2 text-sm"
                >
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
            id="location-container"
            className="flex justify-center rounded-md bg-background_secondary p-10 shadow-lg"
          >
            <div className="grid w-full content-start justify-center gap-2 text-center">
              <IoHome className="mx-auto text-2xl text-accent-foreground" />
              <h2 className="font-semibold uppercase tracking-wider">
                Заходьте
              </h2>
              <p className="text-secondary-foreground">
                м.Івано-Франківськ, вулиця Тичини 19А
              </p>
              <p className="text-sm">
                Орієнтир: між ТЦ "Бельведер" та "Майстер"
              </p>
            </div>
          </div>

          <div className="col-span-2">
            <Suspense fallback={<div>Loading the map...</div>}>
              <Map />
            </Suspense>
          </div>

          <div
            id="workingHours-container"
            className="flex justify-center rounded-md bg-background_secondary p-10 shadow-lg"
          >
            <div className="grid w-full content-start justify-center gap-2 text-center">
              <GrSchedule className="mx-auto text-2xl text-secondary-foreground" />
              <h2 className="font-semibold uppercase tracking-wider">
                Графік роботи
              </h2>
              <dl>
                <dt className="mt-1 text-secondary-foreground">
                  Понеділок - Пятниця:
                </dt>
                <dd>9:00 - 17:00</dd>
                <dt className="mt-1 text-secondary-foreground">Субота:</dt>
                <dd>9:00 - 16:00</dd>
                <dt className="mt-3">Неділя:</dt>
                <dd className="text-destructive">Вихідний</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
