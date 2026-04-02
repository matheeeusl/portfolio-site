import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
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
    afterEach(() => {
      document.documentElement.classList.remove("dark");
    });

    it("renders the theme toggle button", () => {
      renderWithLocale("en");

      expect(
        screen.getByRole("button", { name: /light mode|dark mode/i }),
      ).toBeInTheDocument();
    });

    it("applies dark class to document on initial mount", () => {
      renderWithLocale("en");

      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });
  });

  describe("theme persistence across locale switch", () => {
    beforeEach(() => {
      document.documentElement.classList.remove("dark");
    });

    afterEach(() => {
      document.documentElement.classList.remove("dark");
    });

    it("re-applies dark class after remount, simulating locale navigation", () => {
      const { unmount } = renderWithLocale("en");
      expect(document.documentElement.classList.contains("dark")).toBe(true);

      // Simulate navigation: component unmounts and dark class is cleared from html
      unmount();
      document.documentElement.classList.remove("dark");

      // Component remounts on the new locale page
      renderWithLocale("pt-BR");

      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });

    it("preserves light theme when locale is switched", () => {
      renderWithLocale("en");

      // isDark starts as true (dark mode) — toggle to light
      fireEvent.click(screen.getByRole("button", { name: /light mode/i }));
      expect(document.documentElement.classList.contains("dark")).toBe(false);

      // Switch locale
      fireEvent.click(screen.getByRole("button", { name: en.locale.switchTo }));

      // Theme must still be light after locale switch
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    });

    it("preserves dark theme when locale is switched", () => {
      renderWithLocale("en");

      // Toggle to light then back to dark
      fireEvent.click(screen.getByRole("button", { name: /light mode/i }));
      fireEvent.click(screen.getByRole("button", { name: /dark mode/i }));
      expect(document.documentElement.classList.contains("dark")).toBe(true);

      // Switch locale
      fireEvent.click(screen.getByRole("button", { name: en.locale.switchTo }));

      // Theme must still be dark after locale switch
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });
  });

  describe("social links", () => {
    it("renders a GitHub link in the desktop header", () => {
      renderWithLocale("en");

      const link = document.querySelector('[data-testid="header-github"]');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", expect.stringContaining("github.com"));
    });

    it("renders a LinkedIn link in the desktop header", () => {
      renderWithLocale("en");

      const link = document.querySelector('[data-testid="header-linkedin"]');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
    });

    it("social links open in a new tab", () => {
      renderWithLocale("en");

      const github = document.querySelector('[data-testid="header-github"]');
      const linkedin = document.querySelector('[data-testid="header-linkedin"]');

      expect(github).toHaveAttribute("target", "_blank");
      expect(linkedin).toHaveAttribute("target", "_blank");
    });
  });

  describe("scroll-spy", () => {
    beforeEach(() => {
      // jsdom has no real layout: scrollHeight ≈ 0, so isNearBottom would always
      // be true. Mock a tall page so tests that scroll mid-page work correctly.
      vi.spyOn(window, "scrollY", "get").mockReturnValue(500);
      vi.spyOn(window, "innerHeight", "get").mockReturnValue(800);
      vi.spyOn(document.body, "scrollHeight", "get").mockReturnValue(5000);
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it("marks the nav link as active when the section top is above the header", () => {
      const section = document.createElement("section");
      section.id = "about";
      vi.spyOn(section, "getBoundingClientRect").mockReturnValue({
        top: 50,
      } as DOMRect);
      document.body.appendChild(section);

      renderWithLocale("en");

      act(() => {
        window.dispatchEvent(new Event("scroll"));
      });

      const desktopNav = document.querySelector('nav[aria-hidden="true"]');
      expect(desktopNav?.querySelector('[data-active="true"]')).toHaveTextContent(
        en.nav.about,
      );

      document.body.removeChild(section);
    });

    it("activates the last nav link when scrolled near the bottom of the page", () => {
      vi.spyOn(window, "scrollY", "get").mockReturnValue(4300);

      renderWithLocale("en");

      act(() => {
        window.dispatchEvent(new Event("scroll"));
      });

      const desktopNav = document.querySelector('nav[aria-hidden="true"]');
      expect(desktopNav?.querySelector('[data-active="true"]')).toHaveTextContent(
        en.nav.contact,
      );
    });

    it("switches active link to the last section whose top is above the header", () => {
      const aboutSection = document.createElement("section");
      aboutSection.id = "about";
      vi.spyOn(aboutSection, "getBoundingClientRect").mockReturnValue({
        top: 20,
      } as DOMRect);

      const expSection = document.createElement("section");
      expSection.id = "experience";
      vi.spyOn(expSection, "getBoundingClientRect").mockReturnValue({
        top: 40,
      } as DOMRect);

      document.body.appendChild(aboutSection);
      document.body.appendChild(expSection);

      renderWithLocale("en");

      act(() => {
        window.dispatchEvent(new Event("scroll"));
      });

      const desktopNav = document.querySelector('nav[aria-hidden="true"]');
      expect(desktopNav?.querySelector('[data-active="true"]')).toHaveTextContent(
        en.nav.experience,
      );

      document.body.removeChild(aboutSection);
      document.body.removeChild(expSection);
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
