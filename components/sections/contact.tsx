"use client";

import { Reveal } from "@/components/ui/reveal";
import { Logo } from "@/components/ui/logo";
import { useLang } from "@/lib/i18n";

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  return (
    <section id="kontakt" className="scroll-mt-24 bg-cream pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="eyebrow">{t.pages.kontakt.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-balance mt-6 font-display text-[clamp(2.4rem,6vw,4.6rem)] font-medium leading-[1.02] text-espresso">
            {c.h2[0]}
            <span className="italic text-clay">{c.h2[1]}</span>
            {c.h2[2]}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-pretty mx-auto mt-6 max-w-xl font-light leading-relaxed text-mushroom md:text-lg">
            {c.sub}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            <a
              href={`mailto:${c.email}`}
              className="link-underline mono-label text-espresso"
            >
              {c.email}
            </a>
            <span className="hidden h-3 w-px bg-greige/40 sm:block" />
            <a
              href="https://instagram.com/manuela.chogan"
              className="link-underline mono-label text-espresso"
            >
              {c.instagram}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-16 flex justify-center">
            <Logo variant="full" />
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 font-display text-xl italic text-mushroom">
            {c.kredo}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
