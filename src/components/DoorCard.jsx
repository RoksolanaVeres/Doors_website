import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { l10n } from "@/textTranslation";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { LanguageContext } from "./store/LanguageContext";

const btnColors = {
  white: "bg-door-white",
  beige: "bg-door-beige",
  brown: "bg-door-brown",
  darkBrown: "bg-door-darkBrown",
  gray: "bg-door-gray",
  lighterGray: "bg-door-lighterGray",
  lightGray: "bg-door-lightGray",
  bileDerevo: "bg-door-bileDerevo",
  astanaMerle: "bg-door-astanaMerle",
  astanaRozvud: "bg-door-astanaRozvud",
  bilyi1129: "bg-door-bilyi1129",
  bilyiMat: "bg-door-bilyiMat",
  dubShaleHrafit: "bg-door-dubShaleHrafit",
  filadelfiiaCrem: "bg-door-filadelfiiaCrem",
  horikhLisovyi: "bg-door-horikhLisovyi",
  horikhTemnyi: "bg-door-horikhTemnyi",
  karpatskaYalyna: "bg-door-karpatskaYalyna",
  parma: "bg-door-parma",
  shvedskaVyshnia: "bg-door-shvedskaVyshnia",
  tikoveDerevo: "bg-door-tikoveDerevo",
};

export default function DoorCard({ door }) {
  const { language } = useContext(LanguageContext);
  const defaultColor = Object.keys(door.colors)[0];
  const [doorColor, setDoorColor] = useState(defaultColor);

  function handleColorClick(selectedColor) {
    setDoorColor(selectedColor);
  }

  return (
    <Card className="relative grid justify-center">
      <CardHeader>
        <CardTitle>
          <p>{door.title[language]}</p>
        </CardTitle>
        <CardDescription>{door.manufacturer[language]}</CardDescription>
      </CardHeader>
      <CardContent className="flex h-[360px] items-center">
        <div className="mx-auto">
          <img
            src={door.colors[doorColor] || Object.values(door.colors)[0]}
            className="mx-auto max-h-[300px] w-[150px]"
            alt={door.title[language]}
          />
          {/* <p className="text-center pt-4">color</p> */}
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <p>{l10n[language].doorsPage.doorCard.availableColors}</p>
        <div className="flex flex-wrap gap-3">
          {Object.keys(door.colors).map((color) => {
            return (
              <motion.button
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
                onClick={() => handleColorClick(color)}
                key={color}
                className={`size-5 outline outline-2 ${doorColor === color ? "outline-door-selected" : "outline-transparent"} ${btnColors[color]}`}
              />
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
