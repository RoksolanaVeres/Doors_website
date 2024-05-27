import { useContext } from "react";
import NavigationLinkItems from "./NavigationLinkItems";
import { MenuContext } from "./store/MenuContext";
import { motion } from "framer-motion";

export default function DropdownMenu() {
    const {closeMenuIfLinkClicked} = useContext(MenuContext)

  return (
    <motion.nav
      id="dropdown-menu"
      className="absolute bottom-0 left-0 top-0 z-10 w-2/3 bg-background px-container-padding py-20"
      onClick={closeMenuIfLinkClicked}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <ul className="grid gap-8">
        <NavigationLinkItems />
      </ul>
    </motion.nav>
  );
}
