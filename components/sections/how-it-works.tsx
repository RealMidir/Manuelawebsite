"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";

export function HowItWorks() {
  const { t } = useLang();
  const w = t.howItWorks;
  return (
    <section id="prinzip" className="scroll-mt-24 bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{w.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-balance mt-6 font-display text-[clamp(2.1rem,5vw,3.8rem)] font-medium leading-[1.04] text-espresso">
              {w.h2[0]}
              <span className="italic text-clay">{w.h2[1]}</span>
              {w.h2[2]}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-pretty mt-6 font-light leading-relaxed text-mushroom">
              {w.sub}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 md:mt-20 md:grid-cols-3">
          {w.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="border-t border-greige/30 pt-6">
                <span className="font-mono text-[0.72rem] tracking-[0.2em] text-clay">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-xl text-espresso">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.95rem] font-light leading-relaxed text-mushroom">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="display-balance mx-auto mt-16 max-w-3xl text-center font-display text-[clamp(1.5rem,3.4vw,2.4rem)] font-medium leading-snug text-espresso md:mt-20">
            {w.principle[0]}
            <span className="italic text-clay">{w.principle[1]}</span>
            {w.principle[2]}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
