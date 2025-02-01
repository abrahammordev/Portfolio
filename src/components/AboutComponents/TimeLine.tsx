import React from "react";
import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react";
import { FaPlane, FaCode, FaSearch, FaTshirt, FaUserGraduate } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

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

  const timelineItems = [
    {
      icon: <FaUserGraduate size={16} />,
      title: t('TimeLineIntro'),
      date: t('TimeLineDate'),
      description: t('TimeLineIntroDescription'),
      button: false,
    },
    {
      icon: <FaCode size={16} />,
      title: t('TimeLineProject1'),
      date: t('TimeLineDate1'),
      description: t('TimeLineProject1Description'),
      button: true,
      link: "https://color-ease.vercel.app/",
    },
    
    {
      icon: <FaTshirt/>,
      title: t('TimeLineProject3'),
      date: t('TimeLineDate3'),
      description: t('TimeLineProject3Description'),
      button: true,
      link: "https://www.qardrobe.com",
    },
    {
      icon: <FaPlane size={16} />,
      title: t('TimeLineProject2'),
      date: t('TimeLineDate2'),
      description: t('TimeLineProject2Description'),
    },
  ];

  return (
    <Center h={{ base: "150vh", md: "120vh" }}>
      <Box
        p={5}
        maxW="4xl"
        borderWidth="1px"
        borderRadius="xl"
        boxShadow="lg"
        overflow={["auto", "auto", "hidden"]}
        bg={"tramsparent"}
      >
        <Text fontSize="3xl" fontWeight="bold" color={textColor}>
          <ol className="relative border-s border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
            {timelineItems.map((item, index) => (
              <li key={index} className="mb-10 ml-8 flex items-center">
                <span
                  className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8"
                  style={{
                    backgroundColor: iconBgColor,
                    color: iconColor,
                  }}
                >
                  {item.icon}
                </span>
                <div className="ml-10">
                  <h3 className="flex items-center mb-1 text-lg font-semibold" style={{ color: titleColor }}>
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
                  <time className="block mb-2 text-sm font-normal leading-none" style={{ color: dateColor }}>
                    {item.date}
                  </time>
                  <p className="mb-4 text-base font-normal" style={{ color: descriptionColor }}>
                    {item.description}
                  </p>
                  {item.button && (
                    <a
                      href={item.link}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg focus:z-10 focus:ring-4 focus:outline-none"
                      style={{
                        backgroundColor: iconBgColor,
                        color: iconColor,
                        borderColor: buttonBgColor,
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSearch className="mr-2" />{" "}
                      {t("TimeLineProjectButton")}
                    </a>
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