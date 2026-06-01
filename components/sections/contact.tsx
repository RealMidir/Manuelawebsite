"use client";

import { Reveal } from "@/components/ui/reveal";
import { Logo } from "@/components/ui/logo";
import { useLang } from "@/lib/i18n";
import { INSTAGRAM_URL, WHATSAPP_URL, EMAIL } from "@/lib/links";

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const channels = [
    { ...c.instagram, href: INSTAGRAM_URL },
    { ...c.whatsapp, href: WHATSAPP_URL },
    { ...c.zoom, href: `mailto:${EMAIL}` },
  ];
  return (
    <section id="kontakt" className="bg-cream pb-28 pt-4 md:pb-36">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <p className="text-pretty max-w-xl font-light leading-relaxed text-mushroom md:text-lg">
            {c.sub}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {channels.map((ch, i) => {
            const external = ch.href.startsWith("http");
            return (
              <Reveal key={ch.label} delay={i * 0.08} className="h-full">
                <a
                  href={ch.href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col justify-between border border-greige/25 bg-ivory/40 p-8 transition-colors duration-500 hover:border-clay/40"
                >
                  <div>
                    <h3 className="font-display text-2xl text-espresso">
                      {ch.label}
                    </h3>
                    <p className="mt-2 text-[0.92rem] font-light leading-relaxed text-mushroom">
                      {ch.note}
                    </p>
                  </div>
                  <span className="mono-label mt-8 inline-flex items-center gap-2 text-clay">
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-20 flex flex-col items-center text-center">
            <Logo variant="full" />
            <p className="mt-8 font-display text-xl italic text-mushroom">
              {c.kredo}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
