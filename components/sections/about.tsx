import { Reveal } from "@/components/ui/reveal";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

const trust = ["Wissen vor Werbung", "Kein Verkaufsdruck", "In deinem Tempo"];

export function About() {
  return (
    <section id="ueber" className="scroll-mt-24 bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <PlaceholderImage
              aspect="4 / 5"
              tone="linen"
              label="Manuela · Porträt folgt"
            />
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="eyebrow">Über mich</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-balance mt-6 font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-medium leading-[1.05] text-espresso">
              Ich erkläre. Ich <span className="italic text-clay">überrede</span>{" "}
              nicht.
            </h2>
          </Reveal>

          <div className="mt-8 max-w-xl space-y-5 text-[1.02rem] font-light leading-relaxed text-mushroom">
            <Reveal delay={0.1}>
              <p>
                Ich bin Manuela — Chogan-Partnerin &amp; Mentorin. Ich glaube an
                Düfte, die man nicht erklären muss, und an ein Business, das sich
                ehrlich anfühlt.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Statt Superlativen bekommst du konkrete Empfehlungen: welcher
                Duft 8–10 Stunden hält, welcher zu dir passt — und wie du, wenn
                du magst, selbst eines aufbaust.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="border-l-2 border-clay/40 pl-5 font-display text-xl italic leading-snug text-espresso">
                „Qualität entsteht da, wo jemand verstanden hat, was sie
                ausmacht — und es weitergibt, ohne sich wichtig zu machen."
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <p className="mono-label mt-8 text-clay">
              Manuela — Chogan Partnerin &amp; Mentorin
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-greige/25 pt-7">
              {trust.map((t) => (
                <li key={t} className="mono-label text-mushroom">
                  — {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
