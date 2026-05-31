import { Ornament } from "@/components/ui/logo";

const phrases = [
  "Düfte, die erinnern",
  "Frauen, die wachsen",
  "Ein Business, das nach dir riecht",
  "Wissen statt Verkaufsdruck",
];

export function Marquee() {
  const row = [...phrases, ...phrases];
  return (
    <section className="overflow-hidden border-y border-greige/20 bg-vanilla/50 py-7">
      <div className="marquee-track items-center">
        {row.map((p, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-8 font-display text-xl italic text-espresso md:text-2xl">
              {p}
            </span>
            <Ornament className="h-3 w-3 text-clay/60" />
          </span>
        ))}
      </div>
    </section>
  );
}
