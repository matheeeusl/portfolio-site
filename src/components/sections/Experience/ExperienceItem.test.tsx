import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import type { Experience } from "@/types";
import { ExperienceItem } from "./ExperienceItem";

const base: Experience = {
  id: "exp-test",
  company: "Acme Corp",
  role: { en: "Senior Engineer", "pt-BR": "Engenheiro Sênior" },
  startDate: "Jan 2020",
  endDate: "Dec 2022",
  summary: { en: "Built things.", "pt-BR": "Construiu coisas." },
  highlights: [
    { en: "Shipped feature A.", "pt-BR": "Entregou a feature A." },
    { en: "Improved metric B.", "pt-BR": "Melhorou a métrica B." },
  ],
  technologies: ["React", "TypeScript"],
};

const current: Experience = { ...base, id: "exp-current", endDate: null };

describe("ExperienceItem", () => {
  it("renders the company name", () => {
    render(<ExperienceItem experience={base} index={0} locale="en" presentLabel="Present" />);
    expect(screen.getByText("Acme Corp")).toBeInTheDocument();
  });

  it("renders the role in English", () => {
    render(<ExperienceItem experience={base} index={0} locale="en" presentLabel="Present" />);
    expect(screen.getByText("Senior Engineer")).toBeInTheDocument();
  });

  it("renders the role in Portuguese", () => {
    render(<ExperienceItem experience={base} index={0} locale="pt-BR" presentLabel="Presente" />);
    expect(screen.getByText("Engenheiro Sênior")).toBeInTheDocument();
  });

  it("renders the start date", () => {
    render(<ExperienceItem experience={base} index={0} locale="en" presentLabel="Present" />);
    expect(screen.getByText(/Jan 2020/)).toBeInTheDocument();
  });

  it("renders the end date when provided", () => {
    render(<ExperienceItem experience={base} index={0} locale="en" presentLabel="Present" />);
    expect(screen.getByText(/Dec 2022/)).toBeInTheDocument();
  });

  it("renders the present label when endDate is null", () => {
    render(<ExperienceItem experience={current} index={0} locale="en" presentLabel="Present" />);
    expect(screen.getByText(/Present/)).toBeInTheDocument();
  });

  it("renders the summary in English", () => {
    render(<ExperienceItem experience={base} index={0} locale="en" presentLabel="Present" />);
    expect(screen.getByText("Built things.")).toBeInTheDocument();
  });

  it("renders the summary in Portuguese", () => {
    render(<ExperienceItem experience={base} index={0} locale="pt-BR" presentLabel="Presente" />);
    expect(screen.getByText("Construiu coisas.")).toBeInTheDocument();
  });

  it("renders all highlights in English", () => {
    render(<ExperienceItem experience={base} index={0} locale="en" presentLabel="Present" />);
    expect(screen.getByText("Shipped feature A.")).toBeInTheDocument();
    expect(screen.getByText("Improved metric B.")).toBeInTheDocument();
  });

  it("renders all highlights in Portuguese", () => {
    render(<ExperienceItem experience={base} index={0} locale="pt-BR" presentLabel="Presente" />);
    expect(screen.getByText("Entregou a feature A.")).toBeInTheDocument();
    expect(screen.getByText("Melhorou a métrica B.")).toBeInTheDocument();
  });

  it("renders all technologies", () => {
    render(<ExperienceItem experience={base} index={0} locale="en" presentLabel="Present" />);
    const item = screen.getByTestId("experience-exp-test");
    expect(within(item).getByText("React")).toBeInTheDocument();
    expect(within(item).getByText("TypeScript")).toBeInTheDocument();
  });

  it("has the correct data-testid", () => {
    render(<ExperienceItem experience={base} index={0} locale="en" presentLabel="Present" />);
    expect(screen.getByTestId("experience-exp-test")).toBeInTheDocument();
  });
});
