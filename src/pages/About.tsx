import { Box } from "@chakra-ui/react";
import IntroSection from "../components/AboutComponents/Intro/IntroSection";
import TimeLine from "../components/AboutComponents/TimeLine";

const About: React.FC = () => {
  return (
    <Box id="about" style={{ paddingBottom: "120px" }}>
      <IntroSection />
      <TimeLine />
    </Box>
  );
};

export default About;
