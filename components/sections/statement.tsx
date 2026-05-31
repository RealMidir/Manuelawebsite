import { Reveal } from "@/components/ui/reveal";
import type { ReactNode } from "react";

export function Statement({
  children,
  tone = "noir",
}: {
  children: ReactNode;
  tone?: "noir" | "cream";
}) {
  const dark = tone === "noir";
  return (
    <section className={dark ? "bg-noir py-28 md:py-44" : "bg-cream py-24 md:py-36"}>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p
            className={`font-display text-[clamp(2.4rem,7vw,5.5rem)] font-medium leading-[1.06] ${
              dark ? "text-ivory" : "text-espresso"
            }`}
          >
            {children}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
