import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { l10n } from "@/textTranslation";
import { useContext } from "react";
import { LanguageContext } from "./store/LanguageContext";

const linkVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

export default function NavigationLinkItems() {
  const { language } = useContext(LanguageContext);
  const LINKS = [
    { page: l10n[language].navLinks.homePage, path: "/" },
    { page: l10n[language].navLinks.doors, path: "/doors?type=all" },
    { page: l10n[language].navLinks.windows, path: "/windows" },
    { page: l10n[language].navLinks.services, path: "/services" },
    { page: l10n[language].navLinks.contacts, path: "/contacts" },
  ];

  return (
    <>
      {LINKS.map((link) => {
        return (
          <motion.li
            key={link.page}
            variants={linkVariants}
            transition={{ ease: "easeOut" }}
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "after:duration-400 font-semibold text-accent after:mt-0.5 after:block after:h-0.5 after:w-auto after:scale-100 after:bg-accent after:transition-transform after:ease-in-out after:content-['']"
                  : "font-semibold text-muted-foreground after:scale-50 after:content-[''] hover:text-accent"
              }
            >
              {link.page}
            </NavLink>
          </motion.li>
        );
      })}
    </>
  );
}
