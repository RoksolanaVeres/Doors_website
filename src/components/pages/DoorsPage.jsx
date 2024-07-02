import magdaCatalogue from "@/assets/catalogues/Magda_doors-catalogue.pdf";
import termoplastCatalogue from "@/assets/catalogues/Termoplast_doors-catalogue.pdf";
import magdaImg from "@/assets/catalogues/magda-img.png";
import termoplastImg from "@/assets/catalogues/termoplast-img.png";
import { doorsData } from "@/data";
import { l10n } from "@/textTranslation";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "react-router-dom";
import DoorCard from "../DoorCard";
import PricesInfo from "../PricesInfo";
import ScrollToTopButton from "../ScrollToTopButton";
import { LanguageContext } from "../store/LanguageContext";
import { Button } from "../ui/button";
import { useAnimationOncePerSession } from "@/hooks/useAnimationOncePerSession";

const PER_PAGE = 8;

export default function DoorsPage() {
  const { language } = useContext(LanguageContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("type");
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView(false);
  const doorsAnimationHasPlayed = useAnimationOncePerSession("doorsAnimation");

  const doorsVariants = {
    initial: { scale: 0.5 },
    animated: { scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    if (inView) {
      setPage((page) => page + 1);
    }
  }, [inView]);

  let selectedCategoryDoors;
  if (filter === "all") {
    selectedCategoryDoors = doorsData;
  } else if (filter === "interior") {
    selectedCategoryDoors = doorsData.filter(
      (door) => door.type === "interior",
    );
  } else if (filter === "exterior") {
    selectedCategoryDoors = doorsData.filter(
      (door) => door.type === "exterior",
    );
  }

  let doorsToDisplay = selectedCategoryDoors.slice(0, page * PER_PAGE);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={l10n[language].metaTags.description.doorsPage}
        />
        <title>
          {l10n[language].title.main} | {l10n[language].title.doorsPage}{" "}
        </title>
      </Helmet>
      <div className="mx-auto w-full max-w-[1600px] px-container-padding py-24">
        <div className="relative flex justify-between gap-1 pb-10">
          <PricesInfo />
          <div className="flex justify-end gap-1">
            <Button
              size="small"
              variant="outline"
              onClick={() =>
                setSearchParams((params) => ({ ...params, type: "all" }))
              }
              className={`${filter === "all" && "bg-background-secondary"}`}
            >
              {l10n[language].doorsPage.filterButtons.all}
            </Button>
            <Button
              size="small"
              variant="outline"
              onClick={() =>
                setSearchParams((params) => ({ ...params, type: "interior" }))
              }
              className={`${filter === "interior" && "bg-background-secondary"}`}
            >
              {l10n[language].doorsPage.filterButtons.interior}
            </Button>
            <Button
              size="small"
              variant="outline"
              onClick={() =>
                setSearchParams((params) => ({ ...params, type: "exterior" }))
              }
              className={`${filter === "exterior" && "bg-background-secondary"}`}
            >
              {l10n[language].doorsPage.filterButtons.exterior}
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-auto-fill-265 gap-10">
          {doorsToDisplay.map((door) => {
            return (
              <motion.div
                key={door.id}
                variants={doorsVariants}
                initial={!doorsAnimationHasPlayed ? "initial" : null}
                animate={!doorsAnimationHasPlayed ? "animated" : null}
              >
                <DoorCard door={door} />
              </motion.div>
            );
          })}
        </div>
        <div className="h-1 w-full" ref={ref}>
          {/* <ScrollToTopButton /> */}
        </div>
        {filter !== "interior" && <DoorsCatalogues />}
      </div>
    </>
  );
}

function DoorsCatalogues() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="mt-20">
      <h2 className="pb-10 text-center text-2xl font-semibold">
        {l10n[language].doorsPage.catalogues.header}
      </h2>
      <div className="grid gap-10 md:grid-cols-2">
        <a href={magdaCatalogue} target="_blank" className="relative">
          <img
            src={magdaImg}
            alt="magda doors catalogue"
            className="rounded-md border"
          />
          <h3 className="absolute bottom-0 left-0 right-0 bg-background-blur px-container-padding py-4 text-2xl font-semibold">
            {l10n[language].doorsPage.catalogues.magda}
          </h3>
        </a>
        <a href={termoplastCatalogue} target="_blank" className="relative">
          <img
            src={termoplastImg}
            alt="termoplast doors catalogue"
            className="rounded-md border"
          />
          <h3 className="absolute bottom-0 left-0 right-0 bg-background-blur px-container-padding py-4 text-2xl font-semibold">
            {l10n[language].doorsPage.catalogues.termoplast}
          </h3>
        </a>
      </div>
    </div>
  );
}
