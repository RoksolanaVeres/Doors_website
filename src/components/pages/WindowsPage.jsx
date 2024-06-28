import { windowsData } from "@/data";
import { l10n } from "@/textTranslation";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import PricesInfo from "../PricesInfo";
import ScrollToTopButton from "../ScrollToTopButton";
import WindowCard from "../WindowCard";
import { LanguageContext } from "../store/LanguageContext";

export default function WindowsPage() {
  const { language } = useContext(LanguageContext);
  const ref = useRef();
  const windows = windowsData;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content={l10n[language].metaTags.description.windowsPage}
        />
        <title>
          {l10n[language].title.main} | {l10n[language].title.windowsPage}{" "}
        </title>
      </Helmet>
      <div className="mx-auto w-full max-w-[1600px] px-container-padding py-24">
        <div className="relative flex justify-end pb-10">
          <PricesInfo />
        </div>

        <div className="grid grid-cols-auto-fill-265 gap-10">
          {windows.map((window) => {
            return (
              <motion.div
                key={window.id}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <WindowCard window={window} />
              </motion.div>
            );
          })}
        </div>
        <div className="h-1 w-full" ref={ref}>
          {/* <ScrollToTopButton /> */}
        </div>
      </div>
    </>
  );
}
