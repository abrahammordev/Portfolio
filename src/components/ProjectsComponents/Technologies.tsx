import { Heading, Box, useColorModeValue, Flex, Text, Stack } from "@chakra-ui/react";
import {
    FaPython,
    FaJs,
    FaDocker,
    FaGitAlt,
    FaGithub,
    FaAws,
    FaPhp,
    FaLinux,
    FaJava
} from "react-icons/fa";
import { 
    SiReact, 
    SiMysql, 
    SiTailwindcss, 
    SiTypescript, 
    SiChakraui, 
    SiPostgresql, 
    SiNextdotjs, 
    SiNodedotjs, 
    SiPrisma, 
    SiSolana, 
    SiOpenai,
    SiNginx,
    SiDjango,
    SiJest,
    SiFirebase,
    SiVite,
    SiSolidity
} from "react-icons/si";

const TechnologiesSection = () => {
    const technologyGroups = [
        {
            category: "Languages",
            items: [
                { icon: <SiTypescript size="2.5rem" />, name: "TypeScript" },
                { icon: <FaJs size="2.5rem" />, name: "JavaScript" },
                { icon: <FaPython size="2.5rem" />, name: "Python" },
                { icon: <FaJava size="2.5rem" />, name: "Java" },
                { icon: <FaPhp size="2.5rem" />, name: "PHP" },
                { icon: <SiSolidity size="2.5rem" />, name: "Solidity" }
            ]
        },
        {
            category: "Frontend",
            items: [
                { icon: <SiReact size="2.5rem" />, name: "React" },
                { icon: <SiNextdotjs size="2.5rem" />, name: "Next.js" },
                { icon: <SiVite size="2.5rem" />, name: "Vite" },
                { icon: <SiTailwindcss size="2.5rem" />, name: "Tailwind" },
                { icon: <SiChakraui size="2.5rem" />, name: "Chakra UI" }
            ]
        },
        {
            category: "Backend",
            items: [
                { icon: <SiNodedotjs size="2.5rem" />, name: "Node.js" },
                { icon: <SiDjango size="2.5rem" />, name: "Django" },
                { icon: <SiPrisma size="2.5rem" />, name: "Prisma" },
                { icon: <SiPostgresql size="2.5rem" />, name: "PostgreSQL" },
                { icon: <SiMysql size="2.5rem" />, name: "MySQL" },
                { icon: <SiFirebase size="2.5rem" />, name: "Firebase" }
            ]
        },
        {
            category: "Testing & AI",
            items: [
                { icon: <SiJest size="2.5rem" />, name: "Jest" },
                { icon: <SiOpenai size="2.5rem" />, name: "OpenAI API" },
                { icon: <SiSolana size="2.5rem" />, name: "Solana" }
            ]
        },
        {
            category: "DevOps & Tools",
            items: [
                { icon: <FaDocker size="2.5rem" />, name: "Docker" },
                { icon: <SiNginx size="2.5rem" />, name: "Nginx" },
                { icon: <FaAws size="2.5rem" />, name: "AWS" },
                { icon: <FaGitAlt size="2.5rem" />, name: "Git" },
                { icon: <FaLinux size="2.5rem" />, name: "Linux" }
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
                justify="center"
                gap={6}
                maxW="1400px"
                mx="auto"
                px={4}
                flexWrap="wrap"
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
                        minW={{ base: "100%", md: "220px" }}
                        flex={1}
                    >
                        <Text
                            fontSize="xl"
                            fontWeight="bold"
                            color={categoryColor}
                            textTransform="uppercase"
                            letterSpacing="wide"
                            textAlign="center"
                        >
                            {group.category}
                        </Text>

                        <Flex
                            wrap="wrap"
                            gap={6}
                            justify="center"
                            align="center"
                        >
                            {group.items.map((tech, techIndex) => (
                                <Box
                                    key={techIndex}
                                    p={2}
                                    borderRadius="lg"
                                    transition="all 0.3s"
                                    _hover={{
                                        transform: "scale(1.2)",
                                        color: "brand.300",
                                        cursor: "default"
                                    }}
                                    title={tech.name}
                                >
                                    {tech.icon}
                                </Box>
                            ))}
                        </Flex>
                    </Stack>
                ))}
            </Flex>
        </Box>
    );
};

export default TechnologiesSection;
