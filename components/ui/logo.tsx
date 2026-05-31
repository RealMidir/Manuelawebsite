/**
 * Marken-Lockup nach Style Guide (Lockup D):
 *   Ornament  →  „Manuela" (Lora italic)  →  „CHOGAN · PARTNERIN & MENTORIN"
 * Die Signatur wurde bewusst entfernt — Manuela steht als Partnerin & Mentorin,
 * nie über der Marke. Das Ornament ist ein flaches, ruhiges Zeichen
 * (Platzhalter für das echte Chogan-Blütensymbol).
 */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M16 1c0 8 7 15 15 15-8 0-15 7-15 15 0-8-7-15-15-15 8 0 15-7 15-15Z"
        fill="currentColor"
      />
      <circle cx="16" cy="16" r="1.4" fill="currentColor" opacity="0.55" />
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
        <Ornament className="h-6 w-6 text-clay" />
        <span className="mt-3 font-display text-3xl italic leading-none">
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
      <Ornament className="h-[1.05rem] w-[1.05rem] text-clay" />
      <span className="font-display text-[1.6rem] italic leading-none">
        Manuela
      </span>
    </span>
  );
}
