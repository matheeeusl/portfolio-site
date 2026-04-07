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
    en: "For over 8 years, I have been building resilient, high-scale digital products for global markets. As a Senior Front-end Engineer, I specialize in modern JavaScript frameworks and functional programming, with a deep focus on e-commerce architecture. By combining technical precision with a strong sense of responsibility and delivery, I ensure high-quality results even in fast-paced environments.",
    "pt-BR":
      "Há mais de 8 anos construindo produtos digitais resilientes e de alta escala para mercados globais. Como Engenheiro Front-end Sênior, me especializo em frameworks JavaScript modernos e programação funcional, com foco profundo em arquitetura de e-commerce. Unindo precisão técnica a um forte senso de responsabilidade e entrega, garanto resultados de alta qualidade mesmo em ambientes dinâmicos.",
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
      en: "FullStack Labs is a global consultancy focused on providing high-performance engineering for mission-critical projects at major corporations. Within this environment, I developed complex front-end interfaces for clients such as Lighthouse and MGM Resorts in international agile teams. Focused on architecting e-commerce and financial workflows using functional programming to ensure resilient code and performance optimization.",
      "pt-BR":
        "A FullStack Labs é uma consultoria global focada em alocar engenharia de alta performance para projetos de grandes corporações. Atuando nesse ecossistema, desenvolvi interfaces front-end complexas para clientes como Lighthouse e MGM Resorts em times ágeis internacionais. Foco na arquitetura de fluxos de e-commerce e sistemas financeiros, aplicando programação funcional para garantir código resiliente e otimização de performance.",
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
      en: "Kyte is a global SaaS startup providing sales and inventory solutions to 40k+ SMBs across 180 countries. Working within a versatile and agile team, I was responsible for developing Kyte Pro web features and implementing dynamic UI components for the mobile ecosystem. Focused on delivering modular and scalable components, ensuring continuous platform evolution and enhancing the overall user experience.",
      "pt-BR":
        "A Kyte é uma startup SaaS global que provê soluções de vendas e estoque para mais de 40 mil PMEs em 180 países. Atuando em um time ágil e versátil, fui responsável pelo desenvolvimento de funcionalidades do plano Kyte Pro para web e pela implementação de componentes dinâmicos de interface para o ecossistema mobile. Foco na entrega de componentes modulares e escaláveis, garantindo a evolução contínua da plataforma e a melhoria da experiência do usuário final.",
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
      en: "McFadyen Digital is a global consultancy specialized in e-commerce and large-scale marketplace solutions. Progressing from a Java Intern to a Front-end Developer, I worked on international projects for major brands such as Zebra Technologies and the MiMercado B2B marketplace. I was responsible for developing UI components across complex ecosystems (OCC, Magento, Shopify) and building internal onboarding tools and technical challenges adopted company-wide.",
      "pt-BR":
        "A McFadyen Digital é uma consultoria global especializada em e-commerce e marketplaces de larga escala. Iniciando minha trajetória como estagiário em Java e evoluindo rapidamente para Desenvolvedor Front-end, atuei em projetos internacionais para grandes marcas como Zebra Technologies e o marketplace B2B MiMercado. Fui responsável pelo desenvolvimento de componentes de interface em ecossistemas complexos (OCC, Magento, Shopify) e pela criação de ferramentas internas de onboarding e desafios técnicos adotados em toda a companhia.",
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
      en: "High-performance portfolio architected with Next.js 16 and TypeScript. The project leverages Docker containers and was developed using AI-assisted engineering, focusing on modern CI/CD practices and a clean, responsive UI.",
      "pt-BR":
        "Portfólio de alta performance arquitetado com Next.js 16 e TypeScript. O projeto utiliza containers Docker e foi desenvolvido com auxílio de agentes de IA, focando em práticas modernas de CI/CD e uma interface limpa e responsiva.",
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
      en: "A website built as an immersive prop for a tabletop RPG oneshot. It simulates the authentic look and feel of early 2000s blogs and forums, featuring table-based layouts, GIFs, and in-character posts to add a layer of real-time interactivity and atmosphere to the game session.",
      "pt-BR":
        "Site desenvolvido como um acessório imersivo (prop) para uma sessão única (oneshot) de RPG de mesa. O projeto simula a estética autêntica de blogs e fóruns dos anos 2000, utilizando layouts de tabelas, GIFs e postagens em personagem para criar uma camada extra de interatividade e ambientação durante o jogo.",
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
      en: "Research and development in AI applied to music. A comparative study between machine learning models trained on small datasets and traditional tuners for pitch detection, exploring audio processing with Python.",
      "pt-BR":
        "Pesquisa e desenvolvimento em IA aplicada à música. Comparação entre modelos de aprendizado de máquina treinados com datasets reduzidos e afinadores tradicionais para identificação de notas musicais, explorando processamento de áudio com Python.",
    },
    technologies: ["Python", "Machine Learning", "AI", "Audio Processing"],
    githubUrl: "https://github.com/matheeeusl/reconhecimentoMusical",
    imageUrl: "/reconhecimentoMusical.jpg",
    featured: true,
  },
  {
    id: "proj-hipertension",
    title: "Hipertension",
    description: {
      en: "A full-stack blood pressure and weight tracking app with guest mode, interactive charts, and bilingual support. Features Supabase Auth, Redux Toolkit, BP category classification (ACC/AHA 2017), and static export deployment to GitHub Pages.",
      "pt-BR":
        "Aplicação full-stack de monitoramento de pressão arterial e peso com modo visitante, gráficos interativos e suporte bilíngue. Utiliza Supabase Auth, Redux Toolkit, classificação de categorias de PA (ACC/AHA 2017) e deploy estático via GitHub Pages.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Redux Toolkit",
      "Tailwind CSS",
      "shadcn/ui",
      "Recharts",
      "React Hook Form",
      "Zod",
    ],
    githubUrl: "https://github.com/matheeeusl/hipertension",
    liveUrl: "https://matheeeusl.github.io/hipertension",
    imageUrl: "/hipertension.jpg",
    featured: true,
  },
  {
    id: "proj-baluarte-terminal",
    title: "Baluarte Terminal",
    description: {
      en: "An immersive RPG terminal interface inspired by Fallout 4's RobCo terminals. Players explore a fictional facility through password-locked folders with audio logs and interactable systems. Game logic runs on a finite state machine (FSM) via useReducer, and a rogue AI — the Janitor — adds ambient unease through random screen flickers.",
      "pt-BR":
        "Interface de terminal RPG imersiva inspirada nos terminais RobCo de Fallout 4. Jogadores exploram uma instalação fictícia por meio de pastas protegidas por senha, logs de áudio e sistemas interagíveis. A lógica do jogo é gerenciada por uma máquina de estados finitos (FSM) via useReducer, e uma IA rogue — o Zelador — adiciona tensão com flickerings aleatórios na tela.",
    },
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Howler.js",
      "Storytelling",
      "Web Design",
    ],
    githubUrl: "https://github.com/matheeeusl/baluarte-terminal",
    liveUrl: "https://matheeeusl.github.io/baluarte-terminal/",
    imageUrl: "/baluarte_terminal.jpg",
    featured: true,
  },
];

