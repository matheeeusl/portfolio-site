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
    en: "Full-Stack Engineer",
    "pt-BR": "Engenheiro Full-Stack",
  },
  location: "Florianópolis, SC - Brazil",
  email: "matheuslaureanol1@gmail.com",
  github: "https://github.com/matheeeusl",
  linkedin: "https://www.linkedin.com/in/laureano-dev/",
  bio: {
    en: "Full-Stack Engineer with 10 years delivering scalable web products for enterprise clients across e-commerce, fintech, and SaaS — from complex UI systems to GraphQL APIs and Node.js services. Specialized in React.js, Next.js, and TypeScript, with deep front-end expertise and hands-on experience in Node.js backend services, performance optimization, and cross-platform mobile development. Proven track record in international remote-first agile teams, consistently shipping high-quality features on schedule. Passionate about clean architecture, developer experience, and AI-assisted engineering workflows.",
    "pt-BR":
      "Engenheiro Full-Stack com 10 anos entregando produtos web escaláveis para clientes enterprise nos setores de e-commerce, fintech e SaaS — de sistemas de UI complexos a APIs GraphQL e serviços Node.js. Especializado em React.js, Next.js e TypeScript, com profunda expertise em front-end e experiência prática em serviços backend Node.js, otimização de performance e desenvolvimento mobile multiplataforma. Histórico comprovado em times ágeis internacionais com foco em trabalho remoto, entregando consistentemente features de alta qualidade dentro do prazo. Apaixonado por arquitetura limpa, developer experience e fluxos de desenvolvimento assistidos por IA.",
  },
};

