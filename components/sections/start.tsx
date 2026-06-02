"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";

export function Start() {
  const { t } = useLang();
  const s = t.start;
  return (
    <section id="start" className="scroll-mt-24 bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow">{s.eyebrow}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="text-pretty mx-auto mt-9 max-w-2xl font-display text-lg italic leading-relaxed text-mushroom/55">
            {s.old}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="mx-auto mt-9 block h-px w-12 bg-clay/40" />
        </Reveal>

        <Reveal delay={0.12}>
          <p className="display-balance mx-auto mt-9 max-w-3xl font-display text-[clamp(1.85rem,4.4vw,3.4rem)] font-medium leading-[1.12] text-espresso">
            {s.new[0]}
            <span className="italic text-clay">{s.new[1]}</span>
            {s.new[2]}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="text-pretty mx-auto mt-8 max-w-xl font-light leading-relaxed text-mushroom">
            {s.sub}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
