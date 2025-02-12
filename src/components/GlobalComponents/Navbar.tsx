import React from "react";
import { NavLink } from "react-router-dom";
import RoutePaths from "../../routes/RoutePaths";
import { Button, useColorMode, Box, Flex } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import LanguageSwitch from "./LanguageSwitch";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 3) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      boxShadow="0 0 80px #1014196b"
      p={3}
      transform={isScrolled ? "scale(0.9)" : "scale(1)"}
      transition="transform 0.3s ease-in-out"
      backdropFilter="blur(15px)"
      bg={colorMode === "light" ? "#ffffff99" : "#36415099"}
      borderRadius={45}
      width="fit-content"
      maxWidth="1200px"
      mx="auto"
      mb={4}
      alignContent="center"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={1}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection={["row", "row"]}
        px={[2, 6]}
        gap={[4, 8]}
      >
        <Flex
          as="nav"
          gap={[2, 4]}
          alignItems="center"
          flexDirection={["row", "row"]}
        >
          <NavLink
            to={RoutePaths.Home}
            className={({ isActive }) =>
              `transition-colors duration-300 ${
                isActive ? "text-brand-300" : "text-inherit"
              } hover:text-brand-200`
            }
          >
            <FaHome size={25} color={colorMode === "light" ? "#000" : "#fff"} />
          </NavLink>

          <NavLink to={RoutePaths.About}>
            <FaUser size={25} color={colorMode === "light" ? "#000" : "#fff"} />
          </NavLink>

          <NavLink to={RoutePaths.Projects}>
            <FaCode size={25} color={colorMode === "light" ? "#000" : "#fff"} />
          </NavLink>

          <NavLink to={RoutePaths.Contact}>
            <FaEnvelope size={25} color={colorMode === "light" ? "#000" : "#fff"} />
          </NavLink>
        </Flex>

        <Flex gap={[1, 2]} alignItems="center" flexDirection={["row", "row"]}>
          <LanguageSwitch />
          <Button
            onClick={toggleColorMode}
            bg="transparent"
            color="brand.100"
            size={["sm", "md"]}
          >
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;