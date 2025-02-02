import { useTranslation } from 'react-i18next';
import { Button } from '@chakra-ui/react';

const LanguageSwitch: React.FC = () => {
    const { i18n } = useTranslation();
    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <Button onClick={toggleLanguage} size={"lg"} bg="transparent">
            {i18n.language === "es" ? "English" : "Español"}
        </Button>
    );
};

export default LanguageSwitch;