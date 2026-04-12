import type { Locale } from "@/types";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { About } from "@/components/sections/About/About";
import { ExperienceSection } from "@/components/sections/Experience/ExperienceSection";
import { ProjectsSection } from "@/components/sections/Projects/ProjectsSection";
import { SkillsSection } from "@/components/sections/Skills/SkillsSection";
import { VolunteerSection } from "@/components/sections/Volunteer/VolunteerSection";
import { personalInfo } from "@/data/resume";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://matheeeusl.com";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.title[locale],
    url: siteUrl,
    email: personalInfo.email,
    sameAs: [personalInfo.github, personalInfo.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Florianópolis",
      addressRegion: "SC",
      addressCountry: "BR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="content">
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
