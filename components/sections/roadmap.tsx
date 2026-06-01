"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";
import { CHOGAN_REGISTER_URL } from "@/lib/links";

export function Roadmap() {
  const { t } = useLang();
  const r = t.roadmap;
  return (
    <section id="roadmap" className="scroll-mt-24 bg-vanilla/40 py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{r.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-balance mt-6 font-display text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.05] text-espresso">
              {r.h2[0]}
              <span className="italic text-clay">{r.h2[1]}</span>
              {r.h2[2]}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-pretty mt-6 font-light leading-relaxed text-mushroom">
              {r.sub}
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-greige/25 bg-greige/25">
          {r.steps.map((s) => (
            <Reveal key={s.n}>
              <li className="flex gap-6 bg-cream p-7 md:p-9">
                <span className="font-mono text-sm text-clay">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl text-espresso md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[0.94rem] font-light leading-relaxed text-mushroom">
                    {s.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
          <Reveal>
            <li className="flex gap-6 border-t-2 border-clay/50 bg-espresso p-7 text-ivory md:p-9">
              <span className="font-mono text-sm text-vanilla">★</span>
              <div>
                <p className="eyebrow !text-vanilla">{r.goalEyebrow}</p>
                <h3 className="mt-2 font-display text-xl text-ivory md:text-2xl">
                  {r.goalTitle}
                </h3>
                <p className="mt-2 text-[0.94rem] font-light leading-relaxed text-ivory/70">
                  {r.goalText}
                </p>
              </div>
            </li>
          </Reveal>
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href={CHOGAN_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {r.cta}
              <span className="arrow" aria-hidden>
                →
              </span>
            </a>
            <span className="mono-label text-clay/70">{r.ctaNote}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
