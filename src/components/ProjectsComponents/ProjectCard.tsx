import { Box, Image, Text, VStack, HStack, Tag, Button, Link, useColorModeValue, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: { name: string; icon: JSX.Element }[];
    imageUrl?: string;
    projectUrl?: string;
    githubUrl?: string;
}

const MotionBox = motion(Box);

const ProjectCard = ({ title, description, technologies, imageUrl, projectUrl, githubUrl }: ProjectCardProps) => {
    const { t } = useTranslation();

    return (
        <MotionBox
            borderWidth="1px"
            borderRadius="2xl"
            overflow="hidden"
            p={6}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow="lg"
            transition="all 0.3s"
            _hover={{
                boxShadow: "2xl",
                transform: "scale(1.03)",
            }}
            maxW={{ base: "100%", sm: "500px" }}
            mx="auto"
            whileHover={{ scale: 1.05 }}
            flexDirection={"column"}
            display="flex"
            justifyContent="space-between"
        >
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt={title}
                    borderRadius="xl"
                    mb={5}
                    objectFit="cover"
                    h="200px"
                    w="100%"
                />
            )}

            <VStack align="start" spacing={4}>
                <Text fontSize="2xl" fontWeight="bold" color="brand.200">
                    {title}
                </Text>

                <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="md">
                    {description}
                </Text>

                <HStack spacing={3} wrap="wrap">
                    {technologies.map((tech, index) => (
                        <Tag
                            key={index}
                            colorScheme="blue"
                            variant="subtle"
                            fontSize="sm"
                            px={3}
                            py={2}
                            display="flex"
                            alignItems="center"
                            textAlign={"center"}
                            gap={2}
                        >
                            {tech.icon} {tech.name}
                        </Tag>
                    ))}
                </HStack>
            </VStack>
            <HStack spacing={4} mt={6} width="full" justify="center">
                {githubUrl && (
                    <Link href={githubUrl} isExternal _hover={{ textDecoration: "none" }} flex={1}>
                        <Button
                            colorScheme="gray"
                            variant="outline"
                            size="md"
                            width="full"
                            leftIcon={<Icon as={FaGithub} />}
                            _hover={{
                                bg: useColorModeValue("gray.200", "gray.700"),
                                transform: "translateY(-2px)",
                                boxShadow: "lg",
                            }}
                        >
                            GitHub
                        </Button>
                    </Link>
                )}
                {projectUrl && projectUrl !== githubUrl && (
                    <Link href={projectUrl} isExternal _hover={{ textDecoration: "none" }} flex={1}>
                        <Button
                            colorScheme="blue"
                            variant="solid"
                            size="md"
                            width="full"
                            _hover={{
                                bg: "blue.600",
                                transform: "translateY(-2px)",
                                boxShadow: "lg",
                            }}
                        >
                            {t('ProjectButton')}
                        </Button>
                    </Link>
                )}


            </HStack>
        </MotionBox>
    );
};

export default ProjectCard;
