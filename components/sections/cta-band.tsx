"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";
import { CHOGAN_REGISTER_URL } from "@/lib/links";

/**
 * Wiederkehrendes, kompaktes CTA-Band (dunkel/Mushroom).
 * variant "register" → kostenlose Chogan-Registrierung (Direktlink).
 * variant "bewerben" → 1:1 Mentoring, führt zu /kontakt.
 * data-nav="dark" → der scrollabhängige Header invertiert hier automatisch.
 */
export function CtaBand({
  variant,
}: {
  variant: "register" | "register2" | "bewerben";
}) {
  const { t } = useLang();
  const c = t.ctaBand[variant];
  const isRegister = variant !== "bewerben";

  return (
    <section data-nav="dark" className="bg-noir py-16 text-ivory md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <p className="eyebrow !text-vanilla">{c.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-balance mx-auto mt-5 max-w-2xl font-display text-[clamp(1.8rem,4vw,3rem)] font-medium leading-[1.1] text-ivory">
            {c.h2[0]}
            <span className="italic text-linen">{c.h2[1]}</span>
            {c.h2[2]}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-pretty mx-auto mt-5 max-w-xl font-light leading-relaxed text-ivory/75">
            {c.sub}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col items-center gap-4">
            {isRegister ? (
              <a
                href={CHOGAN_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn justify-center bg-vanilla text-espresso hover:bg-ivory"
              >
                {c.cta}
                <span className="arrow" aria-hidden>→</span>
              </a>
            ) : (
              <Link
                href="/kontakt"
                className="btn justify-center border border-ivory/45 text-ivory hover:bg-ivory hover:text-espresso"
              >
                {c.cta}
                <span className="arrow" aria-hidden>→</span>
              </Link>
            )}
            <span className="mono-label text-ivory/55">{c.note}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
