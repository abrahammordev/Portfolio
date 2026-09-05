import { Intro } from "../components/about/Intro";
import { ExperienceTimeline } from "../components/about/ExperienceTimeline";
import { TechStack } from "../components/home/TechStack";
import { ContactCTA } from "../components/home/ContactCTA";

export default function About() {
  return (
    <>
      <Intro />
      <ExperienceTimeline />
      <TechStack />
      <ContactCTA />
    </>
  );
}
