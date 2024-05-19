import UkFlagImg from "../assets/icons/uk-flag.png";
import UaFlagImg from "../assets/icons/ua-flag.png";
import { ThemeContext } from "./store/ThemeContext";
import { useContext } from "react";
// import "@theme-toggles/react/css/Lightbulb.css";
// import { Lightbulb } from "@theme-toggles/react";
// import "@theme-toggles/react/css/DarkSide.css";
// import { DarkSide } from "@theme-toggles/react";
import "@theme-toggles/react/css/InnerMoon.css";
import { InnerMoon } from "@theme-toggles/react";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex h-fit justify-center bg-background_secondary">
      <header className="flex w-full max-w-large flex-wrap justify-between gap-5 px-container-padding py-5">
        <h1 className="text-3xl font-bold text-accent-main">Вікна & Двері</h1>
        <div id="" className="flex gap-2">
          <button className="">
            <img
              className="w-7"
              src={UaFlagImg}
              alt="switch to Ukrainian language"
            />
          </button>
          <button className="">
            <img
              className="w-7"
              src={UkFlagImg}
              alt="switch to English language"
            />
          </button>
          <InnerMoon
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
