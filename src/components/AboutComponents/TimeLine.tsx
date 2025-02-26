import React from "react";
import { Box, Center, Text, useColorModeValue,useColorMode,  Button } from "@chakra-ui/react";
import {
  FaPlane,
  FaCode,
  FaSearch,
  FaTshirt,
  FaUserGraduate,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const TimeLine: React.FC = () => {
  const { t } = useTranslation();

  // Colores para modo claro y oscuro basados en tu tema
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
      icon: <FaUserGraduate size={16} />,
      title: t("TimeLineIntro"),
      date: t("TimeLineDate"),
      description: t("TimeLineIntroDescription"),
      button: false,
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
    <Center h={{ base: "auto", md: "120vh" }} p={4}>
      <Box
        p={5}
        maxW="4xl"
        borderWidth="1px"
        borderRadius="xl"
        boxShadow="0 0 40pxrgba(63, 79, 99, 0.42)"
        backdropFilter="blur(15px)"
        bg={colorMode === "light" ? "linear-gradient(135deg, #f0f4f8, #d9e2ec)" : "linear-gradient(135deg, #2d3748, #1a202c)"}
      >
        <Text fontSize="3xl" fontWeight="bold" color={textColor} mb={8}>
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {timelineItems.map((item, index) => (
              <li key={index} className="mb-10 flex items-center">
                <div className="flex items-center justify-center ml-4">
                  <span
                    className="absolute flex items-center justify-center w-6 h-6 rounded-full  ring-8 ml-3"
                    style={{
                      backgroundColor: iconBgColor,
                      color: iconColor,
                    }}
                  >
                    {item.icon}
                  </span>
                </div>

                <div className="ml-10">
                  <h3
                    className="flex items-center mb-1 text-lg font-semibold"
                    style={{ color: titleColor }}
                  >
                    {item.title}
                    {item.button && (
                      <span
                        className="text-sm font-medium ml-3 px-2.5 py-0.5 rounded-sm"
                        style={{
                          backgroundColor: buttonBgColor,
                          color: titleColor,
                        }}
                      >
                        Latest
                      </span>
                    )}
                  </h3>
                  <time
                    className="block mb-2 text-sm font-normal"
                    style={{ color: dateColor }}
                  >
                    {item.date}
                  </time>
                  <p
                    className="mb-4 text-base font-normal"
                    style={{ color: descriptionColor }}
                  >
                    {item.description}
                  </p>
                  {item.button && (
                    <Button
                      as="a"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      colorScheme="brand"
                      size="sm"
                      leftIcon={<FaSearch />}
                      bg={iconBgColor}
                      color={iconColor}
                      _hover={{ bg: buttonBgColor }}
                    >
                      {t("TimeLineProjectButton")}
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Text>
      </Box>
    </Center>
  );
};

export default TimeLine;
