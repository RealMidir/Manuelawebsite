"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

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
      {children}
    </ReactLenis>
  );
}
