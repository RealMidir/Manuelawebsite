import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

export function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  const cls = `btn btn-${variant} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && (
        <span className="arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  );
  return href.startsWith("/") ? (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  ) : (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}
