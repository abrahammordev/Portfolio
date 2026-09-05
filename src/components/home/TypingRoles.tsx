import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useReducedMotion } from "../../hooks/useScrollAnimation";

const TYPING_SPEED = 55;
const DELETING_SPEED = 28;
const PAUSE = 1900;

export function TypingRoles() {
  const { t, i18n } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const roles = t("hero.roles", { returnObjects: true }) as string[];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Reset when the language switches so we never type a half-translated string.
  useEffect(() => {
    setIndex(0);
    setText("");
    setDeleting(false);
  }, [i18n.language]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const current = roles[index % roles.length] ?? "";

    if (!deleting && text === current) {
      const timer = setTimeout(() => setDeleting(true), PAUSE);
      return () => clearTimeout(timer);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
      return;
    }

    const timer = setTimeout(
      () =>
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        ),
      deleting ? DELETING_SPEED : TYPING_SPEED
    );
    return () => clearTimeout(timer);
  }, [text, deleting, index, roles, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span className="text-accent">{roles[0]}</span>;
  }

  return (
    <span aria-live="polite">
      <span className="text-accent">{text}</span>
      <span className="animate-caret ml-1 inline-block h-[1em] w-[2px] translate-y-[0.12em] bg-accent" />
    </span>
  );
}

export default TypingRoles;
