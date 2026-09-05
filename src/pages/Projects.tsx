import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  getProjectsByCategory,
  type Project,
  type ProjectCategory,
} from "../data/projects";
import { Container } from "../components/ui/Section";
import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectFilters } from "../components/projects/ProjectFilters";
import { ProjectModal } from "../components/projects/ProjectModal";
import { fadeInUp, staggerContainer } from "../lib/animations";

export default function Projects() {
  const { t } = useTranslation();
  const [category, setCategory] = useState<"all" | ProjectCategory>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(() => getProjectsByCategory(category), [category]);

  return (
    <div className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.18em] text-accent"
          >
            / work
          </motion.p>
          <motion.h1 variants={fadeInUp} className="mt-4 text-4xl font-semibold sm:text-5xl">
            {t("projects.title")}
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {t("projects.subtitle")}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10">
            <ProjectFilters active={category} onChange={setCategory} />
          </motion.div>
        </motion.div>

        <motion.div
          key={category}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="mt-16 text-center text-sm text-muted">{t("projects.empty")}</p>
        )}
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
