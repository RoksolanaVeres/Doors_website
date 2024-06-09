// data & images
import roomInteriorImg from "../../assets/doors-img/unsplash-images/room-interior.jpg";
import exteriorDoorsImg from "../../assets/doors-img/unsplash-images/steel-door.jpg";
import interiorDoorsImg from "../../assets/doors-img/unsplash-images/interior-door.jpg";
import windowImg from "../../assets/doors-img/unsplash-images/window.jpg";
import saveTimeImg from "../../assets/doors-img/unsplash-images/time-doorhandle-keys.jpg";
import doorServicesImg from "../../assets/doors-img/unsplash-images/door-fix.jpg";
import qualitySecurityImg from "../../assets/doors-img/unsplash-images/door-handle.jpg";
import saveMoneyImg from "../../assets/doors-img/unsplash-images/save-money.jpg";

// components
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

// hooks
import { useState, useEffect, useRef } from "react";

// framer motion
import { motion, useInView } from "framer-motion";

// variables
const OUR_ADVANTAGES = [
  {
    id: 1,
    header: "Безпека та якість",
    img: qualitySecurityImg,
    details: `Нашому дверному бізнесу вже понад 20 років. За цей час ми ретельно вивчили всіх можливих виробників дверей
    та вікон, обрали найкращих для того, щоб з впевненістю гарантувати Вам довговічність та надійність наших виробів.`,
    buttons: [
      {
        buttonCaption: "Тут двері",
        path: "./doors?type=all",
      },
      {
        buttonCaption: "А тут вікна",
        path: "./windows",
      },
    ],
  },
  {
    id: 2,
    header: "Повний сервіс",
    img: doorServicesImg,
    details: `Наші послуги включають не лише продаж, а й професійний монтаж (а при потребі й демонтаж старих вікон чи дверей). 
    Крім цього, у нас Ви можете замовити привіз свого замовлення та виїзд майстра додому для заміру дверного або віконного отвору.`,
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
    details: `Ми розуміємо з якими труднощами Ви стикаєтесь, коли наважуєтесь розпочати ремонт в оселі, особливо в цей нелегкий час,
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
  const [animationPlayed, setAnimationPlayed] = useState(
    sessionStorage.getItem("animationPlayed") || false,
  );

  useEffect(() => {
    const animationHasAlreadyPlayed = sessionStorage.getItem("animationPlayed");

    if (!animationHasAlreadyPlayed) {
      setAnimationPlayed(true);
      sessionStorage.setItem("animationPlayed", "true");
    }
  }, []);

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
          animate={
            animationPlayed === "true" ? { x: ["0%", 0] } : { x: ["-100%", 0] }
          }
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <h1 className="font-lora text-3xl font-semibold uppercase text-brand-main md:text-5xl">
            Вікна
            <br />
            <span className="text-5xl font-bold md:text-7xl">Двері</span>
          </h1>
          <div>
            <p className="font-roboto text-2xl">
              Затишок та комфорт для Вашої оселі
            </p>
          </div>
        </motion.div>
      </div>

      <div
        id="ourAdvantages"
        className="mx-auto flex flex-col items-center px-container-padding pt-10 md:pt-20 xl:w-2/3 xl:px-0"
      >
        <h2 className="pb-10 text-center font-lora text-2xl font-semibold uppercase text-brand-main md:pb-20 md:text-4xl">
          Чому варто <br />
          <span className="text-4xl md:text-6xl">обрати нас?</span>
        </h2>
        <ol className="grid gap-20">
          {OUR_ADVANTAGES.map((advantage) => {
            return <Advantage key={advantage.id} advantage={advantage} />;
          })}
        </ol>
      </div>

      <div
        id="assortment"
        className="flex flex-col items-center px-container-padding py-10 md:py-20"
      >
        <h2 className="pb-10 text-center font-lora text-2xl font-semibold uppercase text-brand-main md:pb-20 md:text-4xl">
          Наш <br />
          <span className="text-4xl md:text-6xl">Асортимент</span>
        </h2>

        <div className="flex w-full flex-wrap justify-between gap-10">
          <Link to="/doors?type=exterior" className="flex-1">
            <motion.div
              className="grid h-[500px] min-w-[300px] items-end rounded-md bg-cover bg-center"
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
              className="grid h-[500px] min-w-[300px] items-end rounded-md bg-cover bg-center"
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
              className="grid h-[500px] min-w-[300px] items-end rounded-md bg-cover bg-center"
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

function Advantage({ advantage }) {
  const advantageRef = useRef(null);
  const advantageIsInView = useInView(advantageRef, { once: true, margin: "-200px" });

  return (
    <li
      id="advantage-container"
      className="grid md:grid-cols-2"
      ref={advantageRef}
    >
      <div
        id="advantage-text-container"
        className={`py-10 md:px-10 ${advantage.id % 2 === 0 && "md:order-2"}`}
        style={{
          transform: advantageIsInView
            ? "none"
            : `translateX(${advantage.id % 2 === 0 ? "200px" : "-200px"})`,
          opacity: advantageIsInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <p id="advantage-number" className="pb-4 text-neutral">
          <span className="tracking-widest">причина # </span>
          <span className="text-5xl">0{advantage.id}</span>
        </p>
        <h3 className="pb-2 text-2xl font-semibold">{advantage.header}</h3>
        <p className="text-muted-foreground">{advantage.details}</p>
        {advantage.highlight && (
          <p className="pt-3 text-sm font-semibold tracking-wider text-brand-main">
            {advantage.highlight}
          </p>
        )}
        <div id="advantage-button-container" className="flex gap-4">
          {advantage.buttons.map((button) => {
            return (
              <Link
                key={button.buttonCaption}
                to={button.path}
                className="pt-8"
              >
                <Button className="bg-brand-main">
                  {button.buttonCaption}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
      <div
        id="advantages-image-container"
        className="flex items-center justify-center rounded-md bg-background_secondary"
      >
        <motion.img
          src={advantage.img}
          className="w-[300px] rounded-md opacity-0 md:w-[400px]"
          alt={advantage.header}
          animate={{
            scale: advantageIsInView ? 1 : 0.7,
            opacity: advantageIsInView ? 1 : 0,
          }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        />
      </div>
    </li>
  );
}
