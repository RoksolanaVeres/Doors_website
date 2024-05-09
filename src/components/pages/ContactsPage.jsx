import { Helmet } from "react-helmet-async";
import Map from "../Map";

export default function ContactsPage() {
  return (
    <>
      <Helmet>
        <title>The Doors | Contacts</title>
      </Helmet>
      <h1>Магазин Вікон та Дверей 100Гц</h1>
      <div className="grid gap-10 md:grid-cols-2">
        <Map />

        <div className="grid gap-4">
          <div className="">
            <h1>Де знайти?</h1>
            <p>м.Івано-Франківськ, вулиця Тичини 19А</p>
            <p>Орієнтир: між ТЦ "Бельведер" та "Майстер"</p>
          </div>

          <div className="">
            <h1>Куди дзвонити?</h1>
            <p>З питань вікон та дверей:</p>
            <div className="flex gap-2">
              <a href="tel:+380992236426" className="flex items-center gap-2">
                +380992236426
              </a>
              <p>(Оксана)</p>
            </div>

            <div className="flex gap-2">
              <a href="tel:+380682349404" className="flex items-center gap-2">
                +380682349404
              </a>
              <p>(Тарас)</p>
            </div>

            <p>Якщо треба врізати скло:</p>
            <div className="flex gap-2">
              <a href="tel:+380999568789" className="flex items-center gap-2">
                +380999568789
              </a>
              <p>(Богдан)</p>
            </div>

            <p>Якщо зламалась техніка:</p>
            <div className="flex gap-2">
              <a href="tel:+380999568789" className="flex items-center gap-2">
                +380999568789
              </a>
              <p>(Микола)</p>
            </div>
          </div>

          <div className="">
            <h1>Куди писати?</h1>
            <a
              href="mailto:taras-oksana@ukr.net"
              className="flex items-center gap-2"
            >
              taras-oksana@ukr.net
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
