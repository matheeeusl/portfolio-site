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
    en: "For over 8 years, I've been building scalable web and mobile applications for international clients across e-commerce, fintech, and SaaS. As a Senior Front-end Engineer, I specialize in React, TypeScript, and Next.js, with a strong background in functional programming and large-scale architecture. I thrive in US-led nearshore teams, consistently delivering high-quality features and positive client outcomes — from B2B marketplace platforms to enterprise entertainment products.",
    "pt-BR":
      "Há mais de 8 anos construindo aplicações web e mobile escaláveis para clientes internacionais nos setores de e-commerce, fintech e SaaS. Como Engenheiro Front-end Sênior, me especializo em React, TypeScript e Next.js, com sólida experiência em programação funcional e arquitetura de grande escala. Tenho forte atuação em times nearshore com liderança norte-americana, entregando consistentemente features de alta qualidade e resultados positivos para clientes — de plataformas de marketplace B2B a produtos de entretenimento enterprise.",
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
      en: "FullStack is a US-led nearshore software consultancy delivering vetted engineering talent to enterprise clients across the Americas. Within international agile teams of 3–7 engineers, I built complex front-end solutions for MGM Resorts (entertainment e-commerce: packages, shopping cart) and Lighthouse (mortgage application flows), working directly with US-based stakeholders. Applied functional programming patterns to deliver resilient, high-performance React and TypeScript codebases at scale.",
      "pt-BR":
        "A FullStack é uma consultoria nearshore com liderança norte-americana que disponibiliza talentos de engenharia selecionados para clientes enterprise nas Américas. Em times ágeis internacionais de 3 a 7 engenheiros, desenvolvi soluções front-end complexas para MGM Resorts (e-commerce de entretenimento: pacotes, carrinho de compras) e Lighthouse (fluxos de aplicação de hipotecas), trabalhando diretamente com stakeholders baseados nos EUA. Apliquei padrões de programação funcional para entregar codebases React e TypeScript resilientes e de alta performance em escala.",
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
      en: "Kyte is a POS and inventory SaaS platform used by 40k+ SMBs across 180+ countries, with integrated web, mobile, and in-person sales channels. Within a fast-paced startup team of ~6 engineers, I developed Pro plan web features and cross-platform mobile experiences in React Native, shipping modular, scalable UI components across both surfaces.",
      "pt-BR":
        "A Kyte é uma plataforma SaaS de PDV e estoque utilizada por mais de 40 mil PMEs em mais de 180 países, com canais de vendas integrados — web, mobile e presencial. Em um time de startup ágil de ~6 engenheiros, desenvolvi funcionalidades web do plano Pro e experiências mobile multiplataforma em React Native, entregando componentes de UI modulares e escaláveis em ambas as superfícies.",
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
      en: "McFadyen Digital is a specialized B2B e-commerce consultancy focused on marketplace enablement and complex digital commerce for global enterprise clients. Progressing from Java Intern to Front-end Developer over 4+ years, I delivered UI components across enterprise ecosystems — including Zebra Technologies' Oracle Commerce Cloud platform and the MiMercado B2B marketplace — in international agile teams. Also built internal onboarding tools and technical challenges that were adopted company-wide, accelerating engineering ramp-up across teams.",
      "pt-BR":
        "A McFadyen Digital é uma consultoria B2B de e-commerce especializada em habilitação de marketplaces e comércio digital complexo para clientes enterprise globais. Progredindo de Estagiário Java a Desenvolvedor Front-end ao longo de 4+ anos, entreguei componentes de UI em ecossistemas enterprise — incluindo a plataforma Oracle Commerce Cloud da Zebra Technologies e o marketplace B2B MiMercado — em times ágeis internacionais. Também desenvolvi ferramentas internas de onboarding e desafios técnicos que foram adotados em toda a empresa, acelerando o ramp-up de engenharia entre os times.",
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
      en: "Personal portfolio built with Next.js 16, TypeScript strict mode, and Tailwind CSS 4. Developed as a 7-day AI-assisted engineering challenge, covering bilingual routing (en / pt-BR), server and client component patterns, PostgreSQL with Prisma, NextAuth.js v5, co-located Vitest tests. Containerized with Docker and deployed with CI/CD via GitHub Actions.",
      "pt-BR":
        "Portfólio pessoal construído com Next.js 16, TypeScript strict mode e Tailwind CSS 4. Desenvolvido como um desafio de engenharia assistida por IA de 7 dias, cobrindo roteamento bilíngue (en / pt-BR), padrões de componentes server e client, PostgreSQL com Prisma, NextAuth.js v5, testes Vitest co-localizados. Containerizado com Docker e implantado com CI/CD via GitHub Actions.",
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
    imageUrl: "/portfolio-site.jpg",
    featured: true,
  },
  {
    id: "proj-early-2000",
    title: "Beyond The Veil 2k!",
    description: {
      en: "A paranormal forum built as an interactive prop for a one-shot RPG session, shipped in a single day. Features fictional posts, nested replies, author profiles, and a hidden keyboard sequence (H→E→L→P) that unlocks a secret Dev Room with the admin's private journal. Later used as a tech stack modernization exercise: migrated from Next.js 13 to 15, React 19, Tailwind 4, and ESLint flat config — with added XSS prevention, HTTP security headers, and performance improvements.",
      "pt-BR":
        "Fórum paranormal desenvolvido como um prop interativo para uma oneshot de RPG, entregue em um único dia. Possui postagens ficcionais, respostas aninhadas, perfis de autores e uma sequência de teclado oculta (H→E→L→P) que desbloqueia a Dev Room com o diário privado do administrador. Posteriormente usado como exercício de modernização de stack: migrado de Next.js 13 para 15, React 19, Tailwind 4 e ESLint flat config — com prevenção de XSS, headers HTTP de segurança e melhorias de performance.",
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Storytelling",
      "Web Design",
    ],
    githubUrl: "https://github.com/matheeeusl/early-two-thousand",
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
      en: "A full-stack app for tracking blood pressure, weight, and body temperature with guest mode, interactive combined charts, and bilingual support. Features Supabase Auth, Redux Toolkit, BP and temperature category classification (ACC/AHA 2017), and static export deployment to GitHub Pages.",
      "pt-BR":
        "Aplicação full-stack de monitoramento de pressão arterial, peso e temperatura corporal com modo visitante, gráficos combinados interativos e suporte bilíngue. Utiliza Supabase Auth, Redux Toolkit, classificação de categorias de PA e temperatura (ACC/AHA 2017) e deploy estático via GitHub Pages.",
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
    wip: true,
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
