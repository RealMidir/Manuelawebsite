"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { label: "Über mich", href: "#ueber" },
  { label: "Philosophie", href: "#philosophie" },
  { label: "Angebot", href: "#angebot" },
  { label: "Stimmen", href: "#stimmen" },
  { label: "Kontakt", href: "#kontakt" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "border-b border-greige/25 bg-cream/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:h-24 md:px-10">
          <a
            href="#top"
            className="font-display text-2xl font-medium tracking-[0.04em] text-espresso md:text-[1.7rem]"
          >
            Manuela
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-[0.72rem] font-normal uppercase tracking-[0.22em] text-espresso/80 transition-colors hover:text-espresso"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="hidden items-center rounded-full border border-espresso/60 px-6 py-2.5 text-[0.68rem] uppercase tracking-[0.24em] text-espresso transition-colors duration-500 hover:bg-espresso hover:text-ivory md:inline-flex"
          >
            Erstgespräch
          </a>

          <button
            aria-label="Menü öffnen"
            onClick={() => setOpen(true)}
            className="flex flex-col items-end gap-[6px] py-2 md:hidden"
          >
            <span className="block h-px w-7 bg-espresso" />
            <span className="block h-px w-5 bg-espresso" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col bg-cream px-6 pb-12 pt-7 md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl font-medium text-espresso">
                Manuela
              </span>
              <button
                aria-label="Menü schließen"
                onClick={() => setOpen(false)}
                className="text-[0.72rem] uppercase tracking-[0.24em] text-espresso/70"
              >
                Schließen
              </button>
            </div>

            <nav className="mt-auto flex flex-col gap-7">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.7, ease: EASE }}
                  className="font-display text-4xl font-light text-espresso"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-10 inline-flex w-fit items-center rounded-full bg-espresso px-8 py-3.5 text-[0.7rem] uppercase tracking-[0.24em] text-ivory"
            >
              Kostenloses Erstgespräch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
