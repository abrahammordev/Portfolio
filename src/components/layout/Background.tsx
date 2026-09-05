/**
 * Ambient page background: a faint grid plus two slow-drifting colour blooms.
 * Purely decorative — hidden from assistive tech and pinned behind everything.
 */
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid mask-fade-b absolute inset-0 opacity-70" />
      <div
        className="animate-float-slow absolute -left-40 -top-40 size-[38rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow-a) 0%, transparent 68%)" }}
      />
      <div
        className="animate-float-slow absolute -right-52 top-1/3 size-[34rem] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--glow-b) 0%, transparent 68%)",
          animationDelay: "-7s",
        }}
      />
    </div>
  );
}

export default Background;
