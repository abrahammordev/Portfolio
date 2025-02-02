import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    FormHelperText,
    useColorModeValue,
    Heading,
    VStack
} from "@chakra-ui/react";
import emailjs from 'emailjs-com';
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";
import { useTranslation } from "react-i18next";

const ContactForm: React.FC = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        from_name: "",
        to_name: "",
        message: "",
        email: "",
    });

    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            to_name: name === "from_name" ? value : formData.to_name,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        emailjs
            .send("service_i2gaioo", "template_xj5nmd7", formData, "dQWwUPTTaWi9j13x9")
            .then(
                (response) => {
                    console.log("Correo enviado exitosamente:", response);
                    setSent(true);
                    setError(false);
                },
                (error) => {
                    console.error("Error al enviar el correo:", error);
                    setError(true);
                }
            )
            .finally(() => {
                setSending(false);
            });
    };

    const bgColor = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("gray.700", "gray.200");
    const borderColor = useColorModeValue("gray.300", "gray.500");
    const hoverBg = useColorModeValue("gray.50", "gray.800");

    return (
        <Box p={6} borderRadius="2xl" maxW={{ base: "100%", sm: "500px" }} mx="auto" bg={bgColor} boxShadow="xl" mt={8} pb="80px">
            <Box textAlign="center" mb={6}>
                <Heading as="h1" fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color={textColor}>
                    {t('ContactHeader')}
                </Heading>
            </Box>

            {!sent ? (
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>
                        <FormControl id="from_name" isRequired>
                            <FormLabel color={textColor}>{t('ContactIntro')}</FormLabel>
                            <Input
                                type="text"
                                name="from_name"
                                value={formData.from_name}
                                onChange={handleInputChange}
                                borderColor={borderColor}
                                _focus={{ borderColor: "blue.500" }}
                                color={textColor}
                                _hover={{ bg: hoverBg }}
                            />
                        </FormControl>

                        <FormControl id="email" isRequired>
                            <FormLabel color={textColor}>{t('ContactMail')}</FormLabel>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                borderColor={borderColor}
                                _focus={{ borderColor: "blue.500" }}
                                color={textColor}
                                _hover={{ bg: hoverBg }}
                            />
                            <FormHelperText color={textColor}>{t('ContactCTA')}</FormHelperText>
                        </FormControl>

                        <FormControl id="message" isRequired>
                            <FormLabel color={textColor}>{t('ContactMessage')}</FormLabel>
                            <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                borderColor={borderColor}
                                _focus={{ borderColor: "blue.500" }}
                                resize="vertical"
                                color={textColor}
                                _hover={{ bg: hoverBg }}
                            />
                        </FormControl>

                        <Button
                            colorScheme="blue"
                            width="full"
                            type="submit"
                            isLoading={sending}
                            loadingText={t('ContactSending')}
                            _hover={{ bg: "blue.300" }}
                            _active={{ bg: "blue.700" }}
                            size="lg"
                        >
                            {t('ContactSendMessage')}
                        </Button>
                    </VStack>
                    {error && <ErrorAlert />}
                </form>
            ) : (
                <Box textAlign="center" mt={6} color={textColor}>
                    <p>{t('ContactGreeting')}</p>
                    <SuccessAlert />
                </Box>
            )}
        </Box>
    );
};

export default ContactForm;
