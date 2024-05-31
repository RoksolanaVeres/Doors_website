import counsultingImg from "@/assets/doors-img/unsplash-images/consulting.jpg"
import deliveryImg from "@/assets/doors-img/unsplash-images/delivery.jpg"
import doorInstallationImg from "@/assets/doors-img/unsplash-images/doors-installation.jpg"
import glassCuttingImg from "@/assets/doors-img/unsplash-images/glass-cutting.jpg"
import electricalAppliancesImg from "@/assets/doors-img/unsplash-images/electrical-appliances.jpg"

import { Helmet } from "react-helmet-async";
import { Button } from "../ui/button";

import { useEffect } from "react"

const OUR_SERVICES = [
  {
    id: 1,
    header: "Професійна консультація",
    subheader: "з питань вікон та дверей",
    img: counsultingImg,
    details: `Якщо серед різноманіття вибору, яке ми пропонуємо, Вам важко обрати саме ті двері чи вікна, наші досвідчені консультанти 
    завжди готові прийти на допомогу. Ми врахуємо всі Ваші побажання і порадимо найкращий варіант.`,
    buttonCaption: "Отримати консультацію",
  },
  {
    id: 2,
    header: "Доставлення замовлення",
    subheader: "в межах Івано-Франківська та поза ним",
    img: deliveryImg,
    details: `Купуючи у нас товари, Вам не варто хвилюватися про їх доставлення, адже ми також надаємо послуги 
    з вантажного перевезення.`,
    buttonCaption: "Дізнатись деталі",
  },
  {
    id: 3,
    header: "Монтаж дверей та вікон",
    subheader: "а також демонтаж старих дверей та вікон",
    img: doorInstallationImg,
    details: `Наші спеціалісти забезпечать встановлення вікон та дверей з дотриманням найвищих стандартів якості. 
    Також можливий виклик майстра додому для зняття замірів дверного отвору.`,
    buttonCaption: "Дізнатись деталі",
  },
  {
    id: 4,
    header: "Порізка скла",
    subheader: "та дзеркал будь-якої складності",
    img: glassCuttingImg,
    details: `Для Вашої зручності, одразу поряд з магазином знаходиться порізка скла, куди Ви можете звернутися
    у випадку, якщо Вам потрібно засклити двері чи вікна, або просто врізати скло.`,
    buttonCaption: "Дізнатись деталі",
  },
  {
    id: 5,
    header: "Ремонт побутової техніки",
    subheader: "та діагностика поломки",
    img: electricalAppliancesImg,
    details: `Неочікувано, але факт: в магазині працює телерадіомайстерня, де Ви можете зремонтувати техніку, 
    яка вийшла з ладу.`,
    buttonCaption: "Зателефонувати",
  },
];

export default function ServicesPage() {
    useEffect(() => {
      window.scroll(0, 0);
    }, []);

  return (
    <>
      <Helmet>
        <title>Вікна & Двері | Послуги</title>
      </Helmet>
      <div
        id="ourServices"
        className="bg-background_secondary py-20 md:py-36"
      >
        <div
          id="services-content-container"
          className="mx-auto max-w-[1600px] px-container-padding "
        >
          <ol className="grid gap-20">
            {OUR_SERVICES.map((service) => {
              return (
                <li
                  id="service-container"
                  className="grid items-center md:grid-cols-2"
                  key={service.id}
                >
                  <div
                    id="service-text-container"
                    className={`h-fit rounded-md bg-background px-10 py-10 shadow-lg md:z-10 md:h-5/6 ${service.id % 2 === 1 ? "order-2 md:-ml-10" : "md:-mr-10"}`}
                  >
                    <h3 className="pb-2 font-roboto text-2xl font-semibold">
                      {service.header}
                    </h3>
                    <p className="pb-4 text-muted-foreground">
                      {service.subheader}
                    </p>
                    <p className="pb-6">{service.details}</p>
                    <div id="advantage-button-container" className="flex gap-4">
                      <Button size="sm" className="bg-brand-main">
                        {service.buttonCaption}
                      </Button>
                    </div>
                  </div>
                  <div
                    id="advantages-image-container"
                    className="grid min-h-[350px] items-end bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.img})` }}
                  ></div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}
