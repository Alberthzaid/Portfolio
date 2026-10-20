import { CV_URL, fullName } from "./shared";
import type { SiteContent } from "./types";

export const es: SiteContent = {
  navLabel: "Principal",
  navItems: [
    { label: "Perfil", href: "#about" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#building" },
    { label: "Stack", href: "#stack" },
    { label: "Contacto", href: "#contact" },
  ],
  languageSwitch: {
    label: "EN",
    href: "/",
    hrefLang: "en",
    ariaLabel: "View this page in English",
  },
  hero: {
    title: "Zaid",
    description:
      "Desarrollador de IA e Ingeniero de Software en Bogotá, Colombia: agentes con LLM, backend y productos full-stack. Líder técnico en Refacciones.com y cofundador y CTO de Salto Angel.",
    primaryCta: { label: "Hablemos", href: "#contact" },
    secondaryCta: { label: "Descargar CV (inglés)", href: CV_URL },
  },
  about: {
    eyebrow: "Perfil",
    name: fullName,
    role: "Desarrollador de IA e Ingeniero de Software en Bogotá, Colombia",
    summary:
      "Desarrollador de IA y líder técnico en Refacciones.com, donde construyo software en producción para la operación del negocio. He desarrollado sistemas multiagente con LLM, flujos de facturación asistidos por IA, servicios de billetera digital y herramientas de configuración en lenguaje natural. Mi experiencia abarca desarrollo de aplicaciones, diseño de bases de datos y despliegue en la nube.",
    facts: [
      { label: "Ubicación", value: "Bogotá, Colombia" },
      { label: "Formación", value: "Jala University — Ingeniería de Software" },
      { label: "Idiomas", value: "Español (nativo) · Inglés (B2)" },
    ],
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Dónde he construido",
    listLabel: "Cargos, del más reciente al más antiguo",
    technologiesLabel: "Tecnologías",
    earlierTitle: "Anteriormente",
    items: [
      {
        company: "Salto Angel",
        role: "Cofundador y CTO",
        bullets: [
          "Empresa de servicios y productos de IA creada en Latinoamérica: Quiubot, Falco, Tequendama y otros en desarrollo.",
        ],
        tags: ["Agentes de IA", "LLMs", "Python", "FastAPI"],
      },
      {
        company: "Refacciones.com",
        role: "Líder técnico y desarrollador principal",
        period: "Jun 2025 – Actualidad",
        bullets: [
          "Lidero el diseño e implementación de servicios en producción que automatizan procesos de negocio, con Go, NestJS, Next.js y PostgreSQL.",
          "Diseño microservicios y modelos de datos para flujos de negocio concurrentes; implemento servicios backend y aplicaciones frontend.",
          "Integro agentes de OpenAI en los flujos operativos y despliego servicios en AWS (EC2, S3, Transfer Family) y Railway.",
          "Contenerizo servicios con Docker y gestiono CI/CD en los entornos de desarrollo, pruebas y producción.",
        ],
        tags: ["Go", "NestJS", "Next.js", "PostgreSQL", "OpenAI", "AWS", "Railway", "Docker", "CI/CD"],
      },
      {
        company: "Nuvara.com.co",
        role: "Ingeniero de Software Semi-Senior",
        period: "May 2026 – Sep 2026",
        bullets: [
          "Desarrollé servicios de transacciones con moneda digital y gestión de billeteras en Go y NestJS, para que los usuarios compraran servicios dentro de la plataforma.",
          "Creé una extensión de navegador que descargaba facturas y las enviaba a un sistema de procesamiento de facturas con IA.",
          "Desarrollé un sistema multiagente basado en LLM que permitía a los usuarios gestionar la configuración de la plataforma en lenguaje natural.",
        ],
        tags: ["Go", "NestJS", "Agentes LLM"],
      },
      {
        company: "Kruger Corps / Tecnopac",
        role: "Ingeniero de Software Semi-Senior",
        period: "Feb 2025 – Ago 2025",
        bullets: [
          "Desarrollé flujos de personal, instituciones, documentos y procesos jurídicos para la Procuraduría General del Estado de Ecuador con Java / Spring Boot, NestJS y Next.js.",
          "Implementé la gestión de identidades de la aplicación con Oracle Cloud Infrastructure IAM y trabajé con Oracle Database.",
        ],
        tags: ["Java", "Spring Boot", "NestJS", "Next.js", "OCI IAM", "Oracle Database"],
      },
      {
        company: "Propiedades Murillo",
        role: "Desarrollador Full-Stack freelance",
        period: "Sep 2024 – Ene 2025",
        bullets: [
          "Construí el frontend, el backend y la base de datos de una aplicación de predicción de precios inmobiliarios con React, Node.js y MongoDB; expuse el modelo de ML mediante un endpoint HTTP en FastAPI.",
        ],
        tags: ["React", "Node.js", "MongoDB", "FastAPI"],
      },
    ],
    earlier: [
      {
        company: "Zantia",
        role: "Desarrollador Full-Stack",
        period: "Abr 2024 – Jul 2024",
        summary: "Restauración de un e-commerce con React, Node.js, TypeScript y MongoDB.",
      },
      {
        company: "Kodland",
        role: "Tutor de programación",
        period: "Jun 2023 – Dic 2024",
        summary: "Enseñé Python y desarrollo web a estudiantes de 8 a 18 años.",
      },
      {
        company: "Freelance",
        role: "Desarrollador de datos",
        period: "Oct 2023 – Nov 2023",
        summary: "Procesamiento de datos para un bot de trading con pandas, NumPy y TA-Lib.",
      },
      {
        company: "Green Weed Solutions",
        role: "Desarrollador y diseñador",
        period: "Ene 2023 – May 2023",
        summary: "Bot de WhatsApp en Node.js, sitio web de ventas y diseño de anuncios.",
      },
      {
        company: "Casa Click",
        role: "Desarrollador Visual Basic",
        period: "Nov 2022 – Ene 2023",
        summary: "Sistema de registro automático de clientes inmobiliarios.",
      },
    ],
  },
  building: {
    eyebrow: "En construcción",
    title: "Proyectos actuales",
    description: "Productos que construyo en Salto Angel y Refacciones.com, además de trabajos recientes para clientes.",
    listLabel: "Proyectos destacados",
    technologiesLabel: "Tecnologías",
    projects: [
      {
        name: "Quiubot",
        org: "Salto Angel",
        description:
          "Agentes de IA de servicio al cliente para pymes en WhatsApp, voz y chat. Escala los casos complejos a personas.",
        tags: ["Agentes de IA", "WhatsApp", "Voz"],
        links: [{ label: "Sitio web", href: "https://www.saltoangel.co/quiubot" }],
      },
      {
        name: "Falco",
        org: "Salto Angel · Código abierto",
        description:
          "Destila un LLM en un clasificador pequeño, rápido y calibrado. El LLM maestro etiqueta una sola vez; el modelo estudiante corre en tu infraestructura.",
        tags: ["Python", "mDeBERTa-v3", "FastAPI"],
        links: [
          { label: "GitHub", href: "https://github.com/Salto-Angel-Tech/Falco-Swift" },
          { label: "Sitio web", href: "https://www.saltoangel.co/falco" },
        ],
      },
      {
        name: "Tequendama",
        org: "Salto Angel",
        description: "Plataforma de seguros con IA.",
        tags: ["IA", "Seguros"],
        links: [{ label: "Sitio web", href: "https://tequendama.saltoangel.co/" }],
      },
      {
        name: "Boost Auto",
        org: "Refacciones.com",
        description:
          "Tienda en línea y plataforma de operaciones para autopartes off-road: catálogo, compatibilidad por vehículo, inventario multiproveedor, pedidos, facturación y punto de venta. Tienda para clientes, panel administrativo, app POS y landing page sobre una arquitectura hexagonal.",
        tags: ["NestJS 11", "TypeORM", "PostgreSQL 16", "JWT", "Next.js", "React 19", "Tailwind", "shadcn"],
      },
      {
        name: "Predicción de precios inmobiliarios",
        org: "Propiedades Murillo",
        description:
          "Aplicación full-stack que predice precios de inmuebles, con el modelo de ML expuesto mediante un endpoint HTTP en FastAPI.",
        tags: ["React", "Node.js", "MongoDB", "FastAPI", "scikit-learn"],
      },
    ],
  },
  stack: {
    eyebrow: "Stack",
    title: "Tecnologías principales",
    groups: [
      {
        title: "Lenguajes y frameworks",
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
        title: "Datos, nube e IA",
        skills: [
          { name: "PostgreSQL", icon: "bxl-postgresql" },
          { name: "MongoDB", icon: "bxl-mongodb" },
          { name: "Oracle Database" },
          { name: "AWS", icon: "bxl-aws" },
          { name: "Railway" },
          { name: "Docker", icon: "bxl-docker" },
          { name: "CI/CD" },
          { name: "APIs de OpenAI" },
          { name: "pandas" },
          { name: "NumPy" },
          { name: "scikit-learn" },
        ],
      },
    ],
  },
  certifications: {
    eyebrow: "Certificaciones",
    title: "Formación",
    listLabel: "Certificaciones",
    viewLabel: "Ver certificado",
    items: [
      { title: "Certificación en Data Science e IA", institute: "Nuclio Digital School", file: "/CursoDataScience&IA.pdf" },
      { title: "Hackathon Azure & OpenAI", institute: "Código Facilito", file: "/Microsoft.pdf" },
      { title: "Exoesqueletos biónicos 3D", institute: "P4H Bionics", file: "/P4HBionics.pdf" },
      { title: "Chatbots con IA", institute: "Big Data Academy", file: "/AlberthPantoja.pdf" },
      { title: "UN Datathon 2024", institute: "UN Datathon", file: "/Dathaton.pdf" },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos",
    description: "¿Estás construyendo algo con IA, servicios backend o un producto full-stack? Cuéntame tu idea.",
    form: {
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@empresa.com",
      emailRequired: "El correo es obligatorio",
      emailInvalid: "El formato del correo no es válido",
      nameLabel: "Tu nombre",
      namePlaceholder: "Ana Pérez",
      nameRequired: "El nombre es obligatorio",
      ideaLabel: "¿En qué te puedo ayudar?",
      ideaPlaceholder: "Cuéntame sobre tu proyecto o idea",
      ideaRequired: "El mensaje es obligatorio",
      submit: "Enviar mensaje",
      submitting: "Enviando…",
      success: "¡Gracias! Tu mensaje fue enviado.",
      error: "No se pudo enviar tu mensaje. Inténtalo de nuevo o escríbeme por correo.",
    },
  },
  footer: { backToTop: "Volver arriba" },
  whatsappLabel: "Escribir por WhatsApp",
};
