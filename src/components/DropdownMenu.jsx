import { motion } from "framer-motion";
import { useContext } from "react";
import NavigationLinkItems from "./NavigationLinkItems";
import { MenuContext } from "./store/MenuContext";
import { useAnimationOncePerSession } from "@/hooks/useAnimationOncePerSession";

const dropdownBlockVariants = {
  hidden: { x: "-100%", transition: { duration: 0.3 } },
  visible: { x: 0 },
};

const dropdownListVariants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function DropdownMenu() {
  const { closeMenuIfLinkClicked } = useContext(MenuContext);
  const menuListItemsAnimationHasPlayed = useAnimationOncePerSession("menuListItemsAnimation");

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
        animate={menuListItemsAnimationHasPlayed ? "visible" : null}
      >
        <NavigationLinkItems />
      </motion.ul>
    </motion.nav>
  );
}
