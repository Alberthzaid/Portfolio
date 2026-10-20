// Single source of truth for the portfolio copy. Sections only map over this data.

export const CV_URL = "/Alberth_Zaid_Pantoja_CV.pdf";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Building", href: "#building" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  title: "Zaid",
  description:
    "Software Engineer — Backend, Full-stack & AI applications. Technical lead at Refacciones.com and co-founder & CTO at Salto Angel.",
  primaryCta: { label: "Let's talk", href: "#contact" },
  secondaryCta: { label: "Download CV", href: CV_URL },
};

export const about = {
  name: "Alberth Zaid Pantoja",
  role: "Software Engineer — Backend, Full-stack & AI applications",
  summary:
    "Technical lead at Refacciones.com, building production software for business operations. Built wallet services, AI-assisted invoice workflows, and natural-language configuration tools. Experience spans application development, database design, and cloud deployment.",
  facts: [
    { label: "Based in", value: "Bogotá, Colombia" },
    { label: "Education", value: "Jala University — Software Engineering" },
    { label: "Languages", value: "Spanish (native) · English (B2)" },
  ],
};

export interface ExperienceItem {
  company: string;
  role: string;
  period?: string;
  bullets: string[];
  tags?: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Salto Angel",
    role: "Co-founder & CTO",
    bullets: [
      "AI services & products company built in Latin America: Quiubot, Falco, Tequendama, and more in development.",
    ],
    tags: ["AI agents", "LLMs", "Python", "FastAPI"],
  },
  {
    company: "Refacciones.com",
    role: "Technical Lead & Principal Developer",
    period: "Jun 2025 – Present",
    bullets: [
      "Lead the design and implementation of production services that automate business processes, using Go, NestJS, Next.js, and PostgreSQL.",
      "Design microservices and database models for concurrent business workflows; implement backend services and frontend applications.",
      "Integrate OpenAI agents into operational workflows and deploy services on AWS (EC2, S3, Transfer Family) and Railway.",
      "Containerize services with Docker and manage CI/CD across development, testing, and production environments.",
    ],
    tags: ["Go", "NestJS", "Next.js", "PostgreSQL", "OpenAI", "AWS", "Railway", "Docker", "CI/CD"],
  },
  {
    company: "Nuvara.com.co",
    role: "Semi-Senior Software Engineer",
    period: "May 2026 – Sep 2026",
    bullets: [
      "Built digital currency transaction and wallet management services in Go and NestJS, enabling users to purchase services within the platform.",
      "Built a browser extension that downloaded invoices and submitted them to an AI-powered invoice processing system.",
      "Developed an LLM-based multi-agent system that let users manage platform settings through natural language.",
    ],
    tags: ["Go", "NestJS", "LLM agents"],
  },
  {
    company: "Kruger Corps / Tecnopac",
    role: "Semi-Senior Software Engineer",
    period: "Feb 2025 – Aug 2025",
    bullets: [
      "Developed personnel, institution, document, and legal-process workflows for Ecuador's Attorney General's Office with Java / Spring Boot, NestJS, and Next.js.",
      "Implemented application identity management with Oracle Cloud Infrastructure IAM and worked with Oracle Database.",
    ],
    tags: ["Java", "Spring Boot", "NestJS", "Next.js", "OCI IAM", "Oracle Database"],
  },
  {
    company: "Propiedades Murillo",
    role: "Freelance Full-Stack Developer",
    period: "Sep 2024 – Jan 2025",
    bullets: [
      "Built the frontend, backend, and database for a real estate price prediction application with React, Node.js, and MongoDB; exposed the ML model through a FastAPI HTTP endpoint.",
    ],
    tags: ["React", "Node.js", "MongoDB", "FastAPI"],
  },
];

export const earlierExperience: { company: string; role: string; period: string; summary: string }[] = [
  {
    company: "Zantia",
    role: "Full-Stack Developer",
    period: "Apr 2024 – Jul 2024",
    summary: "E-commerce restoration with React, Node.js, TypeScript, and MongoDB.",
  },
  {
    company: "Kodland",
    role: "Programming Tutor",
    period: "Jun 2023 – Dec 2024",
    summary: "Taught Python and web development to students aged 8–18.",
  },
  {
    company: "Freelance",
    role: "Data Developer",
    period: "Oct 2023 – Nov 2023",
    summary: "Data sorting for a trading bot with pandas, NumPy, and TA-Lib.",
  },
  {
    company: "Green Weed Solutions",
    role: "Developer & Designer",
    period: "Jan 2023 – May 2023",
    summary: "Node.js WhatsApp bot, sales website, and ad design.",
  },
  {
    company: "Casa Click",
    role: "Visual Basic Developer",
    period: "Nov 2022 – Jan 2023",
    summary: "Automatic registration system for real-estate clients.",
  },
];

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  org: string;
  description?: string;
  tags?: string[];
  links?: ProjectLink[];
  status?: "In development";
}

