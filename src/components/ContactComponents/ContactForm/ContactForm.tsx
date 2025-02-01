import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, FormHelperText, useColorModeValue, Heading } from "@chakra-ui/react";
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
            .send(
                "service_i2gaioo",
                "template_xj5nmd7",
                formData,
                "dQWwUPTTaWi9j13x9"
            )
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

    // Colores dinámicos según el modo claro/oscuro
    const bgColor = useColorModeValue("white", "gray.700");
    const textColor = useColorModeValue("brand.600", "brand.50");
    const borderColor = useColorModeValue("brand.300", "brand.500");
    const hoverBg = useColorModeValue("brand.50", "brand.800");

    return (
        <Box
            p={8}
            borderRadius="2xl"
            maxWidth="500px"
            mx="auto"
            bg={bgColor}
            boxShadow="xl"
            mt={8}
        >
            <Box textAlign="center" mb={8}>
                <Heading
                    as="h1"
                    fontSize="2xl"
                    fontWeight="bold"
                    color={textColor}
                    fontFamily="'Alegreya Sans SC', sans-serif"
                >
                    {t('ContactHeader')}
                </Heading>
            </Box>

            {!sent ? (
                <form onSubmit={handleSubmit}>
                    <FormControl id="from_name" mb={6} isRequired>
                        <FormLabel color={textColor} fontFamily="'Alegreya Sans SC', sans-serif">
                            {t('ContactIntro')}
                        </FormLabel>
                        <Input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleInputChange}
                            borderColor={borderColor}
                            _focus={{ borderColor: "brand.500" }}
                            color={textColor}
                            fontFamily="'Alegreya Sans SC', sans-serif"
                            _hover={{ bg: hoverBg }}
                        />
                    </FormControl>

                    <FormControl id="email" mb={6} isRequired>
                        <FormLabel color={textColor} fontFamily="'Alegreya Sans SC', sans-serif">
                            {t('ContactMail')}
                        </FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            borderColor={borderColor}
                            _focus={{ borderColor: "brand.500" }}
                            color={textColor}
                            fontFamily="'Alegreya Sans SC', sans-serif"
                            _hover={{ bg: hoverBg }}
                        />
                        <FormHelperText color={textColor} fontFamily="'Alegreya Sans SC', sans-serif">
                            {t('ContactCTA')}
                        </FormHelperText>
                    </FormControl>

                    <FormControl id="message" mb={6} isRequired>
                        <FormLabel color={textColor} fontFamily="'Alegreya Sans SC', sans-serif">
                            {t('ContactMessage')}
                        </FormLabel>
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            borderColor={borderColor}
                            _focus={{ borderColor: "brand.500" }}
                            resize="vertical"
                            color={textColor}
                            fontFamily="'Alegreya Sans SC', sans-serif"
                            _hover={{ bg: hoverBg }}
                        />
                    </FormControl>

                    <Button
                        colorScheme="brand"
                        width="full"
                        type="submit"
                        isLoading={sending}
                        loadingText={t('ContactSending')}
                        _hover={{ bg: "brand.300" }}
                        _active={{ bg: "brand.700" }}
                        fontFamily="'Alegreya Sans SC', sans-serif"
                        size="lg"
                    >
                        {t('ContactSendMessage')}
                    </Button>

                    {error && <ErrorAlert />}
                    {sent && !error && <SuccessAlert />}
                </form>

            ) : (
                <Box textAlign="center" mt={6} color={textColor} fontFamily="'Alegreya Sans SC', sans-serif">
                    <p>{t('ContactGreeting')}</p>
                </Box>
            )}
        </Box>
    );
};

export default ContactForm;