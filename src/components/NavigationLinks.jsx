import { NavLink } from "react-router-dom";

export default function NavigationLinks() {
  return (
    <nav className="flex">
      <ul
        id="navigation-list"
        className="flex w-full max-w-large justify-between gap-4"
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-accent-main hover:underline"
                : "font-semibold text-muted-foreground hover:underline"
            }
          >
            LOGO
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/doors"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-accent-main hover:underline"
                : "font-semibold text-muted-foreground hover:underline"
            }
          >
            Двері
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/windows"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-accent-main hover:underline"
                : "font-semibold text-muted-foreground hover:underline"
            }
          >
            Вікна
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-accent-main hover:underline"
                : "font-semibold text-muted-foreground hover:underline"
            }
          >
            Наші послуги
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-accent-main hover:underline"
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
