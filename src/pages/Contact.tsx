import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Container } from "../components/ui/Section";
import { ContactInfo } from "../components/contact/ContactInfo";
import { ContactForm } from "../components/contact/ContactForm";
import { fadeInUp, staggerContainer } from "../lib/animations";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-2xl">
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs uppercase tracking-[0.18em] text-accent"
          >
            / contact
          </motion.p>
          <motion.h1 variants={fadeInUp} className="mt-4 text-4xl font-semibold sm:text-5xl">
            {t("contact.title")}
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 text-base leading-relaxed text-muted">
            {t("contact.subtitle")}
          </motion.p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
