import { Reveal } from "@/components/ui/reveal";

const quotes = [
  {
    quote:
      "Manuela sieht, was du selbst noch nicht sehen kannst. Nach drei Monaten war ich nicht nur klarer — ich war eine andere Frau.",
    name: "Lena K.",
    role: "Unternehmerin",
  },
  {
    quote:
      "Endlich Wachstum, das sich nicht nach Kampf anfühlt. Diese Begleitung war das schönste Geschenk an mich selbst.",
    name: "Sophia R.",
    role: "Gründerin",
  },
  {
    quote:
      "Elegant, ehrlich und tiefgehend. Manuela verbindet klare Strategie mit echtem Herz.",
    name: "Marie L.",
    role: "Coachin",
  },
];

export function Testimonials() {
  return (
    <section id="stimmen" className="scroll-mt-24 bg-jetstream/50 py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Stimmen</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-balance mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.04] text-espresso">
              Worte, die <span className="italic text-clay">berühren</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between rounded-[4px] border border-greige/25 bg-ivory/70 p-8 md:p-10">
                <span className="font-display text-5xl leading-none text-taupe/50">
                  “
                </span>
                <blockquote className="mt-4 font-display text-[1.4rem] font-light italic leading-snug text-espresso">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-greige/20 pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-oatmeal/60 font-display text-lg text-espresso">
                    {q.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-normal text-espresso">
                      {q.name}
                    </span>
                    <span className="block text-[0.66rem] uppercase tracking-[0.18em] text-clay">
                      {q.role}
                    </span>
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
