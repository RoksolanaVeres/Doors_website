import { Helmet } from "react-helmet-async";
import Map from "../Map";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { GrSchedule } from "react-icons/gr";

import openDoorImg from "@/assets/doors-img/unsplash-images/reserve/open-door-4.jpg"

import { useEffect } from "react";

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
          id="contactsHeader"
          className="flex h-[500px] items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${openDoorImg})` }}
        >
          <h1 className="font-roboto text-3xl font-semibold">
            Наші двері завжди<span>*</span> відчинені для Вас
          </h1>
        </div>

        <div
          id="contactsInfo"
          className="mx-auto grid max-w-[1600px] gap-10 px-container-padding py-20 md:grid-cols-3"
        >
          <div
            id="email-container"
            className="flex justify-center rounded-md bg-background_secondary p-10"
          >
            <div className="grid w-full content-start justify-center gap-2 text-center">
              <IoIosMail className="mx-auto text-2xl" />
              <h2 className="font-semibold uppercase tracking-wider">Пишіть</h2>
              <a
                href="mailto:taras-oksana@ukr.net"
                className="flex items-center gap-2"
              >
                taras-oksana@ukr.net
              </a>
              <p>viber, telegram </p>
            </div>
          </div>

          <div
            id="phones-container"
            className="flex justify-center rounded-md bg-background_secondary p-10"
          >
            <div className="grid w-full content-start justify-center gap-2 text-center">
              <FaPhone className="mx-auto text-xl" />
              <h2 className="font-semibold uppercase tracking-wider">
                Дзвоніть
              </h2>
              <div id="doors-phones">
                <h3>З питань вікон та дверей:</h3>
                <ul>
                  <li className="flex gap-2">
                    <a
                      href="tel:+380992236426"
                      className="flex items-center gap-2"
                    >
                      +380992236426
                    </a>
                    <p>(Оксана)</p>
                  </li>
                  <li className="flex gap-2">
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
                <h3>Порізка скла:</h3>
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

              <div id="electronics-phone">
                <h3>Телерадіомайстерня:</h3>
                <div id="electronics-phone" className="flex gap-2">
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
            className="flex justify-center rounded-md bg-background_secondary p-10"
          >
            <div className="grid w-full content-start justify-center gap-2 text-center">
              <IoHome className="mx-auto text-2xl" />
              <h2 className="font-semibold uppercase tracking-wider">
                Заходьте
              </h2>
              <div className="">
                <p>м.Івано-Франківськ, вулиця Тичини 19А</p>
                <p>Орієнтир: між ТЦ "Бельведер" та "Майстер"</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <Map />
          </div>

          <div
            id="workingHours-container"
            className="flex justify-center rounded-md bg-background_secondary p-10"
          >
            <div className="grid w-full content-start justify-center gap-2 text-center">
              <GrSchedule className="mx-auto text-2xl" />
              <h2 className="font-semibold uppercase tracking-wider">
                Графік роботи
              </h2>
              <dl>
                <dt className="mt-1">Понеділок - Пятниця:</dt>
                <dd>9:00 - 17:00</dd>
                <dt className="mt-1">Субота:</dt>
                <dd>9:00 - 16:00</dd>
                <dt className="mt-1">Неділя:</dt>
                <dd className="text-destructive">Вихідний</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
