import React from "react";
import { Routes, Route } from "react-router-dom";
import RoutePaths from "./RoutePaths";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import ScrollToTop from "./ScrollTop";

const AppRoutes: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={RoutePaths.Home} element={<Home />} />
        <Route path={RoutePaths.About} element={<About />} />
        <Route path={RoutePaths.Contact} element={<Contact />} />
        <Route path={RoutePaths.Projects} element={<Projects />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
