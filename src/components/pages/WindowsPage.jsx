import { Helmet } from "react-helmet-async";
import { windowsData } from "@/data";
import WindowCard from "../WindowCard";
import { Button } from "../ui/button";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function WindowsPage() {
  const windows = windowsData;
  return (
    <>
      <Helmet>
        <title>Вікна & Двері | Вікна</title>
      </Helmet>
      <div className="mx-auto w-full max-w-[1600px] px-container-padding py-24">
        <div className="relative pb-10 flex justify-end">
          <Collapsible>
            <CollapsibleTrigger>
              <Button size="sm" variant="outline">
                Ціни
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="absolute right-0 left-0 top-12 z-10 rounded-md bg-muted-foreground p-4 pt-2 text-accent">
              У зв'язку з нестабільною економічною ситуацією в країні, актуальні
              ціни можна дізнатися безпосередньо у продавця-консультанта за
              номером <span className="font-semibold">+380992236426</span>.
              <p className="font-semibold">
                Дякуємо за розуміння та приносимо вибачення за незручності!
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className="grid grid-cols-auto-fill-265 gap-10">
          {windows.map((window) => {
            return <WindowCard window={window} key={window.id} />;
          })}
        </div>
      </div>
    </>
  );
}
