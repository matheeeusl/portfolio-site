import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import en from "@/i18n/en/common.json";
import ptBR from "@/i18n/pt-BR/common.json";
import { Header } from "./Header";

function renderWithLocale(locale: "en" | "pt-BR") {
  return render(
    <LocaleProvider locale={locale}>
      <Header />
    </LocaleProvider>,
  );
}

describe("Header", () => {
  describe("nav links", () => {
    it("renders all nav links in English", () => {
      renderWithLocale("en");

      expect(
        screen.getByRole("link", { name: en.nav.about }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: en.nav.experience }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: en.nav.projects }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: en.nav.skills }),
      ).toBeInTheDocument();
    });

    it("renders all nav links in Portuguese", () => {
      renderWithLocale("pt-BR");

      expect(
        screen.getByRole("link", { name: ptBR.nav.about }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: ptBR.nav.experience }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: ptBR.nav.projects }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: ptBR.nav.skills }),
      ).toBeInTheDocument();
    });

    it("nav links point to the correct sections", () => {
      renderWithLocale("en");

      expect(screen.getByRole("link", { name: en.nav.about })).toHaveAttribute(
        "href",
        "#about",
      );
      expect(
        screen.getByRole("link", { name: en.nav.experience }),
      ).toHaveAttribute("href", "#experience");
      expect(
        screen.getByRole("link", { name: en.nav.projects }),
      ).toHaveAttribute("href", "#projects");
      expect(
        screen.getByRole("link", { name: en.nav.skills }),
      ).toHaveAttribute("href", "#skills");
    });
  });

  describe("locale switcher", () => {
    it("renders the locale switcher button in English", () => {
      renderWithLocale("en");

      expect(
        screen.getByRole("button", { name: en.locale.switchTo }),
      ).toBeInTheDocument();
    });

    it("renders the locale switcher button in Portuguese", () => {
      renderWithLocale("pt-BR");

      expect(
        screen.getByRole("button", { name: ptBR.locale.switchTo }),
      ).toBeInTheDocument();
    });
  });

  describe("dark mode toggle", () => {
    it("renders the theme toggle button", () => {
      renderWithLocale("en");

      expect(
        screen.getByRole("button", { name: /light mode|dark mode/i }),
      ).toBeInTheDocument();
    });
  });

  describe("mobile menu", () => {
    it("renders the mobile menu button", () => {
      renderWithLocale("en");

      expect(
        screen.getByRole("button", { name: /open menu/i }),
      ).toBeInTheDocument();
    });

    it("opens the mobile menu when the button is clicked", () => {
      renderWithLocale("en");

      const menuButton = screen.getByRole("button", { name: /open menu/i });
      fireEvent.click(menuButton);

      expect(screen.getByRole("navigation", { name: /mobile/i })).toBeVisible();
    });

    it("closes the mobile menu when the button is clicked again", () => {
      renderWithLocale("en");

      const menuButton = screen.getByRole("button", { name: /open menu/i });
      fireEvent.click(menuButton);
      fireEvent.click(screen.getByRole("button", { name: /close menu/i }));

      expect(
        screen.queryByRole("navigation", { name: /mobile/i }),
      ).not.toBeVisible();
    });
  });
});
