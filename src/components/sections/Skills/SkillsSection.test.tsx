import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { skills } from "@/data/resume";
import type { SkillCategory } from "@/types";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import en from "@/i18n/en/common.json";
import ptBR from "@/i18n/pt-BR/common.json";
import { SkillsSection } from "./SkillsSection";

const CATEGORY_TITLES: Record<SkillCategory, string> = {
  frontend: "Frontend & Core",
  backend: "Backend & Data",
  state: "State Management",
  testing: "Testing",
  ecommerce: "E-commerce & AI Tools",
  devops: "DevOps & Leadership",
};

function renderWithLocale(locale: "en" | "pt-BR") {
  return render(
    <LocaleProvider locale={locale}>
      <SkillsSection />
    </LocaleProvider>,
  );
}

const categories = [...new Set(skills.map((s) => s.category))] as SkillCategory[];

describe("SkillsSection", () => {
  describe("section title", () => {
    it("renders the section title in English", () => {
      renderWithLocale("en");
      expect(screen.getByText(en.sections.skills)).toBeInTheDocument();
    });

    it("renders the section title in Portuguese", () => {
      renderWithLocale("pt-BR");
      expect(screen.getByText(ptBR.sections.skills)).toBeInTheDocument();
    });
  });

  describe("category groups", () => {
    it("renders a group for each category with the correct title", () => {
      renderWithLocale("en");
      for (const category of categories) {
        expect(
          screen.getByRole("region", { name: CATEGORY_TITLES[category] }),
        ).toBeInTheDocument();
      }
    });

    it("renders each skill inside its correct category group", () => {
      renderWithLocale("en");
      for (const category of categories) {
        const group = screen.getByRole("region", { name: CATEGORY_TITLES[category] });
        const categorySkills = skills.filter((s) => s.category === category);
        for (const skill of categorySkills) {
          expect(group).toHaveTextContent(skill.name);
        }
      }
    });
  });

  describe("skill items", () => {
    it("renders all skill names", () => {
      renderWithLocale("en");
      for (const skill of skills) {
        expect(
          screen.getByTestId(`skill-${skill.name.trim().toLowerCase()}`),
        ).toBeInTheDocument();
      }
    });
  });
});
