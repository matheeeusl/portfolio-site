import type { Locale } from "@/types";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { VolunteerSection } from "@/components/sections/VolunteerSection";

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
        <div>
          <About />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <VolunteerSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
