"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/reveal";
import { useLang } from "@/lib/i18n";

export function Newsletter() {
  const { t } = useLang();
  const x = t.termin;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  }

  return (
    <section id="termin" className="bg-cream py-10 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[4px] bg-noir px-7 py-14 md:px-16 md:py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="eyebrow !text-vanilla">{x.eyebrow}</p>
                <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-medium leading-[1.08] text-ivory">
                  {x.h2[0]}
                  <span className="italic text-linen">{x.h2[1]}</span>
                  {x.h2[2]}
                </h2>
                <p className="mt-5 max-w-md font-light leading-relaxed text-ivory/75">
                  {x.sub}
                </p>
                <p className="mono-label mt-6 text-ivory/55">{x.note}</p>
              </div>

              <div>
                {done ? (
                  <p className="font-display text-2xl italic text-ivory">
                    {x.success}
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={x.firstName}
                      className="w-full rounded-[2px] border border-ivory/20 bg-ivory/5 px-5 py-3.5 text-sm text-ivory outline-none transition placeholder:text-ivory/50 focus:border-ivory/70"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={x.email}
                      className="w-full rounded-[2px] border border-ivory/20 bg-ivory/5 px-5 py-3.5 text-sm text-ivory outline-none transition placeholder:text-ivory/50 focus:border-ivory/70"
                    />
                    <button
                      type="submit"
                      className="btn mt-1 justify-center bg-ivory text-espresso hover:bg-cream"
                    >
                      {x.submit} <span className="arrow" aria-hidden>→</span>
                    </button>
                    <p className="mono-label mt-3 text-ivory/55">{x.legal}</p>
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
