import type { Locale } from "@/types";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { About } from "@/components/sections/About/About";
import { ExperienceSection } from "@/components/sections/Experience/ExperienceSection";
import { ProjectsSection } from "@/components/sections/Projects/ProjectsSection";
import { SkillsSection } from "@/components/sections/Skills/SkillsSection";
import { VolunteerSection } from "@/components/sections/Volunteer/VolunteerSection";

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
