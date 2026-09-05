import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "../../lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-200 " +
  "disabled:pointer-events-none disabled:opacity-55 active:translate-y-px " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg shadow-soft hover:bg-accent-hover hover:shadow-card",
  secondary:
    "bg-surface-2 text-fg border border-border hover:border-border-strong hover:bg-surface-3",
  outline:
    "border border-border text-fg-soft hover:text-fg hover:border-accent hover:bg-accent-soft",
  ghost: "text-muted hover:text-fg hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
  icon: "h-10 w-10 p-0",
};

interface ButtonOwnProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
  /** Anchor props, allowed on every render target so `<Button href=...>` type-checks. */
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
}

export type ButtonProps<C extends ElementType> = ButtonOwnProps & {
  as?: C;
} & Omit<ComponentPropsWithoutRef<C>, keyof ButtonOwnProps | "as">;

/**
 * Polymorphic button. Renders a `<button>` by default, an `<a>` when given an
 * `href`, or any component passed through `as` (e.g. react-router's `Link`).
 */
export function Button<C extends ElementType = "button">({
  as,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps<C>) {
  const Component = (as ?? ("href" in props ? "a" : "button")) as ElementType;
  return (
    <Component
      className={cn(base, variants[variant], sizes[size], className)}
      {...(props as Record<string, unknown>)}
    />
  );
}

export default Button;
