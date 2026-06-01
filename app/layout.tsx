import type { Metadata } from "next";
import { Lora, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import { Grain } from "@/components/ui/grain";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";
import { LanguageProvider } from "@/lib/i18n";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manuela × Chogan — Düfte. Beauty. Business.",
  description:
    "Persönliche Duftberatung mit Chogan – und Mentoring für Frauen, die ein eigenes Business aufbauen wollen. Schritt für Schritt, ohne Verkaufsdruck, mit echtem Wissen.",
  openGraph: {
    title: "Manuela × Chogan — Düfte. Beauty. Business.",
    description:
      "Düfte verkaufen, Frauen stärken, frei leben. Duftberatung & Chogan-Partnerin-Mentoring.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${lora.variable} ${manrope.variable} ${jbmono.variable} antialiased`}
    >
      <body className="min-h-screen">
        <LanguageProvider>
          <SmoothScroll>
            <Grain />
            <Nav />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
