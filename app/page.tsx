import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { About } from "@/components/sections/about";
import { Philosophy } from "@/components/sections/philosophy";
import { Statement } from "@/components/sections/statement";
import { Offer } from "@/components/sections/offer";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Philosophy />
      <Statement>
        Authenticity is <span className="italic">magnetic.</span>
      </Statement>
      <Offer />
      <Testimonials />
      <Statement tone="linen">
        Privacy is the new <span className="italic">luxury.</span>
      </Statement>
      <Newsletter />
      <Contact />
    </>
  );
}
