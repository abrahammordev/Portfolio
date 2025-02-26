import React from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

// Component that shows the social links and give easy access to them
const SocialLinks: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      display={{ base: "none", md: "flex" }}
      flexDirection={{ base: "row", md: "column" }}
      gap={4}
      position={{ base: "fixed", md: "fixed" }}
      left={{ base: "50%", md: "2%" }}
      bottom={{ base: "0", md: "auto" }}
      top={{ base: "auto", md: "50%" }}
      transform={{ base: "translateX(-50%)", md: "translateY(-50%)" }}
      zIndex={3}
      alignItems="center"
    >
      <IconButton
        as="a"
        href="https://github.com/abrahammordev"
        target="_blank"
        aria-label="GitHub"
        icon={<FaGithub />}
        boxSize={["40px", "50px", "60px"]}
        color={"black"}
        _hover={{
          color: "black",
          transform: "scale(1.3)",
          transition: "all 0.3s ease",
        }}
        isRound
        _active={{
          opacity: 1,
        }}
        bg={colorMode === "dark" ? "brand.100" : "brand.100"}
      />

      <IconButton
        as="a"
        href="https://www.linkedin.com/in/abrahammordev"
        target="_blank"
        aria-label="LinkedIn"
        icon={<FaLinkedin />}
        boxSize={["40px", "50px", "60px"]}
        color={"black"}
        _hover={{
          color: "black",
          transform: "scale(1.3)",
          transition: "all 0.3s ease",
        }}
        isRound
        _active={{
          opacity: 1,
        }}
        bg={colorMode === "dark" ? "brand.100" : "brand.100"}
      />

      <IconButton
        as="a"
        href="mailto:tu-abrahammordev@gmail.com"
        target="_blank"
        aria-label="Gmail"
        icon={<FaGoogle />}
        boxSize={["40px", "50px", "60px"]}
        color={"black"}
        _hover={{
          color: "black",
          transform: "scale(1.3)",
          transition: "all 0.3s ease",
        }}
        isRound
        _active={{
          opacity: 1,
        }}
        bg={colorMode === "dark" ? "brand.100" : "brand.100"}
      />
    </Box>
  );
};

export default SocialLinks;
