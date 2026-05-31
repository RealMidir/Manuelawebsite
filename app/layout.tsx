import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import { Grain } from "@/components/ui/grain";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/sections/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manuela — Skillset, Mindset & Heartset",
  description:
    "Persönliche Entwicklung mit Eleganz. Mentoring, Klarheit und Inspiration für Frauen, die mit Leichtigkeit wachsen und ein selbstbestimmtes Leben gestalten wollen.",
  openGraph: {
    title: "Manuela — Skillset, Mindset & Heartset",
    description:
      "Persönliche Entwicklung mit Eleganz. Mentoring, Klarheit und Inspiration für ein selbstbestimmtes Leben.",
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
      className={`${cormorant.variable} ${jost.variable} antialiased`}
    >
      <body className="min-h-screen">
        <SmoothScroll>
          <Grain />
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
