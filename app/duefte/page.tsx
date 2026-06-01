import { PageHero } from "@/components/ui/page-hero";
import { Duefte } from "@/components/sections/duefte";
import { Register } from "@/components/sections/register";

export default function DueftePage() {
  return (
    <>
      <PageHero pageKey="duefte" />
      <Duefte />
      <Register />
    </>
  );
}
