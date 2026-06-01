import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Start } from "@/components/sections/start";
import { Offerings } from "@/components/sections/offerings";
import { Register } from "@/components/sections/register";
import { Testimonials } from "@/components/sections/testimonials";
import { BrandStatement } from "@/components/sections/brand-statement";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Start />
      <Offerings />
      <Register />
      <Testimonials />
      <BrandStatement />
    </>
  );
}
