import { NavLink } from "react-router-dom";



export default function NavigationLinkItems() {
  const links = [
    { page: "Головна", path: "/" },
    { page: "Двері", path: "/doors" },
    { page: "Вікна", path: "/windows" },
    { page: "Послуги", path: "/services" },
    { page: "Контакти", path: "/contacts" },
  ];

  return (
    <>
      {links.map((link)=>{
        return (
          <li key={link.page}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-accent-main hover:underline"
                  : "font-semibold text-muted-foreground hover:underline"
              }
            >
              {link.page}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}
