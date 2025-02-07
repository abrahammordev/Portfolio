import { Button, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DownloadIcon } from "@chakra-ui/icons";
import CV from "../../assets/Abraham_Morales_Rodríguez_CV.pdf";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import bgVideo from "../../assets/bgVideo3.mp4";

// Variantes de animación
const textVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

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
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "70%",
                    objectFit: "cover",
                    zIndex: -1,
                    borderBottomLeftRadius: "60px",
                    borderBottomRightRadius: "60px",
                }}
            >
                <source src={bgVideo} type="video/mp4" />
            </video>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariant}
            >
                <Heading
                    as="h1"
                    fontSize={{ base: "3xl", md: "5xl" }}
                    fontWeight="bold"
                    color={"white"}
                    fontFamily="'Alegreya Sans SC', sans-serif"
                    ml={{ base: 0, md: 20 }}

                    mb={6}
                >
                    {t("HeroName")}
                </Heading>
                <Heading
                    as="h1"
                    fontSize={{ base: "3xl", md: "3xl" }}
                    fontWeight="semi-bold"
                    color={"brand.50"}
                    fontFamily="'Alegreya Sans SC', sans-serif"
                    ml={{ base: 0, md: 20 }}

                    mb={6}
                >
                    {t("HeroTitle")}
                </Heading>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariant}
                transition={{ delay: 0.2 }}
            >
                <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    color={"brand.50"}
                    fontFamily="'Alegreya Sans SC', sans-serif"
                    maxW="600px"
                    mb={8}
                    ml={{ base: 0, md: 20 }}

                >
                    {t("HeroSlogan")}
                </Text>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={buttonVariant}
                transition={{ delay: 0.4 }}
            >
                <Button
                    colorScheme="brand"
                    size="lg"
                    rightIcon={<DownloadIcon />}
                    bg={buttonBg}
                    _hover={{ bg: buttonHoverBg }}
                    as="a"
                    href={CV}
                    download="Abraham_Morales_CV.pdf"
                    mb={4}
                >
                    {t("HeroDownload")}
                </Button>
                <Link to="/about#about">
                    <Button
                        colorScheme="brand"
                        size="lg"
                        bg={buttonBg}
                        _hover={{ bg: buttonHoverBg }}
                        ml={4}
                        mb={4}

                    >
                        {t("HeroStart")}
                    </Button>
                </Link>
            </motion.div>
        </Flex>
    );
};

export default HeroSection;
