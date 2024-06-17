import { ArrowBigUp } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

export default function ScrollToTopButton() {
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
