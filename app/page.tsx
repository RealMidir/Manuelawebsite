import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Teasers } from "@/components/sections/teasers";
import { BrandStatement } from "@/components/sections/brand-statement";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Teasers />
      <BrandStatement />
      <Testimonials />
      <Newsletter />
    </>
  );
}
