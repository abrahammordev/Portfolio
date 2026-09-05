import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";
import RoutePaths from "../../routes/RoutePaths";
import { featuredProjects, type Project } from "../../data/projects";
import { Section, SectionHeading } from "../ui/Section";
import { Button } from "../ui/Button";
import { ProjectCard } from "../projects/ProjectCard";
import { ProjectModal } from "../projects/ProjectModal";
import { staggerContainer, viewportOnce } from "../../lib/animations";

export function FeaturedProjects() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Section id="work" className="border-t border-border">
      <SectionHeading
        eyebrow="/ work"
        title={t("projects.featuredTitle")}
        subtitle={t("projects.featuredSubtitle")}
        action={
          <Button as={Link} to={RoutePaths.Projects} variant="outline" size="sm">
            {t("common.viewAll")}
            <FiArrowRight size={14} />
          </Button>
        }
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2"
      >
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelected} />
        ))}
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}

export default FeaturedProjects;
