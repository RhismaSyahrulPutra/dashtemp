// PUBLIC & AUTH
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import SignInPage from "../pages/AuthenticationPage/SignInPage";
import SignUpPage from "../pages/AuthenticationPage/SignupPage";

import Dashboard from "../pages/DashboardPage/Dashboard";

// PROFILE PAGES
import ProfilePage from "../pages/ProfilePage/ProfilePage";

// TASK PAGES
import ListPage from "../pages/TaskPage/ListPage";
import KanbanPage from "../pages/TaskPage/KanbanPage";

// TABLES
import SimpleTablePage from "../pages/TablePage/SimpleTablePage";

// CHART PAGES
import LineChartPage from "../pages/Chart/LineChartPage";
import BarChartPage from "../pages/Chart/BarChartPage";
import PieChartPage from "../pages/Chart/PieChartPage";

// UI PAGES

export const publicRoutes = [
  { path: "/", element: <WelcomePage /> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
];

export const dashboardRoutes = [
  // DASHBOARD PAGE
  { path: "/dashboard", element: <Dashboard /> },

  // PROFILE PAGES
  { path: "/profile", element: <ProfilePage /> },

  { path: "/task/list", element: <ListPage /> },
  { path: "/task/kanban", element: <KanbanPage /> },

  // TABLES
  { path: "/table/simple-table", element: <SimpleTablePage /> },

  // CHART PAGES
  { path: "/chart/line-chart", element: <LineChartPage /> },
  { path: "/chart/bar-chart", element: <BarChartPage /> },
  { path: "/chart/pie-chart", element: <PieChartPage /> },
];
