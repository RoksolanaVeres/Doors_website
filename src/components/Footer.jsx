import {
  FaViber,
  FaRegClock,
  FaLocationDot,
  FaPhoneVolume,
  FaEnvelope,
} from "react-icons/fa6";

import { HiLockClosed } from "react-icons/hi2";

export default function Footer() {
  return (
    <div className="flex justify-center bg-accent">
      <footer className="max-w-large flex w-full flex-wrap justify-between gap-5 p-5 text-base">
        <div id="footer-col-1" className="">
          <div className="flex gap-2">
            <FaLocationDot className="mt-2" />
            <p>
              м.Івано-Франківськ,
              <br />
              вул. Тичини 19А
            </p>
          </div>
        </div>

        <div id="footer-col-2" className="">
          <p>пн-пт: 9:00-18:00</p>
          <p>сб: 9:00-16:00</p>
          <p className="flex items-center gap-2">
            нд: <HiLockClosed className="text-destructive" />
          </p>
        </div>

        <div id="footer-col-3" className="">
          <a href="tel:+380992236426" className="flex items-center gap-2">
            <FaViber />
            +380992236426
          </a>

          <a href="tel:+380682349404" className="flex items-center gap-2">
            <FaPhoneVolume />
            +380682349404
          </a>
          <a
            href="mailto:taras-oksana@ukr.net"
            className="flex items-center gap-2"
          >
            <FaEnvelope />
            taras-oksana@ukr.net
          </a>
        </div>

        {/* <div className="flex items-center gap-2">
        <FaRegClock />
        <p>пн-пт: 9:00-18:00, сб: 9:00-16:00</p>
      </div>
      <div className="gap-2s flex items-center">
        <FaLocationDot className="text-accent" />
        <p>м.Івано-Франківськ, вул. Тичини, 19А</p>
      </div>
      <a href="tel:+4733378901" className="flex items-center gap-2">
        <FaPhoneVolume />
        +380682349404
      </a>
   */}
      </footer>
    </div>
  );
}
