import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ContactDropdown } from "./ContactDropdown";

const labels = {
  contact: "Contact",
  emailLabel: "Send email",
  copyEmail: "Copy email",
  emailCopied: "Copied!",
};

const contactInfo = {
  email: "test@example.com",
  github: "https://github.com/test",
  linkedin: "https://linkedin.com/in/test",
};

function renderContactDropdown() {
  return render(<ContactDropdown labels={labels} contactInfo={contactInfo} />);
}

describe("ContactDropdown", () => {
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

  it("dropdown is hidden by default", () => {
    renderContactDropdown();
    expect(document.querySelector('[data-testid="contact-dropdown-email"]')).not.toBeInTheDocument();
  });

  it("clicking Contact button opens the dropdown", async () => {
    const user = userEvent.setup();
    renderContactDropdown();

    await user.click(document.querySelector('[data-testid="contact-btn"]')!);

    expect(document.querySelector('[data-testid="contact-dropdown-email"]')).toBeInTheDocument();
  });

  it("dropdown email link has correct href", async () => {
    const user = userEvent.setup();
    renderContactDropdown();

    await user.click(document.querySelector('[data-testid="contact-btn"]')!);

    expect(document.querySelector('[data-testid="contact-dropdown-email"]')).toHaveAttribute(
      "href",
      `mailto:${contactInfo.email}`,
    );
  });

  it("dropdown GitHub link has correct href and opens in new tab", async () => {
    const user = userEvent.setup();
    renderContactDropdown();

    await user.click(document.querySelector('[data-testid="contact-btn"]')!);

    const githubLink = document.querySelector('[data-testid="contact-dropdown-github"]');
    expect(githubLink).toHaveAttribute("href", contactInfo.github);
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("dropdown LinkedIn link has correct href and opens in new tab", async () => {
    const user = userEvent.setup();
    renderContactDropdown();

    await user.click(document.querySelector('[data-testid="contact-btn"]')!);

    const linkedinLink = document.querySelector('[data-testid="contact-dropdown-linkedin"]');
    expect(linkedinLink).toHaveAttribute("href", contactInfo.linkedin);
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });

  it("copy button shows copied feedback", async () => {
    const user = userEvent.setup();
    renderContactDropdown();

    await user.click(document.querySelector('[data-testid="contact-btn"]')!);
    await user.click(document.querySelector('[data-testid="contact-dropdown-copy"]')!);

    expect(screen.getByText(labels.emailCopied)).toBeInTheDocument();
  });

  it("clicking outside closes the dropdown", async () => {
    const user = userEvent.setup();
    renderContactDropdown();

    await user.click(document.querySelector('[data-testid="contact-btn"]')!);
    expect(document.querySelector('[data-testid="contact-dropdown-email"]')).toBeInTheDocument();

    await user.click(document.querySelector(".fixed.inset-0")!);

    expect(document.querySelector('[data-testid="contact-dropdown-email"]')).not.toBeInTheDocument();
  });
});
