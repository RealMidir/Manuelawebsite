"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";

export function FullBleed() {
  const { t } = useLang();
  const f = t.fullbleed;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-noir py-32 text-center"
    >
      {/* Platzhalter-„Foto": warmes, moody Licht + dezente Textur (später echtes Bild) */}
      <motion.div
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute inset-0 scale-110"
      >
        <div className="absolute inset-0 bg-noir" />
        <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_28%_18%,rgba(137,119,103,0.38),transparent_55%),radial-gradient(120%_120%_at_82%_88%,rgba(36,31,26,0.9),transparent_50%)]" />
        <div className="absolute inset-0 opacity-40 [background:repeating-linear-gradient(118deg,transparent_0,transparent_22px,rgba(255,255,255,0.02)_23px)]" />
      </motion.div>

      <span className="mono-label absolute left-5 top-5 text-ivory/30 md:left-8 md:top-8">
        {f.imgLabel}
      </span>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="eyebrow !text-clay">{f.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 font-display text-[clamp(2.2rem,6vw,4.8rem)] font-light italic leading-[1.12] text-ivory">
            {f.lines[0]}
            <br />
            {f.lines[1]}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10">
            <a href="#kontakt" className="btn bg-clay text-noir hover:bg-ivory">
              {f.cta} <span className="arrow" aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
