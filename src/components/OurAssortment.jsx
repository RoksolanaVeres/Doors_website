import interiorDoorsImg from "@/assets/doors-img/unsplash-images/interior-door.jpg";
import exteriorDoorsImg from "@/assets/doors-img/unsplash-images/steel-door.jpg";
import windowImg from "@/assets/doors-img/unsplash-images/window.jpg";
import { useAnimationOncePerSession } from "@/hooks/useAnimationOncePerSession";
import { l10n } from "@/textTranslation";
import { motion, useInView } from "framer-motion";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "./store/LanguageContext";

export default function OurAssortment() {
  const { language } = useContext(LanguageContext);
  const assortmentItemText = l10n[language].homePage.assortment.assortmentItem;

  const OUR_ASSORTMENT = [
    {
      id: 1,
      header: assortmentItemText.entranceDoors,
      img: exteriorDoorsImg,
      link: "/doors?type=exterior",
    },
    {
      id: 2,
      header: assortmentItemText.interiorDoors,
      img: interiorDoorsImg,
      link: "/doors?type=interior",
    },
    {
      id: 3,
      header: assortmentItemText.windows,
      img: windowImg,
      link: "/windows",
    },
  ];

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
      <h2 className="pb-10 text-center font-lora text-2xl font-semibold uppercase text-primary md:pb-20 md:text-4xl">
        {l10n[language].homePage.assortment.header[0]} <br />
        <span className="text-4xl md:text-6xl">
          {l10n[language].homePage.assortment.header[1]}
        </span>
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
          <h3 className="bg-background-blur px-container-padding py-4 text-2xl font-semibold">
            {assortmentItem.header}
          </h3>
        </motion.div>
      </Link>
    </motion.li>
  );
}
