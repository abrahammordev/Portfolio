import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { skillGroups } from "../../data/skills";
import { Section, SectionHeading } from "../ui/Section";
import { fadeInUp, staggerContainer, viewportOnce } from "../../lib/animations";

export function TechStack() {
  const { t } = useTranslation();

  return (
    <Section id="stack" className="border-t border-border">
      <SectionHeading
        eyebrow="/ stack"
        title={t("skills.title")}
        subtitle={t("skills.subtitle")}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.id}
            variants={fadeInUp}
            className="rounded-card border border-border bg-surface p-5 transition-colors hover:border-border-strong"
          >
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
              {t(group.labelKey)}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/60 px-2.5 py-1.5 text-xs text-fg-soft transition-colors hover:border-accent/50 hover:text-fg"
                >
                  <Icon aria-hidden className="size-3.5 shrink-0 text-accent" />
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

export default TechStack;
