import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import RoutePaths from "../../routes/RoutePaths";
import { cvFileName, cvHref, site, stats } from "../../data/site";
import { Container } from "../ui/Section";
import { Button } from "../ui/Button";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import { TypingRoles } from "./TypingRoles";
import portrait from "../../assets/profilePictureW.webp";

export function Hero() {
  const { t, i18n } = useTranslation();

  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto]"
        >
          <div className="max-w-2xl">
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success-soft px-3 py-1.5 text-xs font-medium text-success">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                {t("common.available")}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <FiMapPin size={13} />
                {t("hero.eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-6 text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-[3.6rem]"
            >
              {site.name}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 min-h-[2.2em] font-display text-xl font-medium sm:text-2xl"
            >
              <TypingRoles />
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-muted"
            >
              {t("hero.lead")}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-3">
              <Button as={Link} to={RoutePaths.Projects} size="lg">
                {t("common.viewProjects")}
                <FiArrowRight size={16} />
              </Button>
              <Button
                href={cvHref(i18n.language)}
                download={cvFileName(i18n.language)}
                variant="secondary"
                size="lg"
              >
                <FiDownload size={16} />
                {t("common.downloadCv")}
              </Button>
              <div className="flex items-center gap-2">
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="grid size-11 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="grid size-11 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <FiLinkedin size={18} />
                </a>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-8 text-xs text-muted">
              {t("hero.currentlyAt")}{" "}
              <a
                href={site.company.url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-fg underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
              >
                {site.company.name}
              </a>
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="relative mx-auto hidden lg:block">
            <div className="absolute -inset-6 rounded-[2rem] bg-accent-soft blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-float">
              <img
                src={portrait}
                alt={site.name}
                width={320}
                height={380}
                className="h-[380px] w-[320px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-border/60 bg-surface/85 px-4 py-3 backdrop-blur">
                <span className="font-mono text-[0.68rem] text-muted">
                  {t("hero.eyebrow")}
                </span>
                <span className="font-mono text-[0.68rem] text-accent">
                  {site.company.name}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.dl
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-20 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={fadeInUp} className="bg-surface p-5 sm:p-6">
              <dt className="font-display text-2xl font-semibold text-accent sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-xs leading-relaxed text-muted">{t(stat.labelKey)}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}

export default Hero;
