import { NavLink } from "react-router-dom";

export default function NavigationLinks() {
  return (
    <nav className="flex justify-center ">
      <ul
        id="navigation-list"
        className="px-container-padding flex w-full max-w-large justify-between py-5"
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-600 hover:underline"
                : "font-semibold text-slate-300 hover:underline"
            }
          >
            LOGO
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalogue"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-600 hover:underline"
                : "font-semibold text-slate-300 hover:underline"
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
                ? "font-semibold text-red-600 hover:underline"
                : "font-semibold text-slate-300 hover:underline"
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
                ? "font-semibold text-red-600 hover:underline"
                : "font-semibold text-slate-300 hover:underline"
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
                ? "font-semibold text-red-600 hover:underline"
                : "font-semibold text-slate-300 hover:underline"
            }
          >
            Контакти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
