import { useContext } from "react";
import NavigationLinkItems from "./NavigationLinkItems";
import { MenuContext } from "./store/MenuContext";

export default function DropdownMenu() {
    const {closeMenuIfLinkClicked} = useContext(MenuContext)

  return (
    <nav
      id="dropdown-menu"
      className="absolute bottom-0 left-0 top-0 w-2/3 bg-background px-container-padding py-20 z-10"
      onClick={closeMenuIfLinkClicked}
    >
      <ul className="grid gap-8">
        <NavigationLinkItems />
      </ul>
    </nav>
  );
}
