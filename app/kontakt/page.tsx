import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { Newsletter } from "@/components/sections/newsletter";

export const metadata: Metadata = {
  title: "Kontakt — Manuela × Chogan",
  description:
    "Schreib mir, wofür dein Herz schlägt — Duft oder Business. hallo@manuela-chogan.de · @manuela.chogan",
};

export default function Page() {
  return (
    <>
      <Contact />
      <Newsletter />
    </>
  );
}
