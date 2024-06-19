import magdaCatalogue from "@/assets/catalogues/Magda_doors-catalogue.pdf";
import termoplastCatalogue from "@/assets/catalogues/Termoplast_doors-catalogue.pdf";
import magdaImg from "@/assets/catalogues/magda-img.png";
import termoplastImg from "@/assets/catalogues/termoplast-img.png";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { doorsData } from "@/data";
import { motion } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "react-router-dom";
import DoorCard from "../DoorCard";
import ScrollToTopButton from "../ScrollToTopButton";
import { Button } from "../ui/button";
import { LanguageContext } from "../store/LanguageContext";
import { l10n } from "@/textTranslation";

const PER_PAGE = 8;

export default function DoorsPage() {
  const { language } = useContext(LanguageContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("type");
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView(false);

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
        <title>Вікна & Двері | Двері </title>
      </Helmet>
      <div className="mx-auto w-full max-w-[1600px] px-container-padding py-24">
        <div className="relative flex justify-between gap-1 pb-10">
          <Collapsible>
            <CollapsibleTrigger className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              {l10n[language].prices.buttonCaption}
            </CollapsibleTrigger>
            <CollapsibleContent className="absolute left-0 right-0 top-12 z-10 rounded-md bg-muted-foreground p-4 pt-2 text-accent shadow-lg">
              {l10n[language].prices.announcement}
              <span className="font-semibold">+380992236426</span>.
              <p className="font-semibold">{l10n[language].prices.apologise}</p>
            </CollapsibleContent>
          </Collapsible>
          <div className="flex justify-end gap-1">
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                setSearchParams((params) => ({ ...params, type: "all" }))
              }
              className={`${filter === "all" && "bg-background_secondary"}`}
            >
              {l10n[language].doorsPage.filterButtons.all}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                setSearchParams((params) => ({ ...params, type: "interior" }))
              }
              className={`${filter === "interior" && "bg-background_secondary"}`}
            >
              {l10n[language].doorsPage.filterButtons.interior}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                setSearchParams((params) => ({ ...params, type: "exterior" }))
              }
              className={`${filter === "exterior" && "bg-background_secondary"}`}
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
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <DoorCard door={door} />
              </motion.div>
            );
          })}
        </div>
        <div className="h-1 w-full" ref={ref}>
          <ScrollToTopButton />
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
          <h3 className="absolute bottom-0 left-0 right-0 bg-blur px-container-padding py-4 text-2xl font-semibold">
            {l10n[language].doorsPage.catalogues.magda}
          </h3>
        </a>
        <a href={termoplastCatalogue} target="_blank" className="relative">
          <img
            src={termoplastImg}
            alt="termoplast doors catalogue"
            className="rounded-md border"
          />
          <h3 className="absolute bottom-0 left-0 right-0 bg-blur px-container-padding py-4 text-2xl font-semibold">
            {l10n[language].doorsPage.catalogues.termoplast}
          </h3>
        </a>
      </div>
    </div>
  );
}
