import { useTranslation } from 'react-i18next';
import { Button, useColorModeValue } from '@chakra-ui/react';

const LanguageSwitch: React.FC = () => {
    const { i18n } = useTranslation();
    const textColor = useColorModeValue("brand.600", "brand.50");
    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <Button onClick={toggleLanguage} size={"lg"} bg="transparent" color={textColor} _hover={{ bg: "brand.letter-light", color: "brand.letter-dark" }} _active={{ bg: "brand.letter-light", color: "brand.letter-dark" }}>
            {i18n.language === "es" ? "English" : "Español"}
        </Button>
    );
};

export default LanguageSwitch;