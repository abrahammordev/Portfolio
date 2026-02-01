import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import RoutePaths from "../../routes/RoutePaths";
import {
  Button,
  useColorMode,
  useColorModeValue,
  Box,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
  ScaleFade,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";
import LanguageSwitch from "./LanguageSwitch";
import { useScrollProgress } from "../../hooks/useScrollAnimation";

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isMenuOpen, onToggle: toggleMenu } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active section based on route
  useEffect(() => {
    const path = location.pathname;
    if (path === RoutePaths.Home) setActiveSection("home");
    else if (path === RoutePaths.About) setActiveSection("about");
    else if (path === RoutePaths.Projects) setActiveSection("projects");
    else if (path === RoutePaths.Contact) setActiveSection("contact");
  }, [location]);

  const navItemBaseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "48px",
    minHeight: "48px",
  };

  const fabBgColor = colorMode === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(54, 65, 80, 0.8)";
  const fabHoverBgColor = colorMode === "light" ? "rgba(240, 240, 240, 0.9)" : "rgba(74, 85, 104, 0.9)";
  const iconColor = colorMode === "light" ? "black" : "white";
  const progressColor = colorMode === "light" ? "brand.500" : "brand.300";

  const getNavLinkStyle = (path: string) => {
    const isActive = activeSection === path.replace("/", "").toLowerCase() || location.pathname === path;
    return {
      ...navItemBaseStyle,
      width: '100%',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      transition: 'all 0.2s ease-in-out',
      backgroundColor: isActive ? 'rgba(66, 153, 225, 0.1)' : 'transparent',
      transform: isActive ? 'scale(1.1)' : 'scale(1)',
    };
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        height="2px"
        bg={useColorModeValue("gray.100", "gray.800")}
        zIndex={9999}
      >
        <Box
          height="100%"
          bg={progressColor}
          width={`${scrollProgress}%`}
          transition="width 0.1s ease-out"
        />
      </Box>

      {/* Mobile FAB */}
      <Box
        position="fixed"
        bottom="2rem"
        right="2rem"
        zIndex={10}
        display={{ base: "block", md: "none" }}
      >
        <Stack spacing={4} align="flex-end">
          <ScaleFade initialScale={0.9} in={isMenuOpen}>
            <Stack
              p={3}
              bg={fabBgColor}
              backdropFilter="blur(10px)"
              borderRadius="lg"
              boxShadow="lg"
              spacing={3}
              display={isMenuOpen ? "flex" : "none"}
              align="center"
            >
              <NavLink
                to={RoutePaths.Home}
                onClick={toggleMenu}
                aria-label="Home"
                style={getNavLinkStyle(RoutePaths.Home)}
              >
                <FaHome
                  size={22}
                  color={iconColor}
                />
              </NavLink>

              <NavLink
                to={RoutePaths.About}
                onClick={toggleMenu}
                aria-label="About Me"
                style={getNavLinkStyle(RoutePaths.About)}
              >
                <FaUser size={20} color={iconColor} />
              </NavLink>

              <NavLink
                to={RoutePaths.Projects}
                onClick={toggleMenu}
                aria-label="Projects"
                style={getNavLinkStyle(RoutePaths.Projects)}
              >
                <FaCode size={20} color={iconColor} />
              </NavLink>

              <NavLink
                to={RoutePaths.Contact}
                onClick={toggleMenu}
                aria-label="Contact"
                style={getNavLinkStyle(RoutePaths.Contact)}
              >
                <FaEnvelope size={20} color={iconColor} />
              </NavLink>

              <LanguageSwitch />
              <IconButton
                aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                onClick={toggleColorMode}
                size="md"
                minWidth="48px"
                minHeight="48px"
                isRound
                bg="transparent"
                color={iconColor}
                _hover={{ bg: fabHoverBgColor }}
              />
            </Stack>
          </ScaleFade>

          <IconButton
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="fab-menu"
            aria-expanded={isMenuOpen}
            icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={toggleMenu}
            isRound
            size="lg"
            minWidth="56px"
            minHeight="56px"
            bg={fabBgColor}
            color={iconColor}
            boxShadow="lg"
            _hover={{ bg: fabHoverBgColor }}
          />
        </Stack>
      </Box>

      {/* Desktop Floating Navbar */}
      <Box
        display={{ base: "none", md: "block" }}
        position="fixed"
        bottom={isScrolled ? "1rem" : "2rem"}
        left="50%"
        transform="translateX(-50%)"
        zIndex={10}
        transition="bottom 0.3s ease-in-out"
      >
        <Stack
          align="center"
          spacing={2}
          boxShadow="0 0 80px #1014196b"
          p={3}
          transform={isScrolled ? "scale(0.9)" : "scale(1)"}
          transition="transform 0.3s ease-in-out"
          backdropFilter="blur(25px)"
          bg={colorMode === "light" ? "rgba(255, 255, 255, 0.55)" : "rgba(54, 65, 80, 0.6)"}
          borderRadius={45}
          width="fit-content"
          maxWidth="1200px"
          mx="auto"
        >
          <Flex
            alignItems="center"
            justifyContent="space-between"
            gap={8}
            width="100%"
            px={6}
          >
            <Flex as="nav" gap={4} alignItems="center">
              <NavLink
                to={RoutePaths.Home}
                aria-label="Home"
                style={navItemBaseStyle}
              >
                <FaHome
                  size={25}
                  color={activeSection === "home" ? "#4299e1" : iconColor}
                  style={{
                    transform: activeSection === "home" ? "scale(1.2)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                />
              </NavLink>

              <NavLink
                to={RoutePaths.About}
                aria-label="About Me"
                style={navItemBaseStyle}
              >
                <FaUser
                  size={25}
                  color={activeSection === "about" ? "#4299e1" : iconColor}
                  style={{
                    transform: activeSection === "about" ? "scale(1.2)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                />
              </NavLink>

              <NavLink
                to={RoutePaths.Projects}
                aria-label="Projects"
                style={navItemBaseStyle}
              >
                <FaCode
                  size={25}
                  color={activeSection === "projects" ? "#4299e1" : iconColor}
                  style={{
                    transform: activeSection === "projects" ? "scale(1.2)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                />
              </NavLink>

              <NavLink
                to={RoutePaths.Contact}
                aria-label="Contact"
                style={navItemBaseStyle}
              >
                <FaEnvelope
                  size={25}
                  color={activeSection === "contact" ? "#4299e1" : iconColor}
                  style={{
                    transform: activeSection === "contact" ? "scale(1.2)" : "scale(1)",
                    transition: "all 0.3s ease",
                  }}
                />
              </NavLink>
            </Flex>

            <Flex gap={2} alignItems="center">
              <LanguageSwitch />
              <Button
                onClick={toggleColorMode}
                bg="transparent"
                color={iconColor}
                size="md"
                minWidth="48px"
                minHeight="48px"
                _hover={{ bg: fabHoverBgColor }}
                aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
              >
                {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              </Button>
            </Flex>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default Navbar;