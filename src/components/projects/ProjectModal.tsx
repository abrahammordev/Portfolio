import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiCheck, FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import type { Project } from "../../data/projects";
import { Badge, Tag } from "../ui/Badge";
import { Button } from "../ui/Button";
import { overlayVariants, panelVariants } from "../../lib/animations";
import { useLockBodyScroll } from "../../hooks/useScrollAnimation";

const statusTone = {
  live: "success",
  maintained: "accent",
  archived: "neutral",
} as const;

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  useLockBodyScroll(Boolean(project));

  useEffect(() => {
    setSelectedImageIndex(null);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedImageIndex !== null) setSelectedImageIndex(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    if (selectedImageIndex === null) panelRef.current?.focus();
    else lightboxCloseRef.current?.focus();
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project, onClose, selectedImageIndex]);

  const base = project ? `projects.items.${project.id}` : "";
  const highlights = project
    ? (t(`${base}.highlights`, { returnObjects: true }) as string[])
    : [];
  const selectedGalleryImage =
    project && selectedImageIndex !== null ? project.gallery?.[selectedImageIndex] : null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[60] flex items-end justify-center bg-bg/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-[1.5rem] border border-border bg-bg-elevated shadow-float outline-none sm:rounded-[1.5rem]"
          >
            <div className="relative">
              {project.image && (
                <div className="relative aspect-[21/9] overflow-hidden bg-surface-2">
                  <img
                    src={project.image}
                    alt=""
                    className={
                      project.imageFit === "contain"
                        ? "size-full scale-[0.55] object-contain"
                        : "size-full object-cover"
                    }
                  />
                  {project.imageFit !== "contain" && (
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-bg-elevated/30 to-transparent" />
                  )}
                </div>
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label={t("common.close")}
                className="absolute right-4 top-4 grid size-9 place-items-center rounded-full border border-border bg-bg/70 text-fg backdrop-blur transition-colors hover:bg-surface-2"
              >
                <FiX size={17} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone={statusTone[project.status]} dot={project.status === "live"}>
                  {t(`projects.status.${project.status}`)}
                </Badge>
                <Badge tone="accent">{t(`projects.categories.${project.category}`)}</Badge>
                <span className="font-mono text-[0.68rem] text-muted">{project.year}</span>
              </div>

              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">{project.name}</h2>
              <p className="mt-2 text-base text-fg-soft">{t(`${base}.tagline`)}</p>

              {project.contextKey && (
                <p className="mt-4 rounded-xl border border-border bg-surface-2/60 px-4 py-3 text-xs leading-relaxed text-muted">
                  {t(project.contextKey)}
                </p>
              )}

              <section className="mt-7">
                <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                  {t("projects.overview")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-soft">
                  {t(`${base}.description`)}
                </p>
              </section>

              {project.gallery && project.gallery.length > 0 && (
                <section className="mt-7">
                  <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                    {t("projects.gallery")}
                  </h3>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                    {project.gallery.map((image, index) => (
                      <li key={image}>
                        <button
                          type="button"
                          onClick={() => setSelectedImageIndex(index)}
                          className="group block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-surface-2 transition-colors hover:border-border-strong"
                        >
                          <img
                            src={image}
                            alt={t("projects.galleryImageAlt", {
                              project: project.name,
                              index: index + 1,
                            })}
                            loading="lazy"
                            className="aspect-[4/3] w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {highlights.length > 0 && (
                <section className="mt-7">
                  <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                    {t("projects.highlights")}
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {highlights.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-soft">
                        <FiCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="mt-7">
                <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                  {t("projects.stack")}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <Tag>{tech}</Tag>
                    </li>
                  ))}
                </ul>
              </section>

              {project.links && project.links.length > 0 && (
                <ul className="mt-7 flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                      >
                        {t(link.labelKey, { defaultValue: link.labelKey })}
                        <FiArrowUpRight size={12} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
                  {project.liveUrl && (
                    <Button href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                      <FiExternalLink size={15} />
                      {t("common.liveSite")}
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      variant="secondary"
                    >
                      <FiGithub size={15} />
                      {t("common.sourceCode")}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </motion.div>

          <AnimatePresence>
            {selectedGalleryImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                role="dialog"
                aria-modal="true"
                aria-label={t("projects.galleryImageAlt", {
                  project: project.name,
                  index: (selectedImageIndex ?? 0) + 1,
                })}
                className="fixed inset-0 z-10 grid place-items-center bg-bg/90 p-4 backdrop-blur-sm sm:p-8"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(null);
                }}
              >
                <motion.figure
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-h-full max-w-6xl"
                >
                  <img
                    src={selectedGalleryImage}
                    alt={t("projects.galleryImageAlt", {
                      project: project.name,
                      index: (selectedImageIndex ?? 0) + 1,
                    })}
                    className="max-h-[calc(100dvh-2rem)] max-w-full rounded-xl border border-border bg-surface-2 object-contain shadow-float sm:max-h-[calc(100dvh-4rem)]"
                  />
                  <button
                    ref={lightboxCloseRef}
                    type="button"
                    onClick={() => setSelectedImageIndex(null)}
                    aria-label={t("common.close")}
                    className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-border bg-bg/80 text-fg backdrop-blur transition-colors hover:bg-surface-2"
                  >
                    <FiX size={17} />
                  </button>
                </motion.figure>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default ProjectModal;
