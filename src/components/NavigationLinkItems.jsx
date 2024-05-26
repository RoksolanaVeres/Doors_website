import { NavLink } from "react-router-dom";

export default function NavigationLinkItems() {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-accent-main hover:underline"
              : "font-semibold text-muted-foreground hover:underline"
          }
        >
          Головна
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
       Послуги
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
    </>
  );
}
