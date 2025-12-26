import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import RoutePaths from "./RoutePaths";
import ScrollToTop from "./ScrollTop";
import { Center, Spinner } from "@chakra-ui/react"; 

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Projects = lazy(() => import("../pages/Projects")); 

const AppRoutes: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense 
        fallback={
          <Center h="100vh">
            <Spinner size="xl" color="brand.500" thickness="4px" />
          </Center>
        }
      >
        <Routes>
          <Route path={RoutePaths.Home} element={<Home />} />
          <Route path={RoutePaths.About} element={<About />} />
          <Route path={RoutePaths.Contact} element={<Contact />} />
          <Route path={RoutePaths.Projects} element={<Projects />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
