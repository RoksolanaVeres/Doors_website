import { Helmet } from "react-helmet-async";
import roomInteriorImg from "../../assets/doors-img/unsplash-images/room-interior.jpg";
import exteriorDoorsImg from "../../assets/doors-img/unsplash-images/steel-door.jpg";
import interiorDoorsImg from "../../assets/doors-img/unsplash-images/interior-door.jpg";
import windowImg from "../../assets/doors-img/unsplash-images/window.jpg";

import saveTimeImg from "../../assets/doors-img/unsplash-images/time-doorhandle-keys.jpg";
import doorServicesImg from "../../assets/doors-img/unsplash-images/door-fix.jpg";
import qualitySecurityImg from "../../assets/doors-img/unsplash-images/door-handle.jpg";
import saveMoneyImg from "../../assets/doors-img/unsplash-images/save-money.jpg";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const OUR_ADVANTAGES = [
  {
    id: 1,
    header: "Безпека та якість",
    img: qualitySecurityImg,
    details: `Нашому дверному бізнесу вже понад 15 років. За цей час ми ретельно вивчили всіх можливих виробників дверей
    та вікон, обрали найкращих для того, щоб з впевненістю гарантувати Вам довговічність та надійність наших виробів.`,
    buttons: [
      {
        buttonCaption: "Подивитись двері",
        path: "./doors",
      },
      {
        buttonCaption: "Глянути на вікна",
        path: "./windows",
      },
    ],
  },
  {
    id: 2,
    header: "Повний сервіс",
    img: doorServicesImg,
    details: `Наші послуги включають не лише продаж, а й професійний монтаж (а при потребі й демонтаж старих вікон чи дверей). 
    Крім цього, у нас ви можете замовити доставлення свого замовлення та виїзд майстра додому для заміру дверного отвору.`,
    buttons: [
      {
        buttonCaption: "Всі послуги",
        path: "./services",
      },
    ],
  },
  {
    id: 3,
    header: "Економія часу",
    img: saveTimeImg,
    details: `Країна у смартфоні - це про нас. Звісно, двері через Дію ми Вам не встановимо, але переважну більшість наших послуг
    можна отримати просто зв'язавшись з нами по телефону.`,
    buttons: [
      {
        buttonCaption: "Зв'язатися з нами",
        path: "./contacts",
      },
    ],
  },
  {
    id: 4,
    header: "Адекватні ціни",
    img: saveMoneyImg,
    details: `Ми розуміємо з якими труднощами ви стикаєтесь коли наважуєтесь розпочати ремонт в оселі, особливо в цей нелегкий час,
    тому подбали про те, щоб попри все, наші ціни залишалися конкурентними, зберігаючи високу якість виробу.`,
    highlight: `Для військових, які захищають наш спокій, пропонуємо приємні знижки - це наш спосіб сказати "Дякую"!`,
    buttons: [
      {
        buttonCaption: "Наші контакти",
        path: "./contacts",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Вікна & Двері</title>
      </Helmet>
      <div
        className="h-screen bg-cover bg-[90%] md:bg-center"
        style={{ backgroundImage: `url(${roomInteriorImg})` }}
      >
        <motion.div
          className="flex h-full w-2/3 flex-col justify-center gap-10 bg-blur px-container-padding backdrop-blur-sm md:w-1/2"
          animate={{ x: ["-100%", 0] }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <h1 className="text-brand-main font-lora text-3xl font-semibold uppercase md:text-5xl">
            Вікна
            <br />
            <span className="text-5xl font-bold md:text-7xl">Двері</span>
          </h1>
          <div className="">
            <p className="text-2xl">Затишок та комфорт для Вашої оселі</p>
          </div>
        </motion.div>
      </div>

      <div
        id="ourAdvantages"
        className="mx-auto flex flex-col items-center px-container-padding pt-10 md:px-0 md:pt-20 xl:w-2/3"
      >
        <h2 className="text-brand-main pb-10 text-center font-lora text-2xl font-semibold uppercase md:pb-20 md:text-4xl">
          Чому варто <br />
          <span className="text-4xl md:text-6xl">обрати нас?</span>
        </h2>
        <ol className="grid gap-10">
          {OUR_ADVANTAGES.map((advantage) => {
            return (
              <div
                id="advantage-container"
                key={advantage.id}
                className="grid md:grid-cols-2"
              >
                <div
                  id="advantages-text-container"
                  className={`py-10 md:px-10 ${advantage.id % 2 === 0 && "md:order-2"}`}
                >
                  <p id="advantage-number" className="text-neutral pb-4">
                    <span className="tracking-widest">причина # </span>
                    <span className="text-5xl">0{advantage.id}</span>
                  </p>
                  <h3 className="pb-2 text-2xl font-semibold">
                    {advantage.header}
                  </h3>
                  <p className="text-muted-foreground">{advantage.details}</p>
                  {advantage.highlight && (
                    <p className="pt-2">{advantage.highlight}</p>
                  )}
                  <div id="advantage-button-container" className="flex gap-4">
                    {advantage.buttons.map((button) => {
                      return (
                        <Link
                          key={button.buttonCaption}
                          to={button.path}
                          className="pt-8"
                        >
                          <Button className="bg-brand-main">{button.buttonCaption}</Button>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div
                  id="advantages-image-container"
                  className="flex items-center justify-center rounded-md bg-background_secondary"
                >
                  <img
                    src={advantage.img}
                    className="w-[300px] md:w-[400px] rounded-md"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </ol>
      </div>

      <div
        id="assortment"
        className="flex flex-col items-center px-container-padding py-10 md:py-20"
      >
        <h2 className="pb-10 text-center font-lora text-2xl font-semibold uppercase md:pb-20 md:text-4xl">
          Наш <br />
          <span className="text-4xl md:text-6xl">Асортимент</span>
        </h2>

        <div className="flex w-full flex-wrap justify-between gap-10">
          <Link to="/doors?type=exterior" className="flex-1">
            <motion.div
              className="grid h-[500px] min-w-[300px] items-end bg-cover bg-center"
              style={{ backgroundImage: `url(${exteriorDoorsImg})` }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <h3 className="bg-blur px-container-padding py-4 text-2xl font-semibold">
                Вхідні Двері
              </h3>
            </motion.div>
          </Link>

          <Link to="/doors?type=interior" className="flex-1">
            <motion.div
              className="grid h-[500px] min-w-[300px] items-end bg-cover bg-center"
              style={{ backgroundImage: `url(${interiorDoorsImg})` }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <h3 className="bg-blur px-container-padding py-4 text-2xl font-semibold">
                Міжкімнатні Двері
              </h3>
            </motion.div>
          </Link>

          <Link to="/windows" className="flex-1">
            <motion.div
              className="grid h-[500px] min-w-[300px] items-end bg-cover bg-center"
              style={{ backgroundImage: `url(${windowImg})` }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <h3 className="bg-blur px-container-padding py-4 text-2xl font-semibold">
                Вікна
              </h3>
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
}
