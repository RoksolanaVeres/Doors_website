import { NavLink } from "react-router-dom";

export default function NavigationLinks() {
  return (
    <nav className="flex justify-center ">
      <ul
        id="navigation-list"
        className="max-w-large flex w-full justify-between p-5"
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
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-600 hover:underline"
                : "font-semibold text-slate-300 hover:underline"
            }
          >
            Блог
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
