import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import RoutePaths from "../../routes/RoutePaths";
import { cvFileName, cvHref, site } from "../../data/site";
import { cn } from "../../lib/utils";
import { useIsScrolled, useLockBodyScroll, useScrollProgress } from "../../hooks/useScrollAnimation";
import { LanguageSwitch } from "../ui/LanguageSwitch";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Button } from "../ui/Button";
import { LogoBadge } from "../ui/Logo";
import type { Theme } from "../../hooks/useTheme";

const NAV = [
  { to: RoutePaths.Home, key: "nav.home" },
  { to: RoutePaths.About, key: "nav.about" },
  { to: RoutePaths.Projects, key: "nav.projects" },
  { to: RoutePaths.Contact, key: "nav.contact" },
];

export function Header({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const { t, i18n } = useTranslation();
  const isScrolled = useIsScrolled(16);
  const progress = useScrollProgress();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useLockBodyScroll(menuOpen);
  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          isScrolled ? "border-b border-border glass" : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
          <NavLink
            to={RoutePaths.Home}
            className="group flex items-center gap-2.5"
            aria-label={site.shortName}
          >
            <LogoBadge className="transition-transform duration-200 group-hover:scale-105" />
            <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
              {site.shortName}
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV.map(({ to, key }) => (
              <NavLink
                key={to}
                to={to}
                end={to === RoutePaths.Home}
                className={({ isActive }) =>
                  cn(
                    "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                    isActive ? "text-fg" : "text-muted hover:text-fg"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {t(key)}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitch className="hidden sm:flex" />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <Button
              href={cvHref(i18n.language)}
              download={cvFileName(i18n.language)}
              size="sm"
              variant="secondary"
              className="hidden lg:inline-flex"
            >
              {t("common.downloadCv")}
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? t("nav.closeMenu") : t("nav.menu")}
              aria-expanded={menuOpen}
              className="grid size-10 place-items-center rounded-full border border-border text-fg md:hidden"
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: 0.04 }}
              aria-label="Mobile"
              className="flex h-full flex-col justify-center gap-2 px-8 pb-24"
            >
              {NAV.map(({ to, key }, i) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === RoutePaths.Home}
                  className={({ isActive }) =>
                    cn(
                      "border-b border-border py-5 font-display text-3xl font-semibold transition-colors",
                      isActive ? "text-accent" : "text-fg"
                    )
                  }
                >
                  <span className="mr-3 font-mono text-xs text-muted">
                    0{i + 1}
                  </span>
                  {t(key)}
                </NavLink>
              ))}
              <div className="mt-8 flex items-center gap-3">
                <LanguageSwitch />
                <Button
                  href={cvHref(i18n.language)}
                  download={cvFileName(i18n.language)}
                  size="sm"
                  variant="secondary"
                >
                  {t("common.downloadCv")}
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
