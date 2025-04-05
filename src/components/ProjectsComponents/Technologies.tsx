import { Heading, Box, useColorModeValue, Flex, Text, Stack } from "@chakra-ui/react";
import {
    FaJava,
    FaPython,
    FaJs,
    FaDocker,
    FaGitAlt,
    FaGithub,
    FaDatabase,
    FaHtml5,
    FaCss3Alt,
    FaAws,
    FaPhp,
    
} from "react-icons/fa";
import { SiDjango, SiReact, SiMysql, SiTailwindcss, SiScrumalliance, SiTypescript, SiChakraui, SiFirebase, SiGrafana, SiFigma, SiTrello } from "react-icons/si";

const TechnologiesSection = () => {
    const technologyGroups = [
        {
            category: "Languages",
            items: [
                { icon: <FaJava size="2.5rem" /> },
                { icon: <FaPython size="2.5rem" /> },
                { icon: <FaJs size="2.5rem" /> },
                { icon: <SiTypescript size="2.5rem" /> },
                { icon: <FaPhp size="2.5rem" /> }

            ]
        },
        {
            category: "Frontend",
            items: [
                { icon: <SiReact size="2.5rem" /> },
                { icon: <FaHtml5 size="2.5rem" /> },
                { icon: <FaCss3Alt size="2.5rem" /> },
                { icon: <SiTailwindcss size="2.5rem" /> },
                { icon: <SiChakraui size="2.5rem" /> }
            ]
        },
        {
            category: "Backend",
            items: [
                { icon: <SiDjango size="2.5rem" /> },
                { icon: <FaDatabase size="2.5rem" /> },
                { icon: <SiMysql size="2.5rem" /> },
                { icon: <SiFirebase size="2.5rem" /> }
            ]
        },
        {
            category: "DevOps",
            items: [
                { icon: <FaDocker size="2.5rem" /> },
                { icon: <FaAws size="2.5rem" /> },
                { icon: <SiGrafana size="2.5rem" /> },
            ]
        },
        {
            category: "Tools",
            items: [
                { icon: <FaGitAlt size="2.5rem" /> },
                { icon: <FaGithub size="2.5rem" /> },
                { icon: <SiScrumalliance size="2.5rem" /> },
                { icon: <SiFigma size="2.5rem" /> },
                { icon: <SiTrello size="2.5rem" /> }
            ]
        }
    ];

    const columnBg = useColorModeValue("white", "gray.700");
    const categoryColor = useColorModeValue("brand.500", "brand.300");

    return (
        <Box py={16}>
            <Heading
                as="h2"
                textAlign="center"
                mb={12}
                fontSize="4xl"
                color={useColorModeValue("gray.600", "gray.300")}
            >
                Tech Stack
            </Heading>

            <Flex
                direction={{ base: "column", md: "row" }}
                justify={{ base: "center", md: "space-between" }}
                gap={6}
                maxW="1200px"
                mx="auto"
                px={4}
                textAlign={{ base: "center", md: "center" }}
            >
                {technologyGroups.map((group, index) => (
                    <Stack
                        key={index}
                        direction="column"
                        spacing={6}
                        p={6}
                        bg={columnBg}
                        borderRadius="2xl"
                        boxShadow="lg"
                        minW={{ base: "100%", md: "200px" }}
                    >
                        <Text
                            fontSize="xl"
                            fontWeight="bold"
                            color={categoryColor}
                            textTransform="uppercase"
                            letterSpacing="wide"
                        >
                            {group.category}
                        </Text>

                        <Stack
                            direction={{ base: "row", sm: "column" }}
                            spacing={6}
                            width="100%"
                            flexWrap="wrap"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {group.items.map((tech, techIndex) => (
                                <Box
                                    key={techIndex}
                                    p={4}
                                    borderRadius="lg"
                                    transition="all 0.3s"
                                    _hover={{
                                        transform: "scale(1.2)",
                                        color: "brand.300",
                                        cursor: "default"
                                    }}
                                >
                                    {tech.icon}
                                </Box>
                            ))}
                        </Stack>
                    </Stack>
                ))}
            </Flex>
        </Box>
    );
};

export default TechnologiesSection;