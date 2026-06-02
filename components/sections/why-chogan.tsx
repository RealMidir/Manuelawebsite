"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";
import { CHOGAN_HOME_URL, BIOCERT_PROOF_URL } from "@/lib/links";

export function WhyChogan() {
  const { t } = useLang();
  const w = t.whyChogan;
  return (
    <section id="warum-chogan" className="scroll-mt-24 bg-cream py-24 md:py-36">
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
          {w.paras.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="text-pretty mt-6 font-light leading-relaxed text-mushroom">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-12">
            <p className="mono-label text-clay">{w.badgesTitle}</p>
            <ul className="mt-5 grid gap-px overflow-hidden rounded-[4px] border border-greige/25 bg-greige/20 sm:grid-cols-2 lg:grid-cols-4">
              {w.badges.map((b) => (
                <li
                  key={b}
                  className="bg-ivory px-5 py-6 text-center font-display text-[1rem] italic leading-snug text-espresso"
                >
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs font-light text-mushroom/70">{w.badgeNote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href={CHOGAN_HOME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              {w.linkLabel}
              <span className="arrow" aria-hidden>→</span>
            </a>
            <a
              href={BIOCERT_PROOF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mono-label text-clay"
            >
              {w.proofLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
