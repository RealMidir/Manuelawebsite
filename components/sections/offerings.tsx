"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";

export function Offerings() {
  const { t } = useLang();
  const o = t.offerings;
  return (
    <section id="angebot" className="scroll-mt-24 bg-noir py-24 text-ivory md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow !text-clay">{o.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-balance mt-6 font-display text-[clamp(2.1rem,5vw,4rem)] font-medium leading-[1.04] text-ivory">
                {o.h2[0]}
                <span className="italic text-clay">{o.h2[1]}</span>
                {o.h2[2]}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-pretty font-light leading-relaxed text-ivory/60">
                {o.sub}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-ivory/15 bg-ivory/15 md:mt-20 md:grid-cols-2">
          {o.items.map((it, i) => (
            <Reveal key={it.tag} delay={i * 0.06} className="h-full">
              <a
                href="#kontakt"
                className="group flex h-full flex-col justify-between bg-noir p-8 transition-colors duration-500 hover:bg-ink md:p-12"
              >
                <div>
                  <span className="font-mono text-[0.7rem] tracking-[0.2em] text-clay">
                    {it.tag}
                  </span>
                  <h3 className="mt-5 font-display text-[1.8rem] font-light text-ivory">
                    {it.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.94rem] font-light leading-relaxed text-ivory/60">
                    {it.text}
                  </p>
                </div>
                <span className="mono-label mt-8 inline-flex items-center gap-2 text-ivory/80">
                  {o.more}
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
