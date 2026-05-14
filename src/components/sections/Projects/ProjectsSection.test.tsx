import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import type { Project } from "@/types";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import en from "@/i18n/en/common.json";
import ptBR from "@/i18n/pt-BR/common.json";
import { ProjectsSection } from "./ProjectsSection";

const mockProjects = vi.hoisted((): Project[] => [
  {
    id: "mock-proj-with-image",
    title: "Mock Project Alpha",
    description: {
      en: "Alpha English description",
      "pt-BR": "Descrição alfa em português",
    },
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/mock/alpha",
    liveUrl: "https://alpha.example.com",
    imageUrl: "/alpha.jpg",
    featured: true,
    wip: true,
  },
  {
    id: "mock-proj-without-image",
    title: "Mock Project Beta",
    description: {
      en: "Beta English description",
      "pt-BR": "Descrição beta em português",
    },
    technologies: ["Vue", "JavaScript"],
    githubUrl: "https://github.com/mock/beta",
    featured: false,
  },
]);

vi.mock("@/data/resume", () => ({
  projects: mockProjects,
}));

function renderWithLocale(locale: "en" | "pt-BR") {
  return render(
    <LocaleProvider locale={locale}>
      <ProjectsSection />
    </LocaleProvider>,
  );
}

describe("ProjectsSection", () => {
  describe("section title", () => {
    it("renders the section title in English", () => {
      renderWithLocale("en");

      expect(screen.getByText(en.sections.projects)).toBeInTheDocument();
    });

    it("renders the section title in Portuguese", () => {
      renderWithLocale("pt-BR");

      expect(screen.getByText(ptBR.sections.projects)).toBeInTheDocument();
    });
  });

  describe("project cards", () => {
    it("renders all project titles", () => {
      renderWithLocale("en");

      for (const project of mockProjects) {
        expect(screen.getByText(project.title)).toBeInTheDocument();
      }
    });

    it("renders all project descriptions in English", () => {
      renderWithLocale("en");

      for (const project of mockProjects) {
        expect(screen.getByText(project.description.en)).toBeInTheDocument();
      }
    });

    it("renders all project descriptions in Portuguese", () => {
      renderWithLocale("pt-BR");

      for (const project of mockProjects) {
        expect(
          screen.getByText(project.description["pt-BR"]),
        ).toBeInTheDocument();
      }
    });

    it("renders a GitHub link for each project", () => {
      renderWithLocale("en");

      const githubLinks = screen.getAllByRole("link", {
        name: new RegExp(en.projects.viewCode, "i"),
      });

      expect(githubLinks).toHaveLength(mockProjects.length);
    });

    it("each GitHub link points to the correct URL", () => {
      renderWithLocale("en");

      const githubLinks = screen.getAllByRole("link", {
        name: new RegExp(en.projects.viewCode, "i"),
      });

      githubLinks.forEach((link, index) => {
        expect(link).toHaveAttribute("href", mockProjects[index].githubUrl);
      });
    });

    it("renders a live link only for projects that have one", () => {
      renderWithLocale("en");

      const projectsWithLive = mockProjects.filter((p) => p.liveUrl);

      const liveLinks = screen.getAllByRole("link", {
        name: new RegExp(en.projects.viewLive, "i"),
      });

      expect(liveLinks).toHaveLength(projectsWithLive.length);
    });

    it("each live link points to the correct URL", () => {
      renderWithLocale("en");

      const projectsWithLive = mockProjects.filter((p) => p.liveUrl);

      const liveLinks = screen.getAllByRole("link", {
        name: new RegExp(en.projects.viewLive, "i"),
      });

      liveLinks.forEach((link, index) => {
        expect(link).toHaveAttribute("href", projectsWithLive[index].liveUrl);
      });
    });

    it("renders all technology tags for each project", () => {
      renderWithLocale("en");

      for (const project of mockProjects) {
        for (const tech of project.technologies) {
          expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
        }
      }
    });
  });

  describe("project images", () => {
    it("renders an img for projects that have imageUrl", () => {
      renderWithLocale("en");

      const projectsWithImage = mockProjects.filter((p) => p.imageUrl);
      const images = screen.getAllByRole("img");

      expect(images.length).toBeGreaterThanOrEqual(projectsWithImage.length);
    });

    it("renders a fallback placeholder for projects without imageUrl", () => {
      renderWithLocale("en");

      const projectsWithoutImage = mockProjects.filter((p) => !p.imageUrl);
      const fallbacks = screen.getAllByTestId("project-image-fallback");

      expect(fallbacks).toHaveLength(projectsWithoutImage.length);
    });
  });

  describe("WIP badge", () => {
    it("renders a WIP badge for projects with wip: true", () => {
      renderWithLocale("en");

      const wipProject = mockProjects.find((p) => p.wip);
      const wipBadges = screen.getAllByText(en.projects.wip);

      expect(wipBadges.length).toBeGreaterThan(0);
      expect(wipProject).toBeDefined();
    });

    it("does not render a WIP badge for projects without wip flag", () => {
      renderWithLocale("en");

      const nonWipProject = mockProjects.find((p) => !p.wip)!;
      const cards = screen.getAllByRole("article");
      const nonWipCard = cards.find((card) =>
        within(card).queryByText(nonWipProject.title),
      )!;

      expect(within(nonWipCard).queryByText(en.projects.wip)).not.toBeInTheDocument();
    });

    it("renders WIP badge in Portuguese", () => {
      renderWithLocale("pt-BR");

      const wipBadges = screen.getAllByText(ptBR.projects.wip);
      expect(wipBadges.length).toBeGreaterThan(0);
    });

    it("shows WIP badge in the modal header for wip projects", async () => {
      const user = userEvent.setup();
      renderWithLocale("en");

      const wipProject = mockProjects.find((p) => p.wip)!;
      await user.click(
        screen.getByTestId(`description-toggle-${wipProject.id}`),
      );

      const modal = screen.getByRole("dialog");
      expect(within(modal).getByText(en.projects.wip)).toBeInTheDocument();
    });
  });

  describe("description modal", () => {
    it("opens a modal with the full description when clicking the description area", async () => {
      const user = userEvent.setup();
      renderWithLocale("en");

      const firstProject = mockProjects[0];
      const descriptionButton = screen.getByTestId(
        `description-toggle-${firstProject.id}`,
      );

      await user.click(descriptionButton);

      const modal = screen.getByRole("dialog");
      expect(modal).toBeInTheDocument();
      expect(
        within(modal).getByText(firstProject.description.en),
      ).toBeInTheDocument();
    });

    it("closes the modal when clicking the close button", async () => {
      const user = userEvent.setup();
      renderWithLocale("en");

      const firstProject = mockProjects[0];
      const descriptionButton = screen.getByTestId(
        `description-toggle-${firstProject.id}`,
      );

      await user.click(descriptionButton);
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      const closeButton = screen.getByRole("button", {
        name: en.projects.close,
      });
      await user.click(closeButton);

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("closes the modal when clicking the backdrop", async () => {
      const user = userEvent.setup();
      renderWithLocale("en");

      const firstProject = mockProjects[0];
      await user.click(
        screen.getByTestId(`description-toggle-${firstProject.id}`),
      );
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      await user.click(screen.getByTestId("modal-backdrop"));

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("shows the project title in the modal header", async () => {
      const user = userEvent.setup();
      renderWithLocale("en");

      const firstProject = mockProjects[0];
      await user.click(
        screen.getByTestId(`description-toggle-${firstProject.id}`),
      );

      const modal = screen.getByRole("dialog");
      expect(within(modal).getByText(firstProject.title)).toBeInTheDocument();
    });
  });
});
