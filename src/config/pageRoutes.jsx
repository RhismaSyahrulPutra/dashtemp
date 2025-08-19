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
import AccordionPage from "../pages/UIPages/AccordionPage";
import AvatarPage from "../pages/UIPages/AvatarPage";
import BadgePage from "../pages/UIPages/BadgePage";
import ButtonPage from "../pages/UIPages/ButtonPage";
import CardPage from "../pages/UIPages/CardPage";
import CollapsePage from "../pages/UIPages/CollapsePage";
import CountDownPage from "../pages/UIPages/CountDownPage";
import DividerPage from "../pages/UIPages/DividerPage";
import HeaderPage from "../pages/UIPages/HeaderPage";
import ModalPage from "../pages/UIPages/ModalPage";
import PageWrapperPage from "../pages/UIPages/PageWrapperPage";
import PaginationPage from "../pages/UIPages/PaginationPage";
import ProgressBarPage from "../pages/UIPages/ProgressBarPage";
import StatusPage from "../pages/UIPages/StatusPage";
import StepsPage from "../pages/UIPages/StepsPage";
import TablePage from "../pages/UIPages/TablePage";
import TabsPage from "../pages/UIPages/TabsPage";
import TooltipPage from "../pages/UIPages/TooltipPage";

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

  // UI PAGES
  { path: "/ui/accordion", element: <AccordionPage /> },
  { path: "/ui/avatar", element: <AvatarPage /> },
  { path: "/ui/badge", element: <BadgePage /> },
  { path: "/ui/button", element: <ButtonPage /> },
  { path: "/ui/card", element: <CardPage /> },
  { path: "/ui/collapse", element: <CollapsePage /> },
  { path: "/ui/countdown", element: <CountDownPage /> },
  { path: "/ui/divider", element: <DividerPage /> },
  { path: "/ui/header", element: <HeaderPage /> },
  { path: "/ui/modal", element: <ModalPage /> },
  { path: "/ui/page-wrapper", element: <PageWrapperPage /> },
  { path: "/ui/pagination", element: <PaginationPage /> },
  { path: "/ui/progress-bar", element: <ProgressBarPage /> },
  { path: "/ui/status", element: <StatusPage /> },
  { path: "/ui/steps", element: <StepsPage /> },
  { path: "/ui/table", element: <TablePage /> },
  { path: "/ui/tabs", element: <TabsPage /> },
  { path: "/ui/tooltip", element: <TooltipPage /> },

  // AUTHENTICATION PAGES
  { path: "/auth/sign-in", element: <SignInPage /> },
  { path: "/auth/sign-up", element: <SignupPage /> },
  { path: "/auth/reset-password", element: <ResetPassword /> },
  { path: "/auth/two-step-verification", element: <TwoStepVerification /> },
];

export default pageRoutes;
