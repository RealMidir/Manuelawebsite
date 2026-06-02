"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";
import { CHOGAN_REGISTER_URL } from "@/lib/links";

export function Values() {
  const { t } = useLang();
  const v = t.values;
  return (
    <section id="werte" className="scroll-mt-24 bg-vanilla py-24 md:py-36">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{v.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-balance mt-6 font-display text-[clamp(2.1rem,5vw,3.8rem)] font-medium leading-[1.04] text-espresso">
              {v.h2[0]}
              <span className="italic text-clay">{v.h2[1]}</span>
              {v.h2[2]}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-pretty mt-6 font-light leading-relaxed text-mushroom">
              {v.sub}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {v.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="border-t border-greige/30 pt-5">
                <h3 className="font-display text-xl text-espresso">{it.title}</h3>
                <p className="mt-2 text-[0.95rem] font-light leading-relaxed text-mushroom">
                  {it.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={CHOGAN_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {v.cta}
              <span className="arrow" aria-hidden>→</span>
            </a>
            <span className="mono-label text-clay">{v.ctaNote}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
