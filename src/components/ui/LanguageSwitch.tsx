import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";
import { SUPPORTED_LANGUAGES, type Language } from "../../i18n/i18n";

const LABELS: Record<Language, string> = { en: "EN", es: "ES", de: "DE" };

export function LanguageSwitch({ className }: { className?: string }) {
  const { i18n, t } = useTranslation();
  const current = i18n.language?.slice(0, 2) as Language;
  const active = SUPPORTED_LANGUAGES.includes(current) ? current : "en";

  return (
    <div
      role="group"
      aria-label={t("nav.language")}
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-border p-0.5",
        className
      )}
    >
      {SUPPORTED_LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={active === code}
          lang={code}
          className={cn(
            "rounded-full px-2 py-1 font-mono text-[0.66rem] font-medium transition-colors",
            active === code ? "bg-accent-soft text-accent" : "text-muted hover:text-fg"
          )}
        >
          {LABELS[code]}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitch;
