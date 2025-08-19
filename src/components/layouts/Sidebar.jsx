import { Link, useLocation } from "react-router-dom";
import sidebarLinks from "../../config/sidebarLinks";
import { useState } from "react";

export default function Sidebar({ isSidebarOpen }) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (name) => {
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  return (
    <aside
      className={`bg-base-200 shadow-lg flex flex-col transition-all duration-300 ease-in-out overflow-hidden
    ${isSidebarOpen ? "w-64" : "w-0"}
    fixed md:static top-16 md:top-0 left-0 h-[calc(100%-4rem)] md:h-auto
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
    z-40`}
    >
      <nav className="flex-1 p-4 space-y-2">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;

          if (link.children) {
            const isOpen = openMenu === link.name;
            return (
              <div key={link.name}>
                <button
                  className="btn btn-ghost w-full justify-start gap-2"
                  onClick={() => toggleMenu(link.name)}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  {link.name}
                  <span className="ml-auto">{isOpen ? "▾" : "▸"}</span>
                </button>
                <div
                  className={`pl-8 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-96 opacity-100 overflow-y-auto"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className={`btn w-full justify-start ${
                        location.pathname === child.path
                          ? "btn-primary text-white"
                          : "btn-ghost"
                      }`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`btn w-full justify-start gap-2 ${
                location.pathname === link.path
                  ? "btn-primary text-white"
                  : "btn-ghost"
              }`}
            >
              {Icon && <Icon className="h-5 w-5" />}
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
