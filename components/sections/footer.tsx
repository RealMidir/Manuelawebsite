import { Logo } from "@/components/ui/logo";

const nav = [
  { label: "Düfte", href: "#duefte" },
  { label: "Partnerin werden", href: "#partnerin" },
  { label: "Über mich", href: "#ueber" },
  { label: "Stimmen", href: "#stimmen" },
  { label: "Termin", href: "#termin" },
];

const social = [
  { label: "Instagram", href: "https://instagram.com/manuela.chogan" },
  { label: "E-Mail", href: "mailto:hallo@manuela-chogan.de" },
];

const legal = [
  { label: "Impressum", href: "#" },
  { label: "Datenschutz", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-noir text-ivory/65">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid gap-14 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <Logo variant="full" on="dark" className="!items-start" />
            <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-ivory/55">
              Persönliche Duftberatung mit Chogan — und Mentoring für Frauen, die
              ein eigenes Business aufbauen wollen.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="mono-label text-ivory/40">Navigation</p>
            <ul className="mt-6 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="link-underline text-[0.92rem] font-light text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mono-label text-ivory/40">Folgen</p>
            <ul className="mt-6 space-y-3">
              {social.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="link-underline text-[0.92rem] font-light text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 border-t border-ivory/12 py-8 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ivory/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Manuela × Chogan</span>
          <div className="flex items-center gap-7">
            {legal.map((l) => (
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
