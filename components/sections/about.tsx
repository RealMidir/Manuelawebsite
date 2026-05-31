import { Reveal } from "@/components/ui/reveal";
import { Signature } from "@/components/ui/signature";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

const stats = [
  { value: "2018", label: "Start meiner Reise" },
  { value: "500+", label: "begleitete Frauen" },
  { value: "1:1", label: "persönliches Mentoring" },
];

export function About() {
  return (
    <section id="ueber" className="scroll-mt-24 bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <PlaceholderImage
              aspect="4 / 5"
              initial="M"
              label="Manuela · Portrait folgt"
            />
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="eyebrow">Über mich</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-balance mt-6 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-light leading-[1.05] text-espresso">
              Schön, dass du <span className="italic text-clay">hier</span> bist.
            </h2>
          </Reveal>

          <div className="mt-8 max-w-xl space-y-5 text-[1.02rem] font-light leading-relaxed text-mushroom">
            <Reveal delay={0.1}>
              <p>
                Ich bin Manuela — und ich glaube daran, dass wahre Stärke leise
                ist. Dass Erfolg nicht laut sein muss, um spürbar zu sein.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Seit Jahren begleite ich Frauen dabei, ihre eigene Klarheit zu
                finden — jenseits von Druck, Perfektion und dem ständigen „Mehr".
                Mein Weg hat mich gelehrt, dass Wachstum dann gelingt, wenn es
                sich nach dir selbst anfühlt.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-espresso">
                <span className="font-display text-xl italic">Skillset</span> gab
                mir die Werkzeuge.{" "}
                <span className="font-display text-xl italic">Mindset</span> trug
                mich durch die schweren Tage. Doch erst{" "}
                <span className="font-display text-xl italic">Heartset</span>{" "}
                zeigte mir, wofür ich das alles tue.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="mt-9">
              <Signature on="light" width={158} />
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.24em] text-clay">
                Manuela · Mentorin &amp; Gründerin
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-greige/25 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-light text-espresso">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[0.66rem] uppercase tracking-[0.16em] text-clay">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
