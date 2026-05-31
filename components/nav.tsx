"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/ui/logo";

const links = [
  { label: "Düfte", href: "#duefte" },
  { label: "Partnerin werden", href: "#partnerin" },
  { label: "Über mich", href: "#ueber" },
  { label: "Stimmen", href: "#stimmen" },
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
            ? "border-b border-greige/25 bg-cream/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:h-24 md:px-10">
          <a href="#top" aria-label="Manuela × Chogan">
            <Logo variant="compact" />
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-[0.82rem] font-medium text-espresso/80 transition-colors hover:text-espresso"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#termin"
            className="hidden items-center gap-2 rounded-[2px] border border-espresso/45 px-5 py-2.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-espresso transition-colors duration-500 hover:bg-espresso hover:text-ivory md:inline-flex"
          >
            Termin <span aria-hidden>→</span>
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
              <Logo variant="compact" />
              <button
                aria-label="Menü schließen"
                onClick={() => setOpen(false)}
                className="font-mono text-[0.66rem] uppercase tracking-[0.22em] text-espresso/70"
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
              href="#termin"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-10 w-fit"
            >
              Termin sichern <span className="arrow" aria-hidden>→</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
