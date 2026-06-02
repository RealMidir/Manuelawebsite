"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { useLang } from "@/lib/i18n";
import { CHOGAN_REGISTER_URL } from "@/lib/links";

const EASE = [0.22, 1, 0.36, 1] as const;
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const up = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 1.05, ease: EASE } },
};

export function Hero() {
  const { t } = useLang();
  const h = t.hero;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative bg-cream pb-20 pt-28 md:pb-0 md:pt-0"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 md:min-h-screen md:grid-cols-12 md:gap-16 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-7 md:pt-24 lg:col-span-6"
        >
          <motion.p variants={up} className="eyebrow">
            {h.eyebrow}
          </motion.p>

          <motion.h1
            variants={up}
            className="display-balance mt-6 font-display text-[clamp(2.5rem,6.1vw,5.1rem)] font-medium leading-[1.03] tracking-[-0.01em] text-espresso"
          >
            {h.h1[0]}
            <span className="font-normal italic text-clay">{h.h1[1]}</span>
            {h.h1[2]}
            <span className="font-normal italic text-clay">{h.h1[3]}</span>
            {h.h1[4]}
          </motion.h1>

          <motion.p
            variants={up}
            className="text-pretty mt-7 max-w-md text-[1.02rem] leading-relaxed text-mushroom"
          >
            {h.sub}
          </motion.p>

          <motion.div
            variants={up}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href={CHOGAN_REGISTER_URL} variant="primary">
              {h.cta1}
            </Button>
            <Button href="/dein-weg" variant="outline">
              {h.cta2}
            </Button>
          </motion.div>

          <motion.p variants={up} className="mono-label mt-10 text-clay/70">
            {h.note}
          </motion.p>

          <motion.p
            variants={up}
            className="mt-4 text-[0.85rem] font-light text-mushroom/75"
          >
            {h.mentoring}{" "}
            <Link
              href="/dein-weg"
              className="link-underline font-medium text-clay"
            >
              {h.mentoringCta} →
            </Link>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          className="relative md:col-span-5 md:pt-24 lg:col-start-8"
        >
          <motion.div style={{ y: yImg }}>
            <PlaceholderImage aspect="4 / 5" tone="linen" label={h.imgLabel} />
          </motion.div>

          <div className="absolute -bottom-5 -left-5 hidden max-w-[15rem] border border-greige/30 bg-cream p-5 shadow-[0_24px_60px_-40px_rgba(58,50,43,0.45)] md:block">
            <p className="eyebrow">Chogan</p>
            <p className="mt-2 font-display text-lg italic leading-snug text-espresso">
              {h.kredo}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
