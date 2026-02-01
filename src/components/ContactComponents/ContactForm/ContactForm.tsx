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
    VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

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
    const [focusedField, setFocusedField] = useState<string | null>(null);

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
    const focusBorderColor = useColorModeValue("brand.500", "brand.300");

    const inputStyles = (fieldName: string) => ({
        borderColor: focusedField === fieldName ? focusBorderColor : borderColor,
        boxShadow: focusedField === fieldName ? `0 0 0 3px ${focusBorderColor}33` : "none",
        bg: focusedField === fieldName ? hoverBg : "transparent",
        transition: "all 0.2s ease-in-out",
    });

    return (
        <MotionBox
            p={6}
            borderRadius="2xl"
            maxW={{ base: "100%", sm: "500px" }}
            mx="auto"
            bg={bgColor}
            boxShadow="xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Box textAlign="center" mb={6}>
                <Heading
                    as="h1"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="bold"
                    color={textColor}
                >
                    {t('ContactHeader')}
                </Heading>
            </Box>

            {!sent ? (
                <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>
                        <MotionBox
                            width="full"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <FormControl id="from_name" isRequired>
                                <FormLabel color={textColor}>{t('ContactIntro')}</FormLabel>
                                <Input
                                    type="text"
                                    name="from_name"
                                    value={formData.from_name}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField("from_name")}
                                    onBlur={() => setFocusedField(null)}
                                    {...inputStyles("from_name")}
                                    color={textColor}
                                    _hover={{ bg: hoverBg, borderColor: focusBorderColor }}
                                    _placeholder={{ color: "gray.400" }}
                                />
                            </FormControl>
                        </MotionBox>

                        <MotionBox
                            width="full"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <FormControl id="email" isRequired>
                                <FormLabel color={textColor}>{t('ContactMail')}</FormLabel>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField("email")}
                                    onBlur={() => setFocusedField(null)}
                                    {...inputStyles("email")}
                                    color={textColor}
                                    _hover={{ bg: hoverBg, borderColor: focusBorderColor }}
                                    _placeholder={{ color: "gray.400" }}
                                />
                                <FormHelperText color={textColor}>{t('ContactCTA')}</FormHelperText>
                            </FormControl>
                        </MotionBox>

                        <MotionBox
                            width="full"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <FormControl id="message" isRequired>
                                <FormLabel color={textColor}>{t('ContactMessage')}</FormLabel>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    onFocus={() => setFocusedField("message")}
                                    onBlur={() => setFocusedField(null)}
                                    {...inputStyles("message")}
                                    resize="vertical"
                                    color={textColor}
                                    _hover={{ bg: hoverBg, borderColor: focusBorderColor }}
                                    _placeholder={{ color: "gray.400" }}
                                    minH="120px"
                                />
                            </FormControl>
                        </MotionBox>

                        <MotionButton
                            colorScheme="blue"
                            width="full"
                            type="submit"
                            isLoading={sending}
                            loadingText={t('ContactSending')}
                            _hover={{ bg: "blue.300", transform: "translateY(-2px)" }}
                            _active={{ bg: "blue.700", transform: "translateY(0)" }}
                            size="lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            {t('ContactSendMessage')}
                        </MotionButton>
                    </VStack>
                    {error && <ErrorAlert />}
                </form>
            ) : (
                <MotionBox
                    textAlign="center"
                    mt={6}
                    color={textColor}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                >
                    <p>{t('ContactGreeting')}</p>
                    <SuccessAlert />
                </MotionBox>
            )}
        </MotionBox>
    );
};

export default ContactForm;
