import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { nowItems } from "../../data/now";
import { Section, SectionHeading } from "../ui/Section";
import { fadeInUp, staggerContainer, viewportOnce } from "../../lib/animations";

export function NowSection() {
  const { t } = useTranslation();

  return (
    <Section id="now" className="border-t border-border">
      <SectionHeading eyebrow="/ now" title={t("now.title")} subtitle={t("now.subtitle")} />

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative border-l border-border pl-6 sm:pl-8"
      >
        {nowItems.map((item, i) => (
          <motion.li key={item.id} variants={fadeInUp} className="relative pb-9 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[calc(1.5rem+5px)] top-1.5 size-2.5 rounded-full border-2 border-bg bg-accent sm:-left-[calc(2rem+5px)]"
            />
            <div className="flex gap-3">
              <span className="mt-1 shrink-0 font-mono text-[0.68rem] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-lg font-semibold">{t(item.titleKey)}</h3>
                  <span className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[0.66rem] text-accent">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {t(item.descKey)}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}

export default NowSection;
