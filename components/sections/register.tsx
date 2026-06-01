"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";
import { CHOGAN_REGISTER_URL, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/links";

export function Register() {
  const { t } = useLang();
  const r = t.register;
  return (
    <section id="register" data-nav="dark" className="scroll-mt-24 bg-noir py-24 text-ivory md:py-36">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow !text-vanilla">{r.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-balance mt-6 font-display text-[clamp(2.1rem,5vw,3.8rem)] font-medium leading-[1.04] text-ivory">
              {r.h2[0]}
              <span className="italic text-linen">{r.h2[1]}</span>
              {r.h2[2]}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-pretty mt-6 font-light leading-relaxed text-ivory/75">
              {r.sub}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 border-t border-ivory/15 pt-10 md:grid-cols-3">
          {r.why.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <div>
                <h3 className="font-display text-xl text-ivory">{w.title}</h3>
                <p className="mt-2 text-[0.92rem] font-light leading-relaxed text-ivory/70">
                  {w.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href={CHOGAN_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn justify-center bg-vanilla text-espresso hover:bg-ivory"
            >
              {r.cta}
              <span className="arrow" aria-hidden>
                →
              </span>
            </a>
            <span className="mono-label text-ivory/55">{r.ctaNote}</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-7 text-sm font-light text-ivory/60">
            {r.help}{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-vanilla"
            >
              Instagram
            </a>
            {" · "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-vanilla"
            >
              WhatsApp
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
