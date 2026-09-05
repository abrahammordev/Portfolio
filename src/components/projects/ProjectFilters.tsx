import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { projectCategories, projects, type ProjectCategory } from "../../data/projects";
import { cn } from "../../lib/utils";

export function ProjectFilters({
  active,
  onChange,
}: {
  active: "all" | ProjectCategory;
  onChange: (category: "all" | ProjectCategory) => void;
}) {
  const { t } = useTranslation();

  const countFor = (id: "all" | ProjectCategory) =>
    id === "all" ? projects.length : projects.filter((p) => p.category === id).length;

  return (
    <div
      role="tablist"
      aria-label={t("projects.title")}
      className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
    >
      {projectCategories.map(({ id }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => onChange(id)}
            className={cn(
              "relative shrink-0 rounded-full border px-4 py-2 text-sm transition-colors",
              isActive
                ? "border-transparent text-accent-fg"
                : "border-border text-muted hover:border-border-strong hover:text-fg"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 -z-10 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {t(`projects.categories.${id}`)}
            <span className={cn("ml-2 font-mono text-[0.66rem]", isActive ? "opacity-70" : "opacity-60")}>
              {countFor(id)}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default ProjectFilters;
