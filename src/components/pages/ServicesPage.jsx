// data & images
import counsultingImg from "@/assets/doors-img/unsplash-images/consulting.jpg";
import deliveryImg from "@/assets/doors-img/unsplash-images/delivery.jpg";
import doorInstallationImg from "@/assets/doors-img/unsplash-images/doors-installation.jpg";
import glassCuttingImg from "@/assets/doors-img/unsplash-images/glass-cutting.jpg";
import electricalAppliancesImg from "@/assets/doors-img/unsplash-images/electrical-appliances.jpg";

// components
import { ArrowBigUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

// hooks
import { useEffect } from "react";

// variables
const OUR_SERVICES = [
  {
    id: 1,
    header: "Професійна консультація",
    subheader: "з питань вікон та дверей",
    img: counsultingImg,
    details: `Якщо серед різноманіття вибору, яке ми пропонуємо, Вам важко обрати саме ті двері чи вікна, наші досвідчені консультанти 
    завжди готові прийти на допомогу. Ми врахуємо всі Ваші побажання і порадимо найкращий варіант.`,
    backCard: {
      header: "Отримати консультацію можна за телефоном:",
      phones: ["(068) 234-94-04 - Тарас", "(099) 223-64-26 - Оксана"],
    },
  },
  {
    id: 2,
    header: "Привіз замовлення",
    subheader: "в межах Івано-Франківська та поза ним",
    img: deliveryImg,
    details: `Купуючи у нас товари, Вам не варто хвилюватися про їх доставлення, адже ми також надаємо послуги 
    з вантажного перевезення.`,
    backCard: {
      header: "З питань доставки звертайтесь за телефоном:",
      phones: ["(068) 234-94-04 - Тарас", "(099) 223-64-26 - Оксана"],
    },
  },
  {
    id: 3,
    header: "Монтаж дверей та вікон",
    subheader: "а також демонтаж старих дверей та вікон",
    img: doorInstallationImg,
    details: `Наші спеціалісти забезпечать встановлення вікон та дверей з дотриманням найвищих стандартів якості. 
    Також можливий виклик майстра додому для зняття попередніх замірів.`,
    backCard: {
      header: "Обговорити деталі можна за телефоном:",
      phones: ["(068) 234-94-04 - Тарас", "(099) 223-64-26 - Оксана"],
    },
  },
  {
    id: 4,
    header: "Порізка скла",
    subheader: "та дзеркал будь-якої складності",
    img: glassCuttingImg,
    details: `Для Вашої зручності, одразу поряд з магазином знаходиться майстерня по порізці скла, куди Ви можете звернутися
    у випадку, якщо Вам потрібно засклити двері чи вікна, або просто врізати скло.`,
    backCard: {
      header: "Дізнатись деталі можна за телефоном:",
      phones: ["(099) 956-87-89 - Богдан"],
    },
  },
  {
    id: 5,
    header: "Ремонт побутової техніки",
    subheader: "та діагностика поломки",
    img: electricalAppliancesImg,
    details: `Неочікувано, але факт: в магазині працює телерадіомайстерня, де Ви можете зремонтувати техніку, 
    яка вийшла з ладу, а також придбати супутні товари (тюнер, пульт, антену, блок живлення тощо).`,
    backCard: {
      header: "З питань ремонту техніки дзвоніть за телефоном:",
      phones: [" (095) 924-62-08 - Микола"],
    },
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
      <div id="ourServices" className="bg-background_secondary py-20">
        <div
          id="services-content-container"
          className="mx-auto max-w-[1600px] px-container-padding py-20 "
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
                    className={`group order-2 cursor-pointer [perspective:1000px] md:z-10 md:h-5/6 ${service.id % 2 === 1 ? "md:order-2 md:-ml-10" : "md:-mr-10"}`}
                  >
                    <div className="relative h-[350px] shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] md:h-full">
                      <div className="absolute inset-0">
                        <div className="h-full rounded-md bg-background p-5 md:p-10">
                          <h3 className="pb-2 font-roboto text-xl font-semibold md:text-2xl">
                            {service.header}
                          </h3>
                          <p className="pb-4 text-muted-foreground">
                            {service.subheader}
                          </p>
                          <p className="pb-6 text-sm sm:text-base">
                            {service.details}
                          </p>
                          <div
                            id="service-arrow-container"
                            className="absolute bottom-5 right-5 flex size-[50px] items-center justify-center rounded-full bg-background_secondary"
                          >
                            <ArrowBigUp className="w-full rotate-90 scale-125 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex w-full items-center justify-center rounded-md bg-muted-foreground px-12 text-center text-accent [backface-visibility:hidden] [transform:rotateY(180deg)] md:h-full">
                        <div className="grid gap-2 p-5 md:p-10">
                          <h3>{service.backCard.header}</h3>
                          <div>
                            {service.backCard.phones.map((phone) => {
                              return <p key={phone}>{phone}</p>;
                            })}
                          </div>
                          <h3 className="mt-4">
                            Або завітайте до нас особисто:
                          </h3>
                          <p>м.Івано-Франківськ, вул.Тичини 19А</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="service-image-container"
                    className={`order-1 grid h-[350px] items-end bg-cover bg-center ${service.id % 2 === 1 ? "md:order-1" : "md:order-2"}`}
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
