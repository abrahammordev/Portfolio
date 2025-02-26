import IntroSection from "../components/AboutComponents/Intro/IntroSection";
import TimeLine from "../components/AboutComponents/TimeLine";

const About: React.FC = () => {
  return (
    <div style={{ paddingBottom: "120px" }}>
      <IntroSection />
      <TimeLine />
    </div>
  );
};

export default About;
