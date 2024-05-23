import { Helmet } from "react-helmet-async";
import roomInteriorImg from "../../assets/doors-img/unsplash-images/room-interior.jpg";
import exteriorDoorsImg from "../../assets/doors-img/unsplash-images/steel-door.jpg";
import interiorDoorsImg from "../../assets/doors-img/unsplash-images/interior-door.jpg";
import windowImg from "../../assets/doors-img/unsplash-images/window.jpg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Вікна & Двері</title>
      </Helmet>
      <div
        className={`relative h-screen bg-cover bg-center`}
        style={{ backgroundImage: `url(${roomInteriorImg})` }}
      >
        <div className="flex h-full w-1/2 flex-col justify-center gap-10 bg-blur px-container-padding">
          <h1 className="text-6xl font-bold">
            Вікна <br />
            <span className="ml-10 text-7xl">& Двері</span>
          </h1>
          <p className="ml-10 text-base">
            Some text about importance of windows and doors
          </p>
        </div>
      </div>
      <div id="assortment" className="flex flex-col items-center py-20">
        <h2 className="px-container-padding pb-20 text-3xl font-semibold">
          Наш асортимент включає:
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
