import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { l10n } from "@/textTranslation";
import { useContext } from "react";
import { LanguageContext } from "./store/LanguageContext";

export default function WindowCard({ window }) {
  const { language } = useContext(LanguageContext);
  const windowCardText = l10n[language].windowsPage.windowCard;
  return (
    <Card className="relative grid justify-center">
      <CardHeader>
        <CardTitle>
          <p>{window.title}</p>
          {window.subtitle && (
            <p className="text-base text-secondary-foreground">
              {window.subtitle}
            </p>
          )}
        </CardTitle>
        <CardDescription>{window.manufacturer}</CardDescription>
      </CardHeader>
      <CardContent className="flex h-[280px] items-center">
        <img src={window.image} className="mx-auto max-h-[300px] w-[150px]" />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <ul>
          <li>
            {windowCardText.mountingDepth}{" "}
            <span className="text-xl font-bold text-secondary-foreground">
              {window.characteristics.mountingDepth}
            </span>
          </li>
          <li>
            {windowCardText.glazingUnit}{" "}
            <span className="text-xl font-bold text-secondary-foreground">
              {window.characteristics.glazingUnit}
            </span>
          </li>
          <li>
            {windowCardText.chambers}{" "}
            <span className="text-xl font-bold text-secondary-foreground">
              {window.characteristics.chambers}
            </span>
          </li>
          <li>
            {windowCardText.gasketContours}{" "}
            <span className="text-xl font-bold text-secondary-foreground">
              {window.characteristics.gasketContours}
            </span>
          </li>
        </ul>
      </CardFooter>
    </Card>
  );
}
