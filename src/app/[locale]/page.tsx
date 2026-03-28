import type { Locale } from "@/types";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  await params;

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          <About />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
