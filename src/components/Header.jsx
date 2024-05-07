import UkFlagImg from "../assets/uk-flag.png";
import UaFlagImg from "../assets/ua-flag.png";
import { ThemeContext } from "./store/ThemeContext";
import { useContext } from "react";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex h-fit justify-center bg-accent">
      <header className="max-w-large flex w-full flex-wrap justify-between gap-5 p-5">
        <h1 className="text-3xl font-bold">Вікна & Двері</h1>
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
          <button onClick={toggleTheme} className="ml-4">
            {theme}
          </button>
        </div>
      </header>
    </div>
  );
}
