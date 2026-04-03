import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("renders a link with the initials", () => {
    render(<Logo />);
    expect(screen.getByRole("link", { name: "ML" })).toBeInTheDocument();
  });

  it("links to the hero section", () => {
    render(<Logo />);
    expect(screen.getByRole("link", { name: "ML" })).toHaveAttribute("href", "#hero");
  });
});
