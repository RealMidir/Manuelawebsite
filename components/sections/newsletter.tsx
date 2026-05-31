"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/reveal";

export function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    // TODO: an echten Dienst anbinden (Termin-Tool / Newsletter).
    setDone(true);
  }

  return (
    <section id="termin" className="bg-cream py-10 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[4px] bg-noir px-7 py-14 md:px-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="eyebrow !text-clay">30 Min · Kostenfrei</p>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-medium leading-[1.08] text-ivory">
                  30 Minuten mit Manuela — und du weißt, ob's{" "}
                  <span className="italic text-clay">zu dir passt</span>.
                </h2>
                <p className="mt-5 max-w-md font-light leading-relaxed text-ivory/65">
                  Kein Verkaufsdruck. Wir schauen gemeinsam, ob die Partnerschaft
                  Sinn ergibt — 30 wertvolle Minuten, die du auf jeden Fall
                  mitnimmst.
                </p>
                <p className="mono-label mt-6 text-ivory/40">
                  Online via Zoom · 100 % kostenfrei
                </p>
              </div>

              <div>
                {done ? (
                  <p className="font-display text-2xl italic text-ivory">
                    Wunderbar — ich melde mich persönlich bei dir. ✦
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dein Vorname"
                      className="w-full rounded-[2px] border border-ivory/20 bg-ivory/5 px-5 py-3.5 text-sm text-ivory outline-none transition placeholder:text-ivory/40 focus:border-clay"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="deine@email.de"
                      className="w-full rounded-[2px] border border-ivory/20 bg-ivory/5 px-5 py-3.5 text-sm text-ivory outline-none transition placeholder:text-ivory/40 focus:border-clay"
                    />
                    <button
                      type="submit"
                      className="btn mt-1 justify-center bg-clay text-noir hover:bg-ivory"
                    >
                      Termin reservieren <span className="arrow" aria-hidden>→</span>
                    </button>
                    <p className="mono-label mt-3 text-ivory/40">
                      Plus PDF „Die 7 ersten Schritte als Chogan-Partnerin" direkt
                      ins Postfach.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
