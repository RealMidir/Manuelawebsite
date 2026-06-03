import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Datenschutz } from "@/components/sections/legal";

export const metadata: Metadata = {
  title: "Datenschutz · Manuela × Chogan",
  description:
    "Datenschutzerklärung der Manuela Buchner GmbH – wie wir mit deinen personenbezogenen Daten umgehen.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero pageKey="datenschutz" />
      <Datenschutz />
    </>
  );
}
