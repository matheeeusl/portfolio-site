import type { PersonalInfo, Experience, Project, Skill } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Matheus",
  title: {
    en: "Frontend Developer",
    "pt-BR": "Desenvolvedor Frontend",
  },
  location: "Brazil",
  email: "matheuslaureanol1@gmail.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  bio: {
    en: "Frontend developer passionate about building modern web experiences.",
    "pt-BR":
      "Desenvolvedor frontend apaixonado por criar experiências web modernas.",
  },
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Company Name",
    role: {
      en: "Frontend Developer",
      "pt-BR": "Desenvolvedor Frontend",
    },
    startDate: "2023-01",
    endDate: null,
    description: {
      en: "Building modern web applications with React and TypeScript.",
      "pt-BR": "Construindo aplicações web modernas com React e TypeScript.",
    },
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Portfolio Site",
    description: {
      en: "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS inside a Docker AI Jail.",
      "pt-BR":
        "Portfólio pessoal construído com Next.js, TypeScript e Tailwind CSS dentro de um Docker AI Jail.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Docker"],
    githubUrl: "https://github.com/your-username/portfolio-site",
    featured: true,
  },
];

export const skills: Skill[] = [
  { name: "React", category: "frontend", level: "advanced" },
  { name: "TypeScript", category: "frontend", level: "advanced" },
  { name: "Next.js", category: "frontend", level: "intermediate" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "Node.js", category: "backend", level: "intermediate" },
  { name: "Docker", category: "tools", level: "beginner" },
  { name: "Git", category: "tools", level: "advanced" },
];
