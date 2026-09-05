import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import RoutePaths from "../../routes/RoutePaths";
import { cvFileName, cvHref, site } from "../../data/site";
import { Container } from "../ui/Section";
import { LogoBadge } from "../ui/Logo";

const NAV = [
  { to: RoutePaths.Home, key: "nav.home" },
  { to: RoutePaths.About, key: "nav.about" },
  { to: RoutePaths.Projects, key: "nav.projects" },
  { to: RoutePaths.Contact, key: "nav.contact" },
];

export function Footer() {
  const { t, i18n } = useTranslation();

  const socials = [
    { href: site.socials.github, label: "GitHub", Icon: FiGithub },
    { href: site.socials.linkedin, label: "LinkedIn", Icon: FiLinkedin },
    { href: `mailto:${site.email}`, label: "Email", Icon: FiMail },
  ];

  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <LogoBadge />
              <span className="font-display text-sm font-semibold">{site.shortName}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{t("footer.tagline")}</p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-14">
            <nav className="flex flex-col gap-2.5" aria-label="Footer">
              {NAV.map(({ to, key }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === RoutePaths.Home}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {t(key)}
                </NavLink>
              ))}
            </nav>
            <div className="flex flex-col gap-2.5">
              <a
                href={site.socials.surlabs}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
              >
                Surlabs <FiArrowUpRight size={13} />
              </a>
              <a
                href="https://github.com/abrahammordev/-Portfolio"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
              >
                {t("footer.source")} <FiArrowUpRight size={13} />
              </a>
              <a
                href={cvHref(i18n.language)}
                download={cvFileName(i18n.language)}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {t("common.downloadCv")}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {t("footer.rights")}
          </p>
          <p className="font-mono">{t("footer.built")}</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
