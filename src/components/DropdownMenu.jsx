import { motion } from "framer-motion";
import { useContext } from "react";
import NavigationLinkItems from "./NavigationLinkItems";
import { MenuContext } from "./store/MenuContext";

const dropdownBlockVariants = {
  hidden: { x: "-100%", transition: { duration: 0.3 } },
  visible: { x: 0 },
};

const dropdownListVariants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function DropdownMenu() {
  const { closeMenuIfLinkClicked } = useContext(MenuContext);

  return (
    <motion.nav
      id="dropdown-menu"
      onClick={closeMenuIfLinkClicked}
      variants={dropdownBlockVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <motion.ul
        className="grid w-fit gap-10 text-lg"
        variants={dropdownListVariants}
      >
        <NavigationLinkItems />
      </motion.ul>
    </motion.nav>
  );
}
