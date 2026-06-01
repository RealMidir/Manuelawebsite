import { Reveal } from "@/components/ui/reveal";

export function Statement({
  parts,
  tone = "noir",
}: {
  parts: readonly string[];
  tone?: "noir" | "emboss";
}) {
  const emboss = tone === "emboss";
  return (
    <section className={emboss ? "bg-cream py-28 md:py-44" : "bg-noir py-28 md:py-44"}>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p
            className={`font-display text-[clamp(2.4rem,7vw,5.5rem)] font-medium leading-[1.08] ${
              emboss ? "emboss" : "text-ivory"
            }`}
          >
            {parts[0]}
            <span className={emboss ? "italic" : "italic text-clay"}>
              {parts[1]}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
