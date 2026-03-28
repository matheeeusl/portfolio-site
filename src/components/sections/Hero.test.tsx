import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { personalInfo } from "@/data/resume";
import { LocaleProvider } from "@/i18n/LocaleProvider";
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

  it("renders the bio in the correct locale", () => {
    renderWithLocale("en");

    expect(screen.getByText(personalInfo.bio.en)).toBeInTheDocument();
  });

  it("renders a CTA button", () => {
    renderWithLocale("en");

    expect(
      screen.getByRole("link", { name: /view my work/i }),
    ).toBeInTheDocument();
  });

  it("CTA links to projects section", () => {
    renderWithLocale("en");

    const cta = screen.getByRole("link", { name: /view my work/i });
    expect(cta).toHaveAttribute("href", "#projects");
  });
});
