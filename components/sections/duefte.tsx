"use client";

import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { useLang } from "@/lib/i18n";

export function Duefte() {
  const { t } = useLang();
  const d = t.duefte;
  return (
    <section id="duefte" className="scroll-mt-24 bg-cream pb-24 pt-36 md:pb-36 md:pt-44">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">{d.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-balance mt-6 font-display text-[clamp(2.1rem,4.8vw,3.6rem)] font-medium leading-[1.05] text-espresso">
                {d.h2[0]}
                <span className="italic text-clay">{d.h2[1]}</span>
                {d.h2[2]}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-pretty font-light leading-relaxed text-mushroom">
                {d.sub}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {d.products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="group flex h-full flex-col border border-greige/25 bg-ivory/40 transition-colors duration-500 hover:border-clay/30">
                <div className="relative">
                  <PlaceholderImage aspect="1 / 1" tone="linen" />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                    <span className="badge bg-cream/80 backdrop-blur-sm">{p.badge}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mono-label text-clay/70">{d.productTag}</p>
                  <h3 className="mt-2 font-display text-2xl leading-tight text-espresso">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-[0.9rem] font-light leading-relaxed text-mushroom">
                    {p.note}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-greige/20 pt-5">
                    <span className="font-display text-xl text-espresso">
                      {p.price}
                    </span>
                    <a
                      href="/kontakt"
                      className="link-underline mono-label text-espresso"
                    >
                      {d.discover} →
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button href="/kontakt" variant="outline">
              {d.cta}
            </Button>
            <span className="mono-label text-clay/70">{d.ctaNote}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
