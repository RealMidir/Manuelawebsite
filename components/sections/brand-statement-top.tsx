"use client";

import { Statement } from "@/components/sections/statement";
import { useLang } from "@/lib/i18n";

/** Emboss-Statement „oben" (gleicher Stil wie der Abschluss, andere Worte). */
export function BrandStatementTop() {
  const { t } = useLang();
  return <Statement parts={t.statementTop} tone="emboss" />;
}
