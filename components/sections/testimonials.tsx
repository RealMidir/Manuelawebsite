import { Reveal } from "@/components/ui/reveal";

const quotes = [
  {
    quote:
      "Manuela hat mir Nº57 empfohlen, weil ich Holz mag — er hält wirklich den ganzen Tag. Keine Übertreibung, einfach richtig.",
    name: "Carolin",
    role: "Kundin",
  },
  {
    quote:
      "Ich wollte etwas Eigenes, ohne Druck. Das Mentoring war ehrlich und strukturiert — nach drei Monaten lief mein Business.",
    name: "Jasmin",
    role: "Partnerin",
  },
  {
    quote:
      "Endlich jemand, der erklärt statt zu verkaufen. Ich kaufe wieder, weil ich wieder will.",
    name: "Sandra",
    role: "Kundin",
  },
];

export function Testimonials() {
  return (
    <section id="stimmen" className="scroll-mt-24 bg-vanilla/40 py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Stimmen</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-balance mt-6 font-display text-[clamp(2.1rem,5vw,4rem)] font-medium leading-[1.04] text-espresso">
              Worte, die <span className="italic text-clay">bleiben</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between border border-greige/25 bg-cream p-8 md:p-9">
                <blockquote className="font-display text-[1.32rem] font-normal italic leading-snug text-espresso">
                  „{q.quote}"
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-greige/20 pt-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linen font-display text-base italic text-espresso">
                    {q.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-mono text-[0.78rem] text-espresso">
                      {q.name}
                    </span>
                    <span className="mono-label block text-clay">{q.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
