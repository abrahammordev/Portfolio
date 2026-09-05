import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import type { Theme } from "../../hooks/useTheme";

export function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: Theme;
  onToggle: () => void;
}) {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={t("nav.theme")}
      title={t("nav.theme")}
      className="relative grid size-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-border-strong hover:text-fg"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -70, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 70, scale: 0.6 }}
          transition={{ duration: 0.22 }}
          className="absolute grid place-items-center"
        >
          {theme === "dark" ? <FiSun size={17} /> : <FiMoon size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default ThemeToggle;
