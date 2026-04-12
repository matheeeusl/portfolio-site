import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { axe } from "vitest-axe";
import type { Locale } from "@/types";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { About } from "@/components/sections/About/About";
import { ExperienceSection } from "@/components/sections/Experience/ExperienceSection";
import { ProjectsSection } from "@/components/sections/Projects/ProjectsSection";
import { SkillsSection } from "@/components/sections/Skills/SkillsSection";
import { VolunteerSection } from "@/components/sections/Volunteer/VolunteerSection";

function renderPage(locale: Locale) {
  document.documentElement.lang = locale;
  return render(
    <LocaleProvider locale={locale}>
      <Header />
      <main id="content">
        <Hero />
        <About />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <VolunteerSection />
      </main>
      <Footer />
    </LocaleProvider>,
  );
}

describe("Accessibility (WCAG AA)", () => {
  it(
    "has no violations for the English locale",
    async () => {
      const { container } = renderPage("en");
      const results = await axe(container, {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] },
      });
      expect(results).toHaveNoViolations();
    },
    15000,
  );

  it(
    "has no violations for the Portuguese locale",
    async () => {
      const { container } = renderPage("pt-BR");
      const results = await axe(container, {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] },
      });
      expect(results).toHaveNoViolations();
    },
    15000,
  );
});
