import React from "react";
import { Box, Center, Text, useColorModeValue, useColorMode, Button, VStack, Flex, Icon, Circle } from "@chakra-ui/react";
import {
  FaPlane,
  FaCode,
  FaSearch,
  FaTshirt,
  FaUserGraduate,
  FaTasks,
  FaDatabase
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

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
      icon: <FaDatabase size={16} />,
      title: t("TimeLineProject5"),
      date: t("TimeLineDate5"),
      description: t("TimeLineProject5Description"),
      button: false,
    },
    {
      icon: <FaUserGraduate size={16} />,
      title: t("TimeLineIntro"),
      date: t("TimeLineDate"),
      description: t("TimeLineIntroDescription"),
      button: false,
    },
    
    {
      icon: <FaTasks size={16} />,
      title: t("TimeLineProject4"),
      date: t("TimeLineDate4"),
      description: t("TimeLineProject4Description"),
      button: true,
      link: "https://todo-list-nine-taupe.vercel.app/"
    },
    {
      icon: <FaCode size={16} />,
      title: t("TimeLineProject1"),
      date: t("TimeLineDate1"),
      description: t("TimeLineProject1Description"),
      button: true,
      link: "https://color-ease.vercel.app/",
    },
    {
      icon: <FaTshirt size={16} />,
      title: t("TimeLineProject3"),
      date: t("TimeLineDate3"),
      description: t("TimeLineProject3Description"),
      button: true,
      link: "https://www.qardrobe.com",
    },
    {
      icon: <FaPlane size={16} />,
      title: t("TimeLineProject2"),
      date: t("TimeLineDate2"),
      description: t("TimeLineProject2Description"),
    },
  ];

  return (
    <Center py={{ base: 10, md: 20 }} px={4}>
      <Box
        p={8}
        maxW="4xl"
        w="full"
        borderWidth="1px"
        borderRadius="xl"
        boxShadow="xl"
        backdropFilter="blur(15px)"
        bg={colorMode === "light" ? "linear-gradient(135deg, #f0f4f8, #d9e2ec)" : "linear-gradient(135deg, #2d3748, #1a202c)"}
        overflow="hidden"
      >
        <Text fontSize="3xl" fontWeight="bold" color={textColor} mb={10} textAlign="center">
          {t("TimeLineTitle") || "My Journey"}
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
          }}
        >
          {timelineItems.map((item, index) => (
            <Flex key={index} align="start" position="relative" zIndex={1}>
              <Circle
                size="40px"
                bg={iconBgColor}
                color={iconColor}
                mr={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="4px solid"
                borderColor={useColorModeValue("white", "gray.800")}
              >
                <Icon as={() => item.icon} boxSize={4} />
              </Circle>

              <Box flex="1" pt={1}>
                <Flex align="center" mb={1}>
                  <Text fontSize="lg" fontWeight="semibold" color={titleColor} mr={3}>
                    {item.title}
                  </Text>
                  {item.button && (
                    <Text
                      fontSize="xs"
                      fontWeight="medium"
                      px={2}
                      py={0.5}
                      rounded="md"
                      bg={buttonBgColor}
                      color={iconColor}
                    >
                      Latest
                    </Text>
                  )}
                </Flex>
                <time
                  className="block mb-2 text-sm font-normal leading-none"
                  style={{ color: dateColor }}
                >
                  {item.date}
                </time>
                <Text
                  mb={item.button ? 3 : 0}
                  fontSize="md"
                  color={descriptionColor}
                >
                  {item.description}
                </Text>
                {item.button && (
                  <Button
                    as="a"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    leftIcon={<Icon as={FaSearch} />}
                    bg={iconBgColor}
                    color={iconColor}
                    _hover={{ bg: buttonBgColor, transform: 'translateY(-2px)', boxShadow: 'lg' }}
                    mt={2}
                  >
                    {t("TimeLineProjectButton")}
                  </Button>
                )}
              </Box>
            </Flex>
          ))}
        </VStack>
      </Box>
    </Center>
  );
};

export default TimeLine;
