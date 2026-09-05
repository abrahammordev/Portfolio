import { Hero } from "../components/home/Hero";
import { NowSection } from "../components/home/NowSection";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { TechStack } from "../components/home/TechStack";
import { ContactCTA } from "../components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <NowSection />
      <FeaturedProjects />
      <TechStack />
      <ContactCTA />
    </>
  );
}
