"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

/** Fängt Klicks auf #anchor-Links ab und scrollt sanft (Lenis) zum Ziel. */
function AnchorScroll() {
  const lenis = useLenis();
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href.length < 2) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -88 });
      else (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);
  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  // Erlaubt ?nolenis (für Screenshots/Tests): natives Scrollen statt Lenis.
  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    if (window.location.search.includes("nolenis")) setEnabled(false);
  }, []);

  if (!enabled) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      <AnchorScroll />
      {children}
    </ReactLenis>
  );
}
