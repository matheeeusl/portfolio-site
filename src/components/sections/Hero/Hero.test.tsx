import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { personalInfo } from "@/data/resume";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import en from "@/i18n/en/common.json";
import ptBR from "@/i18n/pt-BR/common.json";
import { Hero } from "./Hero";

function renderWithLocale(locale: "en" | "pt-BR") {
  return render(
    <LocaleProvider locale={locale}>
      <Hero />
    </LocaleProvider>,
  );
}

describe("Hero", () => {
  it("renders the developer name", () => {
    renderWithLocale("en");

    expect(screen.getByText(personalInfo.name)).toBeInTheDocument();
  });

  it("renders the job title in English", () => {
    renderWithLocale("en");

    expect(screen.getByText(personalInfo.title.en)).toBeInTheDocument();
  });

  it("renders the job title in Portuguese", () => {
    renderWithLocale("pt-BR");

    expect(screen.getByText(personalInfo.title["pt-BR"])).toBeInTheDocument();
  });

  it("renders the tagline in English", () => {
    renderWithLocale("en");

    expect(screen.getByText(en.hero.tagline)).toBeInTheDocument();
  });

  it("renders the tagline in Portuguese", () => {
    renderWithLocale("pt-BR");

    expect(screen.getByText(ptBR.hero.tagline)).toBeInTheDocument();
  });

  it("renders the stats grid in English", () => {
    renderWithLocale("en");

    expect(screen.getByText(en.hero.stats.years)).toBeInTheDocument();
    expect(screen.getByText(en.hero.stats.projects)).toBeInTheDocument();
    expect(screen.getByText(en.hero.stats.languages)).toBeInTheDocument();
  });

  it("renders the stats grid in Portuguese", () => {
    renderWithLocale("pt-BR");

    expect(screen.getByText(ptBR.hero.stats.years)).toBeInTheDocument();
    expect(screen.getByText(ptBR.hero.stats.projects)).toBeInTheDocument();
    expect(screen.getByText(ptBR.hero.stats.languages)).toBeInTheDocument();
  });

  it("renders a CTA button", () => {
    renderWithLocale("en");
    expect(screen.getByRole("link", { name: en.hero.cta })).toBeInTheDocument();
  });

  it("CTA links to projects section", () => {
    renderWithLocale("en");
    expect(screen.getByRole("link", { name: en.hero.cta })).toHaveAttribute("href", "#projects");
  });

  it("renders the profile photo", () => {
    renderWithLocale("en");
    const img = screen.getByRole("img", { name: personalInfo.name });
    expect(img).toBeInTheDocument();
  });
});
