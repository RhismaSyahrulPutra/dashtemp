import { useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar({
  isSidebarOpen,
  toggleSidebar,
  theme,
  toggleTheme,
}) {
  const isDark = theme === "dark";
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/sign-in");
  };

  return (
    <header className="navbar bg-base-100 shadow px-6">
      <div className="flex-none">
        <button className="btn btn-ghost btn-square" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      <div className="flex-1 font-bold text-lg ml-4">DASHTEMP</div>

      <div className="flex-none flex items-center gap-2">
        {/* Tombol toggle tema */}
        <label
          className="btn btn-ghost btn-circle swap swap-rotate"
          aria-label="Toggle theme"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {/* Checkbox untuk kontrol swap */}
          <input type="checkbox" checked={isDark} onChange={toggleTheme} />

          {/* Icon saat dark mode aktif */}
          <SunIcon className="swap-on h-6 w-6 text-warning" />

          {/* Icon saat light mode aktif */}
          <MoonIcon className="swap-off h-6 w-6 text-blue-500" />
        </label>

        <button className="btn btn-ghost btn-circle">
          <BellIcon className="h-6 w-6" />
        </button>

        {/* Profile dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-6 rounded-full bg-base-300 flex items-center justify-center">
              <UserCircleIcon className="h-6 w-6" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-44"
          >
            <li>
              <Link to="/settings">
                <Cog6ToothIcon className="h-5 w-5" />
                Settings
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
