import { l10n } from "@/textTranslation";
import { Suspense, lazy, useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaTelegramPlane, FaViber } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { GrSchedule } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { LanguageContext } from "../store/LanguageContext";

const Map = lazy(() => import("../Map"));

export default function ContactsPage() {
  const { language } = useContext(LanguageContext);
  const contactsText = l10n[language].contactsPage;
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {" "}
          {l10n[language].title.main} | {l10n[language].title.contactsPage}
        </title>
      </Helmet>
      <div id="ourContacts" className="pt-20">
        <div
          id="contactsInfo"
          className="mx-auto grid max-w-[1600px] gap-10 px-container-padding md:grid-cols-2 md:py-20 lg:grid-cols-3"
        >
          <div
            id="email-container"
            className="flex justify-center rounded-md bg-background_secondary p-10 shadow-lg"
          >
            <div className="grid w-full content-start justify-center gap-2 text-center">
              <IoIosMail className="mx-auto text-2xl" />
              <h2 className="font-semibold uppercase tracking-wider">
                {contactsText.emailsCard.header}
              </h2>
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
                {contactsText.phonesCard.header}
              </h2>
              <div id="doors-phones">
                <h3 className="text-secondary-foreground">
                  {contactsText.phonesCard.windowsDoorsPhones.header}
                </h3>
                <ul>
                  <li className="flex justify-center gap-2 text-sm">
                    <a
                      href="tel:+380992236426"
                      className="flex items-center gap-2"
                    >
                      +380992236426
                    </a>
                    <p>
                      (
                      {contactsText.phonesCard.windowsDoorsPhones.phoneNames[0]}
                      )
                    </p>
                  </li>
                  <li className="flex justify-center gap-2 text-sm">
                    <a
                      href="tel:+380682349404"
                      className="flex items-center gap-2"
                    >
                      +380682349404
                    </a>
                    <p>
                      {" "}
                      (
                      {contactsText.phonesCard.windowsDoorsPhones.phoneNames[1]}
                      )
                    </p>
                  </li>
                </ul>
              </div>

              <div id="glass-phone">
                <h3 className="text-secondary-foreground">
                  {contactsText.phonesCard.glassCuttingPhones.header}
                </h3>
                <div className="flex justify-center gap-2 text-sm">
                  <a
                    href="tel:+380999568789"
                    className="flex items-center gap-2"
                  >
                    +380999568789
                  </a>
                  <p>
                    ({contactsText.phonesCard.glassCuttingPhones.phoneNames[0]})
                  </p>
                </div>
              </div>

              <div id="electronics-phone">
                <h3 className="text-secondary-foreground">
                  {contactsText.phonesCard.electronicsPhones.header}
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
                  <p>
                    ({contactsText.phonesCard.electronicsPhones.phoneNames[0]})
                  </p>
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
                {contactsText.addressCard.header}
              </h2>
              <p className="text-secondary-foreground">
                {contactsText.addressCard.address}
              </p>
              <p className="text-sm">{contactsText.addressCard.landmark}</p>
            </div>
          </div>

          <div
            id="workingHours-container"
            className="flex justify-center rounded-md bg-background_secondary p-10 shadow-lg"
          >
            <div className="grid w-full content-start justify-center gap-2 text-center">
              <GrSchedule className="mx-auto text-2xl text-secondary-foreground" />
              <h2 className="font-semibold uppercase tracking-wider">
                {contactsText.scheduleCard.header}
              </h2>
              <dl>
                <dt className="mt-1 text-secondary-foreground">
                  {contactsText.scheduleCard.workDays}:
                </dt>
                <dd>9:00 - 17:00</dd>
                <dt className="mt-1 text-secondary-foreground">
                  {" "}
                  {contactsText.scheduleCard.saturday}:
                </dt>
                <dd>9:00 - 16:00</dd>
                <dt className="mt-3">{contactsText.scheduleCard.sunday}:</dt>
                <dd className="text-destructive">
                  {contactsText.scheduleCard.closed}
                </dd>
              </dl>
            </div>
          </div>

          <div className="md:col-span-2">
            <Suspense fallback={<div>Loading the map...</div>}>
              <Map />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
