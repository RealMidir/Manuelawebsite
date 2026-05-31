import { Signature } from "@/components/ui/signature";

const nav = [
  { label: "Über mich", href: "#ueber" },
  { label: "Philosophie", href: "#philosophie" },
  { label: "Angebot", href: "#angebot" },
  { label: "Stimmen", href: "#stimmen" },
  { label: "Kontakt", href: "#kontakt" },
];

const social = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "E-Mail", href: "mailto:hallo@manuela.de" },
];

const legal = [
  { label: "Impressum", href: "#" },
  { label: "Datenschutz", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream/70">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-14 py-20 md:grid-cols-12 md:py-28">
          {/* Brand */}
          <div className="md:col-span-5">
            <Signature on="dark" width={190} />
            <p className="mt-8 max-w-sm font-display text-2xl font-light italic leading-snug text-cream/85">
              „Authentizität ist magnetisch."
            </p>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-cream/55">
              Mentoring & Inspiration für Frauen, die mit Klarheit, Eleganz und
              Leichtigkeit wachsen wollen.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow !text-cream/40">Navigation</p>
            <ul className="mt-6 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-underline text-[0.95rem] font-light text-cream/75 transition-colors hover:text-cream"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <p className="eyebrow !text-cream/40">Folgen</p>
            <ul className="mt-6 space-y-3">
              {social.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="link-underline text-[0.95rem] font-light text-cream/75 transition-colors hover:text-cream"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 border-t border-cream/12 py-8 text-[0.72rem] uppercase tracking-[0.2em] text-cream/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Manuela. Alle Rechte vorbehalten.</span>
          <div className="flex items-center gap-7">
            {legal.map((l) => (
              <a key={l.label} href={l.href} className="transition-colors hover:text-cream/70">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
