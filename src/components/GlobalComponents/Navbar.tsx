import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import RoutePaths from "../../routes/RoutePaths";
import {
  Button,
  useColorMode,
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

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isMenuOpen, onToggle: toggleMenu } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <>
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
                style={{
                  ...navItemBaseStyle,
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
                  textDecoration: 'none',
                }}
                className={({ isActive }) =>
                  `flex items-center gap-3 group ${isActive ? 'bg-brand-100 text-brand-500' : ''
                  } hover:bg-${colorMode === 'light' ? 'gray-100' : 'gray-700'}`
                }
              >
                <FaHome
                  size={22}
                  color={iconColor}
                  className="transition-colors duration-200 group-hover:text-brand-500"
                />
                {/* Text label removed */}
              </NavLink>

              <NavLink
                to={RoutePaths.About}
                onClick={toggleMenu}
                aria-label="About Me"
                style={{
                  ...navItemBaseStyle,
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s ease-in-out',
                }}
                className={({ isActive }) =>
                  `flex items-center gap-3 ${isActive ? 'bg-brand-100 text-brand-500' : ''
                  } hover:bg-${colorMode === 'light' ? 'gray-100' : 'gray-700'}`
                }
              >
                <FaUser size={20} color={iconColor} />
                {/* Text label removed */}
              </NavLink>
              <NavLink
                to={RoutePaths.Projects}
                onClick={toggleMenu}
                aria-label="Projects"
                style={{
                  ...navItemBaseStyle,
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s ease-in-out',
                }}
                className={({ isActive }) =>
                  `flex items-center gap-3 ${isActive ? 'bg-brand-100 text-brand-500' : ''
                  } hover:bg-${colorMode === 'light' ? 'gray-100' : 'gray-700'}`
                }
              >
                <FaCode size={20} color={iconColor} />
                {/* Text label removed */}
              </NavLink>
              <NavLink
                to={RoutePaths.Contact}
                onClick={toggleMenu}
                aria-label="Contact"
                style={{
                  ...navItemBaseStyle,
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s ease-in-out',
                }}
                className={({ isActive }) =>
                  `flex items-center gap-3 ${isActive ? 'bg-brand-100 text-brand-500' : ''
                  } hover:bg-${colorMode === 'light' ? 'gray-100' : 'gray-700'}`
                }
              >
                <FaEnvelope size={20} color={iconColor} />
                {/* Text label removed */}
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

      <Box
        display={{ base: "none", md: "block" }}
        position="fixed"
        bottom={isScrolled ? "1rem" : "2rem"}
        left="50%"
        transform="translateX(-50%)"
        zIndex={10}
        transition="bottom 0.3s ease-in-out, transform 0.3s ease-in-out"
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
                className={({ isActive }) =>
                  `transition-transform duration-300 ${isActive ? "text-brand-300 scale-125" : "text-inherit"} hover:text-brand-200 hover:scale-110`
                }
                aria-label="Home"
                style={navItemBaseStyle}
              >
                <FaHome size={25} color={iconColor} />
              </NavLink>
              <NavLink
                to={RoutePaths.About}
                className={({ isActive }) =>
                  `transition-transform duration-300 ${isActive ? "text-brand-300 scale-125" : "text-inherit"} hover:text-brand-200 hover:scale-110`
                }
                aria-label="About Me"
                style={navItemBaseStyle}
              >
                <FaUser size={25} color={iconColor} />
              </NavLink>
              <NavLink
                to={RoutePaths.Projects}
                className={({ isActive }) =>
                  `transition-transform duration-300 ${isActive ? "text-brand-300 scale-125" : "text-inherit"} hover:text-brand-200 hover:scale-110`
                }
                aria-label="Projects"
                style={navItemBaseStyle}
              >
                <FaCode size={25} color={iconColor} />
              </NavLink>
              <NavLink
                to={RoutePaths.Contact}
                className={({ isActive }) =>
                  `transition-transform duration-300 ${isActive ? "text-brand-300 scale-125" : "text-inherit"} hover:text-brand-200 hover:scale-110`
                }
                aria-label="Contact"
                style={navItemBaseStyle}
              >
                <FaEnvelope size={25} color={iconColor} />
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