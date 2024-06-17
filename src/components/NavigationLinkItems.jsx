import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

// variables
const LINKS = [
  { page: "Головна", path: "/" },
  { page: "Двері", path: "/doors?type=all" },
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
                  ? "after:duration-400 font-semibold text-accent-main after:mt-0.5 after:block after:h-0.5 after:w-auto after:scale-100 after:bg-accent-main after:transition-transform after:ease-in-out after:content-['']"
                  : "font-semibold text-muted-foreground after:scale-50 after:content-[''] hover:text-accent-main"
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
