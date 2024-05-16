import { Helmet } from "react-helmet-async";
import DoorsCarousel from "../DoorsCarousel";

import doorHandleImg from "../../assets/doors-img/unsplash-images/door-handle.jpg";
import doorsOpenImg from "../../assets/doors-img/unsplash-images/doors-open.jpg";
import blackDoorImg from "../../assets/doors-img/unsplash-images/interior-black-door.jpg";
import windowImg from "../../assets/doors-img/unsplash-images/window.jpg";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Вікна & Двері</title>
      </Helmet>

      <div id="images-text__container" className="grid grid-cols-2">
        <div className="">
          Вступ про важливість дверей, обрати двері (каталог)
        </div>
        <div className="">
          <img className="" src={doorsOpenImg} alt="" />
        </div>
        <div className="">
          <img className="" src={blackDoorImg} alt="" />
        </div>
        <div className="">
          У нас двері можна не лише купити, а ще доставити, вмонтувати і
          засклити (весь спектр наших послуг - посилання на послуги)
        </div>
        <div className="">
          Можна підібрати аксесуари за своїм смаком (ручки, замки, завіси)
        </div>
        <img className="" src={doorHandleImg} alt="" />
        <img className="" src={windowImg} alt="" />
        <div className="">Також ми продаємо вікна, підвіконники та відливи</div>
      
      </div>
    </>
  );
}
