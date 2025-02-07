import { Box, Image, Text, VStack, HStack, Tag, Button, Link, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: { name: string; icon: JSX.Element }[];
    imageUrl?: string;
    projectUrl?: string;
}

const MotionBox = motion(Box);

const ProjectCard = ({ title, description, technologies, imageUrl, projectUrl }: ProjectCardProps) => {
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
            maxW={{ base: "100%", sm: "400px" }}
            mx="auto"
            whileHover={{ scale: 1.05 }}
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
                            gap={2}
                        >
                            {tech.icon} {tech.name}
                        </Tag>
                    ))}
                </HStack>

                {projectUrl && (
                    <Link href={projectUrl} isExternal _hover={{ textDecoration: "none" }} width="full">
                        <Button
                            colorScheme="blue"
                            variant="solid"
                            size="lg"
                            width="full"
                            mt={4}
                            _hover={{
                                bg: "blue.600",
                                transform: "scale(1.05)",
                            }}
                        >
                            {t('ProjectButton')}
                        </Button>
                    </Link>
                )}
            </VStack>
        </MotionBox>
    );
};

export default ProjectCard;
