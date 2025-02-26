import { Box } from "@chakra-ui/react";
import HeroSection from "../components/HomeComponents/HeroSection";
import AcademicInfo from "../components/HomeComponents/AcademicInfo";

const Home = () => {
    return (
        <Box pb={{ base: "100px", md: "40px" }}>
            <HeroSection />
            <AcademicInfo />
        </Box>
    );
};

export default Home;