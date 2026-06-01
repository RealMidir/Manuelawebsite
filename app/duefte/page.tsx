import type { Metadata } from "next";
import { Duefte } from "@/components/sections/duefte";
import { Newsletter } from "@/components/sections/newsletter";

export const metadata: Metadata = {
  title: "Düfte & Beratung — Manuela × Chogan",
  description:
    "Über 100 Chogan-Düfte, fair im Preis und hochwertig. Persönliche Duftberatung — konkrete Empfehlungen statt Superlative.",
};

export default function Page() {
  return (
    <>
      <Duefte />
      <Newsletter />
    </>
  );
}
