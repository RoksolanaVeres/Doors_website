import doorServicesImg from "@/assets/doors-img/unsplash-images/door-fix.jpg";
import qualitySecurityImg from "@/assets/doors-img/unsplash-images/door-handle.jpg";
import saveMoneyImg from "@/assets/doors-img/unsplash-images/save-money.jpg";
import saveTimeImg from "@/assets/doors-img/unsplash-images/time-doorhandle-keys.jpg";
import { useAnimationOncePerSession } from "@/hooks/useAnimationOncePerSession";
import { l10n } from "@/textTranslation";
import { motion, useInView } from "framer-motion";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "./store/LanguageContext";
import { Button } from "./ui/button";

export default function OurAdvantages() {
  const { language } = useContext(LanguageContext);
  const advantageItemText = l10n[language].homePage.advantages.advantageItem;

  const OUR_ADVANTAGES = [
    {
      id: 1,
      header: advantageItemText.security.header,
      img: qualitySecurityImg,
      details: advantageItemText.security.details,
      buttons: [
        {
          buttonCaption: advantageItemText.security.buttonCaptions[0],
          path: "./doors?type=all",
        },
        {
          buttonCaption: advantageItemText.security.buttonCaptions[1],
          path: "./windows",
        },
      ],
    },
    {
      id: 2,
      header: advantageItemText.fullService.header,
      img: doorServicesImg,
      details: advantageItemText.fullService.details,
      buttons: [
        {
          buttonCaption: advantageItemText.fullService.buttonCaptions[0],
          path: "./services",
        },
      ],
    },
    {
      id: 3,
      header: advantageItemText.timeSaving.header,
      img: saveTimeImg,
      details: advantageItemText.timeSaving.details,
      buttons: [
        {
          buttonCaption: advantageItemText.timeSaving.buttonCaptions[0],
          path: "./contacts",
        },
      ],
    },
    {
      id: 4,
      header: advantageItemText.adequatePrices.header,
      img: saveMoneyImg,
      details: advantageItemText.adequatePrices.details,
      highlight: advantageItemText.adequatePrices.highlight,
      buttons: [
        {
          buttonCaption: advantageItemText.adequatePrices.buttonCaptions[0],
          path: "./contacts",
        },
      ],
    },
  ];

  return (
    <div
      id="ourAdvantages-block"
      className="mx-auto flex flex-col items-center px-container-padding pt-10 md:pt-20 xl:w-2/3 xl:px-0"
    >
      <h2 className="pb-10 text-center font-lora text-2xl font-semibold uppercase text-brand-main md:pb-20 md:text-4xl">
        {l10n[language].homePage.advantages.header[0]} <br />
        <span className="text-4xl md:text-6xl">
          {l10n[language].homePage.advantages.header[1]}
        </span>
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
  const { language } = useContext(LanguageContext);
  const advantageTextRef = useRef(null);
  const advantageImageRef = useRef(null);
  const advantageItemText = l10n[language].homePage.advantages.advantageItem;

  const advantageImageIsInView = useInView(advantageImageRef, {
    once: true,
    margin: "-200px",
  });

  const advantageTextIsInView = useInView(advantageTextRef, {
    once: true,
    margin: "-200px",
  });

  const advantageTextAnimationHasPlayed = useAnimationOncePerSession(
    "advantageTextAnimation",
  );

  const advantageImageAnimationHasPlayed = useAnimationOncePerSession(
    "advantageImageAnimation",
  );

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
          <span className="tracking-widest">{advantageItemText.reason} # </span>
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
