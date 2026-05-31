import { Reveal } from "@/components/ui/reveal";

const offers = [
  {
    tag: "1:1 Mentoring",
    featured: true,
    title: "Privat & Intensiv",
    text: "Dein persönlicher Raum für tiefe Transformation — maßgeschneidert, vertraulich, in deinem Tempo.",
    items: [
      "Wöchentliche 1:1 Sessions",
      "Persönlicher Wachstumsplan",
      "Begleitung zwischen den Terminen",
      "Voller Zugang zu allen Ressourcen",
    ],
    cta: "Platz anfragen",
  },
  {
    tag: "Mastermind",
    featured: false,
    title: "Der Kreis",
    text: "Wachstum in einem Kreis gleichgesinnter Frauen. Gemeinsam kommst du weiter als allein.",
    items: [
      "Monatliche Gruppen-Calls",
      "Community & Austausch",
      "Workbooks & Rituale",
      "Live Q&A mit Manuela",
    ],
    cta: "Auf die Warteliste",
  },
  {
    tag: "Masterclass",
    featured: false,
    title: "Der erste Schritt",
    text: "Lerne die Essenz von Skillset, Mindset & Heartset kennen — kostenlos und sofort umsetzbar.",
    items: [
      "60 Minuten Impuls",
      "Praktische Übungen",
      "Direkt anwendbar",
      "100 % kostenfrei",
    ],
    cta: "Kostenlos sichern",
  },
];

export function Offer() {
  return (
    <section id="angebot" className="scroll-mt-24 bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Angebot</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-balance mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.04] text-espresso">
              Wie wir zusammen <span className="italic text-clay">arbeiten</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-pretty mt-6 max-w-xl font-light leading-relaxed text-mushroom">
              Drei Wege, deinen nächsten Schritt zu gehen — von der ersten
              Inspiration bis zur tiefen, persönlichen Begleitung.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.tag} delay={i * 0.08}>
              <div
                className={`group relative flex h-full flex-col rounded-[4px] border p-8 transition-all duration-500 hover:-translate-y-1 md:p-10 ${
                  o.featured
                    ? "border-clay/40 bg-ivory shadow-[0_24px_70px_-34px_rgba(120,104,88,0.55)]"
                    : "border-greige/25 bg-ivory/60 hover:border-clay/30"
                }`}
              >
                {o.featured && (
                  <span className="absolute right-6 top-6 text-[0.56rem] uppercase tracking-[0.22em] text-clay">
                    Am beliebtesten
                  </span>
                )}
                <p className="eyebrow">{o.tag}</p>
                <h3 className="mt-5 font-display text-3xl font-light text-espresso">
                  {o.title}
                </h3>
                <p className="mt-4 text-[0.96rem] font-light leading-relaxed text-mushroom">
                  {o.text}
                </p>
                <ul className="mt-7 space-y-3 border-t border-greige/20 pt-7">
                  {o.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-[0.9rem] font-light text-espresso/85"
                    >
                      <span className="mt-[0.55rem] block h-1 w-1 shrink-0 rounded-full bg-taupe" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className="link-underline mt-9 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.24em] text-espresso"
                >
                  {o.cta} →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
