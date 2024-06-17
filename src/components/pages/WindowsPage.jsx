import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { windowsData } from "@/data";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import ScrollToTopButton from "../ScrollToTopButton";
import WindowCard from "../WindowCard";

export default function WindowsPage() {
  const ref = useRef();
  const windows = windowsData;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Вікна & Двері | Вікна</title>
      </Helmet>
      <div className="mx-auto w-full max-w-[1600px] px-container-padding py-24">
        <div className="relative flex justify-end pb-10">
          <Collapsible>
            <CollapsibleTrigger className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Ціни
            </CollapsibleTrigger>
            <CollapsibleContent className="absolute left-0 right-0 top-12 z-10 rounded-md bg-muted-foreground p-4 pt-2 text-accent shadow-lg">
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
            return (
              <motion.div
                key={window.id}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <WindowCard window={window} />
              </motion.div>
            );
          })}
        </div>
        <div className="h-1 w-full" ref={ref}>
          <ScrollToTopButton />
        </div>
      </div>
    </>
  );
}
