import { Helmet } from "react-helmet-async";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import doorsData from "@/data";

export default function CataloguePage() {
  return (
    <>
      <Helmet>
        <title>Вікна & Двері | Каталог</title>
      </Helmet>
      <div className="grid-cols-auto-fill-265 grid gap-4">
        {doorsData.map((door) => {
          return (
            <Card key={door.title} className="grid justify-center">
              <CardHeader>
                <CardTitle>{door.title}</CardTitle>
                <CardDescription>{door.manufacturer}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={door.colors[0].img} className="h-[300px] w-[150px]" />
              </CardContent>
              <CardFooter>
                <p>{door.description}</p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
