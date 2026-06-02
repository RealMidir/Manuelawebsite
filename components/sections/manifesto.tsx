"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";

/**
 * „Krasse" Positionierung (David gegen Goliath) als dramatisches, dunkles
 * Statement-Band. data-nav="dark" → der Header invertiert automatisch darüber.
 */
export function Manifesto() {
  const { t } = useLang();
  const m = t.manifesto;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={ref}
      data-nav="dark"
      className="relative overflow-hidden bg-noir py-28 text-center md:py-40"
    >
      {/* warmes, moody Licht + dezenter Schatten (wie das FullBleed-Band) */}
      <motion.div
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute inset-0 scale-110"
      >
        <div className="absolute inset-0 [background:radial-gradient(120%_120%_at_25%_15%,rgba(214,201,182,0.28),transparent_55%),radial-gradient(120%_120%_at_82%_90%,rgba(58,52,46,0.55),transparent_50%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10">
        <Reveal>
          <p className="eyebrow !text-vanilla">{m.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mx-auto mt-8 max-w-2xl font-display text-[clamp(1.3rem,2.6vw,1.9rem)] font-light italic leading-snug text-ivory/70">
            {m.lead}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="display-balance mx-auto mt-5 font-display text-[clamp(2.4rem,6.5vw,5rem)] font-medium leading-[1.04] text-ivory">
            {m.punch}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="text-pretty mx-auto mt-9 max-w-xl text-[0.98rem] font-light leading-relaxed text-ivory/60">
            {m.sub}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-10 font-display text-[clamp(1.5rem,3.4vw,2.4rem)] font-light italic leading-tight text-vanilla">
            {m.kicker[0]}
            <span className="text-linen">{m.kicker[1]}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
