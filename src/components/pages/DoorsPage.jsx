import { Helmet } from "react-helmet-async";
import doorsData from "@/data";
import DoorCard from "../DoorCard";

export default function DoorsPage() {
  return (
    <>
      <Helmet>
        <title>Вікна & Двері | Двері </title>
      </Helmet>
      <div className="w-full px-container-padding py-24">
        <div className="grid grid-cols-auto-fill-265 gap-10">
          {doorsData.map((door) => {
            return <DoorCard key={door.title} door={door} />;
          })}
        </div>
      </div>
    </>
  );
}
