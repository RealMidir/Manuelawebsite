/**
 * „Beige Bildfläche statt grauer Platzhalter" (Style Guide, Bildwelt).
 * Flache, warme Fläche mit zartem Tageslicht von der Seite — später durch
 * echte Stillleben/Fotos (Parfum auf Marmor, Hände, Leinen) ersetzbar.
 */
export function PlaceholderImage({
  aspect = "4 / 5",
  label,
  tone = "linen",
  className = "",
}: {
  aspect?: string;
  label?: string;
  tone?: "linen" | "oatmeal" | "noir";
  className?: string;
}) {
  const bg =
    tone === "noir" ? "bg-noir" : tone === "oatmeal" ? "bg-oatmeal" : "bg-linen";
  const labelColor = tone === "noir" ? "text-ivory/45" : "text-clay/70";

  return (
    <div
      className={`relative overflow-hidden ${bg} ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_28%_18%,rgba(255,255,255,0.45),transparent_60%)]" />
      {label && (
        <span
          className={`absolute bottom-4 left-4 font-mono text-[0.56rem] uppercase tracking-[0.22em] ${labelColor}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
