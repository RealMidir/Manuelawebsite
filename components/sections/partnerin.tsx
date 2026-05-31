import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const steps = [
  {
    n: "01",
    title: "Flexibel starten",
    text: "Kein Risiko, keine Mindestabnahme. Du startest neben dem Beruf — in deinem Tempo, mit deinem Netzwerk.",
  },
  {
    n: "02",
    title: "1:1 Mentoring",
    text: "Ich begleite dich persönlich — mit Skripten, Posting-Plänen und dem Wissen aus echten Verkäufen.",
  },
  {
    n: "03",
    title: "Produkt, das überzeugt",
    text: "Chogan-Düfte mit hoher Qualität zu fairen Preisen — Frauen kaufen wieder, weil sie wieder wollen.",
  },
];

export function Partnerin() {
  return (
    <section id="partnerin" className="scroll-mt-24 bg-linen/40 py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">Partnerin werden</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-balance mt-6 font-display text-[clamp(2.1rem,5vw,4rem)] font-medium leading-[1.04] text-espresso">
                Aus einer <span className="italic text-clay">Idee</span> wird dein
                Business.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-pretty font-light leading-relaxed text-mushroom">
                Du liebst Düfte, willst flexibler arbeiten und etwas Eigenes
                aufbauen? Ich zeige dir Schritt für Schritt, wie du als
                Chogan-Partnerin startest.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="flex h-full flex-col border border-greige/25 bg-cream p-8 md:p-9">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-greige/40 font-mono text-sm text-clay">
                  {s.n}
                </span>
                <h3 className="mt-6 font-display text-2xl text-espresso">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.94rem] font-light leading-relaxed text-mushroom">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button href="#termin" variant="primary">
              30 Minuten mit Manuela
            </Button>
            <span className="mono-label text-clay/70">
              Online via Zoom · 100 % kostenfrei
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
