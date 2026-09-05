import { LOGO_PATHS, type LogoVariant } from "../../lib/logo";
import { cn } from "../../lib/utils";

/** The monogram on its own. Inherits `currentColor`. */
export function Logo({
  variant = "open",
  className,
  title,
}: {
  variant?: LogoVariant;
  className?: string;
  title?: string;
}) {
  const { width, d } = LOGO_PATHS[variant];
  return (
    <svg
      viewBox={`0 0 ${width} 100`}
      fill="currentColor"
      className={cn("h-auto w-full", className)}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title && <title>{title}</title>}
      <path d={d} />
    </svg>
  );
}

/** The monogram inside its accent badge — header and footer. */
export function LogoBadge({
  variant = "open",
  className,
}: {
  variant?: LogoVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "grid size-9 shrink-0 place-items-center rounded-xl bg-accent text-accent-fg",
        className
      )}
    >
      <Logo variant={variant} className="w-[58%]" />
    </span>
  );
}

export default Logo;
