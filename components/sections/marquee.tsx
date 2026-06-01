"use client";

import { LogoMark } from "@/components/ui/logo";
import { useLang } from "@/lib/i18n";

export function Marquee() {
  const { t } = useLang();
  const row = [...t.marquee, ...t.marquee];
  return (
    <section className="overflow-hidden border-y border-greige/20 bg-vanilla/50 py-7">
      <div className="marquee-track items-center">
        {row.map((p, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-8 font-display text-xl italic text-espresso md:text-2xl">
              {p}
            </span>
            <LogoMark className="h-3.5 w-3.5 text-clay/55" />
          </span>
        ))}
      </div>
    </section>
  );
}
