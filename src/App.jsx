import { ThemeProvider } from "./context/themeProvider";
import { AuthProvider } from "./context/AuthProvider";
import AppContent from "./AppContent";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}
