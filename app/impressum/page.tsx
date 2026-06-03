import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Impressum } from "@/components/sections/legal";

export const metadata: Metadata = {
  title: "Impressum · Manuela × Chogan",
  description:
    "Impressum und Anbieterkennzeichnung der Manuela Buchner GmbH gemäß § 5 DDG.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero pageKey="impressum" />
      <Impressum />
    </>
  );
}
