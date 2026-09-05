import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import AppRoutes from "./routes/AppRoutes";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Background } from "./components/layout/Background";
import { useTheme } from "./hooks/useTheme";
import "./i18n/i18n";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      {import.meta.env.PROD && <Analytics />}
      <Background />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main" className="min-h-[60dvh]">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
