import { Helmet } from "react-helmet-async";
import doorsData from "@/data";
import DoorCard from "../DoorCard";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function DoorsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get("type") || "all");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(
    () => setSearchParams((params) => ({ ...params, type: filter })),
    [filter],
  );

  let doorsToDisplay;
  if (filter === "all") {
    doorsToDisplay = doorsData;
  } else if (filter === "interior") {
    doorsToDisplay = doorsData.filter((door) => door.type === "interior");
  } else if (filter === "exterior") {
    doorsToDisplay = doorsData.filter((door) => door.type === "exterior");
  }

  return (
    <>
      <Helmet>
        <title>Вікна & Двері | Двері </title>
      </Helmet>
      <div className="w-full px-container-padding py-24">
        {/* <div className="">
          {filter === "interior" && <p>Виробники міжкімнатних дверей</p>}
        </div> */}
        <div className="flex justify-end gap-1 pb-10">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setFilter("all")}
            className={`${filter === "all" && "bg-background_secondary"}`}
          >
            Всі
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setFilter("interior")}
            className={`${filter === "interior" && "bg-background_secondary"}`}
          >
            Міжкімнатні
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setFilter("exterior")}
            className={`${filter === "exterior" && "bg-background_secondary"}`}
          >
            Вхідні
          </Button>
        </div>

        <div className="grid grid-cols-auto-fill-265 gap-10">
          {doorsToDisplay.map((door) => {
            return <DoorCard key={door.title} door={door} />;
          })}
        </div>
      </div>
    </>
  );
}
