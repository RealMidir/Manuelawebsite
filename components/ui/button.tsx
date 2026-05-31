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
  return (
    <a href={href} className={`btn btn-${variant} ${className}`}>
      {children}
      {arrow && (
        <span className="arrow" aria-hidden="true">
          →
        </span>
      )}
    </a>
  );
}
