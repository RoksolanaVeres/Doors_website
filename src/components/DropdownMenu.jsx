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
        animate={menuListItemsAnimationHasPlayed ? "visible" : null}
      >
        <NavigationLinkItems />
      </motion.ul>
    </motion.nav>
  );
}
