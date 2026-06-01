"use client";

import { Statement } from "@/components/sections/statement";
import { useLang } from "@/lib/i18n";

export function BrandStatement() {
  const { t } = useLang();
  return <Statement parts={t.statement} tone="emboss" />;
}
