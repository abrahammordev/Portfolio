import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiGithub, FiMaximize2 } from "react-icons/fi";
import type { Project } from "../../data/projects";
import { Badge, Tag } from "../ui/Badge";
import { cn } from "../../lib/utils";
import { fadeInUp } from "../../lib/animations";

const statusTone = {
  live: "success",
  maintained: "accent",
  archived: "neutral",
} as const;

export interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

/**
 * forwardRef is required: `AnimatePresence mode="popLayout"` measures its direct
 * children, so a plain function component here warns and breaks exit layout.
 */
export const ProjectCard = forwardRef<HTMLElement, ProjectCardProps>(function ProjectCard(
  { project, onOpen },
  ref
) {
  const { t } = useTranslation();
  const base = `projects.items.${project.id}`;

  return (
    <motion.article
      ref={ref}
      variants={fadeInUp}
      exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.18 } }}
      layout
      className="group relative flex flex-col overflow-hidden rounded-card border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-card"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
        {project.image && (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className={cn(
              "size-full transition-transform duration-500 group-hover:scale-[1.04]",
              project.imageFit === "contain"
                ? "scale-[0.62] object-contain opacity-90 group-hover:scale-[0.66]"
                : "object-cover"
            )}
          />
        )}
        {project.imageFit !== "contain" && (
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent opacity-80" />
        )}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <Badge tone={statusTone[project.status]} dot={project.status === "live"}>
            {t(`projects.status.${project.status}`)}
          </Badge>
        </div>
        <span className="absolute right-3 top-3 rounded-md bg-bg/70 px-2 py-1 font-mono text-[0.66rem] text-muted backdrop-blur">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug">{project.name}</h3>
          <span className="shrink-0 font-mono text-[0.66rem] uppercase tracking-wider text-accent">
            {t(`projects.categories.${project.category}`)}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted">{t(`${base}.tagline`)}</p>

        <ul className="mb-6 mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
          {project.stack.length > 5 && (
            <li>
              <Tag>+{project.stack.length - 5}</Tag>
            </li>
          )}
        </ul>

        <div className="mt-auto flex items-center gap-2 border-t border-border pt-4">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3.5 py-2 text-xs font-medium text-fg transition-colors hover:bg-surface-3"
          >
            <FiMaximize2 size={13} />
            {t("common.readMore")}
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs text-muted transition-colors hover:text-accent"
            >
              {t("common.liveSite")}
              <FiArrowUpRight size={13} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={t("common.sourceCode")}
              title={t("common.sourceCode")}
              className="ml-auto grid size-8 place-items-center rounded-full text-muted transition-colors hover:text-accent"
            >
              <FiGithub size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
});

export default ProjectCard;
