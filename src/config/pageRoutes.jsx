// PUBLIC & AUTH
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import SignInPage from "../pages/AuthenticationPage/SignInPage";
import SignUpPage from "../pages/AuthenticationPage/SignupPage";

// DASHBOARD
import Dashboard from "../pages/DashboardPage/Dashboard";

// PROFILE PAGES
import ProfilePage from "../pages/ProfilePage/ProfilePage";

// COURSES PAGE
import AvailableCourses from "../pages/CoursesPage/AvailableCourses";
import EnrolledCourses from "../pages/CoursesPage/EnrolledCourses";

export const publicRoutes = [
  // AUTH
  { path: "/", element: <WelcomePage /> },
  { path: "/sign-in", element: <SignInPage /> },
  { path: "/sign-up", element: <SignUpPage /> },
];

export const dashboardRoutes = [
  // DASHBOARD
  { path: "/dashboard", element: <Dashboard /> },

  // PROFILE
  { path: "/profile", element: <ProfilePage /> },

  // COURSES
  { path: "/courses/available-courses", element: <AvailableCourses /> },
  { path: "/courses/enrolled-courses", element: <EnrolledCourses /> },
];
