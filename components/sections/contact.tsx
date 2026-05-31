import { Reveal } from "@/components/ui/reveal";
import { Signature } from "@/components/ui/signature";

export function Contact() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-24 bg-cream pb-28 pt-24 md:pb-40 md:pt-36"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="eyebrow">Kontakt</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-balance mt-7 font-display text-[clamp(2.6rem,7vw,5.5rem)] font-light leading-[1.0] text-espresso">
            Lass uns <span className="italic text-clay">sprechen</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-pretty mx-auto mt-7 max-w-xl font-light leading-relaxed text-mushroom md:text-lg">
            In einem kostenlosen Erstgespräch finden wir heraus, wo du stehst,
            wohin du willst — und ob wir zusammenpassen. Unverbindlich und auf
            Augenhöhe.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-11 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <a
              href="mailto:hallo@manuela.de"
              className="inline-flex items-center rounded-full bg-espresso px-10 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-ivory transition-colors duration-500 hover:bg-clay"
            >
              Kostenloses Erstgespräch
            </a>
            <a
              href="#"
              className="link-underline text-[0.72rem] uppercase tracking-[0.22em] text-espresso"
            >
              Auf Instagram folgen →
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center">
            <Signature on="light" width={150} />
            <p className="mt-3 text-[0.66rem] uppercase tracking-[0.26em] text-clay">
              Mit Liebe, Manuela
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
