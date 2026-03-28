export type Locale = "en" | "pt-BR";

export interface LocalizedString {
  en: string;
  "pt-BR": string;
}

export interface PersonalInfo {
  name: string;
  title: LocalizedString;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  bio: LocalizedString;
}

export interface Experience {
  id: string;
  company: string;
  role: LocalizedString;
  startDate: string;
  endDate: string | null;
  description: LocalizedString;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: LocalizedString;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
}

export interface Education {
  id: string;
  institution: string;
  degree: LocalizedString;
  startYear: number;
  endYear: number;
  location: string;
}

export type SkillCategory = "frontend" | "backend" | "tools" | "languages";

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";
