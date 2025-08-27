// src/config/sidebarLinks.jsx
import {
  Squares2X2Icon,
  CalendarDaysIcon,
  UserIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  PuzzlePieceIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const sidebarLinks = [
  { name: "Dashboard", path: "/dashboard", icon: Squares2X2Icon },

  { name: "Profile", path: "/profile", icon: UserIcon },

  {
    name: "Task",
    icon: ClipboardDocumentCheckIcon,
    children: [
      { name: "List", path: "/task/List" },
      { name: "Kanban", path: "/task/Kanban" },
    ],
  },
  {
    name: "Tables",
    icon: ClipboardDocumentCheckIcon,
    children: [{ name: "Simple Table", path: "/table/simple-table" }],
  },

  {
    name: "Charts",
    icon: ChartBarIcon,
    children: [
      { name: "Line Chart", path: "/chart/line-chart" },
      { name: "Bar Chart", path: "/chart/bar-chart" },
      { name: "Pie Chart", path: "/chart/pie-chart" },
    ],
  },

  {
    name: "Authentication",
    icon: LockClosedIcon,
    children: [
      { name: "Sign In", path: "/auth/sign-in" },
      { name: "Sign Up", path: "/auth/sign-up" },
    ],
  },
];

export default sidebarLinks;
