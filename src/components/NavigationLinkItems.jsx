import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const LINKS = [
  { page: "Головна", path: "/" },
  { page: "Двері", path: "/doors" },
  { page: "Вікна", path: "/windows" },
  { page: "Послуги", path: "/services" },
  { page: "Контакти", path: "/contacts" },
];

const linkVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

export default function NavigationLinkItems() {
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
                  ? "font-semibold after:scale-100 text-accent-main after:mt-0.5 after:block after:h-0.5 after:w-auto after:bg-accent-main after:transition-transform after:duration-400 after:ease-in-out after:content-['']"
                  : "after:scale-50 font-semibold text-muted-foreground after:content-[''] hover:text-accent-main"
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
