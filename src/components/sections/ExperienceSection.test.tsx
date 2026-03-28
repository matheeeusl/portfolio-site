import { render, screen } from "@testing-library/react";
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
    it("renders all companies", () => {
      renderWithLocale("en");

      for (const experience of experiences) {
        expect(screen.getByText(experience.company)).toBeInTheDocument();
      }
    });

    it("renders all roles in English", () => {
      renderWithLocale("en");

      for (const experience of experiences) {
        expect(screen.getByText(experience.role.en)).toBeInTheDocument();
      }
    });

    it("renders all roles in Portuguese", () => {
      renderWithLocale("pt-BR");

      for (const experience of experiences) {
        expect(screen.getByText(experience.role["pt-BR"])).toBeInTheDocument();
      }
    });

    it("renders all start dates", () => {
      renderWithLocale("en");

      for (const experience of experiences) {
        expect(screen.getByText(new RegExp(experience.startDate))).toBeInTheDocument();
      }
    });

    it("renders end dates, showing present label for current role", () => {
      renderWithLocale("en");

      for (const experience of experiences) {
        if (experience.endDate === null) {
          expect(screen.getByText(new RegExp(en.experience.present, "i"))).toBeInTheDocument();
        } else {
          expect(screen.getByText(new RegExp(experience.endDate))).toBeInTheDocument();
        }
      }
    });

    it("renders present label in Portuguese for current role", () => {
      renderWithLocale("pt-BR");

      const currentRole = experiences.find((e) => e.endDate === null);
      if (currentRole) {
        expect(
          screen.getByText(new RegExp(ptBR.experience.present, "i")),
        ).toBeInTheDocument();
      }
    });

    it("renders all descriptions in English", () => {
      renderWithLocale("en");

      for (const experience of experiences) {
        expect(screen.getByText(experience.description.en)).toBeInTheDocument();
      }
    });

    it("renders all descriptions in Portuguese", () => {
      renderWithLocale("pt-BR");

      for (const experience of experiences) {
        expect(
          screen.getByText(experience.description["pt-BR"]),
        ).toBeInTheDocument();
      }
    });

    it("renders all technologies for each experience", () => {
      renderWithLocale("en");

      for (const experience of experiences) {
        for (const tech of experience.technologies) {
          expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
        }
      }
    });
  });
});