export const experiences: Experience[] = [
  {
    id: "exp-freelance",
    company: "Self-Employed",
    role: {
      en: "Freelance Software Engineer",
      "pt-BR": "Engenheiro de Software Freelance",
    },
    startDate: "2025-12",
    endDate: null,
    description: {
      en: "Engineered front-end and full-stack solutions for clients using React, TypeScript, and Next.js. Architecting backend API routes and server-side logic using Node.js, contributing to full-stack feature delivery for client projects. Integrating REST APIs and crafting reusable component libraries tailored to client product requirements. Leveraging Claude Code as a core part of the development workflow, reducing iteration cycles and maintaining code quality through AI-assisted planning, review, and implementation. Developing two production personal projects in parallel: Cineclube, a full-stack film club platform with multi-tenant RLS, real-time voting, and 186-film historical data migration; and Hipertension, a health tracker with ACC/AHA 2017 medical classification with live users in production.",
      "pt-BR":
        "Implementei soluções front-end e full-stack para clientes utilizando React, TypeScript e Next.js. Arquitetando rotas de API e lógica server-side com Node.js, contribuindo para a entrega de features full-stack em projetos de clientes. Integrando REST APIs e criando bibliotecas de componentes reutilizáveis adaptadas aos requisitos dos clientes. Utilizando Claude Code como parte central do fluxo de desenvolvimento, reduzindo ciclos de iteração e mantendo qualidade de código por meio de planejamento, revisão e implementação assistidos por IA. Desenvolvendo dois projetos pessoais em produção em paralelo: Cineclube, uma plataforma full-stack de cineclube com isolamento multi-tenant via RLS, votação em tempo real e migração histórica de 186 filmes; e Hipertension, um rastreador de saúde com classificação médica ACC/AHA 2017 com usuários reais em produção.",
    },
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Claude Code",
      "AI-Assisted Development",
    ],
    projects: [],
  },
  {
    id: "exp-fullstacklabs",
    company: "FullStack Labs",
    role: {
      en: "Software Engineer",
      "pt-BR": "Engenheiro de Software",
    },
    startDate: "2021-11",
    endDate: "2026-06",
    description: {
      en: "At FullStack Labs, a nearshore consultancy partnering with enterprise clients across the Americas, I built high-impact front-end solutions within collaborative international agile teams. Refactored a single-page mortgage application with 20+ conditional questions into a fluid multi-step flow for Lighthouse (4-person team), applying branching logic that dynamically showed or hid question groups (e.g., military history hidden for non-veterans) — improving readability and measurably reducing form abandonment. Shipped entertainment e-commerce features for MGM Resorts within an 8-person squad — spending ~1 year on the Booking team and 2+ years on the CART team — collaborating with 6+ internal cross-functional teams. Implemented an interactive SVG seat map enabling real-time seat selection integrated directly into the booking flow. Constructed combined package features (show + accommodation) and executed complex payment flows across 3+ simultaneous repositories, engineering an agnostic cart architecture that resolved Shadow DOM edge cases and mobile-specific bugs. Integrated the booking GraphQL API and loan origination REST endpoints across both clients. Applied lazy loading, code-splitting, and drove performance optimization audits improving Core Web Vitals and Technical SEO.",
      "pt-BR":
        "Na FullStack Labs, uma consultoria nearshore que atende clientes enterprise nas Américas, desenvolvi soluções front-end de alto impacto em times ágeis internacionais e colaborativos. Refatorei uma aplicação de hipoteca single-page com 20+ perguntas condicionais em um fluxo multi-etapas fluido para a Lighthouse (equipe de 4), aplicando lógica de ramificação que mostrava ou ocultava grupos de perguntas dinamicamente (ex: histórico militar oculto para não-veteranos) — melhorando a legibilidade e reduzindo mensurável o abandono de formulário. Entreguei features de e-commerce de entretenimento para a MGM Resorts em um squad de 8 pessoas — ~1 ano no time de Booking e 2+ anos no time de CART — colaborando com 6+ times internos multifuncionais. Implementei um mapa SVG interativo de assentos permitindo seleção em tempo real integrada diretamente ao fluxo de reservas. Construí features de pacotes combinados (show + acomodação) e executei fluxos de pagamento complexos em 3+ repositórios simultâneos, engenheirando uma arquitetura de carrinho agnóstica que resolveu edge cases de Shadow DOM e bugs mobile. Integrei a API GraphQL de reservas e endpoints REST de originação de empréstimos em ambos os clientes. Apliquei lazy loading, code splitting e conduzi auditorias de performance melhorando Core Web Vitals e SEO técnico.",
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
      "Cline",
      "Claude Sonnet 4.6",
    ],
    projects: [
      {
        name: "Lighthouse",
        description: {
          en: "Mortgage platform — refactored a 20+ question single-page form into a fluid multi-step flow with dynamic branching logic (e.g., military history hidden for non-veterans), measurably reducing form abandonment.",
          "pt-BR":
            "Plataforma de hipotecas — refatoração de formulário single-page com 20+ perguntas em fluxo multi-etapas com lógica de ramificação dinâmica (ex: histórico militar oculto para não-veteranos), reduzindo mensurável o abandono.",
        },
      },
      {
        name: "MGM Resorts",
        description: {
          en: "Entertainment & hospitality platform — ~1 year on Booking team, 2+ years on CART team. Implemented SVG seat map for real-time seat selection, built combined package features (show + accommodation), and engineered an agnostic cart architecture resolving Shadow DOM edge cases and mobile bugs.",
          "pt-BR":
            "Plataforma de entretenimento e hospitalidade — ~1 ano no time de Booking, 2+ anos no time de CART. Implementei mapa SVG interativo de assentos, construí features de pacotes combinados (show + acomodação) e engenheirei arquitetura agnóstica de carrinho resolvendo edge cases de Shadow DOM e bugs mobile.",
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
      en: "Kyte is a POS and inventory SaaS startup serving 40,000+ SMBs across 180+ countries with integrated web, mobile, and in-person sales channels. Within a fast-paced team of ~6 engineers, I developed Pro plan web features supporting user retention and platform monetization, and shipped React Native features for iOS and Android apps, enabling tens of thousands of small businesses to manage inventory and process sales from mobile devices.",
      "pt-BR":
        "A Kyte é uma startup SaaS de PDV e estoque que atende mais de 40 mil PMEs em mais de 180 países com canais de vendas integrados — web, mobile e presencial. Em um time de ~6 engenheiros, desenvolvi funcionalidades web do plano Pro que suportavam retenção de usuários e monetização da plataforma, e entreguei features em React Native para apps iOS e Android, permitindo que dezenas de milhares de pequenas empresas gerenciassem estoque e processassem vendas pelo celular.",
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
      en: "McFadyen Digital is a specialized B2B e-commerce consultancy focused on marketplace enablement for global enterprise clients. Progressing from Java Intern to Front-end Developer over 4+ years, I shipped front-end solutions across 7 enterprise client projects — including Zebra Technologies, MiMercado (ABInBev Z-Tech, Vue.js / Vuestorefront), Indigo, Grupo Nazan, Gimba, Eletrozema, and Alpha — spanning OCC, Shopify, Magento, and KnockoutJS ecosystems. Mentored two interns and led company-wide knowledge-sharing sessions as the first engineer to adopt a new platform technology on the team. Established internal onboarding tools and technical challenge frameworks officially adopted across the entire engineering organization, directly reducing new-hire ramp-up time.",
      "pt-BR":
        "A McFadyen Digital é uma consultoria B2B de e-commerce especializada em habilitação de marketplaces para clientes enterprise globais. Progredindo de Estagiário Java a Desenvolvedor Front-end ao longo de 4+ anos, entreguei soluções front-end em 7 projetos para clientes enterprise — incluindo Zebra Technologies, MiMercado (ABInBev Z-Tech, Vue.js / Vuestorefront), Indigo, Grupo Nazan, Gimba, Eletrozema e Alpha — nos ecossistemas OCC, Shopify, Magento e KnockoutJS. Mentorizei dois estagiários e liderei sessões de compartilhamento de conhecimento em toda a empresa como primeiro engenheiro a adotar uma nova tecnologia de plataforma no time. Estabeleci ferramentas internas de onboarding e frameworks de desafios técnicos adotados oficialmente em toda a organização de engenharia, reduzindo diretamente o tempo de ramp-up de novos contratados.",
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
      "KnockoutJS",
    ],
    projects: [
      {
        name: "MiMercado (ABInBev Z-Tech)",
        description: {
          en: "B2B marketplace built with Vue.js / Vuestorefront for the Latin American market.",
          "pt-BR":
            "Marketplace B2B construído com Vue.js / Vuestorefront para o mercado latino-americano.",
        },
      },
      {
        name: "Zebra Technologies",
        description: {
          en: "B2B e-commerce portal on Oracle Commerce Cloud (OCC) — complex product catalog and ordering flows for a publicly recognized McFadyen client.",
          "pt-BR":
            "Portal B2B de e-commerce em Oracle Commerce Cloud (OCC) — catálogo de produtos complexo e fluxos de pedido para um cliente reconhecido publicamente pela McFadyen.",
        },
      },
      {
        name: "Other Clients",
        description: {
          en: "Indigo, Grupo Nazan, Gimba, Eletrozema, and Alpha — front-end implementations across Shopify, Magento, OCC, and KnockoutJS ecosystems.",
          "pt-BR":
            "Indigo, Grupo Nazan, Gimba, Eletrozema e Alpha — implementações front-end nos ecossistemas Shopify, Magento, OCC e KnockoutJS.",
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
      en: "Full-stack bilingual portfolio (EN/PT-BR) built as a 7-day AI-assisted engineering challenge with TDD, React Server Components, and CI/CD. Covers bilingual routing, server and client component patterns, PostgreSQL with Prisma, NextAuth.js v5, and co-located Vitest tests. Containerized with Docker and deployed via GitHub Actions.",
      "pt-BR":
        "Portfólio bilíngue full-stack (EN/PT-BR) desenvolvido como um desafio de engenharia assistida por IA de 7 dias, com TDD, React Server Components e CI/CD. Cobre roteamento bilíngue, padrões de componentes server e client, PostgreSQL com Prisma, NextAuth.js v5 e testes Vitest co-localizados. Containerizado com Docker e implantado via GitHub Actions.",
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
    id: "proj-cineclube",
    title: "Cineclube",
    description: {
      en: "Full-stack film club management app replacing a legacy Google Sheets system, covering the full movie lifecycle (submission → draw → selection → rating). Implemented draw logic with tiebreaker re-voting rounds and cancellation/reopening support via PostgreSQL RPCs. Designed multi-tenant architecture with data isolation via Row Level Security (RLS) in Supabase. Built a real-time voting system with anonymous counting and result visualization. Migrated historical data from a complex spreadsheet (186 films, 233 ratings, 9 members) via Python parsing. Adopted TDD, Server Components, and AI-assisted workflow with Claude Code, including specialized sub-agents and living project conventions (AGENTS.md).",
      "pt-BR":
        "App full-stack de gerenciamento de cineclube substituindo um sistema legado em Google Sheets, cobrindo o ciclo completo de filmes (candidatura → sorteio → seleção → avaliação). Implementei lógica de sorteio com desempate por rounds de revotação e suporte a cancelamento/reabertura via RPCs no PostgreSQL. Projetei arquitetura multi-tenant com isolamento de dados via Row Level Security (RLS) no Supabase. Construí sistema de votação em tempo real com contagem anônima e visualização de resultados. Migrei dados históricos de planilha complexa (186 filmes, 233 avaliações, 9 membros) via parsing em Python. Adotei TDD e Server Components como práticas centrais, com fluxo assistido por IA (Claude Code), sub-agentes especializados e documentação viva de convenções do projeto (AGENTS.md).",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "TMDB API",
    ],
    githubUrl: "https://github.com/matheeeusl/cineclub",
    liveUrl: "https://cineclube-bond.vercel.app/",
    imageUrl: "/cineclube.jpg",
    featured: true,
    wip: true,
  },
  {
    id: "proj-hipertension",
    title: "Hipertension",
    description: {
      en: "Full-stack health tracking app for blood pressure, weight, and body temperature with ACC/AHA 2017 medical classification and temperature category grading (hypothermia → hyperthermia). Built interactive combined charts (BP + weight + temperature) with period filters, multi-axis display, and per-series toggles. Implemented guest mode with session storage, full CRUD, bilingual support (EN/PT-BR), dark mode, and locale-aware date formatting.",
      "pt-BR":
        "Aplicação full-stack de monitoramento de pressão arterial, peso e temperatura corporal com classificação médica ACC/AHA 2017 e categorização de temperatura (hipotermia → hipertermia). Construí gráficos combinados interativos (PA + peso + temperatura) com filtros por período, exibição multi-eixo e toggles por série. Implementei modo visitante com session storage, CRUD completo, suporte bilíngue (EN/PT-BR), dark mode e formatação de datas por locale.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Redux Toolkit",
      "RTK Query",
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
  { name: "Supabase", category: "backend", level: "intermediate" },
  { name: "REST APIs", category: "backend", level: "advanced" },
  { name: "Microservices", category: "backend", level: "intermediate" },

  // State Management
  { name: "Redux Toolkit", category: "state", level: "advanced" },
  { name: "RTK Query", category: "state", level: "advanced" },
  { name: "React Query", category: "state", level: "intermediate" },
  { name: "Zustand", category: "state", level: "intermediate" },
  { name: "React Hook Form", category: "state", level: "advanced" },
  { name: "Zod", category: "state", level: "advanced" },

  // E-commerce & Platforms
  { name: "Oracle Commerce Cloud", category: "ecommerce", level: "advanced" },
  { name: "Shopify (Liquid)", category: "ecommerce", level: "advanced" },
  { name: "Magento", category: "ecommerce", level: "intermediate" },
  { name: "Storybook", category: "ecommerce", level: "advanced" },

  // DevOps & Leadership
  { name: "Docker", category: "devops", level: "intermediate" },
  { name: "Git", category: "devops", level: "advanced" },
  { name: "Playwright", category: "devops", level: "intermediate" },
  { name: "Automated Testing", category: "devops", level: "advanced" },
  { name: "Mentoring", category: "devops", level: "advanced" },
  { name: "Agile (Scrum/Kanban)", category: "devops", level: "advanced" },
  {
    name: "AI-Assisted Development",
    category: "devops",
    level: "advanced",
  },
  { name: "Cline", category: "devops", level: "intermediate" },
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
      en: "Technical Degree in Internet Computing, Programming & Design",
      "pt-BR": "Técnico em Informática para Internet, Programação e Design",
    },
    startYear: 2012,
    endYear: 2014,
    location: "Tubarão, Brazil",
    description: {
      en: "Early technical foundation focused on web development, programming logic, and digital design.",
      "pt-BR":
        "Base técnica inicial focada em desenvolvimento web, lógica de programação e design digital.",
    },
  },
];
