import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Duefte } from "@/components/sections/duefte";
import { Partnerin } from "@/components/sections/partnerin";
import { About } from "@/components/sections/about";
import { Statement } from "@/components/sections/statement";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Duefte />
      <Partnerin />
      <About />
      <Statement>
        Düfte. Beauty. <span className="italic text-clay">Business.</span>
      </Statement>
      <Testimonials />
      <Newsletter />
      <Contact />
    </>
  );
}
