import { useContext, useState } from "react";
import { LanguageContext } from "./store/LanguageContext";
import { l10n } from "@/textTranslation";
import { Button } from "./ui/button";

export default function PricesInfo() {
  const { language } = useContext(LanguageContext);
  const [pricesInfoIsVisible, setPricesInfoIsVisible] = useState(false);

  function handlePricesBtnClick() {
    setPricesInfoIsVisible(!pricesInfoIsVisible);
  }

  return (
    <>
      <Button
        size="small"
        variant="outline"
        popovertarget="prices-popover"
        onClick={handlePricesBtnClick}
      >
        {l10n[language].prices.buttonCaption}
      </Button>
      {pricesInfoIsVisible && (
        <div className="absolute left-0 right-0 top-12 z-10 mt-0 w-full max-w-[1600px] rounded-md bg-muted-foreground p-4 pt-2 text-foreground-inverted shadow-lg">
          {l10n[language].prices.announcement}
          <span className="font-semibold">+380992236426</span>.
          <p className="font-semibold">{l10n[language].prices.apologise}</p>
        </div>
      )}
    </>
  );
}
