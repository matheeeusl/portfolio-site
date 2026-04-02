import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useScrollReveal } from "./useScrollReveal";

let triggerIntersection: (isIntersecting: boolean) => void;

class MockIntersectionObserver {
  private cb: IntersectionObserverCallback;
  static lastInstance: MockIntersectionObserver;
  static constructorOptions: IntersectionObserverInit | undefined;
  disconnect = vi.fn();

  constructor(cb: IntersectionObserverCallback, options?: IntersectionObserverInit) {
    this.cb = cb;
    MockIntersectionObserver.constructorOptions = options;
    MockIntersectionObserver.lastInstance = this;
  }

  observe(el: Element) {
    triggerIntersection = (isIntersecting: boolean) =>
      this.cb(
        [{ isIntersecting, target: el } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      );
  }
}

function stubMatchMedia(prefersReduced: boolean) {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    configurable: true,
    value: (query: string) => ({
      matches: prefersReduced && query.includes("prefers-reduced-motion"),
    }),
  });
}

describe("useScrollReveal", () => {
  beforeEach(() => {
    stubMatchMedia(false);
    window.IntersectionObserver =
      MockIntersectionObserver as unknown as typeof IntersectionObserver;
  });

  afterEach(() => {
    vi.restoreAllMocks();
    // Restore the no-op stub from setup.ts
    window.IntersectionObserver = class {
      observe() {}
      disconnect() {}
    } as unknown as typeof IntersectionObserver;
  });

  describe("initial state", () => {
    it("starts with opacity-0 and translate-y-4 className", () => {
      const { result } = renderHook(() => useScrollReveal());

      expect(result.current.className).toContain("opacity-0");
      expect(result.current.className).toContain("translate-y-4");
    });
  });

  describe("after intersection", () => {
    it("applies opacity-100, translate-y-0, and transition classes when visible", () => {
      const el = document.createElement("div");
      const { result } = renderHook(() => useScrollReveal());

      act(() => result.current.ref(el));
      act(() => triggerIntersection(true));

      expect(result.current.className).toContain("opacity-100");
      expect(result.current.className).toContain("translate-y-0");
      expect(result.current.className).toContain("transition-[opacity,transform]");
    });

    it("calls disconnect after first intersection", () => {
      const el = document.createElement("div");
      const { result } = renderHook(() => useScrollReveal());

      act(() => result.current.ref(el));
      act(() => triggerIntersection(true));

      expect(MockIntersectionObserver.lastInstance.disconnect).toHaveBeenCalledOnce();
    });

    it("does not change className when isIntersecting is false", () => {
      const el = document.createElement("div");
      const { result } = renderHook(() => useScrollReveal());

      act(() => result.current.ref(el));
      act(() => triggerIntersection(false));

      expect(result.current.className).toContain("opacity-0");
    });
  });

  describe("delay option", () => {
    it("returns transitionDelay in style when delay > 0", () => {
      const el = document.createElement("div");
      const { result } = renderHook(() => useScrollReveal({ delay: 200 }));

      act(() => result.current.ref(el));
      act(() => triggerIntersection(true));

      expect(result.current.style).toEqual({ transitionDelay: "200ms" });
    });

    it("returns empty style object when delay is 0", () => {
      const el = document.createElement("div");
      const { result } = renderHook(() => useScrollReveal());

      act(() => result.current.ref(el));
      act(() => triggerIntersection(true));

      expect(result.current.style).toEqual({});
    });
  });

  describe("threshold option", () => {
    it("passes threshold to IntersectionObserver constructor", () => {
      const el = document.createElement("div");
      const { result } = renderHook(() => useScrollReveal({ threshold: 0.5 }));

      act(() => result.current.ref(el));

      expect(MockIntersectionObserver.constructorOptions?.threshold).toBe(0.5);
    });
  });

  describe("ref callback edge case", () => {
    it("does not throw and does not call observe when ref receives null", () => {
      const observeSpy = vi.spyOn(MockIntersectionObserver.prototype, "observe");
      const { result } = renderHook(() => useScrollReveal());

      expect(() => act(() => result.current.ref(null))).not.toThrow();
      expect(observeSpy).not.toHaveBeenCalled();
    });
  });

  describe("prefers-reduced-motion", () => {
    beforeEach(() => stubMatchMedia(true));
    afterEach(() => stubMatchMedia(false));

    it("returns empty className when reduced motion is preferred", () => {
      const { result } = renderHook(() => useScrollReveal());

      expect(result.current.className).toBe("");
    });

    it("does not include opacity-0 when reduced motion is preferred", () => {
      const { result } = renderHook(() => useScrollReveal());

      expect(result.current.className).not.toContain("opacity-0");
    });

    it("returns empty style when reduced motion is preferred", () => {
      const { result } = renderHook(() => useScrollReveal({ delay: 300 }));

      expect(result.current.style).toEqual({});
    });

    it("does not create an IntersectionObserver when reduced motion is preferred", () => {
      const observeSpy = vi.spyOn(MockIntersectionObserver.prototype, "observe");
      const el = document.createElement("div");
      const { result } = renderHook(() => useScrollReveal());

      act(() => result.current.ref(el));

      expect(observeSpy).not.toHaveBeenCalled();
    });
  });
});
