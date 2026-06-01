"use client";

import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

export function Coaching() {
  const { t } = useLang();
  const c = t.coaching;
  return (
    <section id="coaching" className="scroll-mt-24 bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="border-t-2 border-clay/40 bg-vanilla/40 px-7 py-12 md:px-14 md:py-16">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">{c.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-balance mt-6 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] font-medium leading-[1.06] text-espresso">
                {c.h2[0]}
                <span className="italic text-clay">{c.h2[1]}</span>
                {c.h2[2]}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-pretty mt-6 font-light leading-relaxed text-mushroom">
                {c.sub}
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 border-t border-greige/25 pt-10 md:grid-cols-3">
            {c.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div>
                  <h3 className="font-display text-xl text-espresso">{p.title}</h3>
                  <p className="mt-2 text-[0.92rem] font-light leading-relaxed text-mushroom">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Button href="/kontakt" variant="primary">
                {c.cta}
              </Button>
              <span className="mono-label text-clay/70">{c.ctaNote}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
