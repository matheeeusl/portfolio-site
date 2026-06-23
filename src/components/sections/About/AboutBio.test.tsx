import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AboutBio } from "./AboutBio";

const ptProps = {
  bio: "Software engineer passionate about great UX.",
  downloadLabel: "Baixar Currículo",
  resumeHref: "/Matheus_Laureano_Visual_CV.pdf",
};

const enProps = {
  bio: "Software engineer passionate about great UX.",
  downloadLabel: "Download Resume",
  resumeHref: "/Matheus_Laureano_Visual_CV_EN.pdf",
};

describe("AboutBio", () => {
  it("renders the bio text", () => {
    render(<AboutBio {...ptProps} />);
    expect(screen.getByText(ptProps.bio)).toBeInTheDocument();
  });

  it("renders the download link", () => {
    render(<AboutBio {...ptProps} />);
    expect(screen.getByRole("link", { name: ptProps.downloadLabel })).toBeInTheDocument();
  });

  it("download link points to pt-BR resume", () => {
    render(<AboutBio {...ptProps} />);
    expect(screen.getByRole("link", { name: ptProps.downloadLabel })).toHaveAttribute(
      "href",
      "/Matheus_Laureano_Visual_CV.pdf",
    );
  });

  it("download link points to EN resume", () => {
    render(<AboutBio {...enProps} />);
    expect(screen.getByRole("link", { name: enProps.downloadLabel })).toHaveAttribute(
      "href",
      "/Matheus_Laureano_Visual_CV_EN.pdf",
    );
  });

  it("download link has download attribute", () => {
    render(<AboutBio {...ptProps} />);
    expect(screen.getByRole("link", { name: ptProps.downloadLabel })).toHaveAttribute("download");
  });
});
