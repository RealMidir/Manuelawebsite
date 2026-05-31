import Image from "next/image";

/**
 * Deine Unterschrift als Logo. Das JPEG ist schwarze Tinte auf Weiß –
 * per Blend-Mode entfernen wir den weißen Hintergrund:
 *  - auf hellem Grund:  mix-blend-multiply  (Tinte bleibt dunkel)
 *  - auf dunklem Grund: invert + screen     (Tinte wird hell)
 */
export function Signature({
  on = "light",
  width = 170,
  className = "",
}: {
  on?: "light" | "dark";
  width?: number;
  className?: string;
}) {
  const blend =
    on === "dark"
      ? "[filter:invert(1)_brightness(1.6)] mix-blend-screen opacity-90"
      : "mix-blend-multiply opacity-80";

  return (
    <Image
      src="/brand/signature.jpeg"
      alt="Manuela"
      width={width}
      height={Math.round(width * 0.52)}
      draggable={false}
      className={`h-auto w-auto select-none ${blend} ${className}`}
      priority
    />
  );
}
