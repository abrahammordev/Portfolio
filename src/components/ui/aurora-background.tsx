"use client";
import { cn } from "./../../lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      style={{
        "--white": "rgb(255 255 255)",
        "--black": "rgb(0 0 0)",
        "--transparent": "transparent",
        "--blue-300": "rgb(147 197 253)",
        "--blue-400": "rgb(96 165 250)",
        "--blue-500": "rgb(59 130 246)",
        "--indigo-300": "rgb(165 180 252)",
        "--violet-200": "rgb(221 214 254)",
      } as React.CSSProperties}
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg aurora-background pb-24",
        className
      )}
      {...props}
    >
      <div className="fixed inset-0 z-0">
        <div
          className={cn(
            `
          [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
          [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
          [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
          [background-image:var(--white-gradient),var(--aurora)]
          dark:[background-image:var(--dark-gradient),var(--aurora)]
          [background-size:300%,_300%]
          [background-position:0%_50%,0%_50%]
          filter blur-[15px] invert dark:invert-0
          after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
          after:dark:[background-image:var(--dark-gradient),var(--aurora)]
          after:[background-size:300%,_300%]
          after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
          pointer-events-none
          absolute inset-0 opacity-70 will-change-transform transform-gpu`,
            showRadialGradient &&
            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_30%,var(--transparent)_80%)]`
          )}
        />
      </div>
      <div className="relative z-10 min-h-screen w-full">
        {children}
      </div>
    </div>
  );
};
