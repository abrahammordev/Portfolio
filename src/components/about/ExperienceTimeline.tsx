import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";
import { education, experience } from "../../data/experience";
import { Section, SectionHeading } from "../ui/Section";
import { Badge, Tag } from "../ui/Badge";
import { fadeInUp, staggerContainer, viewportOnce } from "../../lib/animations";

export function ExperienceTimeline() {
  const { t } = useTranslation();

  return (
    <Section id="experience" className="border-t border-border">
      <SectionHeading eyebrow="/ experience" title={t("about.experienceTitle")} />

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative space-y-4 border-l border-border pl-6 sm:pl-10"
      >
        {experience.map((item) => (
          <motion.li key={item.id} variants={fadeInUp} className="relative">
            <span
              aria-hidden
              className="absolute -left-[calc(1.5rem+6px)] top-6 size-3 rounded-full border-2 border-bg bg-accent sm:-left-[calc(2.5rem+6px)]"
            />
            <div className="rounded-card border border-border bg-surface p-5 transition-colors hover:border-border-strong sm:p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {item.companyUrl ? (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 font-display text-base font-semibold transition-colors hover:text-accent"
                  >
                    {item.company}
                    <FiArrowUpRight size={13} className="text-muted" />
                  </a>
                ) : (
                  <span className="font-display text-base font-semibold">{item.company}</span>
                )}
                {item.current && (
                  <Badge tone="success" dot>
                    {t("about.currentBadge")}
                  </Badge>
                )}
                <span className="ml-auto font-mono text-[0.68rem] text-muted">
                  {t(item.periodKey)}
                </span>
              </div>

              <p className="mt-2 text-sm font-medium text-accent">{t(item.roleKey)}</p>
              <p className="mt-1 text-sm text-muted">{t(item.summaryKey)}</p>

              <ul className="mt-4 space-y-2.5">
                {item.bulletKeys.map((key) => (
                  <li key={key} className="flex gap-3 text-sm leading-relaxed text-fg-soft">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {t(key)}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </motion.ol>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-16"
      >
        <motion.h3 variants={fadeInUp} className="text-2xl font-semibold">
          {t("about.educationTitle")}
        </motion.h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {education.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="rounded-card border border-border bg-surface p-5"
            >
              <span className="font-mono text-[0.68rem] text-muted">{t(item.periodKey)}</span>
              <h4 className="mt-2 text-base font-semibold leading-snug">{t(item.titleKey)}</h4>
              <p className="mt-1 text-sm text-muted">{t(item.placeKey)}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

export default ExperienceTimeline;
