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
// AUTHENTICATION PAGE
import SignInPage from "../pages/AuthenticationPage/SignInPage";
import SignupPage from "../pages/AuthenticationPage/SignupPage";
import ResetPassword from "../pages/AuthenticationPage/ResetPassword";
import TwoStepVerification from "../pages/AuthenticationPage/TwoStepVerification";

const pageRoutes = [
  // DASHBOARD PAGE
  { path: "/", element: <Dashboard /> },

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

  // AUTHENTICATION PAGES
  { path: "/auth/sign-in", element: <SignInPage /> },
  { path: "/auth/sign-up", element: <SignupPage /> },
  { path: "/auth/reset-password", element: <ResetPassword /> },
  { path: "/auth/two-step-verification", element: <TwoStepVerification /> },
];

export default pageRoutes;
