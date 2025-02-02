import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const AcademicInfo = () => {
    const textColor = useColorModeValue("brand.600", "brand.50");
    const bgColor = useColorModeValue("white", "gray.700");
    const { t } = useTranslation();


    return (
        <Box
            bg={bgColor}
            borderRadius="2xl"
            boxShadow="xl"
            p={8}
            maxW="800px"
            mx="auto"
            my={16}
        >
            <Heading
                as="h2"
                fontSize="3xl"
                fontWeight="bold"
                color={textColor}
                fontFamily="'Alegreya Sans SC', sans-serif"
                textAlign="center"
                mb={8}
            >
                {t("AcademicTitle")}
            </Heading>
            <Flex direction="column" gap={6}>
                <Box>
                    <Text
                        fontSize="xl"
                        fontWeight="semibold"
                        color={textColor}
                        fontFamily="'Alegreya Sans SC', sans-serif"
                    >
                       {t("AcademicGrade")}
                    </Text>
                    <Text
                        color={textColor}
                        fontFamily="'Alegreya Sans SC', sans-serif"
                    >
                        {t("AcademicLocation")}

                    </Text>
                </Box>
                <Box>
                    <Text
                        fontSize="xl"
                        fontWeight="semibold"
                        color={textColor}
                        fontFamily="'Alegreya Sans SC', sans-serif"
                    >
                        {t("AcademicIdiom")}

                    </Text>

                </Box>
                <Box>
                    <Text
                        fontSize="xl"
                        fontWeight="semibold"
                        color={textColor}
                        fontFamily="'Alegreya Sans SC', sans-serif"
                    >
                        {t("AcademicCourses")}

                    </Text>
                    <Text
                        color={textColor}
                        fontFamily="'Alegreya Sans SC', sans-serif"
                    >
                        React, TypeScript, MongoDB, Docker, AWS
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default AcademicInfo;