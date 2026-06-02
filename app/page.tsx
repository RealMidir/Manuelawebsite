import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Start } from "@/components/sections/start";
import { CtaBand } from "@/components/sections/cta-band";
import { WhyChogan } from "@/components/sections/why-chogan";
import { Offerings } from "@/components/sections/offerings";
import { Values } from "@/components/sections/values";
import { Testimonials } from "@/components/sections/testimonials";
import { Register } from "@/components/sections/register";
import { BrandStatement } from "@/components/sections/brand-statement";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Start />
      <CtaBand variant="register" />
      <WhyChogan />
      <CtaBand variant="bewerben" />
      <Offerings />
      <CtaBand variant="register" />
      <Values />
      <Testimonials />
      <Register />
      <BrandStatement />
    </>
  );
}
