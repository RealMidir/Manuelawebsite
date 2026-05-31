import { Reveal } from "@/components/ui/reveal";
import type { ReactNode } from "react";

export function Statement({
  children,
  tone = "cream",
}: {
  children: ReactNode;
  tone?: "cream" | "linen";
}) {
  const bg = tone === "linen" ? "bg-linen/50" : "bg-cream";
  return (
    <section className={`${bg} py-28 md:py-44`}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="emboss font-display text-[clamp(2.3rem,6vw,5rem)] font-light leading-[1.12]">
            {children}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
