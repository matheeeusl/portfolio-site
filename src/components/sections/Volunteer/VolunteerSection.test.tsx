import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { volunteers } from "@/data/resume";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import en from "@/i18n/en/common.json";
import ptBR from "@/i18n/pt-BR/common.json";
import { VolunteerSection } from "./VolunteerSection";

function renderWithLocale(locale: "en" | "pt-BR") {
  return render(
    <LocaleProvider locale={locale}>
      <VolunteerSection />
    </LocaleProvider>,
  );
}

describe("VolunteerSection", () => {
  describe("section header", () => {
    it("renders the section title in English", () => {
      renderWithLocale("en");
      expect(screen.getByText(en.volunteer.title)).toBeInTheDocument();
    });

    it("renders the section title in Portuguese", () => {
      renderWithLocale("pt-BR");
      expect(screen.getByText(ptBR.volunteer.title)).toBeInTheDocument();
    });

    it("renders the subtitle in English", () => {
      renderWithLocale("en");
      expect(screen.getByText(en.volunteer.subtitle)).toBeInTheDocument();
    });

    it("renders the subtitle in Portuguese", () => {
      renderWithLocale("pt-BR");
      expect(screen.getByText(ptBR.volunteer.subtitle)).toBeInTheDocument();
    });
  });

  describe("volunteer cards", () => {
    it("renders a card for each volunteer entry", () => {
      renderWithLocale("en");
      for (const entry of volunteers) {
        expect(screen.getByTestId(`volunteer-${entry.id}`)).toBeInTheDocument();
      }
    });
  });

  describe("section attributes", () => {
    it("has id='volunteer'", () => {
      renderWithLocale("en");
      expect(document.getElementById("volunteer")).toBeInTheDocument();
    });
  });
});
