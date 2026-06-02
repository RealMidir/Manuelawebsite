import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { BrandStatementTop } from "@/components/sections/brand-statement-top";
import { Start } from "@/components/sections/start";
import { CtaBand } from "@/components/sections/cta-band";
import { WhyChogan } from "@/components/sections/why-chogan";
import { Offerings } from "@/components/sections/offerings";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Values } from "@/components/sections/values";
import { Testimonials } from "@/components/sections/testimonials";
import { Register } from "@/components/sections/register";
import { BrandStatement } from "@/components/sections/brand-statement";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BrandStatementTop />
      <Start />
      <CtaBand variant="register" />
      <WhyChogan />
      <Offerings />
      <CtaBand variant="register" />
      <HowItWorks />
      <Values />
      <Testimonials />
      <Register />
      <BrandStatement />
    </>
  );
}
