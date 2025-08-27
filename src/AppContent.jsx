import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import { publicRoutes, dashboardRoutes } from "./config/pageRoutes";
import PageNotFound from "./pages/notFound/PageNotFound";
import { useTheme } from "./hooks/useTheme";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import { useAuth } from "./hooks/useAuth";
import Loading from "./components/UiComponents/Loading";

export default function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const { loading } = useAuth();

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading type="spinner" size="lg" variant="primary" />
      </div>
    );

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map(({ path, element }, i) => (
          <Route key={i} path={path} element={element} />
        ))}

        {/* Dashboard Routes (Protected) */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout theme={theme} toggleTheme={toggleTheme} />
            </ProtectedRoute>
          }
        >
          {dashboardRoutes.map(({ path, element }, i) => (
            <Route key={i} path={path} element={element} />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
