import React from "react";
import {
  Box,
  Center,
  Text,
  useColorModeValue,
  useColorMode,
  Button,
  VStack,
  Flex,
  Icon,
  Circle,
  Image,
  Wrap,
  WrapItem,
  Tag,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaSearch,
  FaGraduationCap,
  FaBrain,
  FaCheckDouble,
  FaLink,
  FaLaptopCode
} from "react-icons/fa";
import Ilias from "./../../assets/IliasLogo.webp";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const TimeLine: React.FC = () => {
  const { t } = useTranslation();

  const textColor = useColorModeValue("brand.letter", "white");
  const titleColor = useColorModeValue("brand.600", "brand.100");
  const iconBgColor = useColorModeValue("brand.100", "brand.500");
  const iconColor = useColorModeValue("brand.600", "brand.100");
  const buttonBgColor = useColorModeValue("brand.300", "brand.400");
  const dateColor = useColorModeValue("brand.400", "brand.300");
  const descriptionColor = useColorModeValue("brand.500", "brand.200");
  const { colorMode } = useColorMode();

  const timelineItems = [
    {
      icon: FaBrain,
      title: "OpoFlash",
      date: t("TimeLineDateOpo"),
      description: t("TimeLineDescOpo"),
      button: true,
      link: "https://app.opo-flash.com",
      tag: "Current",
      technologies: ["React", "Next.js", "Python", "Docker", "PostgreSQL"]
    },
    {
      icon: FaCheckDouble,
      title: "CheckeApp",
      date: t("TimeLineDateChecke"),
      description: t("TimeLineDescChecke"),
      button: true,
      link: "https://checkeapp.com",
      technologies: ["Next.js", "TypeScript", "Turborepo", "MySQL", "OpenAI"]
    },
    {
      icon: Ilias,
      isImage: true,
      title: "STACKForILIAS",
      date: t("TimeLineDateStack"),
      description: t("TimeLineDescStack"),
      button: true,
      link: "https://github.com/surlabs/STACKForILIAS",
      technologies: ["PHP", "ILIAS LMS", "Open Source"]
    },
    {
      icon: FaLink,
      title: "QaRdrobe Traceability",
      date: t("TimeLineDateQaRdrobe"),
      description: t("TimeLineDescQaRdrobe"),
      button: true,
      link: "https://github.com/abrahammordev/QaRdrobe-Traceability.git",
      technologies: ["React", "Node.js", "Supabase", "Solidity", "Polygon"]
    },
    {
      icon: FaLaptopCode,
      title: "Personal Portfolio",
      date: "Jan 2025",
      description: t("TimeLineDescPortfolio"),
      button: false,
      technologies: ["React", "Vite", "Chakra UI", "Framer Motion"]
    },
    {
      icon: FaGraduationCap,
      title: t("AcademicGrade"),
      description: t("AcademicLocation"),
      button: false,
    },
  ];

  return (
    <Center py={{ base: 10, md: 20 }} px={4}>
      <MotionBox
        p={8}
        maxW="4xl"
        w="full"
        borderWidth="1px"
        borderRadius="xl"
        boxShadow="xl"
        backdropFilter="blur(15px)"
        bg={
          colorMode === "light"
            ? "linear-gradient(135deg, #f0f4f8, #d9e2ec)"
            : "linear-gradient(135deg, #2d3748, #1a202c)"
        }
        overflow="hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color={textColor}
          mb={10}
          textAlign="center"
        >
          {t("TimeLineTitle") || "Experience & Projects"}
        </Text>
        <VStack
          spacing={8}
          align="stretch"
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '18px',
            width: '2px',
            bgColor: useColorModeValue('gray.200', 'gray.700'),
            zIndex: 0,
            background: 'linear-gradient(180deg, transparent, currentColor, transparent)',
          }}
        >
          {timelineItems.map((item, index) => (
            <MotionFlex
              key={index}
              align="start"
              position="relative"
              zIndex={1}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MotionBox
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Circle
                  size="50px"
                  bg={iconBgColor}
                  color={iconColor}
                  mr={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  border="4px solid"
                  borderColor={useColorModeValue("white", "gray.800")}
                  flexShrink={0}
                >
                  {item.isImage ? (
                    <Image src={item.icon} alt={`${item.title} icon`} boxSize="24px" objectFit="contain" />
                  ) : (
                    <Icon as={item.icon as IconType} boxSize={5} aria-hidden="true" />
                  )}
                </Circle>
              </MotionBox>

              <Box flex="1" pt={1}>
                <Flex align="center" mb={1} wrap="wrap" gap={2}>
                  <Text fontSize="lg" fontWeight="semibold" color={titleColor}>
                    {item.title}
                  </Text>
                  {item.tag && (
                    <Tag
                      fontSize="xs"
                      fontWeight="bold"
                      px={2}
                      py={0.5}
                      rounded="full"
                      bg={buttonBgColor}
                      color="white"
                    >
                      {item.tag}
                    </Tag>
                  )}
                </Flex>
                <time
                  className="block mb-2 text-sm font-medium"
                  style={{ color: dateColor }}
                >
                  {item.date}
                </time>
                <Text
                  mb={item.button ? 3 : 2}
                  fontSize="md"
                  color={descriptionColor}
                >
                  {item.description}
                </Text>

                {/* Technologies Tags */}
                {item.technologies && (
                  <Wrap spacing={1} mb={3}>
                    {item.technologies.map((tech) => (
                      <WrapItem key={tech}>
                        <Tag
                          size="sm"
                          variant="subtle"
                          colorScheme="cyan"
                          borderRadius="full"
                        >
                          {tech}
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                )}

                {item.button && (
                  <Button
                    as="a"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    rightIcon={<Icon as={FaSearch} aria-hidden="true" />}
                    bg={iconBgColor}
                    color={iconColor}
                    _hover={{
                      bg: buttonBgColor,
                      color: "white",
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg'
                    }}
                    _active={{ transform: 'translateY(0)' }}
                    transition="all 0.2s ease"
                    mt={2}
                  >
                    {t("TimeLineProjectButton")}
                  </Button>
                )}
              </Box>
            </MotionFlex>
          ))}
        </VStack>
      </MotionBox>
    </Center>
  );
};

export default TimeLine;
