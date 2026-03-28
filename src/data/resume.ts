import type {
  PersonalInfo,
  Experience,
  Project,
  Skill,
  Education,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Matheus Laureano",
  title: {
    en: "Software Engineer",
    "pt-BR": "Engenheiro de Software",
  },
  location: "Florianópolis, SC - Brazil",
  email: "matheuslaureanol1@gmail.com",
  github: "https://github.com/matheeeusl",
  linkedin: "https://www.linkedin.com/in/matheus-laureano-02876453/",
  bio: {
    en: "Frontend Engineer with 8+ years of experience building scalable web and mobile applications for global companies. Specialized in modern JavaScript frameworks, functional programming, and e-commerce platforms.",
    "pt-BR":
      "Engenheiro Frontend com mais de 8 anos de experiência construindo aplicações web e mobile escaláveis para empresas globais. Especializado em frameworks JavaScript modernos, programação funcional e plataformas de e-commerce.",
  },
};

export const experiences: Experience[] = [
  {
    id: "exp-fullstacklabs",
    company: "FullStack Labs",
    role: {
      en: "Software Engineer",
      "pt-BR": "Engenheiro de Software",
    },
    startDate: "2021-11",
    endDate: null,
    description: {
      en: "Developing complex frontend solutions for major clients (Lighthouse, MGM Resorts) in international agile teams. Building mortgage forms, e-commerce features, and adopting functional programming at scale.",
      "pt-BR":
        "Desenvolvendo soluções frontend complexas para grandes clientes (Lighthouse, MGM Resorts) em times ágeis internacionais. Construindo formulários de hipoteca, features de e-commerce e adotando programação funcional em escala.",
    },
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "GraphQL",
      "Tailwind CSS",
      "Storybook",
      "Docker",
    ],
  },
  {
    id: "exp-kyte",
    company: "Kyte",
    role: {
      en: "Frontend Developer",
      "pt-BR": "Desenvolvedor Frontend",
    },
    startDate: "2021-06",
    endDate: "2021-11",
    description: {
      en: "Contributed to a global SaaS platform serving 40k+ SMBs across 180+ countries. Developed Pro plan web features and mobile app updates with React and React Native.",
      "pt-BR":
        "Contribuí para uma plataforma SaaS global atendendo mais de 40 mil PMEs em 180+ países. Desenvolvi features web do plano Pro e atualizações do app mobile com React e React Native.",
    },
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Storybook",
      "JavaScript",
    ],
  },
  {
    id: "exp-mcfadyen",
    company: "McFadyen Digital",
    role: {
      en: "Frontend Developer",
      "pt-BR": "Desenvolvedor Frontend",
    },
    startDate: "2016-12",
    endDate: "2021-06",
    description: {
      en: "Progressed from Java Intern to Frontend Developer at an e-commerce consultancy. Built UI components for MiMercado B2B marketplace and Zebra's OCC platform. Created internal onboarding tools adopted company-wide.",
      "pt-BR":
        "Evoluí de Estagiário Java para Desenvolvedor Frontend em uma consultoria de e-commerce. Construí componentes de UI para o marketplace B2B MiMercado e a plataforma OCC da Zebra. Criei ferramentas internas de onboarding adotadas pela empresa.",
    },
    technologies: [
      "React",
      "Vue.js",
      "TypeScript",
      "SASS",
      "Shopify",
      "Magento",
      "OCC",
      "Docker",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "proj-portfolio",
    title: "Portfolio Site",
    description: {
      en: "Personal portfolio built with Next.js 16, TypeScript, and Tailwind CSS inside a Docker AI Jail with Claude Code.",
      "pt-BR":
        "Portfólio pessoal construído com Next.js 16, TypeScript e Tailwind CSS dentro de um Docker AI Jail com Claude Code.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Docker",
    ],
    githubUrl: "https://github.com/matheeeusl/portfolio-site",
    featured: true,
  },
  {
    id: "proj-early-2000",
    title: "Beyond The Veil 2k!",
    description: {
      en: "A website simulating an early 2000s blog/forum, built as a prop for a tabletop RPG oneshot. Features authentic era aesthetics with GIFs, table layouts, and in-character forum posts.",
      "pt-BR":
        "Um site simulando um blog/fórum dos anos 2000, construído como cenário para uma oneshot de RPG de mesa. Possui estética autêntica da era com GIFs, layouts tabelados e posts de fórum em personagem.",
    },
    technologies: ["Next.js", "CSS", "Storytelling", "Web Design"],
    githubUrl: "https://github.com/matheeeusl",
    liveUrl: "https://early-two-thousand.vercel.app",
    featured: true,
  },
  {
    id: "proj-musical-recognition",
    title: "Musical Recognition AI",
    description: {
      en: "Bachelor's thesis experiment comparing an AI model trained with limited data against a traditional tuner for musical note identification.",
      "pt-BR":
        "Experimento de TCC comparando um modelo de IA treinado com poucos dados contra um afinador tradicional para identificação de notas musicais.",
    },
    technologies: ["Python", "Machine Learning", "AI", "Audio Processing"],
    githubUrl: "https://github.com/matheeeusl/reconhecimentoMusical",
    featured: true,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: "expert" },
  { name: "React Native", category: "frontend", level: "advanced" },
  { name: "Next.js", category: "frontend", level: "advanced" },
  { name: "TypeScript", category: "frontend", level: "expert" },
  { name: "Vue.js", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "GraphQL", category: "frontend", level: "intermediate" },
  { name: "Storybook", category: "frontend", level: "advanced" },

  // Backend
  { name: "Node.js", category: "backend", level: "intermediate" },
  { name: "PostgreSQL", category: "backend", level: "beginner" },
  { name: "Prisma", category: "backend", level: "beginner" },

  // Tools
  { name: "Docker", category: "tools", level: "intermediate" },
  { name: "Git", category: "tools", level: "advanced" },
  { name: "Automated Testing", category: "tools", level: "advanced" },

  // AI
  { name: "AI-Assisted Development", category: "tools", level: "beginner" },

  // Languages
  { name: "JavaScript", category: "languages", level: "expert" },
  { name: "HTML5", category: "languages", level: "expert" },
  { name: "CSS3/SASS/LESS", category: "languages", level: "expert" },
];

export const education: Education[] = [
  {
    id: "edu-ufsc",
    institution: "Federal University of Santa Catarina (UFSC)",
    degree: {
      en: "Bachelor of Information Systems",
      "pt-BR": "Bacharelado em Sistemas de Informação",
    },
    startYear: 2015,
    endYear: 2022,
    location: "Florianópolis, Brazil",
  },
  {
    id: "edu-senai",
    institution: "SENAI",
    degree: {
      en: "Web Developer",
      "pt-BR": "Desenvolvedor Web",
    },
    startYear: 2012,
    endYear: 2014,
    location: "Tubarão, Brazil",
  },
];
