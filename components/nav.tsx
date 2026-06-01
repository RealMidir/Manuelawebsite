"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/ui/logo";
import { useLang, type Lang } from "@/lib/i18n";
import { CHOGAN_REGISTER_URL } from "@/lib/links";

const EASE = [0.22, 1, 0.36, 1] as const;

function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex items-center font-mono text-[0.66rem] uppercase tracking-[0.16em] ${className}`}
    >
      {(["de", "en"] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center">
          {i === 1 && <span className="px-1.5 text-greige/50">/</span>}
          <button
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`transition-colors ${
              lang === l ? "text-espresso" : "text-greige/55 hover:text-espresso/80"
            }`}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Nav() {
  const { t } = useLang();
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
          <Link href="/" aria-label="Manuela × Chogan">
            <Logo variant="compact" tagline={t.statement.join("")} />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {t.nav.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-underline text-[0.82rem] font-medium text-espresso/80 transition-colors hover:text-espresso"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <LangToggle />
            <a
              href={CHOGAN_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[2px] border border-espresso/45 px-5 py-2.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-espresso transition-colors duration-500 hover:bg-espresso hover:text-ivory"
            >
              {t.nav.cta} <span aria-hidden>→</span>
            </a>
          </div>

          <button
            aria-label="Menü"
            onClick={() => setOpen(true)}
            className="flex flex-col items-end gap-[6px] py-2 lg:hidden"
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
            className="fixed inset-0 z-[60] flex flex-col bg-cream px-6 pb-12 pt-7 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo variant="compact" tagline={t.statement.join("")} />
              <button
                aria-label="Schließen"
                onClick={() => setOpen(false)}
                className="font-mono text-[0.8rem] text-espresso/70"
              >
                ✕
              </button>
            </div>

            <nav className="mt-auto flex flex-col gap-6">
              {t.nav.links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.7, ease: EASE }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl font-light text-espresso"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-10 flex items-center justify-between">
              <a
                href={CHOGAN_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-primary"
              >
                {t.nav.cta} <span className="arrow" aria-hidden>→</span>
              </a>
              <LangToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
