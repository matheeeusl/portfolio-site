import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { personalInfo, education } from "@/data/resume";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import en from "@/i18n/en/common.json";
import ptBR from "@/i18n/pt-BR/common.json";
import { About } from "./About";

function renderWithLocale(locale: "en" | "pt-BR") {
  return render(
    <LocaleProvider locale={locale}>
      <About />
    </LocaleProvider>,
  );
}

describe("About", () => {
  it("renders the section title in English", () => {
    renderWithLocale("en");

    expect(screen.getByText(en.sections.about)).toBeInTheDocument();
  });

  it("renders the section title in Portuguese", () => {
    renderWithLocale("pt-BR");

    expect(screen.getByText(ptBR.sections.about)).toBeInTheDocument();
  });

  it("renders the bio in English", () => {
    renderWithLocale("en");

    expect(screen.getByText(personalInfo.bio.en)).toBeInTheDocument();
  });

  it("renders the bio in Portuguese", () => {
    renderWithLocale("pt-BR");

    expect(screen.getByText(personalInfo.bio["pt-BR"])).toBeInTheDocument();
  });

  describe("Education", () => {
    it("renders the education title in English", () => {
      renderWithLocale("en");

      expect(screen.getByText(en.sections.education)).toBeInTheDocument();
    });

    it("renders the education title in Portuguese", () => {
      renderWithLocale("pt-BR");

      expect(screen.getByText(ptBR.sections.education)).toBeInTheDocument();
    });

    it("renders all institution names", () => {
      renderWithLocale("en");

      for (const entry of education) {
        expect(screen.getByText(entry.institution)).toBeInTheDocument();
      }
    });

    it("renders all degrees in English", () => {
      renderWithLocale("en");

      for (const entry of education) {
        expect(screen.getByText(entry.degree.en)).toBeInTheDocument();
      }
    });

    it("renders all degrees in Portuguese", () => {
      renderWithLocale("pt-BR");

      for (const entry of education) {
        expect(screen.getByText(entry.degree["pt-BR"])).toBeInTheDocument();
      }
    });

    it("renders the year range for each entry", () => {
      renderWithLocale("en");

      for (const entry of education) {
        expect(
          screen.getByText(new RegExp(`${entry.startYear}.*${entry.endYear}`)),
        ).toBeInTheDocument();
      }
    });

    it("renders the location for each entry", () => {
      renderWithLocale("en");

      for (const entry of education) {
        expect(screen.getByText(entry.location)).toBeInTheDocument();
      }
    });
  });
});
