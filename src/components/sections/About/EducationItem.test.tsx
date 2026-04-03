import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import type { Education } from "@/types";
import { EducationItem } from "./EducationItem";

const entry: Education = {
  id: "edu-test",
  institution: { en: "Test University", "pt-BR": "Universidade Teste" },
  degree: { en: "Bachelor of Testing", "pt-BR": "Bacharelado em Testes" },
  startYear: 2018,
  endYear: 2022,
  location: "Test City, Brazil",
  description: { en: "Focused on testing.", "pt-BR": "Foco em testes." },
};

describe("EducationItem", () => {
  it("renders the institution name in English", () => {
    render(<EducationItem entry={entry} index={0} locale="en" />);
    expect(screen.getByText("Test University")).toBeInTheDocument();
  });

  it("renders the institution name in Portuguese", () => {
    render(<EducationItem entry={entry} index={0} locale="pt-BR" />);
    expect(screen.getByText("Universidade Teste")).toBeInTheDocument();
  });

  it("renders the degree in English", () => {
    render(<EducationItem entry={entry} index={0} locale="en" />);
    expect(screen.getByText("Bachelor of Testing")).toBeInTheDocument();
  });

  it("renders the degree in Portuguese", () => {
    render(<EducationItem entry={entry} index={0} locale="pt-BR" />);
    expect(screen.getByText("Bacharelado em Testes")).toBeInTheDocument();
  });

  it("renders the year range", () => {
    render(<EducationItem entry={entry} index={0} locale="en" />);
    expect(screen.getByText(/2018.*2022/)).toBeInTheDocument();
  });

  it("renders the description in English", () => {
    render(<EducationItem entry={entry} index={0} locale="en" />);
    expect(screen.getByText("Focused on testing.")).toBeInTheDocument();
  });

  it("renders the description in Portuguese", () => {
    render(<EducationItem entry={entry} index={0} locale="pt-BR" />);
    expect(screen.getByText("Foco em testes.")).toBeInTheDocument();
  });
});
