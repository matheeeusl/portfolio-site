import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Hello</Card>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("renders as div by default", () => {
    const { container } = render(<Card>content</Card>);
    expect(container.firstChild?.nodeName).toBe("DIV");
  });

  it("renders as the element provided via 'as' prop", () => {
    const { container } = render(<Card as="article">content</Card>);
    expect(container.firstChild?.nodeName).toBe("ARTICLE");
  });

  it("applies base card classes", () => {
    const { container } = render(<Card>content</Card>);
    expect(container.firstChild).toHaveClass("rounded-xl", "border");
  });

  it("merges additional className", () => {
    const { container } = render(<Card className="p-6 border-teal-500">content</Card>);
    expect(container.firstChild).toHaveClass("p-6", "border-teal-500");
  });

  it("forwards extra props to the element", () => {
    render(<Card data-testid="my-card">content</Card>);
    expect(screen.getByTestId("my-card")).toBeInTheDocument();
  });

  it("forwards aria attributes", () => {
    render(<Card as="section" aria-label="Skills">content</Card>);
    expect(screen.getByRole("region", { name: "Skills" })).toBeInTheDocument();
  });
});
