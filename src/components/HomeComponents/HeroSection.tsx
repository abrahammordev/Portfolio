import { Button, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DownloadIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";
import ScrollIndicator from "./ScrollIndicator";
import { fadeInUp, scaleIn, staggerContainer } from "../../lib/animations";

const HeroSection = () => {
    const buttonBg = useColorModeValue("brand.500", "brand.300");
    const buttonHoverBg = useColorModeValue("brand.600", "brand.400");
    const { t } = useTranslation();

    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        minH="100vh"
        p={8}
        position="relative"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl" }}
              fontWeight="bold"
              color={"brand.letter"}
              fontFamily="'Alegreya Sans SC', sans-serif"
              ml={{ base: 0, md: 10 }}
              mb={4}
            >
              {t("HeroName")}
            </Heading>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="semi-bold"
              fontFamily="'Alegreya Sans SC', sans-serif"
              ml={{ base: 0, md: 10 }}
              mb={6}
              minHeight="60px"
            >
              <TypingAnimation />
            </Heading>
          </motion.div>

          <motion.div variants={scaleIn}>
            <Button
              colorScheme="brand"
              size="lg"
              rightIcon={<DownloadIcon />}
              bg={buttonBg}
              _hover={{ bg: buttonHoverBg, transform: "scale(1.05)" }}
              as="a"
              href="/AbrahamMoralesCV.pdf"
              download="AbrahamMoralesCV.pdf"
              mb={4}
              color={"white"}
              transition="transform 0.2s ease"
            >
              {t("HeroDownload")}
            </Button>
            <Link to="/about#about">
              <Button
                colorScheme="brand"
                size="lg"
                bg={buttonBg}
                _hover={{ bg: buttonHoverBg, transform: "scale(1.05)" }}
                ml={{ base: 0, sm: 2, md: 4 }}
                mb={4}
                color={"white"}
                transition="transform 0.2s ease"
              >
                {t("HeroStart")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <ScrollIndicator />
      </Flex>
    );
};

export default HeroSection;

