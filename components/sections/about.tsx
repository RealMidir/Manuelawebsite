"use client";

import { Reveal } from "@/components/ui/reveal";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { useLang } from "@/lib/i18n";

export function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <section id="ueber" className="scroll-mt-24 bg-cream py-24 md:py-36">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <PlaceholderImage aspect="4 / 5" tone="linen" label={a.imgLabel} />
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="eyebrow">{a.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-balance mt-6 font-display text-[clamp(2.1rem,4.6vw,3.6rem)] font-medium leading-[1.05] text-espresso">
              {a.h2[0]}
              <span className="italic text-clay">{a.h2[1]}</span>
              {a.h2[2]}
            </h2>
          </Reveal>

          <div className="mt-8 max-w-xl space-y-5 text-[1.02rem] font-light leading-relaxed text-mushroom">
            {a.paras.map((para, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p>{para}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <p className="border-l-2 border-clay/40 pl-5 font-display text-xl italic leading-snug text-espresso">
                {a.quote}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <p className="mono-label mt-8 text-clay">{a.role}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-greige/25 pt-7">
              {a.trust.map((tr) => (
                <li key={tr} className="mono-label text-mushroom">
                  · {tr}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
