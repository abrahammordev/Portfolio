import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Tag,
  Button,
  Link,
  useColorModeValue,
  Icon,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: { name: string; icon: JSX.Element }[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  category?: string;
  status?: string;
  onViewDetails?: () => void;
  index?: number;
}

const MotionBox = motion(Box);

const ProjectCard = ({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  githubUrl,
  category,
  status,
  onViewDetails,
  index = 0,
}: ProjectCardProps) => {
  const { t } = useTranslation();

  const cardBg = useColorModeValue("white", "gray.800");
  const titleColor = useColorModeValue("brand.600", "brand.100");
  const descColor = useColorModeValue("gray.600", "gray.400");

  const getCategoryColor = () => {
    switch (category) {
      case "Full Stack":
        return "purple";
      case "Frontend":
        return "blue";
      case "Backend":
        return "green";
      case "Blockchain":
        return "orange";
      case "Open Source":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <MotionBox
      borderWidth="1px"
      borderRadius="2xl"
      overflow="hidden"
      bg={cardBg}
      boxShadow="lg"
      whileHover={{
        y: -4,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      display="flex"
      flexDirection="column"
      h="100%"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Image with category badge */}
      {imageUrl && (
        <Box overflow="hidden" h="200px" position="relative">
          <Image
            src={imageUrl}
            alt={title}
            objectFit="cover"
            h="100%"
            w="100%"
            transition="transform 0.5s ease"
            _hover={{ transform: "scale(1.05)" }}
            loading="lazy"
          />
          {category && (
            <Badge
              position="absolute"
              top={3}
              right={3}
              colorScheme={getCategoryColor()}
              borderRadius="full"
              px={3}
              py={1}
              fontSize="xs"
              zIndex={1}
            >
              {category}
            </Badge>
          )}
          {status === "live" && (
            <Badge
              position="absolute"
              top={3}
              left={3}
              colorScheme="green"
              borderRadius="full"
              px={3}
              py={1}
              fontSize="xs"
              zIndex={1}
            >
              Live
            </Badge>
          )}
        </Box>
      )}

      <VStack align="start" spacing={4} p={6} flex={1}>
        <Text fontSize="2xl" fontWeight="bold" color={titleColor} lineHeight="tight">
          {title}
        </Text>

        <Text color={descColor} fontSize="sm" noOfLines={3}>
          {description}
        </Text>

        <Spacer />

        <HStack spacing={2} wrap="wrap" pt={2}>
          {technologies.slice(0, 5).map((tech, techIndex) => (
            <Tag
              key={techIndex}
              size="sm"
              borderRadius="full"
              variant="subtle"
              colorScheme="cyan"
              px={3}
            >
              <Box as="span" mr={1}>
                {tech.icon}
              </Box>
              {tech.name}
            </Tag>
          ))}
          {technologies.length > 5 && (
            <Tag size="sm" borderRadius="full" variant="outline" px={2}>
              +{technologies.length - 5}
            </Tag>
          )}
        </HStack>
      </VStack>

      <HStack spacing={3} p={6} pt={0} width="full">
        {onViewDetails && (
          <Button
            variant="outline"
            size="sm"
            flex={1}
            leftIcon={<FaInfoCircle />}
            colorScheme="brand"
            onClick={onViewDetails}
            _hover={{ transform: "scale(1.05)" }}
            transition="transform 0.2s"
          >
            Details
          </Button>
        )}
        {githubUrl && (
          <Button
            as={Link}
            href={githubUrl}
            isExternal
            variant="outline"
            size="sm"
            flex={!onViewDetails ? 1 : undefined}
            leftIcon={<Icon as={FaGithub} />}
            colorScheme="gray"
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.100", "gray.700"),
              transform: "scale(1.05)",
            }}
            transition="transform 0.2s"
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
            flex={!onViewDetails ? 1 : undefined}
            rightIcon={<Icon as={FaExternalLinkAlt} />}
            bg="brand.500"
            color="white"
            _hover={{
              textDecoration: "none",
              bg: "brand.600",
              transform: "scale(1.05)",
            }}
            transition="transform 0.2s"
          >
            {t("ProjectButton")}
          </Button>
        )}
      </HStack>
    </MotionBox>
  );
};

export default ProjectCard;
