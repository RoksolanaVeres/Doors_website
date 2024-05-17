import { Helmet } from "react-helmet-async";

import doorsData from "@/data";
import DoorCard from "../DoorCard";

export default function CataloguePage() {
  return (
    <>
      <Helmet>
        <title>Вікна & Двері | Каталог</title>
      </Helmet>
      <div className="grid grid-cols-auto-fill-265 gap-4">
        {doorsData.map((door) => {
          return <DoorCard key={door.title} door={door} />;
        })}
      </div>
    </>
  );
}
