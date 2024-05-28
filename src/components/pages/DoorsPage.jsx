import doorsData from "@/data";

import DoorCard from "../DoorCard";
import { Helmet } from "react-helmet-async";
import { Button } from "../ui/button";
import { ArrowBigUp } from "lucide-react";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const PER_PAGE = 8;

export default function DoorsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get("type") || "all");
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(
    () => setSearchParams((params) => ({ ...params, type: filter })),
    [filter],
  );

  useEffect(() => {
    if (inView) {
      setPage((page) => page + 1);
    }
  }, [inView]);

  let selectedCategoryDoors;
  if (filter === "all") {
    selectedCategoryDoors = doorsData;
  } else if (filter === "interior") {
    selectedCategoryDoors = doorsData.filter(
      (door) => door.type === "interior",
    );
  } else if (filter === "exterior") {
    selectedCategoryDoors = doorsData.filter(
      (door) => door.type === "exterior",
    );
  }

  let doorsToDisplay = selectedCategoryDoors.slice(0, page * PER_PAGE);

  return (
    <>
      <Helmet>
        <title>Вікна & Двері | Двері </title>
      </Helmet>
      <div className="mx-auto w-full max-w-[1600px] px-container-padding py-24">
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
        {filter !== "interior" && <div className="">Каталоги в пдф</div>}
        <div className="h-1 w-full" ref={ref}>
          <ScrollToTopButton />
        </div>
      </div>
    </>
  );
}

function ScrollToTopButton() {
  const buttonRef = useRef(null);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const scrollHandler = () => {
    const threshold = 350;
    const button = buttonRef.current;
    if (window.scrollY > threshold) {
      button.classList.remove("hidden");
    } else {
      button.classList.add("hidden");
    }
  };

  useEffect(() => {
    buttonRef.current.classList.add("hidden");
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.scroll(0, 0);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Button
      ref={buttonRef}
      variant="outline"
      className="fixed bottom-3 right-3 shadow-lg"
      onClick={scrollToTop}
    >
      <ArrowBigUp />
    </Button>
  );
}
