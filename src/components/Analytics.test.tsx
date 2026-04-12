import { render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { Analytics } from "./Analytics";

describe("Analytics", () => {
  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("sends a POST to /api/analytics with path and locale on mount", () => {
    render(
      <LocaleProvider locale="en">
        <Analytics />
      </LocaleProvider>,
    );

    expect(fetch).toHaveBeenCalledWith("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/en", locale: "en" }),
    });
  });

  it("renders nothing", () => {
    const { container } = render(
      <LocaleProvider locale="en">
        <Analytics />
      </LocaleProvider>,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
