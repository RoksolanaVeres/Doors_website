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
      <footer className="px-container-padding flex w-full max-w-large flex-wrap justify-between gap-5 py-5 text-sm">
        <div id="footer-col-1" className="">
          <a href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9F%D0%B0%D0%B2%D0%BB%D0%B0+%D0%A2%D0%B8%D1%87%D0%B8%D0%BD%D0%B8,+19%D0%B0,+%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA,+%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+76000/@48.925289,24.7025273,17z/data=!3m1!4b1!4m6!3m5!1s0x4730c113d6f65c1b:0x19f2371228a7a433!8m2!3d48.9252855!4d24.7051022!16s%2Fg%2F11p5zhqzsj?entry=ttu">
            <div className="flex gap-2">
              <FaLocationDot className="mt-2" />
              <p className="font-inter">
                м.Івано-Франківськ,
                <br />
                вул. Тичини 19А
              </p>
            </div>
          </a>
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
      </footer>
    </div>
  );
}
