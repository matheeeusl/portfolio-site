import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { personalInfo } from "@/data/resume";
import { Footer } from "./Footer";

describe("Footer", () => {
  describe("social links", () => {
    it("renders the GitHub link", () => {
      render(<Footer />);

      expect(
        screen.getByRole("link", { name: /github/i }),
      ).toBeInTheDocument();
    });

    it("GitHub link points to the correct URL", () => {
      render(<Footer />);

      expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
        "href",
        personalInfo.github,
      );
    });

    it("renders the LinkedIn link", () => {
      render(<Footer />);

      expect(
        screen.getByRole("link", { name: /linkedin/i }),
      ).toBeInTheDocument();
    });

    it("LinkedIn link points to the correct URL", () => {
      render(<Footer />);

      expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
        "href",
        personalInfo.linkedin,
      );
    });

    it("social links open in a new tab", () => {
      render(<Footer />);

      const links = screen.getAllByRole("link");
      for (const link of links) {
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
      }
    });
  });

  describe("copyright", () => {
    it("renders the developer name in the copyright", () => {
      render(<Footer />);

      expect(screen.getByText(new RegExp(personalInfo.name))).toBeInTheDocument();
    });

    it("renders the current year in the copyright", () => {
      render(<Footer />);

      const year = new Date().getFullYear().toString();
      expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
    });
  });
});
