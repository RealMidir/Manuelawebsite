/**
 * Eleganter Platzhalter im Moodboard-Stil (Perlmutt/Stein).
 * Später einfach durch echte Fotos ersetzen (next/image).
 */
export function PlaceholderImage({
  aspect = "4 / 5",
  initial = "M",
  label,
  className = "",
}: {
  aspect?: string;
  initial?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`pearl relative overflow-hidden rounded-[3px] ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none font-display text-[8rem] leading-none text-white/45 mix-blend-soft-light md:text-[10rem]">
          {initial}
        </span>
      </div>
      <div className="pointer-events-none absolute inset-3 rounded-[2px] border border-white/30" />
      {label && (
        <span className="absolute bottom-4 left-4 text-[0.6rem] uppercase tracking-[0.26em] text-mushroom/60">
          {label}
        </span>
      )}
    </div>
  );
}
