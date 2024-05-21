import { Helmet } from "react-helmet-async";
import roomInterior from "../../assets/doors-img/unsplash-images/room-interior.jpg"
import exteriorDoors from "../../assets/doors-img/unsplash-images/steel-door.jpg"
import interiorDoors from "../../assets/doors-img/unsplash-images/interior-door.jpg"
import window from "../../assets/doors-img/unsplash-images/window.jpg"


export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Вікна & Двері</title>
      </Helmet>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${roomInterior})` }}
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
        <h2 className="pb-20 text-3xl font-semibold">
          Наш асортимент включає:
        </h2>
        <div className="flex w-full flex-wrap justify-between gap-10">
          <div
            className="grid h-[500px] min-w-[300px] flex-1 items-end bg-cover bg-center"
            style={{ backgroundImage: `url(${exteriorDoors})` }}
          >
            <h3 className="bg-blur px-container-padding py-4 text-2xl font-semibold">
              Вхідні Двері
            </h3>
          </div>
          <div
            className="grid h-[500px] min-w-[300px] flex-1 items-end bg-cover bg-center"
            style={{ backgroundImage: `url(${interiorDoors})` }}
          >
            <h3 className="bg-blur px-container-padding py-4 text-2xl font-semibold">
              Міжкімнатні Двері
            </h3>
          </div>
          <div
            className="grid  h-[500px] min-w-[300px] flex-1 items-end bg-cover bg-center"
            style={{ backgroundImage: `url(${window})` }}
          >
            <h3 className="bg-blur px-container-padding py-4 text-2xl font-semibold">
              Вікна
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
