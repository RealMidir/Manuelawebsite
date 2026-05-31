import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    n: "01",
    name: "Skillset",
    title: "Die Werkzeuge.",
    text: "Strategien, Systeme und Fähigkeiten, die dich unabhängig machen — damit du nicht auf Glück hoffen musst, sondern auf dein Können vertraust.",
  },
  {
    n: "02",
    name: "Mindset",
    title: "Die innere Haltung.",
    text: "Gedanken, die dich tragen statt bremsen. Wir lösen, was dich klein hält, und bauen ein Fundament aus echtem, ruhigem Selbstvertrauen.",
  },
  {
    n: "03",
    name: "Heartset",
    title: "Das Warum.",
    text: "Die Verbindung zu dir selbst. Denn nachhaltiger Erfolg entsteht nicht aus Druck — sondern aus Klarheit darüber, wofür dein Herz schlägt.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophie" className="scroll-mt-24 bg-vanilla/40 py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Philosophie</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-balance mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.04] text-espresso">
              Drei Kräfte, die <span className="italic text-clay">alles</span>{" "}
              verändern.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-pretty mt-6 max-w-xl font-light leading-relaxed text-mushroom">
              Wahre Veränderung passiert nicht auf einer einzigen Ebene. Sie
              entsteht, wenn Können, Haltung und Herz zusammenfinden.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <div className="group grid items-baseline gap-6 border-t border-greige/25 py-10 md:grid-cols-12 md:gap-10 md:py-14">
                <div className="flex items-baseline gap-5 md:col-span-3">
                  <span className="font-display text-2xl font-light text-taupe">
                    {p.n}
                  </span>
                  <span className="eyebrow">{p.name}</span>
                </div>
                <h3 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-light leading-tight text-espresso transition-colors duration-500 group-hover:text-clay md:col-span-4">
                  {p.title}
                </h3>
                <p className="text-pretty font-light leading-relaxed text-mushroom md:col-span-5">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-greige/25" />
        </div>
      </div>
    </section>
  );
}
