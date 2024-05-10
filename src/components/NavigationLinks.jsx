import { NavLink } from "react-router-dom";
import doorImg from "../assets/door.png"

export default function NavigationLinks() {
  return (
    <nav className="flex justify-center ">
      <ul
        id="navigation-list"
        className="flex w-full max-w-large justify-between px-container-padding py-5"
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-accent-main font-semibold hover:underline"
                : "font-semibold text-muted-foreground hover:underline"
            }
          >
            LOGO
            {/* <img className="w-8" src={doorImg} alt="" /> */}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalogue"
            className={({ isActive }) =>
              isActive
                ? "text-accent-main font-semibold hover:underline"
                : "font-semibold text-muted-foreground hover:underline"
            }
          >
            Каталог
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              isActive
                ? "text-accent-main font-semibold hover:underline"
                : "font-semibold text-muted-foreground hover:underline"
            }
          >
            Бренди
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-accent-main font-semibold hover:underline"
                : "font-semibold text-muted-foreground hover:underline"
            }
          >
            Послуги
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? "text-accent-main font-semibold hover:underline"
                : "font-semibold text-muted-foreground hover:underline"
            }
          >
            Контакти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
