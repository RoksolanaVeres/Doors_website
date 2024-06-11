// data & images
import { OUR_ADVANTAGES, OUR_ASSORTMENT } from "@/data";
import roomInteriorImg from "../../assets/doors-img/unsplash-images/room-interior.jpg";

// components
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

// hooks
import { useRef } from "react";
import { useAnimationOncePerSession } from "@/hooks/useAnimationOncePerSession";

// framer motion
import { motion, useInView } from "framer-motion";

export default function HomePage() {
  const mainAnimationHasPlayed = useAnimationOncePerSession("mainAnimation");
  const mainAnimationVariants = {
    slideIn: {
      x: ["-100%", 0],
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  sessionStorage.clear();

  return (
    <>
      <Helmet>
        <title>Вікна & Двері</title>
      </Helmet>
      <div
        id="main-block"
        className="h-screen bg-cover bg-[90%] md:bg-center"
        style={{ backgroundImage: `url(${roomInteriorImg})` }}
      >
        <motion.div
          className="flex h-full w-2/3 flex-col justify-center gap-10 bg-blur px-container-padding backdrop-blur-sm md:w-1/2"
          variants={mainAnimationVariants}
          animate={!mainAnimationHasPlayed ? "slideIn" : null}
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
      <OurAdvantages />
      <OurAssortment />
    </>
  );
}

function OurAdvantages() {
  return (
    <div
      id="ourAdvantages-block"
      className="mx-auto flex flex-col items-center px-container-padding pt-10 md:pt-20 xl:w-2/3 xl:px-0"
    >
      <h2 className="pb-10 text-center font-lora text-2xl font-semibold uppercase text-brand-main md:pb-20 md:text-4xl">
        Чому варто <br />
        <span className="text-4xl md:text-6xl">обрати нас?</span>
      </h2>
      <ol className="grid gap-20">
        {OUR_ADVANTAGES.map((advantage) => {
          return <AdvantageItem key={advantage.id} advantage={advantage} />;
        })}
      </ol>
    </div>
  );
}

function AdvantageItem({ advantage }) {
  const advantageTextRef = useRef(null);
  const advantageImageRef = useRef(null);

  const advantageImageIsInView = useInView(advantageImageRef, {
    once: true,
    margin: "-200px",
  });

  const advantageTextIsInView = useInView(advantageTextRef, {
    once: true,
    margin: "-200px",
  });

  const advantageTextAnimationHasPlayed =
    useAnimationOncePerSession("advantageTextAnimation");

  const advantageImageAnimationHasPlayed =
    useAnimationOncePerSession("advantageImageAnimation");

  const advantageTextAnimationVariants = !advantageTextAnimationHasPlayed
    ? {
        slideFromLeft: {
          x: ["-100%", 0],
          opacity: [0, 1],
          transition: { ease: "easeOut", duration: 0.7 },
        },
        slideFromRight: {
          x: ["100%", 0],
          opacity: [0, 1],
          transition: { ease: "easeOut", duration: 0.7 },
        },
        hidden: {
          opacity: 0,
        },
      }
    : {};

  const advantageImageAnimationVariants = !advantageImageAnimationHasPlayed
    ? {
        visible: {
          scale: [0.7, 1],
          opacity: [0, 1],
          transition: { ease: "easeOut", duration: 0.4 },
        },
        hidden: {
          opacity: 0,
        },
      }
    : {};

  return (
    <li id="advantage-container" className="grid md:grid-cols-2">
      <motion.div
        ref={advantageTextRef}
        id="advantage-text-container"
        className={`py-10 md:px-10 ${advantage.id % 2 === 0 && "md:order-2"}`}
        variants={advantageTextAnimationVariants}
        animate={
          !advantageTextIsInView
            ? "hidden"
            : advantage.id % 2 === 0
              ? "slideFromRight"
              : "slideFromLeft"
        }
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
      </motion.div>
      <div
        id="advantages-image-container"
        className="flex items-center justify-center rounded-md bg-background_secondary"
      >
        <motion.img
          ref={advantageImageRef}
          src={advantage.img}
          className="w-[300px] rounded-md md:w-[400px]"
          alt={advantage.header}
          variants={advantageImageAnimationVariants}
          animate={advantageImageIsInView ? "visible" : "hidden"}
        />
      </div>
    </li>
  );
}

function OurAssortment() {
  const assortmentRef = useRef(null);
  const assortmentIsInView = useInView(assortmentRef, {
    once: true,
    margin: "-200px",
  });
  const assortmentAnimationHasPlayed = useAnimationOncePerSession(
    "assortmentAnimation",
  );

  const assortmentVariants = !assortmentAnimationHasPlayed
    ? {
        visible: {
          opacity: [0.5, 1],
          scale: [0.5, 1],
          transition: {
            staggerChildren: 0.4,
            duration: 0.4,
            ease: "easeOut",
          },
        },
        hidden: {
          opacity: 0,
        },
      }
    : {};

  return (
    <div
      id="assortment-block"
      className="flex flex-col items-center px-container-padding py-10 md:py-20"
    >
      <h2 className="pb-10 text-center font-lora text-2xl font-semibold uppercase text-brand-main md:pb-20 md:text-4xl">
        Наш <br />
        <span className="text-4xl md:text-6xl">Асортимент</span>
      </h2>

      <motion.ul
        variants={assortmentVariants}
        animate={assortmentIsInView ? "visible" : "hidden"}
        className="flex w-full flex-wrap justify-between gap-10"
        ref={assortmentRef}
      >
        {OUR_ASSORTMENT.map((assortmentItem) => {
          return (
            <AssortmentItem
              key={assortmentItem.id}
              assortmentItem={assortmentItem}
              animationVariants={assortmentVariants}
            />
          );
        })}
      </motion.ul>
    </div>
  );
}

function AssortmentItem({ assortmentItem, animationVariants }) {
  return (
    <motion.li className="flex-1" variants={animationVariants}>
      <Link to={assortmentItem.link}>
        <motion.div
          className="grid h-[500px] min-w-[300px] items-end rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${assortmentItem.img})` }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <h3 className="bg-blur px-container-padding py-4 text-2xl font-semibold">
            {assortmentItem.header}
          </h3>
        </motion.div>
      </Link>
    </motion.li>
  );
}