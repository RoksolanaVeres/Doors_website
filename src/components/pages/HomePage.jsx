import { Helmet } from "react-helmet-async";


export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Вікна & Двері</title>
      </Helmet>
      <div className="relative h-screen bg-room-interior bg-cover bg-center ">
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
      {/* <div id="why-we-block" className="relative flex h-screen">
        <div className="flex h-full w-2/3 flex-col justify-center gap-10 bg-background_secondary px-container-padding"></div>
        <img src={doorKnob} className="w-1/3 object-contain" alt="" />
      </div> */}
      <div id="assortment" className="flex flex-col items-center py-20">
        <h2 className="text-3xl font-semibold pb-20">
          Наш асортимент включає:
        </h2>
        <div className="flex w-full flex-wrap justify-between gap-10">
          <div className="grid h-[500px]  min-w-[300px] flex-1 items-end bg-exterior-doors bg-cover bg-center">
            <h3 className="bg-blur px-container-padding py-4 text-2xl font-semibold">
              Вхідні Двері
            </h3>
          </div>
          <div className="grid h-[500px]  min-w-[300px] flex-1 items-end bg-interior-doors bg-cover bg-center">
            <h3 className="bg-blur px-container-padding py-4 text-2xl font-semibold">
              Міжкімнатні Двері
            </h3>
          </div>
          <div className="grid h-[500px]  min-w-[300px] flex-1 items-end bg-windows bg-cover bg-center">
            <h3 className="bg-blur px-container-padding py-4 text-2xl font-semibold">
              Вікна
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
