"use client";

import { Reveal } from "@/components/ui/reveal";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { useLang } from "@/lib/i18n";

export function Gallery() {
  const { t } = useLang();
  const g = t.gallery;
  return (
    <section id="galerie" className="scroll-mt-24 bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{g.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-balance mt-6 font-display text-[clamp(2.1rem,5vw,4rem)] font-medium leading-[1.04] text-espresso">
              {g.h2[0]}
              <span className="italic text-clay">{g.h2[1]}</span>
              {g.h2[2]}
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-4 md:gap-5">
          {g.captions.map((c, i) => (
            <Reveal key={c} delay={i * 0.06}>
              <PlaceholderImage
                aspect="3 / 4"
                tone={i % 2 === 0 ? "linen" : "oatmeal"}
                label={c}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
