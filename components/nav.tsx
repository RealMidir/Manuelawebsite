"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "@/components/ui/logo";
import { useLang, type Lang } from "@/lib/i18n";
import { CHOGAN_REGISTER_URL } from "@/lib/links";

const EASE = [0.22, 1, 0.36, 1] as const;

function LangToggle({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const { lang, setLang } = useLang();
  const active = onDark ? "text-ivory" : "text-espresso";
  const idle = onDark
    ? "text-ivory/45 hover:text-ivory/80"
    : "text-greige/55 hover:text-espresso/80";
  const sep = onDark ? "text-ivory/30" : "text-greige/50";
  return (
    <div
      className={`flex items-center font-mono text-[0.66rem] uppercase tracking-[0.16em] ${className}`}
    >
      {(["de", "en"] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center">
          {i === 1 && <span className={`px-1.5 ${sep}`}>/</span>}
          <button
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`transition-colors duration-500 ${lang === l ? active : idle}`}
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
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      setScrolled(window.scrollY > 40);
      // Liegt die untere Header-Kante gerade über einer dunklen Sektion?
      // (wird pro Seite neu geprüft – funktioniert auf allen Unterseiten)
      const lineY = (headerRef.current?.offsetHeight ?? 80) - 2;
      let dark = false;
      document.querySelectorAll('[data-nav="dark"]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= lineY && r.bottom > lineY) dark = true;
      });
      setOnDark(dark);
    };
    update();
    // nach einem Routenwechsel erneut prüfen, sobald die neue Seite gemalt ist
    const raf0 = requestAnimationFrame(update);
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(raf0);
    };
  }, [pathname]);

  // Body-Scroll sperren, solange das Mobile-Menü offen ist – verhindert,
  // dass der Hintergrund mitscrollt (Scroll-Bleed), inkl. iOS Safari.
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const body = document.body;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  const inverted = scrolled && onDark;

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? inverted
              ? "border-b border-ivory/15 bg-noir/60 backdrop-blur-md"
              : "border-b border-greige/25 bg-cream/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:h-24 md:px-10">
          <Link href="/" aria-label="Manuela × Chogan">
            <Logo
              variant="compact"
              on={inverted ? "dark" : "light"}
              tagline={t.statement.join("")}
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {t.nav.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`link-underline text-[0.82rem] font-medium transition-colors duration-500 ${
                  inverted
                    ? "text-ivory/75 hover:text-ivory"
                    : "text-espresso/80 hover:text-espresso"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <LangToggle onDark={inverted} />
            <a
              href={CHOGAN_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-[2px] border px-5 py-2.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] transition-colors duration-500 ${
                inverted
                  ? "border-ivory/40 text-ivory hover:bg-ivory hover:text-espresso"
                  : "border-espresso/45 text-espresso hover:bg-espresso hover:text-ivory"
              }`}
            >
              {t.nav.cta} <span aria-hidden>→</span>
            </a>
          </div>

          <button
            aria-label="Menü"
            onClick={() => setOpen(true)}
            className="flex flex-col items-end gap-[6px] py-2 lg:hidden"
          >
            <span
              className={`block h-px w-7 transition-colors duration-500 ${
                inverted ? "bg-ivory" : "bg-espresso"
              }`}
            />
            <span
              className={`block h-px w-5 transition-colors duration-500 ${
                inverted ? "bg-ivory" : "bg-espresso"
              }`}
            />
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
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto overscroll-contain bg-cream px-6 pb-12 pt-7 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo variant="compact" tagline={t.statement.join("")} />
              <button
                aria-label="Schließen"
                onClick={() => setOpen(false)}
                className="-m-2 p-2 font-mono text-[0.9rem] text-espresso/70 transition-colors hover:text-espresso"
              >
                ✕
              </button>
            </div>

            <nav className="mt-14 flex flex-col gap-7">
              {t.nav.links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.07, duration: 0.7, ease: EASE }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="link-underline font-display text-[2.4rem] font-light leading-none text-espresso"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto border-t border-greige/25 pt-8">
              <div className="flex items-center justify-between gap-4">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
