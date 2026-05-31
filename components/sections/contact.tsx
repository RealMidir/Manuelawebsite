import { Reveal } from "@/components/ui/reveal";
import { Logo } from "@/components/ui/logo";

export function Contact() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-24 bg-cream pb-24 pt-20 md:pb-32 md:pt-28"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="flex justify-center">
            <Logo variant="full" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-xl font-display text-[clamp(1.6rem,3vw,2.4rem)] font-normal italic leading-snug text-espresso">
            „Düfte, die erinnern. Frauen, die wachsen."
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            <a
              href="mailto:hallo@manuela-chogan.de"
              className="link-underline mono-label text-espresso"
            >
              hallo@manuela-chogan.de
            </a>
            <span className="hidden h-3 w-px bg-greige/40 sm:block" />
            <a
              href="https://instagram.com/manuela.chogan"
              className="link-underline mono-label text-espresso"
            >
              @manuela.chogan
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
