import { Box, Image, Text, VStack, HStack, Tag, Button, Link, useColorModeValue, Icon, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
    
    const cardBg = useColorModeValue("white", "gray.800");
    const titleColor = useColorModeValue("brand.600", "brand.100");
    const descColor = useColorModeValue("gray.600", "gray.400");

    return (
        <MotionBox
            borderWidth="1px"
            borderRadius="2xl"
            overflow="hidden"
            bg={cardBg}
            boxShadow="lg"
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ duration: 0.3 }}
            display="flex"
            flexDirection="column"
            h="100%"
        >
            {imageUrl && (
                <Box overflow="hidden" h="220px">
                    <Image
                        src={imageUrl}
                        alt={title}
                        objectFit="cover"
                        h="100%"
                        w="100%"
                        transition="transform 0.5s ease"
                        _hover={{ transform: "scale(1.1)" }}
                        loading="lazy"
                    />
                </Box>
            )}

            <VStack align="start" spacing={4} p={6} flex={1}>
                <Text fontSize="2xl" fontWeight="bold" color={titleColor} lineHeight="tight">
                    {title}
                </Text>

                <Text color={descColor} fontSize="sm" noOfLines={4}>
                    {description}
                </Text>

                <Spacer />

                <HStack spacing={2} wrap="wrap" pt={2}>
                    {technologies.map((tech, index) => (
                        <Tag
                            key={index}
                            size="sm"
                            borderRadius="full"
                            variant="subtle"
                            colorScheme="cyan"
                            px={3}
                        >
                            <Box as="span" mr={1}>{tech.icon}</Box>
                            {tech.name}
                        </Tag>
                    ))}
                </HStack>
            </VStack>

            <HStack spacing={3} p={6} pt={0} width="full">
                {githubUrl && (
                    <Button
                        as={Link}
                        href={githubUrl}
                        isExternal
                        variant="outline"
                        size="sm"
                        flex={1}
                        leftIcon={<Icon as={FaGithub} />}
                        colorScheme="gray"
                        _hover={{ textDecoration: "none", bg: useColorModeValue("gray.100", "gray.700") }}
                    >
                        Code
                    </Button>
                )}
                {projectUrl && projectUrl !== "#" && (
                    <Button
                        as={Link}
                        href={projectUrl}
                        isExternal
                        variant="solid"
                        size="sm"
                        flex={1}
                        rightIcon={<Icon as={FaExternalLinkAlt} />}
                        bg="brand.500"
                        color="white"
                        _hover={{ textDecoration: "none", bg: "brand.600" }}
                    >
                        {t('ProjectButton')}
                    </Button>
                )}
            </HStack>
        </MotionBox>
    );
};

export default ProjectCard;
