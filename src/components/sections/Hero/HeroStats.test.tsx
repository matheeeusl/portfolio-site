import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HeroStats } from "./HeroStats";

const stats = [
  { value: "8+ Years", label: "of experience" },
  { value: "10+ Projects", label: "Delivered" },
  { value: "English", label: "Professional" },
];

describe("HeroStats", () => {
  it("renders all stat values", () => {
    render(<HeroStats stats={stats} />);
    expect(screen.getByText("8+ Years")).toBeInTheDocument();
    expect(screen.getByText("10+ Projects")).toBeInTheDocument();
    expect(screen.getByText("English")).toBeInTheDocument();
  });

  it("renders all stat labels", () => {
    render(<HeroStats stats={stats} />);
    expect(screen.getByText("of experience")).toBeInTheDocument();
    expect(screen.getByText("Delivered")).toBeInTheDocument();
    expect(screen.getByText("Professional")).toBeInTheDocument();
  });

  it("renders the correct number of stat items", () => {
    const { container } = render(<HeroStats stats={stats} />);
    const wrapper = container.firstElementChild!;
    expect(wrapper.children.length).toBe(stats.length);
  });
});
