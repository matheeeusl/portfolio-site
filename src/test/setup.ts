import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => "/en",
}));

// jsdom doesn't implement IntersectionObserver — provide a no-op stub
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: class {
    observe() {}
    disconnect() {}
  },
});
