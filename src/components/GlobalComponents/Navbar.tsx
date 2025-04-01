import React from "react";
import { NavLink } from "react-router-dom";
import RoutePaths from "../../routes/RoutePaths";
import { Button, useColorMode, Box, Flex, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
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
      backdropFilter="blur(25px)"
      bg={colorMode === "light" ? "rgba(255, 255, 255, 0.55)" : "rgba(54, 65, 80, 0.6)"}

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
      gap={4}
    >
      <Flex display={{ base: "flex", md: "none" }} flexDirection="row" alignItems="center" justifyContent="center" gap={4}>
        <IconButton
          as="a"
          href="https://github.com/abrahammordev"
          target="_blank"
          aria-label="GitHub"
          icon={<FaGithub />}
          color={colorMode === "light" ? "#000" : "#fff"}
          isRound
          _active={{
            opacity: 1,
          }}
          bg="transparent"
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/abrahammordev"
          target="_blank"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          color={colorMode === "light" ? "#000" : "#fff"}
          isRound
          _active={{
            opacity: 1,
          }}
          bg="transparent"
        />
        <IconButton
          as="a"
          href="mailto:tu-abrahammordev@gmail.com"
          target="_blank"
          aria-label="Gmail"
          icon={<FaGoogle />}
          color={colorMode === "light" ? "#000" : "#fff"}
          isRound
          _active={{
            opacity: 1,
          }}
          bg="transparent"
        />
      </Flex>
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
              `transition-transform duration-300 ${isActive ? "text-brand-300 scale-150" : "text-inherit"
              } hover:text-brand-200 hover:scale-140`
            }
          >
            <FaHome size={25} color={colorMode === "light" ? "#000" : "#fff"} />
          </NavLink>

          <NavLink
            to={RoutePaths.About}
            className={({ isActive }) =>
              `transition-transform duration-300 ${isActive ? "text-brand-300 scale-150" : "text-inherit"
              } hover:text-brand-200 hover:scale-140`
            }
          >
            <FaUser size={25} color={colorMode === "light" ? "#000" : "#fff"} />
          </NavLink>

          <NavLink
            to={RoutePaths.Projects}
            className={({ isActive }) =>
              `transition-transform duration-300 ${isActive ? "text-brand-300 scale-150" : "text-inherit"
              } hover:text-brand-200 hover:scale-140`
            }
          >
            <FaCode size={25} color={colorMode === "light" ? "#000" : "#fff"} />
          </NavLink>

          <NavLink
            to={RoutePaths.Contact}
            className={({ isActive }) =>
              `transition-transform duration-300 ${isActive ? "text-brand-300 scale-150" : "text-inherit"
              } hover:text-brand-200 hover:scale-140`
            }
          >
            <FaEnvelope size={25} color={colorMode === "light" ? "#000" : "#fff"} />
          </NavLink>
        </Flex>

        <Flex gap={[1, 2]} alignItems="center" flexDirection={["row", "row"]}>
          <LanguageSwitch />
          <Button
            onClick={toggleColorMode}
            bg="transparent"
            color={colorMode === "dark" ? "white" : "brand.100"}
            size={["sm", "md"]}
            _hover={{
              bg: colorMode === "dark" ? "brand.100" : "brand.100",
            }}

          >
            {colorMode === "dark" ? <SunIcon color="white" /> : <MoonIcon color="black" />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;