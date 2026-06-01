import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";

export const metadata: Metadata = {
  title: "Über mich — Manuela × Chogan",
  description:
    "Manuela — Chogan Partnerin & Mentorin. Wissen statt Werbung, keine Superlative. Ich erkläre, ich überrede nicht.",
};

export default function Page() {
  return (
    <>
      <About />
      <Testimonials />
      <Newsletter />
    </>
  );
}
