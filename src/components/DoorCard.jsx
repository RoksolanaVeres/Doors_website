import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// functions
function defineButtonColor(doorColor) {
  if (doorColor === "white") {
    return "bg-door-white";
  } else if (doorColor === "beige") {
    return "bg-door-beige";
  } else if (doorColor === "brown") {
    return "bg-door-brown";
  } else if (doorColor === "darkBrown") {
    return "bg-door-darkBrown";
  } else if (doorColor === "gray") {
    return "bg-door-gray";
  } else if (doorColor === "lighterGray") {
    return "bg-door-lighterGray";
  } else if (doorColor === "lightGray") {
    return "bg-door-lightGray";
  } else if (doorColor === "bileDerevo") {
    return "bg-door-bileDerevo";
  } else if (doorColor === "astanaMerle") {
    return "bg-door-astanaMerle";
  } else if (doorColor === "astanaRozvud") {
    return "bg-door-astanaRozvud";
  } else if (doorColor === "bilyi1129") {
    return "bg-door-bilyi1129";
  } else if (doorColor === "bilyiMat") {
    return "bg-door-bilyiMat";
  } else if (doorColor === "dubShaleHrafit") {
    return "bg-door-dubShaleHrafit";
  } else if (doorColor === "filadelfiiaCrem") {
    return "bg-door-filadelfiiaCrem";
  } else if (doorColor === "horikhLisovyi") {
    return "bg-door-horikhLisovyi";
  } else if (doorColor === "horikhTemnyi") {
    return "bg-door-horikhTemnyi";
  } else if (doorColor === "karpatskaYalyna") {
    return "bg-door-karpatskaYalyna";
  } else if (doorColor === "parma") {
    return "bg-door-parma";
  } else if (doorColor === "shvedskaVyshnia") {
    return "bg-door-shvedskaVyshnia";
  } else if (doorColor === "tikoveDerevo") {
    return "bg-door-tikoveDerevo";
  }
}

export default function DoorCard({ door }) {
  const [doorColor, setDoorColor] = useState(null);

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
                className={`size-5 border-2 ${doorColor === color ? "border-door-selected" : "border-border"} ${defineButtonColor(color)}`}
              />
            );
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
