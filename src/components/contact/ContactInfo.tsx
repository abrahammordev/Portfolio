import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { site } from "../../data/site";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export function ContactInfo() {
  const { t } = useTranslation();

  const rows = [
    { id: "email", Icon: FiMail, label: t("contact.email"), value: site.email, href: `mailto:${site.email}` },
    { id: "phone", Icon: FiPhone, label: t("contact.phone"), value: site.phone, href: `tel:${site.phoneHref}` },
    { id: "location", Icon: FiMapPin, label: t("contact.location"), value: site.location },
  ];

  const socials = [
    { href: site.socials.github, label: "GitHub", handle: "@abrahammordev", Icon: FiGithub },
    { href: site.socials.linkedin, label: "LinkedIn", handle: "in/abrahammordev", Icon: FiLinkedin },
  ];

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
      <motion.h3
        variants={fadeInUp}
        className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted"
      >
        {t("contact.infoTitle")}
      </motion.h3>

      <motion.ul variants={fadeInUp} className="mt-5 divide-y divide-border overflow-hidden rounded-card border border-border bg-surface">
        {rows.map(({ id, Icon, label, value, href }) => {
          const content = (
            <>
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                <Icon size={15} />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.68rem] uppercase tracking-wider text-muted">{label}</span>
                <span className="block truncate text-sm text-fg">{value}</span>
              </span>
              {href && <FiArrowUpRight size={14} className="ml-auto shrink-0 text-muted" />}
            </>
          );
          return (
            <li key={id}>
              {href ? (
                <a href={href} className="flex items-center gap-3 p-4 transition-colors hover:bg-surface-2">
                  {content}
                </a>
              ) : (
                <div className="flex items-center gap-3 p-4">{content}</div>
              )}
            </li>
          );
        })}
      </motion.ul>

      <motion.h3
        variants={fadeInUp}
        className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted"
      >
        {t("contact.elsewhere")}
      </motion.h3>
      <motion.ul variants={fadeInUp} className="mt-4 grid gap-3 sm:grid-cols-2">
        {socials.map(({ href, label, handle, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 rounded-card border border-border bg-surface p-4 transition-colors hover:border-accent"
            >
              <Icon size={17} className="shrink-0 text-accent" />
              <span className="min-w-0">
                <span className="block text-sm font-medium">{label}</span>
                <span className="block truncate font-mono text-[0.68rem] text-muted">{handle}</span>
              </span>
            </a>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default ContactInfo;
