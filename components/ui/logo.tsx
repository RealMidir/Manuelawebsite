/**
 * Chogan-Blütenmarke — als SVG nachgebaut (skalierbar, per currentColor
 * einfärbbar). 4 Vesica-Blätter im Kreuz mit kleinem Mittel-Diamant.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="-50 -50 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinejoin="round"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {[0, 90, 180, 270].map((r) => (
        <path
          key={r}
          transform={`rotate(${r})`}
          d="M0 -6.5 C 9.5 -15, 9.5 -37, 0 -45 C -9.5 -37, -9.5 -15, 0 -6.5 Z"
        />
      ))}
    </svg>
  );
}

export function Logo({
  variant = "compact",
  on = "light",
  className = "",
}: {
  variant?: "compact" | "full";
  on?: "light" | "dark";
  className?: string;
}) {
  const tone = on === "dark" ? "text-ivory" : "text-espresso";

  if (variant === "full") {
    return (
      <span className={`inline-flex flex-col items-center ${tone} ${className}`}>
        <LogoMark className="h-9 w-9 text-clay" />
        <span className="mt-4 font-display text-3xl italic leading-none">
          Manuela
        </span>
        <span className="mt-4 h-px w-8 bg-current opacity-30" />
        <span className="mt-4 font-mono text-[0.58rem] uppercase tracking-[0.26em] opacity-70">
          Chogan · Partnerin &amp; Mentorin
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${tone} ${className}`}>
      <LogoMark className="h-6 w-6 text-clay" />
      <span className="font-display text-[1.55rem] italic leading-none">
        Manuela
      </span>
    </span>
  );
}