export const skills: Skill[] = [
  // Frontend & Core
  { name: "React", category: "frontend", level: "expert" },
  { name: "Next.js", category: "frontend", level: "expert" },
  { name: "TypeScript", category: "frontend", level: "expert" },
  { name: "Functional Programming", category: "frontend", level: "advanced" },
  { name: "Vue.js", category: "frontend", level: "advanced" },
  { name: "Vuestorefront", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "GraphQL", category: "frontend", level: "intermediate" },
  { name: "JavaScript (ES6+)", category: "frontend", level: "expert" },
  { name: "HTML5 / CSS3 / SASS", category: "frontend", level: "expert" },
  { name: "React Native", category: "frontend", level: "advanced" },

  // Backend & Data
  { name: "Node.js", category: "backend", level: "advanced" },
  { name: "PostgreSQL", category: "backend", level: "intermediate" },
  { name: "Prisma", category: "backend", level: "intermediate" },
  { name: "REST APIs", category: "backend", level: "advanced" },
  { name: "Microservices", category: "backend", level: "intermediate" },

  // E-commerce & Platforms
  { name: "Oracle Commerce Cloud", category: "ecommerce", level: "advanced" },
  { name: "Shopify (Liquid)", category: "ecommerce", level: "advanced" },
  { name: "Magento", category: "ecommerce", level: "intermediate" },
  { name: "Storybook", category: "ecommerce", level: "advanced" },

  // DevOps & Leadership
  { name: "Docker", category: "devops", level: "intermediate" },
  { name: "Git", category: "devops", level: "advanced" },
  { name: "Automated Testing", category: "devops", level: "advanced" },
  { name: "Mentoring", category: "devops", level: "advanced" },
  { name: "Agile (Scrum/Kanban)", category: "devops", level: "advanced" },
  {
    name: "AI-Assisted Development",
    category: "devops",
    level: "intermediate",
  },
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
    startDate: "2018-01",
    endDate: null,
    description: {
      en: "Perform in a collaborative orchestra environment, requiring teamwork, discipline, and consistency during live events, while contributing to meaningful moments through music in my community.",
      "pt-BR":
        "Atuo em um ambiente de orquestra colaborativo, que exige trabalho em equipe, disciplina e consistência em apresentações ao vivo, contribuindo para momentos significativos através da música na minha comunidade.",
    },
  },
  {
    id: "vol-muaythai",
    organization: {
      en: "Muay Thai (Chute Boxe)",
      "pt-BR": "Muay Thai (Chute Boxe)",
    },
    role: {
      en: "Dedicated Practitioner",
      "pt-BR": "Praticante Dedicado",
    },
    startDate: "2022-01",
    endDate: null,
    description: {
      en: "Strengthening discipline and resilience through consistent training at the world-renowned Chute Boxe academy. A hobby that demands focus, regularity, and mastering fundamentals under pressure—high-performance principles I apply daily in software engineering to ensure consistent, high-quality delivery.",
      "pt-BR":
        "Fortalecimento da disciplina e resiliência através do treino constante na Chute Boxe. Um hobby que exige foco, regularidade e o domínio de fundamentos sob pressão — princípios de alta performance que aplico na engenharia de software para garantir entregas consistentes e de alta qualidade.",
    },
  },
  {
    id: "vol-rpg",
    organization: {
      en: "Tabletop RPG Community",
      "pt-BR": "Comunidade de RPG de Mesa",
    },
    role: {
      en: "Player & Worldbuilder",
      "pt-BR": "Jogador e Construtor de Mundos",
    },
    startDate: "2012-01",
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
    institution: {
      en: "Federal University of Santa Catarina (UFSC)",
      "pt-BR": "UFSC (Univ. Federal de Santa Catarina)",
    },
    degree: {
      en: "Bachelor of Information Systems",
      "pt-BR": "Bacharelado em Sistemas de Informação",
    },
    startYear: 2015,
    endYear: 2022,
    location: "Florianópolis, Brazil",
    description: {
      en: "Solid foundation in computer science fundamentals, algorithms, and software engineering at one of Brazil's leading technical universities.",
      "pt-BR":
        "Formação sólida em fundamentos de computação, algoritmos e engenharia de software em uma das principais referências técnicas do país.",
    },
  },
  {
    id: "edu-senai",
    institution: { en: "SENAI", "pt-BR": "SENAI" },
    degree: {
      en: "Web Developer",
      "pt-BR": "Programador Web",
    },
    startYear: 2012,
    endYear: 2014,
    location: "Tubarão, Brazil",
    description: {
      en: "Early technical foundation focused on web development and programming logic.",
      "pt-BR":
        "Base técnica inicial focada em desenvolvimento web e lógica de programação.",
    },
  },
];
