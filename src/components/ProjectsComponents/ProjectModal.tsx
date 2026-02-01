import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Heading,
  VStack,
  HStack,
  Badge,
  Box,
  Flex,
  Image,
  SimpleGrid,
  Divider,
  Link,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBook } from "react-icons/fa";
import { useState } from "react";
import { Project, ProjectTechnicalDetails } from "../../data/projects";
import { modalContent, modalOverlay } from "../../lib/animations";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const MotionBox = motion(Box);
const MotionModalContent = motion(ModalContent);

const TechnicalDetails: React.FC<{ details: ProjectTechnicalDetails }> = ({ details }) => {
  const textColor = useColorModeValue("gray.700", "gray.300");
  const labelColor = useColorModeValue("brand.600", "brand.300");
  const bgCard = useColorModeValue("gray.50", "gray.800");

  return (
    <VStack align="start" spacing={6} width="full">
      {/* Architecture */}
      <Box width="full">
        <Heading size="sm" color={labelColor} mb={2}>
          Architecture
        </Heading>
        <Text color={textColor} fontSize="sm">
          {details.architecture}
        </Text>
      </Box>

      {/* Tech Stack */}
      <Box width="full">
        <Heading size="sm" color={labelColor} mb={3}>
          Tech Stack
        </Heading>
        <Wrap spacing={2}>
          {details.techStack.map((tech) => (
            <WrapItem key={tech}>
              <Badge
                borderRadius="full"
                px={3}
                py={1}
                bg={bgCard}
                color={textColor}
                fontSize="xs"
                fontWeight="medium"
              >
                {tech}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      {/* Challenges & Solutions */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} width="full">
        <Box>
          <Heading size="sm" color={labelColor} mb={2}>
            Challenges
          </Heading>
          <VStack align="start" spacing={2}>
            {details.challenges.map((challenge, index) => (
              <Flex key={index} align="start" gap={2}>
                <Text color={labelColor} fontWeight="bold">
                  •
                </Text>
                <Text color={textColor} fontSize="sm">
                  {challenge}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>

        <Box>
          <Heading size="sm" color={labelColor} mb={2}>
            Solutions
          </Heading>
          <VStack align="start" spacing={2}>
            {details.solutions.map((solution, index) => (
              <Flex key={index} align="start" gap={2}>
                <Text color={labelColor} fontWeight="bold">
                  ✓
                </Text>
                <Text color={textColor} fontSize="sm">
                  {solution}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>

      {/* Highlights */}
      {details.highlights && details.highlights.length > 0 && (
        <Box width="full">
          <Heading size="sm" color={labelColor} mb={2}>
            Key Highlights
          </Heading>
          <VStack align="start" spacing={2}>
            {details.highlights.map((highlight, index) => (
              <Flex key={index} align="center" gap={2}>
                <Text color={labelColor} fontWeight="bold">
                  ★
                </Text>
                <Text color={textColor} fontSize="sm">
                  {highlight}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>
      )}
    </VStack>
  );
};

const ImageGallery: React.FC<{ images: string[]; projectName: string }> = ({ images, projectName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isImageViewOpen, setIsImageViewOpen] = useState(false);

  if (images.length === 0) return null;

  return (
    <VStack align="start" spacing={4} width="full">
      <Heading size="sm" color={useColorModeValue("brand.600", "brand.300")}>
        Project Gallery
      </Heading>

      <MotionBox
        width="full"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsImageViewOpen(true)}
      >
        <Image
          src={images[selectedIndex]}
          alt={`${projectName} screenshot ${selectedIndex + 1}`}
          width="full"
          height="300px"
          objectFit="cover"
        />
      </MotionBox>

      {images.length > 1 && (
        <HStack spacing={2} width="full" overflowX="auto" py={2}>
          {images.map((image, index) => (
            <MotionBox
              key={index}
              borderRadius="md"
              overflow="hidden"
              flexShrink={0}
              width="80px"
              height="60px"
              cursor="pointer"
              opacity={index === selectedIndex ? 1 : 0.6}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={image}
                alt={`${projectName} thumbnail ${index + 1}`}
                width="full"
                height="full"
                objectFit="cover"
              />
            </MotionBox>
          ))}
        </HStack>
      )}

      {/* Full Image View Modal */}
      <Modal
        isOpen={isImageViewOpen}
        onClose={() => setIsImageViewOpen(false)}
        size="full"
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color="white" zIndex={10} />
          <Flex
            align="center"
            justify="center"
            h="full"
            onClick={() => setIsImageViewOpen(false)}
          >
            <Image
              src={images[selectedIndex]}
              alt={projectName}
              maxH="90vh"
              maxW="90vw"
              objectFit="contain"
            />
          </Flex>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const badgeColor = useColorModeValue("brand.100", "brand.900");
  const badgeText = useColorModeValue("brand.700", "brand.200");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "full", md: "4xl" }}
      isCentered
      scrollBehavior="inside"
      motionPreset="none"
    >
      <ModalOverlay
        as={motion.div}
        variants={modalOverlay}
        initial="hidden"
        animate="visible"
        exit="exit"
      />
      <MotionModalContent
        variants={modalContent}
        initial="hidden"
        animate="visible"
        exit="exit"
        borderRadius="2xl"
        mx={4}
      >
        <ModalHeader>
          <Flex justify="space-between" align="center">
            <VStack align="start" spacing={2}>
              <Heading size="lg">{project.title}</Heading>
              <HStack spacing={2}>
                <Badge
                  bg={badgeColor}
                  color={badgeText}
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  {project.category}
                </Badge>
                <Badge
                  colorScheme={project.status === "live" ? "green" : "gray"}
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  {project.status === "live" ? "Live" : "GitHub Only"}
                </Badge>
                {project.year && (
                  <Badge borderRadius="full" px={3} py={1} variant="outline">
                    {project.year}
                  </Badge>
                )}
              </HStack>
            </VStack>
            <ModalCloseButton />
          </Flex>
        </ModalHeader>

        <ModalBody pb={6}>
          <VStack align="start" spacing={6} width="full">
            {/* Project Image */}
            {project.imageUrl && (
              <MotionBox
                width="full"
                borderRadius="lg"
                overflow="hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width="full"
                  maxHeight="300px"
                  objectFit="cover"
                />
              </MotionBox>
            )}

            {/* Description */}
            <Box>
              <Text
                fontSize="md"
                color={useColorModeValue("gray.700", "gray.300")}
                lineHeight="tall"
              >
                {project.fullDesc}
              </Text>
            </Box>

            <Divider />

            {/* Technical Details */}
            <TechnicalDetails details={project.technicalDetails} />

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <>
                <Divider />
                <ImageGallery images={project.gallery} projectName={project.title} />
              </>
            )}

            {/* Technologies */}
            <Box width="full">
              <Heading size="sm" color={useColorModeValue("brand.600", "brand.300")} mb={3}>
                Technologies Used
              </Heading>
              <Wrap spacing={2}>
                {project.technologies.map((tech) => (
                  <WrapItem key={tech.name}>
                    <HStack
                      spacing={1}
                      bg={useColorModeValue("gray.100", "gray.800")}
                      px={3}
                      py={2}
                      borderRadius="md"
                    >
                      <Box as="span" color="brand.500">
                        {tech.icon}
                      </Box>
                      <Text fontSize="sm">{tech.name}</Text>
                    </HStack>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <HStack spacing={3}>
            {project.liveUrl && (
              <Button
                as={Link}
                href={project.liveUrl}
                isExternal
                leftIcon={<FaExternalLinkAlt />}
                colorScheme="brand"
                variant="solid"
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                as={Link}
                href={project.githubUrl}
                isExternal
                leftIcon={<FaGithub />}
                colorScheme="gray"
                variant="outline"
              >
                View Code
              </Button>
            )}
            {project.documentationUrl && (
              <Button
                as={Link}
                href={project.documentationUrl}
                isExternal
                leftIcon={<FaBook />}
                colorScheme="blue"
                variant="ghost"
              >
                Documentation
              </Button>
            )}
            <Button onClick={onClose} variant="ghost">
              Close
            </Button>
          </HStack>
        </ModalFooter>
      </MotionModalContent>
    </Modal>
  );
};

export default ProjectModal;
