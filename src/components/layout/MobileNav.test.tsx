import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MobileNav } from "./MobileNav";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const contactLinks = {
  emailLabel: "Send email",
  email: "test@example.com",
  github: "https://github.com/test",
  linkedin: "https://linkedin.com/in/test",
};

function renderMobileNav(isOpen = true, onClose = vi.fn()) {
  return render(
    <MobileNav isOpen={isOpen} onClose={onClose} links={links} contactLinks={contactLinks} />,
  );
}

describe("MobileNav", () => {
  it("renders nav links when open", () => {
    renderMobileNav(true);
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
  });

  it("nav links point to correct sections", () => {
    renderMobileNav(true);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "#about");
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute("href", "#experience");
  });

  it("renders contact links", () => {
    renderMobileNav(true);
    expect(screen.getByRole("link", { name: contactLinks.emailLabel })).toHaveAttribute(
      "href",
      `mailto:${contactLinks.email}`,
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", contactLinks.github);
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", contactLinks.linkedin);
  });

  it("is not visible when closed", () => {
    renderMobileNav(false);
    expect(screen.getByRole("navigation", { name: /mobile/i })).not.toBeVisible();
  });

  it("is visible when open", () => {
    renderMobileNav(true);
    expect(screen.getByRole("navigation", { name: /mobile/i })).toBeVisible();
  });

  it("calls onClose when a nav link is clicked", () => {
    const onClose = vi.fn();
    renderMobileNav(true, onClose);
    fireEvent.click(screen.getByRole("link", { name: "About" }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose when email link is clicked", () => {
    const onClose = vi.fn();
    renderMobileNav(true, onClose);
    fireEvent.click(screen.getByRole("link", { name: contactLinks.emailLabel }));
    expect(onClose).toHaveBeenCalledOnce();
  });
});
