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

      expect(screen.getByRole("link", { name: en.nav.about })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: en.nav.experience })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: en.nav.projects })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: en.nav.skills })).toBeInTheDocument();
    });

    it("renders all nav links in Portuguese", () => {
      renderWithLocale("pt-BR");

      expect(screen.getByRole("link", { name: ptBR.nav.about })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: ptBR.nav.experience })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: ptBR.nav.projects })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: ptBR.nav.skills })).toBeInTheDocument();
    });

    it("nav links point to the correct sections", () => {
      renderWithLocale("en");

      expect(screen.getByRole("link", { name: en.nav.about })).toHaveAttribute("href", "#about");
      expect(screen.getByRole("link", { name: en.nav.experience })).toHaveAttribute("href", "#experience");
      expect(screen.getByRole("link", { name: en.nav.projects })).toHaveAttribute("href", "#projects");
      expect(screen.getByRole("link", { name: en.nav.skills })).toHaveAttribute("href", "#skills");
    });
  });

  describe("locale switcher", () => {
    it("renders the locale switcher button in English", () => {
      renderWithLocale("en");
      expect(screen.getByRole("button", { name: /switch to português/i })).toBeInTheDocument();
    });

    it("renders the locale switcher button in Portuguese", () => {
      renderWithLocale("pt-BR");
      expect(screen.getByRole("button", { name: /switch to english/i })).toBeInTheDocument();
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

      unmount();
      document.documentElement.classList.remove("dark");

      renderWithLocale("pt-BR");

      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });

    it("preserves light theme when locale is switched", () => {
      renderWithLocale("en");

      fireEvent.click(screen.getByRole("button", { name: /light mode/i }));
      expect(document.documentElement.classList.contains("dark")).toBe(false);

      fireEvent.click(screen.getByRole("button", { name: /switch to português/i }));

      expect(document.documentElement.classList.contains("dark")).toBe(false);
    });

    it("preserves dark theme when locale is switched", () => {
      renderWithLocale("en");

      fireEvent.click(screen.getByRole("button", { name: /light mode/i }));
      fireEvent.click(screen.getByRole("button", { name: /dark mode/i }));
      expect(document.documentElement.classList.contains("dark")).toBe(true);

      fireEvent.click(screen.getByRole("button", { name: /switch to português/i }));

      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });
  });

  describe("scroll-spy", () => {
    beforeEach(() => {
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
      vi.spyOn(section, "getBoundingClientRect").mockReturnValue({ top: 50 } as DOMRect);
      document.body.appendChild(section);

      renderWithLocale("en");

      act(() => {
        window.dispatchEvent(new Event("scroll"));
      });

      const desktopNav = document.querySelector('nav[aria-hidden="true"]');
      expect(desktopNav?.querySelector('[data-active="true"]')).toHaveTextContent(en.nav.about);

      document.body.removeChild(section);
    });

    it("activates the last nav link when scrolled near the bottom of the page", () => {
      vi.spyOn(window, "scrollY", "get").mockReturnValue(4300);

      renderWithLocale("en");

      act(() => {
        window.dispatchEvent(new Event("scroll"));
      });

      const desktopNav = document.querySelector('nav[aria-hidden="true"]');
      expect(desktopNav?.querySelector('[data-active="true"]')).toHaveTextContent(en.nav.volunteer);
    });

    it("switches active link to the last section whose top is above the header", () => {
      const aboutSection = document.createElement("section");
      aboutSection.id = "about";
      vi.spyOn(aboutSection, "getBoundingClientRect").mockReturnValue({ top: 20 } as DOMRect);

      const expSection = document.createElement("section");
      expSection.id = "experience";
      vi.spyOn(expSection, "getBoundingClientRect").mockReturnValue({ top: 40 } as DOMRect);

      document.body.appendChild(aboutSection);
      document.body.appendChild(expSection);

      renderWithLocale("en");

      act(() => {
        window.dispatchEvent(new Event("scroll"));
      });

      const desktopNav = document.querySelector('nav[aria-hidden="true"]');
      expect(desktopNav?.querySelector('[data-active="true"]')).toHaveTextContent(en.nav.experience);

      document.body.removeChild(aboutSection);
      document.body.removeChild(expSection);
    });
  });

  describe("mobile menu", () => {
    it("renders the mobile menu button", () => {
      renderWithLocale("en");
      expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
    });

    it("opens the mobile menu when the button is clicked", () => {
      renderWithLocale("en");
      fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
      expect(screen.getByRole("navigation", { name: /mobile/i })).toBeVisible();
    });

    it("closes the mobile menu when the button is clicked again", () => {
      renderWithLocale("en");
      fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
      fireEvent.click(screen.getByRole("button", { name: /close menu/i }));
      expect(screen.queryByRole("navigation", { name: /mobile/i })).not.toBeVisible();
    });
  });
});
