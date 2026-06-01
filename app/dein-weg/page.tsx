import { PageHero } from "@/components/ui/page-hero";
import { Roadmap } from "@/components/sections/roadmap";
import { Coaching } from "@/components/sections/coaching";

export default function DeinWegPage() {
  return (
    <>
      <PageHero pageKey="deinweg" />
      <Roadmap />
      <Coaching />
    </>
  );
}
