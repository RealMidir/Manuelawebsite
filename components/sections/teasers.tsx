"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";

export function Teasers() {
  const { t, lang } = useLang();
  const more = lang === "de" ? "Mehr erfahren" : "Learn more";

  const items = [
    {
      eyebrow: t.duefte.eyebrow,
      title: t.duefte.h2.join(""),
      text: t.duefte.sub,
      href: "/duefte",
    },
    {
      eyebrow: t.partnerin.eyebrow,
      title: t.partnerin.h2.join(""),
      text: t.partnerin.sub,
      href: "/partnerin",
    },
    {
      eyebrow: t.about.eyebrow,
      title: t.about.h2.join(""),
      text: t.about.paras[0],
      href: "/ueber",
    },
  ];

  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.href} delay={i * 0.08}>
              <Link
                href={it.href}
                className="group flex h-full flex-col justify-between border border-greige/25 bg-ivory/40 p-8 transition-colors duration-500 hover:border-clay/40 md:p-10"
              >
                <div>
                  <p className="eyebrow">{it.eyebrow}</p>
                  <h3 className="mt-5 font-display text-[1.7rem] font-medium leading-tight text-espresso">
                    {it.title}
                  </h3>
                  <p className="mt-4 text-[0.92rem] font-light leading-relaxed text-mushroom">
                    {it.text}
                  </p>
                </div>
                <span className="mono-label mt-9 inline-flex items-center gap-2 text-espresso">
                  {more}
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
