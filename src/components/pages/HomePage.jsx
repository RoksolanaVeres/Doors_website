import { Helmet } from "react-helmet-async";
import roomInteriorImg from "../../assets/doors-img/unsplash-images/room-interior.jpg";
import exteriorDoorsImg from "../../assets/doors-img/unsplash-images/steel-door.jpg";
import interiorDoorsImg from "../../assets/doors-img/unsplash-images/interior-door.jpg";
import windowImg from "../../assets/doors-img/unsplash-images/window.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Вікна & Двері</title>
      </Helmet>
      <div
        className="h-screen bg-cover bg-[90%] md:bg-center"
        style={{ backgroundImage: `url(${roomInteriorImg})` }}
      >
        <motion.div
          className="flex h-full w-2/3 flex-col justify-center gap-10 bg-blur px-container-padding md:w-1/2"
          animate={{ x: ["-100%", 0] }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <h1 className="font-lora text-3xl font-semibold uppercase md:text-5xl">
            Вікна
            <br />
            <span className="text-5xl font-bold md:text-7xl">Двері</span>
          </h1>
          <p className="text-base">
            Some text about importance of windows and doors
          </p>
        </motion.div>
      </div>

      {/* <div className="h-screen px-container-padding my-20 w-full grid grid-cols-2 items-center">
        <div className=""></div>
  
          <h2 className="px-container-padding pb-20 text-4xl font-bold">
            Чому
            <br />
            <span className="ml-10 text-6xl">Ми?</span>
          </h2>
      </div> */}

      <div
        id="assortment"
        className="flex flex-col items-center px-container-padding py-10 md:py-20"
      >
        <h2 className="pb-10 text-center font-lora text-2xl font-semibold uppercase md:pb-20 md:text-4xl">
          Наш <br />
          <span className="text-4xl md:text-6xl">Асортимент</span>
        </h2>
        <div className="flex w-full flex-wrap justify-between gap-10">
          <Link
            to="/doors?type=exterior"
            className="grid h-[500px] min-w-[300px] flex-1 items-end bg-cover bg-center"
            style={{ backgroundImage: `url(${exteriorDoorsImg})` }}
          >
            <h3 className="bg-blur px-container-padding py-4 text-2xl font-semibold">
              Вхідні Двері
            </h3>
          </Link>
          <Link
            to="/doors?type=interior"
            className="grid h-[500px] min-w-[300px] flex-1 items-end bg-cover bg-center"
            style={{ backgroundImage: `url(${interiorDoorsImg})` }}
          >
            <h3 className="bg-blur px-container-padding py-4 text-2xl font-semibold">
              Міжкімнатні Двері
            </h3>
          </Link>
          <Link
            to="/windows"
            className="grid  h-[500px] min-w-[300px] flex-1 items-end bg-cover bg-center"
            style={{ backgroundImage: `url(${windowImg})` }}
          >
            <h3 className="bg-blur px-container-padding py-4 text-2xl font-semibold">
              Вікна
            </h3>
          </Link>
        </div>
      </div>
    </>
  );
}
