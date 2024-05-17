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
  }
}

export default function DoorCard({ door }) {
  const [doorColor, setDoorColor] = useState(null);

  function handleColorClick(selectedColor) {
    setDoorColor(selectedColor);
  }

  return (
    <Card className="grid justify-center">
      <CardHeader>
        <CardTitle>{door.title}</CardTitle>
        <CardDescription>{door.manufacturer}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={door.colors[doorColor] || Object.values(door.colors)[0]}
          className="h-[300px] w-[150px]"
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
