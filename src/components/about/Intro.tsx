import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { cvFileName, cvHref, site } from "../../data/site";
import { Container } from "../ui/Section";
import { Button } from "../ui/Button";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import portrait from "../../assets/profilePictureW.webp";

export function Intro() {
  const { t, i18n } = useTranslation();

  return (
    <section className="pt-32 pb-4 sm:pt-40">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:items-start md:gap-14"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-5 md:block">
            <img
              src={portrait}
              alt={site.name}
              width={132}
              height={132}
              className="size-24 shrink-0 rounded-2xl border border-border object-cover shadow-card sm:size-32"
            />
            <div className="md:mt-5">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">
                {site.location}
              </p>
              <p className="mt-1 text-sm text-muted md:max-w-[8.5rem]">{site.company.name}</p>
            </div>
          </motion.div>

          <div>
            <motion.p
              variants={fadeInUp}
              className="font-mono text-xs uppercase tracking-[0.18em] text-accent"
            >
              {t("about.kicker")}
            </motion.p>
            <motion.h1 variants={fadeInUp} className="mt-4 text-4xl font-semibold sm:text-5xl">
              {t("about.title")}
            </motion.h1>

            <motion.div variants={fadeInUp} className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-muted">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={cvHref(i18n.language)} download={cvFileName(i18n.language)} size="md">
                <FiDownload size={15} />
                {t("common.downloadCv")}
              </Button>
              <Button href={`mailto:${site.email}`} variant="secondary" size="md">
                <FiMail size={15} />
                {t("common.getInTouch")}
              </Button>
              <div className="flex items-center gap-2">
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="grid size-11 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <FiGithub size={17} />
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="grid size-11 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <FiLinkedin size={17} />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Intro;
