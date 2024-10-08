import { l10n } from "@/textTranslation";
import { useContext } from "react";
import {
  FaEnvelope,
  FaLocationDot,
  FaPhoneVolume,
  FaViber,
} from "react-icons/fa6";
import { HiLockClosed } from "react-icons/hi2";
import { LanguageContext } from "./store/LanguageContext";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const footerText = l10n[language].footer;
  return (
    <div className="flex bg-background-secondary font-inter">
      <footer className="max-w-large flex w-full flex-wrap justify-between gap-5 px-container-padding py-5 text-sm md:text-base">
        <div id="footer-col-1" className="mx-auto md:mx-0">
          <a href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9F%D0%B0%D0%B2%D0%BB%D0%B0+%D0%A2%D0%B8%D1%87%D0%B8%D0%BD%D0%B8,+19%D0%B0,+%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA,+%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+76000/@48.925289,24.7025273,17z/data=!3m1!4b1!4m6!3m5!1s0x4730c113d6f65c1b:0x19f2371228a7a433!8m2!3d48.9252855!4d24.7051022!16s%2Fg%2F11p5zhqzsj?entry=ttu">
            <div className="flex gap-2">
              <FaLocationDot className="mt-2" />
              <p className="">
                {footerText.address[0]},
                <br />
                {footerText.address[1]}
              </p>
            </div>
          </a>
        </div>

        <div id="footer-col-2" className="mx-auto md:mx-0">
          <p>{footerText.workingHours.workdays}: 9:00-17:00</p>
          <p>{footerText.workingHours.saturday}: 9:00-16:00</p>
          <p className="flex items-center gap-2">
            {footerText.workingHours.sunday}:{" "}
            <HiLockClosed className="text-destructive" />
          </p>
        </div>

        <div id="footer-col-3" className="mx-auto md:mx-0">
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
