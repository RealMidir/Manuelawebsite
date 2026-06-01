import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Start } from "@/components/sections/start";
import { About } from "@/components/sections/about";
import { Offerings } from "@/components/sections/offerings";
import { Duefte } from "@/components/sections/duefte";
import { FullBleed } from "@/components/sections/fullbleed";
import { Partnerin } from "@/components/sections/partnerin";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { BrandStatement } from "@/components/sections/brand-statement";
import { Newsletter } from "@/components/sections/newsletter";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Start />
      <About />
      <Offerings />
      <Duefte />
      <FullBleed />
      <Partnerin />
      <Gallery />
      <Testimonials />
      <BrandStatement />
      <Newsletter />
      <Contact />
    </>
  );
}
