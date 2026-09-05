import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type Tone = "neutral" | "accent" | "success" | "warning";

const tones: Record<Tone, string> = {
  neutral: "border-border bg-surface-2 text-muted",
  accent: "border-transparent bg-accent-soft text-accent",
  success: "border-transparent bg-success-soft text-success",
  warning: "border-transparent bg-warning-soft text-warning",
};

export function Badge({
  children,
  tone = "neutral",
  className,
  dot = false,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-medium tracking-wide",
        tones[tone],
        className
      )}
    >
      {dot && <span className="size-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-md border border-border bg-surface-2/70 px-2 py-1 font-mono text-[0.68rem] text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
