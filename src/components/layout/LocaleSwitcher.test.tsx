import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { LocaleSwitcher } from "./LocaleSwitcher";

function renderWithLocale(locale: "en" | "pt-BR") {
  return render(
    <LocaleProvider locale={locale}>
      <LocaleSwitcher />
    </LocaleProvider>,
  );
}

describe("LocaleSwitcher", () => {
  it("shows the US flag when locale is en", () => {
    renderWithLocale("en");
    expect(screen.getByRole("button")).toHaveTextContent("🇺🇸");
  });

  it("shows the Brazilian flag when locale is pt-BR", () => {
    renderWithLocale("pt-BR");
    expect(screen.getByRole("button")).toHaveTextContent("🇧🇷");
  });

  it("has aria-label indicating switch to Portuguese when in English", () => {
    renderWithLocale("en");
    expect(
      screen.getByRole("button", { name: /switch to português/i }),
    ).toBeInTheDocument();
  });

  it("has aria-label indicating switch to English when in Portuguese", () => {
    renderWithLocale("pt-BR");
    expect(
      screen.getByRole("button", { name: /switch to english/i }),
    ).toBeInTheDocument();
  });

  it("is clickable without throwing", () => {
    renderWithLocale("en");
    expect(() => fireEvent.click(screen.getByRole("button"))).not.toThrow();
  });
});
