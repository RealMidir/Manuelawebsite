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
  title: "Manuela × Chogan · Düfte. Beauty. Business.",
  description:
    "Mit Beauty, Düften und Lifestyle ein Nebeneinkommen aufbauen. Werde Chogan-Partnerin mit Manuela als Mentorin. Plus hochwertige Duft-Sets in Designer-Qualität.",
  openGraph: {
    title: "Manuela × Chogan · Düfte. Beauty. Business.",
    description:
      "Durch Beauty, Düfte und Lifestyle nebenbei ein Nebeneinkommen aufbauen. Chogan-Partnerin werden, mit persönlicher Hilfe von Manuela.",
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
