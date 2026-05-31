import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Lokale Bildoptimierung braucht "sharp". Für die Bau-/Iterationsphase aus,
    // damit nichts blockiert. Vor dem finalen Production-Deploy auf Vercel
    // kann optimierung (sharp wird dort automatisch gebaut) reaktiviert werden.
    unoptimized: true,
  },
};

export default nextConfig;
