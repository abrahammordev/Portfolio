import { Box } from "@chakra-ui/react";
import HeroSection from "../components/HomeComponents/HeroSection";
import AcademicInfo from "../components/HomeComponents/AcademicInfo";

const Home = () => {
    return (
        <Box>
            <HeroSection />
            <AcademicInfo />
        </Box>
    );
};

export default Home;