"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    // TODO: an echten Newsletter-Dienst anbinden (Mailchimp, Brevo, ...)
    setDone(true);
  }

  return (
    <section className="bg-cream py-8">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <div className="pearl relative overflow-hidden rounded-[6px] border border-greige/20 px-7 py-16 text-center md:px-16 md:py-24">
          <Reveal>
            <p className="eyebrow">Kostenlose Masterclass</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-balance mx-auto mt-6 max-w-2xl font-display text-[clamp(2rem,4.4vw,3.4rem)] font-light leading-[1.06] text-espresso">
              Dein erster Schritt beginnt{" "}
              <span className="italic text-clay">jetzt</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-pretty mx-auto mt-5 max-w-lg font-light leading-relaxed text-mushroom">
              Trag dich ein und erhalte sofort Zugang zur Masterclass — plus
              wöchentliche Impulse für Klarheit, Wachstum und ein
              selbstbestimmtes Leben.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            {done ? (
              <p className="mt-10 font-display text-2xl italic text-espresso">
                Wunderbar — schau in dein Postfach. ✦
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Deine E-Mail-Adresse"
                  className="w-full flex-1 rounded-full border border-greige/40 bg-ivory/80 px-6 py-3.5 text-sm text-espresso outline-none transition placeholder:text-clay/60 focus:border-clay"
                />
                <button
                  type="submit"
                  className="rounded-full bg-espresso px-8 py-3.5 text-[0.68rem] uppercase tracking-[0.22em] text-ivory transition-colors duration-500 hover:bg-clay"
                >
                  Zugang sichern
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 text-[0.66rem] uppercase tracking-[0.16em] text-clay/70">
              Kein Spam · Abmeldung jederzeit
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
