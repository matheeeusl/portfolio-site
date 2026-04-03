import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AboutBio } from "./AboutBio";

const props = {
  bio: "Software engineer passionate about great UX.",
  downloadLabel: "Download Résumé",
};

describe("AboutBio", () => {
  it("renders the bio text", () => {
    render(<AboutBio {...props} />);
    expect(screen.getByText(props.bio)).toBeInTheDocument();
  });

  it("renders the download link", () => {
    render(<AboutBio {...props} />);
    expect(screen.getByRole("link", { name: props.downloadLabel })).toBeInTheDocument();
  });

  it("download link points to resume.pdf", () => {
    render(<AboutBio {...props} />);
    expect(screen.getByRole("link", { name: props.downloadLabel })).toHaveAttribute(
      "href",
      "/resume.pdf",
    );
  });

  it("download link has download attribute", () => {
    render(<AboutBio {...props} />);
    expect(screen.getByRole("link", { name: props.downloadLabel })).toHaveAttribute("download");
  });
});
