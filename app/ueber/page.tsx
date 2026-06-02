import { PageHero } from "@/components/ui/page-hero";
import { About } from "@/components/sections/about";
import { Manifesto } from "@/components/sections/manifesto";
import { Gallery } from "@/components/sections/gallery";
import { BrandStatement } from "@/components/sections/brand-statement";

export default function UeberPage() {
  return (
    <>
      <PageHero pageKey="ueber" />
      <About />
      <Manifesto />
      <Gallery />
      <BrandStatement />
    </>
  );
}
