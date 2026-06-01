import type { Metadata } from "next";
import { Partnerin } from "@/components/sections/partnerin";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";

export const metadata: Metadata = {
  title: "Partnerin werden — Manuela × Chogan",
  description:
    "Bau dir mit Chogan-Düften ein eigenes Business auf — kein Risiko, keine Mindestabnahme, 1:1 Mentoring. Schritt für Schritt, ohne Verkaufsdruck.",
};

export default function Page() {
  return (
    <>
      <Partnerin />
      <Testimonials />
      <Newsletter />
    </>
  );
}
