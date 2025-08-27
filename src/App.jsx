import { ThemeProvider } from "./context/themeProvider";
import { AuthProvider } from "./context/AuthProvider";
import AppContent from "./AppContent";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
        <Toaster position="top-right" />
      </AuthProvider>
    </ThemeProvider>
  );
}