export const projects: Project[] = [
  {
    name: "Quiubot",
    org: "Salto Angel",
    description:
      "AI customer service agents for SMBs on WhatsApp, voice, and chat. Escalates complex cases to humans.",
    tags: ["AI agents", "WhatsApp", "Voice"],
    links: [{ label: "Website", href: "https://www.saltoangel.co/quiubot" }],
  },
  {
    name: "Falco",
    org: "Salto Angel · Open source",
    description:
      "Distills an LLM into a small, fast, calibrated classifier. The teacher LLM labels once; the student runs on your infrastructure.",
    tags: ["Python", "mDeBERTa-v3", "FastAPI"],
    links: [
      { label: "GitHub", href: "https://github.com/Salto-Angel-Tech/Falco-Swift" },
      { label: "Website", href: "https://www.saltoangel.co/falco" },
    ],
  },
  {
    name: "Tequendama",
    org: "Salto Angel",
    description: "AI insurance platform.",
    tags: ["AI", "Insurance"],
    links: [{ label: "Website", href: "https://tequendama.saltoangel.co/" }],
  },
  {
    name: "Boost Auto",
    org: "Refacciones.com",
    description:
      "Online store and operations platform for off-road auto parts: catalog, vehicle fitment, multi-supplier inventory, orders, billing, and POS. Customer storefront, admin panel, POS app, and landing page built on a hexagonal architecture.",
    tags: ["NestJS 11", "TypeORM", "PostgreSQL 16", "JWT", "Next.js", "React 19", "Tailwind", "shadcn"],
  },
  {
    name: "Real Estate Price Prediction",
    org: "Propiedades Murillo",
    description:
      "Full-stack application that predicts property prices, with the ML model exposed through a FastAPI HTTP endpoint.",
    tags: ["React", "Node.js", "MongoDB", "FastAPI", "scikit-learn"],
  },
];

export interface Skill {
  name: string;
  icon?: string;
}

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages & frameworks",
    skills: [
      { name: "Go", icon: "bxl-go-lang" },
      { name: "TypeScript", icon: "bxl-typescript" },
      { name: "JavaScript", icon: "bxl-javascript" },
      { name: "Python", icon: "bxl-python" },
      { name: "Java", icon: "bxl-java" },
      { name: "NestJS" },
      { name: "Node.js", icon: "bxl-nodejs" },
      { name: "Next.js" },
      { name: "React", icon: "bxl-react" },
      { name: "Spring Boot", icon: "bxl-spring-boot" },
      { name: "FastAPI" },
    ],
  },
  {
    title: "Data, cloud & AI",
    skills: [
      { name: "PostgreSQL", icon: "bxl-postgresql" },
      { name: "MongoDB", icon: "bxl-mongodb" },
      { name: "Oracle Database" },
      { name: "AWS", icon: "bxl-aws" },
      { name: "Railway" },
      { name: "Docker", icon: "bxl-docker" },
      { name: "CI/CD" },
      { name: "OpenAI APIs" },
      { name: "pandas" },
      { name: "NumPy" },
      { name: "scikit-learn" },
    ],
  },
];

export const certifications = [
  { title: "Certification in Data Science & IA", institute: "Nuclio Digital School", file: "/CursoDataScience&IA.pdf" },
  { title: "Hackathon Azure & OpenAi", institute: "Codigo Facilito", file: "/Microsoft.pdf" },
  { title: "3D Bionic Exoskeletons", institute: "P4H Bionics", file: "/P4HBionics.pdf" },
  { title: "Chatbots con IA", institute: "Big data academy", file: "/AlberthPantoja.pdf" },
  { title: "UN Datathon 2024", institute: "UN Datathon", file: "/Dathaton.pdf" },
];

export const socials = [
  { label: "GitHub", icon: "bxl-github", href: "https://github.com/Alberthzaid" },
  { label: "GitLab", icon: "bxl-gitlab", href: "https://gitlab.com/ZaidPantoja" },
  { label: "WhatsApp", icon: "bxl-whatsapp", href: "https://wa.link/680d7r" },
  { label: "LinkedIn", icon: "bxl-linkedin", href: "https://www.linkedin.com/in/alberth-pantoja-a42aa8222/" },
];

export const contactEmail = "alberthzaid2003@gmail.com";
