import { useAnimationOncePerSession } from "@/hooks/useAnimationOncePerSession";
import { l10n } from "@/textTranslation";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import roomInteriorImg from "../../assets/doors-img/unsplash-images/room-interior.jpg";
import OurAdvantages from "../OurAdvantages";
import OurAssortment from "../OurAssortment";
import { LanguageContext } from "../store/LanguageContext";

export default function HomePage() {
  const { language } = useContext(LanguageContext);
  const mainAnimationHasPlayed = useAnimationOncePerSession("mainAnimation");
  const mainAnimationVariants = {
    slideIn: {
      x: ["-100%", 0],
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  // sessionStorage.clear();

  return (
    <>
      <Helmet>
        <title>{l10n[language].title}</title>
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
            {l10n[language].homePage.mainBanner.header[0]}
            <br />
            <span className="text-5xl font-bold md:text-7xl">
              {l10n[language].homePage.mainBanner.header[1]}
            </span>
          </h1>
          <div>
            <p className="font-roboto text-2xl">
              {l10n[language].homePage.mainBanner.slogan}
            </p>
          </div>
        </motion.div>
      </div>
      <OurAdvantages />
      <OurAssortment />
    </>
  );
}
