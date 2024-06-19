import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useContext } from "react";
import { LanguageContext } from "./store/LanguageContext";
import { l10n } from "@/textTranslation";

export default function PricesCollapsible() {
  const { language } = useContext(LanguageContext);
  return (
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
  );
}
