import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const LINKS = [
  { page: "Головна", path: "/" },
  { page: "Двері", path: "/doors" },
  { page: "Вікна", path: "/windows" },
  { page: "Послуги", path: "/services" },
  { page: "Контакти", path: "/contacts" },
];

export default function NavigationLinkItems() {
  return (
    <>
      {LINKS.map((link) => {
        return (
          <motion.li
            key={link.page}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ ease: "easeOut" }}
          >
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-accent-main hover:underline"
                  : "font-semibold text-muted-foreground hover:underline"
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
