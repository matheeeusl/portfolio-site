import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { experiences } from "@/data/resume";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import en from "@/i18n/en/common.json";
import ptBR from "@/i18n/pt-BR/common.json";
import { ExperienceSection } from "./ExperienceSection";

function renderWithLocale(locale: "en" | "pt-BR") {
  return render(
    <LocaleProvider locale={locale}>
      <ExperienceSection />
    </LocaleProvider>,
  );
}

describe("ExperienceSection", () => {
  describe("section title", () => {
    it("renders the section title in English", () => {
      renderWithLocale("en");
      expect(screen.getByText(en.sections.experience)).toBeInTheDocument();
    });

    it("renders the section title in Portuguese", () => {
      renderWithLocale("pt-BR");
      expect(screen.getByText(ptBR.sections.experience)).toBeInTheDocument();
    });
  });

  describe("timeline items", () => {
    it("renders an item for each experience entry", () => {
      renderWithLocale("en");
      for (const experience of experiences) {
        expect(screen.getByTestId(`experience-${experience.id}`)).toBeInTheDocument();
      }
    });

    it("renders the present label in Portuguese for the current role", () => {
      renderWithLocale("pt-BR");
      const currentRole = experiences.find((e) => e.endDate === null);
      if (currentRole) {
        const item = screen.getByTestId(`experience-${currentRole.id}`);
        expect(within(item).getByText(new RegExp(`\\b${ptBR.experience.present}\\b`, "i"))).toBeInTheDocument();
      }
    });
  });
});
