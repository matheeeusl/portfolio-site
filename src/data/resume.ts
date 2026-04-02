import type {
  PersonalInfo,
  Experience,
  Project,
  Skill,
  Education,
  Volunteer,
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
    en: "Front-end Engineer with over 8 years of experience building scalable web and mobile applications for global companies. Specialized in modern JavaScript frameworks, functional programming, and e-commerce platforms. Known for fast adaptation, ownership of delivery, and consistent positive feedback from clients.",
    "pt-BR":
      "Engenheiro Front-end com mais de 8 anos de experiência construindo aplicações web e mobile escaláveis para empresas globais. Especializado em frameworks JavaScript modernos, programação funcional e plataformas de e-commerce. Reconhecido pela rápida adaptação, senso de ownership e feedbacks positivos consistentes de clientes.",
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
      en: "Software consultancy providing top-tier engineering talent for diverse client projects. Developed complex front-end solutions for major clients (Lighthouse, MGM Resorts) in international agile teams (3-5 devs). Built user-friendly mortgage forms and e-commerce features (entertainment packages, shopping cart) adopting functional programming. Successfully delivered features with improved performance and consistent positive client feedback.",
      "pt-BR":
        "Consultoria de software que provê talentos de engenharia para projetos de grandes clientes. Desenvolveu soluções front-end complexas para clientes como Lighthouse e MGM Resorts em times ágeis internacionais (3-5 devs). Construiu formulários de hipoteca e features de e-commerce (pacotes de entretenimento, carrinho) adotando programação funcional. Entregou funcionalidades com melhoria de performance e feedbacks positivos consistentes.",
    },
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Tailwind CSS",
      "Storybook",
      "Docker",
      "Functional Programming",
      "Automated Testing",
      "JavaScript",
      "MVC",
      "HTML5",
    ],
    projects: [
      {
        name: "Lighthouse",
        description: {
          en: "Mortgage platform — built complex form flows and UI components in a large-scale React codebase.",
          "pt-BR":
            "Plataforma de hipotecas — formulários complexos e componentes UI em codebase React de grande escala.",
        },
      },
      {
        name: "MGM Resorts",
        description: {
          en: "Entertainment & hospitality platform — developed e-commerce features (packages, shopping cart) in an international agile team.",
          "pt-BR":
            "Plataforma de entretenimento e hospitalidade — funcionalidades de e-commerce em equipe ágil internacional.",
        },
      },
    ],
  },
  {
    id: "exp-kyte",
    company: "Kyte",
    role: {
      en: "Front-end Developer",
      "pt-BR": "Desenvolvedor Front-end",
    },
    startDate: "2021-06",
    endDate: "2021-11",
    description: {
      en: "A global SaaS startup offering sales & inventory solutions to 40k+ SMBs across 180+ countries. Contributed to platform development within a versatile startup team (~6 devs). Assisted in developing Pro plan web features and mobile app banners, delivering essential components for new features and mobile updates.",
      "pt-BR":
        "Startup SaaS global oferecendo soluções de vendas e estoque para mais de 40 mil PMEs em 180+ países. Contribuiu para o desenvolvimento da plataforma em um time de startup versátil (~6 devs). Auxiliou no desenvolvimento de features web do plano Pro e banners do app mobile, entregando componentes essenciais para novas funcionalidades.",
    },
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Storybook",
      "JavaScript",
      "Automated Testing",
      "LESS",
      "CSS",
    ],
    projects: [
      {
        name: "Kyte Platform",
        description: {
          en: "Web and mobile SaaS for 40k+ SMBs — contributed to Pro plan features and mobile app improvements.",
          "pt-BR":
            "SaaS web e mobile para 40k+ PMEs — contribuiu com funcionalidades do plano Pro e melhorias no app mobile.",
        },
      },
    ],
  },
  {
    id: "exp-mcfadyen",
    company: "McFadyen Digital",
    role: {
      en: "Front-end Developer",
      "pt-BR": "Desenvolvedor Front-end",
    },
    startDate: "2016-12",
    endDate: "2021-06",
    description: {
      en: "Specialized e-commerce consultancy implementing large-scale solutions for global clients on platforms like OCC, Shopify, ATG, and Magento. Progressed from Java Intern to Front-end Developer, working in international teams (3-5 devs). Developed key UI components for MiMercado B2B marketplace and Zebra's OCC platform. Built internal onboarding tools and technical challenges adopted company-wide.",
      "pt-BR":
        "Consultoria especializada em e-commerce implementando soluções de grande escala para clientes globais em plataformas como OCC, Shopify, ATG e Magento. Evoluiu de Estagiário Java para Desenvolvedor Front-end, atuando em times internacionais (3-5 devs). Desenvolveu componentes de UI para o marketplace B2B MiMercado e a plataforma OCC da Zebra. Construiu ferramentas de onboarding internas adotadas pela empresa.",
    },
    technologies: [
      "React",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "SASS",
      "Storybook",
      "Automated Testing",
      "Docker",
      "MVC",
      "MVVM",
      "Microservices",
      "Mentoring",
      "Vuestorefront",
      "Shopify (Liquid)",
      "Magento",
      "OCC",
    ],
    projects: [
      {
        name: "MiMercado",
        description: {
          en: "E-commerce storefront on Oracle Commerce Cloud (OCC) for Latin American market.",
          "pt-BR":
            "Storefront de e-commerce em Oracle Commerce Cloud (OCC) para mercado latino-americano.",
        },
      },
      {
        name: "Zebra Technologies",
        description: {
          en: "B2B e-commerce portal on OCC — complex product catalog and ordering flows.",
          "pt-BR":
            "Portal B2B de e-commerce em OCC — catálogo de produtos complexo e fluxos de pedido.",
        },
      },
      {
        name: "Shopify & Magento Projects",
        description: {
          en: "Multiple client storefronts using Shopify Liquid and Magento — customizations, theming, and feature development.",
          "pt-BR":
            "Múltiplos storefronts em Shopify Liquid e Magento — customizações, temas e desenvolvimento de features.",
        },
      },
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
    imageUrl: "/beyondtheveil2k.jpg",
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
    imageUrl: "/reconhecimentoMusical.jpg",
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
  { name: "Functional Programming", category: "frontend", level: "advanced" },
  { name: "Vuestorefront", category: "frontend", level: "intermediate" },

  // Backend
  { name: "Node.js", category: "backend", level: "intermediate" },
  { name: "PostgreSQL", category: "backend", level: "beginner" },
  { name: "Prisma", category: "backend", level: "beginner" },

  // Tools
  { name: "Docker", category: "tools", level: "intermediate" },
  { name: "Git", category: "tools", level: "advanced" },
  { name: "Automated Testing", category: "tools", level: "advanced" },
  { name: "AI-Assisted Development", category: "tools", level: "intermediate" },
  { name: "Mentoring", category: "tools", level: "intermediate" },
  { name: "Shopify (Liquid)", category: "tools", level: "intermediate" },
  { name: "Magento", category: "tools", level: "intermediate" },
  { name: "Oracle Commerce Cloud", category: "tools", level: "intermediate" },

  // Languages
  { name: "JavaScript", category: "languages", level: "expert" },
  { name: "HTML5", category: "languages", level: "expert" },
  { name: "CSS3/SASS/LESS", category: "languages", level: "expert" },
];

export const volunteers: Volunteer[] = [
  {
    id: "vol-trumpet",
    organization: { en: "Community Church", "pt-BR": "Igreja" },
    role: {
      en: "Trumpet Teacher",
      "pt-BR": "Professor de Trompete",
    },
    startDate: "2023-01",
    endDate: null,
    description: {
      en: "Teach and mentor students of different skill levels, developing communication, patience, and leadership skills, while sharing my passion for music in a community I deeply care about.",
      "pt-BR":
        "Ensino e oriento alunos de diferentes níveis, desenvolvendo comunicação, paciência e liderança, enquanto compartilho minha paixão pela música em uma comunidade que é muito importante para mim.",
    },
  },
  {
    id: "vol-orchestra",
    organization: { en: "Community Church", "pt-BR": "Igreja" },
    role: {
      en: "Orchestra Musician",
      "pt-BR": "Músico de Orquestra",
    },
    startDate: "2023-01",
    endDate: null,
    description: {
      en: "Perform in a collaborative orchestra environment, requiring teamwork, discipline, and consistency during live events, while contributing to meaningful moments through music in my community.",
      "pt-BR":
        "Atuo em um ambiente de orquestra colaborativo, que exige trabalho em equipe, disciplina e consistência em apresentações ao vivo, contribuindo para momentos significativos através da música na minha comunidade.",
    },
  },
  {
    id: "vol-rpg",
    organization: { en: "Tabletop RPG Community", "pt-BR": "Comunidade de RPG de Mesa" },
    role: {
      en: "Player & Worldbuilder",
      "pt-BR": "Jogador e Construtor de Mundos",
    },
    startDate: "2018-01",
    endDate: null,
    description: {
      en: "Collaborate in storytelling and worldbuilding, strengthening creativity, problem-solving, and real-time decision-making, while engaging in a hobby I genuinely enjoy and value.",
      "pt-BR":
        "Colaboro em narrativas e construção de mundos, desenvolvendo criatividade, resolução de problemas e tomada de decisão em tempo real, em uma atividade que eu realmente gosto e valorizo.",
    },
  },
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
    institution: "National Industrial Apprenticeship Service - SENAI",
    degree: {
      en: "Web Developer",
      "pt-BR": "Desenvolvedor Web",
    },
    startYear: 2012,
    endYear: 2014,
    location: "Tubarão, Brazil",
  },
];
