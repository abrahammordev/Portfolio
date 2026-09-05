import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiArrowRight, FiMail } from "react-icons/fi";
import RoutePaths from "../../routes/RoutePaths";
import { site } from "../../data/site";
import { Container } from "../ui/Section";
import { Button } from "../ui/Button";
import { fadeInUp, viewportOnce } from "../../lib/animations";

export function ContactCTA() {
  const { t } = useTranslation();

  return (
    <section className="border-t border-border py-20 sm:py-24">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[1.5rem] border border-border bg-surface px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <div
            aria-hidden
            className="absolute inset-x-0 -top-24 h-48 blur-3xl"
            style={{ background: "radial-gradient(ellipse at center, var(--glow-a) 0%, transparent 70%)" }}
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold sm:text-4xl">{t("contact.title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
              {t("contact.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button as={Link} to={RoutePaths.Contact} size="lg">
                {t("common.getInTouch")}
                <FiArrowRight size={16} />
              </Button>
              <Button href={`mailto:${site.email}`} variant="secondary" size="lg">
                <FiMail size={16} />
                {site.email}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default ContactCTA;
