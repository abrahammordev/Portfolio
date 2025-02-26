import { Box, Flex, Text, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const ContactInfo = () => {
    const textColor = useColorModeValue("brand.600", "brand.50");
    const iconColor = useColorModeValue("brand.500", "brand.300");
    const { t } = useTranslation();


    return (
        <Box
            bg={useColorModeValue("white", "gray.700")}
            borderRadius="2xl"
            boxShadow="xl"
            p={8}
            maxW="500px"
            mx="auto"
        >
            <Text
                fontSize="2xl"
                fontWeight="bold"
                color={textColor}
                fontFamily="'Alegreya Sans SC', sans-serif"
                textAlign="center"
                mb={6}
            >
                {t("ContactInfo")}
            </Text>

            <Flex direction="column" gap={6}>
                <Flex align="center" gap={4}>
                    <Icon as={FaEnvelope} color={iconColor} boxSize={6} />
                    <Box>
                        <Text
                            fontSize="lg"
                            fontWeight="semibold"
                            color={textColor}
                            fontFamily="'Alegreya Sans SC', sans-serif"
                        >
                            {t('ContactMail')}
                        </Text>
                        <Link
                            href="mailto:abrahammordev@gmail.com"
                            color={iconColor}
                            _hover={{ color: "brand.300", textDecoration: "underline" }}
                            fontFamily="'Alegreya Sans SC', sans-serif"
                        >
                            abrahammordev@gmail.com
                        </Link>
                    </Box>
                </Flex>

                <Flex align="center" gap={4}>
                    <Icon as={FaPhone} color={iconColor} boxSize={6} />
                    <Box>
                        <Text
                            fontSize="lg"
                            fontWeight="semibold"
                            color={textColor}
                            fontFamily="'Alegreya Sans SC', sans-serif"
                        >
                            {t("ContactPhone")}
                        </Text>
                        <Link
                            href="tel:+1234567890"
                            color={iconColor}
                            _hover={{ color: "brand.300", textDecoration: "underline" }}
                            fontFamily="'Alegreya Sans SC', sans-serif"
                        >
                            +34 634617478
                        </Link>
                    </Box>
                </Flex>

                <Flex align="center" gap={4}>
                    <Icon as={FaMapMarkerAlt} color={iconColor} boxSize={6} />
                    <Box>
                        <Text
                            fontSize="lg"
                            fontWeight="semibold"
                            color={textColor}
                            fontFamily="'Alegreya Sans SC', sans-serif"
                        >
                            {t("ContactAddress")}
                        </Text>
                        <Text
                            color={iconColor}
                            fontFamily="'Alegreya Sans SC', sans-serif"
                        >
                            Sevilla, Spain
                        </Text>
                    </Box>
                </Flex>
                <Flex align="center" gap={4}>
                    <Icon as={FaLinkedin} color={iconColor} boxSize={6} />
                    <Box>
                        <Text
                            fontSize="lg"
                            fontWeight="semibold"
                            color={textColor}
                            fontFamily="'Alegreya Sans SC', sans-serif"
                        >
                            <Link href="https://www.linkedin.com/in/abrahammordev" target="_blank" rel="noopener noreferrer" color={iconColor} _hover={{ color: "brand.300", textDecoration: "underline" }}>
                                Abraham
                            </Link>
                        </Text>
                    </Box>
                </Flex>

            </Flex>
        </Box>
    );
};

export default ContactInfo;