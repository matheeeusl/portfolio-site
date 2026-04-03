import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { ThemeToggle } from "./ThemeToggle";

function renderThemeToggle() {
  return render(<ThemeToggle labelLight="Light mode" labelDark="Dark mode" />);
}

describe("ThemeToggle", () => {
  afterEach(() => {
    document.documentElement.classList.remove("dark");
  });

  it("renders a toggle button", () => {
    renderThemeToggle();
    expect(screen.getByRole("button", { name: /light mode|dark mode/i })).toBeInTheDocument();
  });

  it("applies dark class to document on initial mount", () => {
    renderThemeToggle();
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("removes dark class when toggled to light mode", () => {
    renderThemeToggle();
    fireEvent.click(screen.getByRole("button", { name: /light mode/i }));
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("re-applies dark class when toggled back to dark mode", () => {
    renderThemeToggle();
    fireEvent.click(screen.getByRole("button", { name: /light mode/i }));
    fireEvent.click(screen.getByRole("button", { name: /dark mode/i }));
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("updates aria-label based on current theme", () => {
    renderThemeToggle();
    expect(screen.getByRole("button", { name: /light mode/i })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /light mode/i }));
    expect(screen.getByRole("button", { name: /dark mode/i })).toBeInTheDocument();
  });
});
