import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import type { Volunteer } from "@/types";
import { VolunteerCard } from "./VolunteerCard";

const entry: Volunteer = {
  id: "vol-test",
  organization: { en: "Test Org", "pt-BR": "Organização Teste" },
  role: { en: "Test Role", "pt-BR": "Função Teste" },
  startDate: "2023-01",
  endDate: null,
  description: { en: "Test description.", "pt-BR": "Descrição de teste." },
};

describe("VolunteerCard", () => {
  it("renders the organization name", () => {
    render(<VolunteerCard entry={entry} index={0} locale="en" />);
    expect(screen.getByText("Test Org")).toBeInTheDocument();
  });

  it("renders the role in English", () => {
    render(<VolunteerCard entry={entry} index={0} locale="en" />);
    expect(screen.getByText("Test Role")).toBeInTheDocument();
  });

  it("renders the role in Portuguese", () => {
    render(<VolunteerCard entry={entry} index={0} locale="pt-BR" />);
    expect(screen.getByText("Função Teste")).toBeInTheDocument();
  });

  it("renders the description in English", () => {
    render(<VolunteerCard entry={entry} index={0} locale="en" />);
    expect(screen.getByText("Test description.")).toBeInTheDocument();
  });

  it("renders the description in Portuguese", () => {
    render(<VolunteerCard entry={entry} index={0} locale="pt-BR" />);
    expect(screen.getByText("Descrição de teste.")).toBeInTheDocument();
  });

  it("has the correct data-testid", () => {
    render(<VolunteerCard entry={entry} index={0} locale="en" />);
    expect(screen.getByTestId("volunteer-vol-test")).toBeInTheDocument();
  });
});
