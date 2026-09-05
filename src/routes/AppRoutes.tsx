import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RoutePaths from "./RoutePaths";
import ScrollToTop from "./ScrollTop";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

function RouteFallback() {
  return (
    <div className="flex min-h-[70dvh] items-center justify-center" role="status" aria-live="polite">
      <span className="size-7 animate-spin rounded-full border-2 border-border border-t-accent" />
      <span className="sr-only">Loading</span>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path={RoutePaths.Home} element={<Home />} />
          <Route path={RoutePaths.About} element={<About />} />
          <Route path={RoutePaths.Projects} element={<Projects />} />
          <Route path={RoutePaths.Contact} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
