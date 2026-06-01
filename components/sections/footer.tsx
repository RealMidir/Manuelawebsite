"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { useLang } from "@/lib/i18n";
import { INSTAGRAM_URL, EMAIL } from "@/lib/links";

const social = [
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "E-Mail", href: `mailto:${EMAIL}` },
];

export function Footer() {
  const { t } = useLang();
  return (
    <footer data-nav="dark" className="relative overflow-hidden bg-noir text-ivory/75">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-14 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <Logo variant="full" on="dark" className="!items-start" />
            <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-ivory/70">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="mono-label text-ivory/55">{t.footer.navLabel}</p>
            <ul className="mt-6 space-y-3">
              {t.nav.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-[0.92rem] font-light text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mono-label text-ivory/55">{t.footer.followLabel}</p>
            <ul className="mt-6 space-y-3">
              {social.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-[0.92rem] font-light text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 border-t border-ivory/12 py-8 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ivory/55 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Manuela × Chogan · {t.footer.rights}</span>
          <div className="flex items-center gap-7">
            {t.footer.legal.map((l) => (
              <a key={l.label} href={l.href} className="transition-colors hover:text-ivory/70">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
