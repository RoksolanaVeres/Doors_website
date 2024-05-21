import { ThemeContext } from "./store/ThemeContext";
import { useContext } from "react";
import NavigationLinks from "./NavigationLinks";
import "@theme-toggles/react/css/DarkSide.css";
import { DarkSide } from "@theme-toggles/react";
import { Separator } from "@/components/ui/separator";


export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="absolute left-0 right-0 top-0 z-20 flex">
      <header className="flex w-full flex-wrap justify-between gap-5 px-container-padding py-8">
        <NavigationLinks />
        <div className="flex gap-2">
          <button className="">УКР</button>
          <Separator orientation="vertical" />
          <button className="">ENG</button>
          <DarkSide
            duration={300}
            onToggle={toggleTheme}
            toggled={theme === "light"}
            className="ml-4 text-2xl"
          />
        </div>
      </header>
    </div>
  );
}
