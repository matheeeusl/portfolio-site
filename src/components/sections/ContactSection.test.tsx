import { render, screen, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { personalInfo } from "@/data/resume";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import en from "@/i18n/en/common.json";
import ptBR from "@/i18n/pt-BR/common.json";
import { ContactSection } from "./ContactSection";

function renderWithLocale(locale: "en" | "pt-BR") {
  return render(
    <LocaleProvider locale={locale}>
      <ContactSection />
    </LocaleProvider>,
  );
}

describe("ContactSection", () => {
  beforeEach(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: vi.fn().mockResolvedValue(undefined) },
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("section header", () => {
    it("renders the section title in English", () => {
      renderWithLocale("en");
      expect(screen.getByText(en.contact.title)).toBeInTheDocument();
    });

    it("renders the section title in Portuguese", () => {
      renderWithLocale("pt-BR");
      expect(screen.getByText(ptBR.contact.title)).toBeInTheDocument();
    });

    it("renders the subtitle in English", () => {
      renderWithLocale("en");
      expect(screen.getByText(en.contact.subtitle)).toBeInTheDocument();
    });

    it("renders the subtitle in Portuguese", () => {
      renderWithLocale("pt-BR");
      expect(screen.getByText(ptBR.contact.subtitle)).toBeInTheDocument();
    });

    it("renders the description in English", () => {
      renderWithLocale("en");
      expect(screen.getByText(en.contact.description)).toBeInTheDocument();
    });
  });

  describe("contact links", () => {
    it("renders email link with correct href", () => {
      renderWithLocale("en");
      const emailLink = screen.getByRole("link", { name: en.contact.emailLabel });
      expect(emailLink).toHaveAttribute("href", `mailto:${personalInfo.email}`);
    });

    it("renders GitHub link with correct href", () => {
      renderWithLocale("en");
      const githubLink = screen.getByRole("link", { name: en.contact.githubLabel });
      expect(githubLink).toHaveAttribute("href", personalInfo.github);
    });

    it("renders LinkedIn link with correct href", () => {
      renderWithLocale("en");
      const linkedinLink = screen.getByRole("link", { name: en.contact.linkedinLabel });
      expect(linkedinLink).toHaveAttribute("href", personalInfo.linkedin);
    });

    it("GitHub link opens in new tab", () => {
      renderWithLocale("en");
      const githubLink = screen.getByRole("link", { name: en.contact.githubLabel });
      expect(githubLink).toHaveAttribute("target", "_blank");
    });

    it("LinkedIn link opens in new tab", () => {
      renderWithLocale("en");
      const linkedinLink = screen.getByRole("link", { name: en.contact.linkedinLabel });
      expect(linkedinLink).toHaveAttribute("target", "_blank");
    });
  });

  describe("copy email", () => {
    it("renders a copy email button", () => {
      renderWithLocale("en");
      expect(
        screen.getByRole("button", { name: en.contact.copyEmail }),
      ).toBeInTheDocument();
    });

    it("clicking copy button changes label to copied text", async () => {
      const user = userEvent.setup();
      renderWithLocale("en");

      const copyBtn = screen.getByRole("button", { name: en.contact.copyEmail });
      await user.click(copyBtn);

      expect(screen.getByText(en.contact.emailCopied)).toBeInTheDocument();
    });

    it("copied state resets after 2 seconds", async () => {
      vi.useFakeTimers();
      renderWithLocale("en");

      const copyBtn = screen.getByRole("button", { name: en.contact.copyEmail });

      await act(async () => {
        fireEvent.click(copyBtn);
      });

      expect(screen.getByText(en.contact.emailCopied)).toBeInTheDocument();

      act(() => {
        vi.advanceTimersByTime(2000);
      });

      expect(
        screen.getByRole("button", { name: en.contact.copyEmail }),
      ).toBeInTheDocument();

      vi.useRealTimers();
    });
  });

  describe("section attributes", () => {
    it("has id='contact' for nav anchor", () => {
      renderWithLocale("en");
      expect(document.getElementById("contact")).toBeInTheDocument();
    });
  });
});
