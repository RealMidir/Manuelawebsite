"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Signature } from "@/components/ui/signature";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
};
const up = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1.15, ease: EASE } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yMark = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="pearl relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* weiche Perlmutt-Lichter mit Parallax */}
      <motion.div
        style={{ y: yGlow }}
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-white/50 blur-3xl" />
        <div className="absolute right-[-4rem] top-1/3 h-[26rem] w-[26rem] rounded-full bg-oatmeal/40 blur-3xl" />
        <div className="absolute bottom-4 left-1/3 h-72 w-72 rounded-full bg-taupe/20 blur-3xl" />
      </motion.div>

      {/* riesige, blasse Initiale */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.span
          style={{ y: yMark }}
          aria-hidden
          className="select-none font-display text-[44vw] leading-none text-white/30 mix-blend-soft-light"
        >
          M
        </motion.span>
      </div>

      {/* Inhalt */}
      <motion.div
        style={{ y: yText, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div variants={up}>
          <Signature on="light" width={148} className="mb-9" />
        </motion.div>

        <motion.p variants={up} className="eyebrow">
          Skillset · Mindset · Heartset
        </motion.p>

        <motion.h1
          variants={up}
          className="display-balance mt-7 font-display text-[clamp(2.9rem,8.6vw,7.5rem)] font-light leading-[0.98] tracking-[-0.01em] text-espresso"
        >
          Werde, wer du{" "}
          <span className="font-normal italic text-clay">wirklich</span> bist.
        </motion.h1>

        <motion.p
          variants={up}
          className="text-pretty mt-8 max-w-xl text-base font-light leading-relaxed text-mushroom md:text-lg"
        >
          Mentoring für Frauen, die mit Klarheit und Leichtigkeit wachsen — und
          ein Leben gestalten, das sich endlich nach ihnen selbst anfühlt.
        </motion.p>

        <motion.div
          variants={up}
          className="mt-11 flex flex-col items-center gap-6 sm:flex-row"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center rounded-full bg-espresso px-9 py-4 text-[0.7rem] uppercase tracking-[0.24em] text-ivory transition-colors duration-500 hover:bg-clay"
          >
            Kostenloses Erstgespräch
          </a>
          <a
            href="#ueber"
            className="link-underline text-[0.72rem] uppercase tracking-[0.22em] text-espresso"
          >
            Mehr über mich →
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll-Hinweis */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-clay">
          Scrollen
        </span>
        <span className="relative block h-12 w-px overflow-hidden bg-greige/30">
          <motion.span
            className="absolute inset-x-0 top-0 block h-1/2 bg-clay"
            animate={{ y: ["-100%", "220%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
