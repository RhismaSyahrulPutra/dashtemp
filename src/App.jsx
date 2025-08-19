import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import pageRoutes from "./config/pageRoutes";
import PageNotFound from "./pages/notFound/PageNotFound";
import { ThemeProvider } from "./context/themeProvider";
import { useTheme } from "./hooks/useTheme";

function AppContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <Routes>
        <Route
          element={<DashboardLayout theme={theme} toggleTheme={toggleTheme} />}
        >
          {pageRoutes.map(({ path, element }, i) => (
            <Route key={i} path={path} element={element} />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
