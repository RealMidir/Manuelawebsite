"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";

type PageKey = "deinweg" | "duefte" | "ueber" | "kontakt";

export function PageHero({ pageKey }: { pageKey: PageKey }) {
  const { t } = useLang();
  const p = t.pages[pageKey];
  return (
    <header className="bg-cream px-6 pb-8 pt-36 md:px-10 md:pb-14 md:pt-44">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <p className="eyebrow">{p.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="display-balance mt-6 font-display text-[clamp(2.6rem,7vw,5rem)] font-medium leading-[1.02] tracking-[-0.01em] text-espresso">
            {p.title[0]}
            <span className="font-normal italic text-clay">{p.title[1]}</span>
            {p.title[2]}
          </h1>
        </Reveal>
      </div>
    </header>
  );
}
