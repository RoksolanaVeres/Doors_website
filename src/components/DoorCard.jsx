import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  const defaultColor = Object.keys(door.colors)[0];
  const [doorColor, setDoorColor] = useState(defaultColor);

  function handleColorClick(selectedColor) {
    setDoorColor(selectedColor);
  }

  return (
    <Card className="relative grid justify-center">
      <CardHeader>
        <CardTitle>{door.title}</CardTitle>
        <CardDescription>{door.manufacturer}</CardDescription>
      </CardHeader>
      <CardContent className="h-[360px] flex items-center">
          <img
            src={door.colors[doorColor] || Object.values(door.colors)[0]}
            className="max-h-[300px] w-[150px] mx-auto"
          />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <p>Доступні кольори:</p>
        <div className="flex flex-wrap gap-3">
          {Object.keys(door.colors).map((color) => {
            return (
              <button
                onClick={() => handleColorClick(color)}
                key={color}
                className={`size-5 border-2 ${doorColor === color ? "border-door-selected" : "border-border"} ${btnColors[color]}`}
              />
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
