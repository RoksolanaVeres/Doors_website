// components
import NavigationLinkItems from "./NavigationLinkItems";

// hooks
import { useContext } from "react";

//constexts
import { MenuContext } from "./store/MenuContext";

// framer motion
import { motion } from "framer-motion";

// variables
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
      className="absolute bottom-0 left-0 top-0 z-10 w-2/3 bg-background px-container-padding py-28"
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
