export type SkillIconKey =
  | "java"
  | "typescript"
  | "haskell"
  | "prolog"
  | "php"
  | "sql"
  | "angular"
  | "vue"
  | "nuxt"
  | "express"
  | "nitro"
  | "docker"
  | "git"
  | "gitlab"
  | "github";

export type LinkIconKey = "globe" | "github" | "youtube";

export type SocialIconKey = "github" | "linkedin" | "email";

export const DATA = {
  name: "Omar Molero Gimeno",
  initials: "OM",
  url: "https://github.com/ommogi",
  location: "Alfarp, València",
  locationLink: "https://www.google.com/maps/place/Alfarp,+Val%C3%A8ncia",
  description:
    "Desarrollador Frontend enfocado en interfaces reactivas y escalables. Estudiante de Ingeniería Informática y técnico en DAW.",
  summary:
    "Estudiante de Ingeniería Informática y técnico en DAW especializado en el desarrollo frontend. Experiencia en entornos reales de producción (GEINFOR) trabajando con Angular y testing automatizado. Enfocado en la creación de interfaces reactivas, escalables y en la aplicación de metodologías ágiles.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Java", icon: "java" as SkillIconKey },
    { name: "TypeScript", icon: "typescript" as SkillIconKey },
    { name: "Haskell", icon: "haskell" as SkillIconKey },
    { name: "Prolog", icon: "prolog" as SkillIconKey },
    { name: "PHP", icon: "php" as SkillIconKey },
    { name: "SQL", icon: "sql" as SkillIconKey },
    { name: "Angular", icon: "angular" as SkillIconKey },
    { name: "Vue 3", icon: "vue" as SkillIconKey },
    { name: "Nuxt", icon: "nuxt" as SkillIconKey },
    { name: "Express", icon: "express" as SkillIconKey },
    { name: "Nitro", icon: "nitro" as SkillIconKey },
    { name: "Docker", icon: "docker" as SkillIconKey },
    { name: "Git", icon: "git" as SkillIconKey },
    { name: "GitLab", icon: "gitlab" as SkillIconKey },
    { name: "GitHub", icon: "github" as SkillIconKey },
  ],
  navbar: [{ href: "/", icon: "home" as const, label: "Inicio" }],
  contact: {
    email: "mtr.omarmg@gmail.com",
    tel: "+34 654 55 61 73",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ommogi",
        icon: "github" as SocialIconKey,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/omar-molero-gimeno-33526b2aa",
        icon: "linkedin" as SocialIconKey,
        navbar: true,
      },
      email: {
        name: "Enviar email",
        url: "mailto:mtr.omarmg@gmail.com",
        icon: "email" as SocialIconKey,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "GEINFOR",
      href: "",
      location: "Alfarp, València",
      title: "Desarrollador Frontend & Tester (Dual/Prácticas)",
      logoUrl: "/geinfor.png",
      start: "March 2025",
      end: "June 2025",
      description:
        "Implementación de funcionalidades en el Frontend utilizando Angular y TypeScript. Creación y ejecución de tests automatizados con Cypress.",
    },
    {
      company: "GEINFOR",
      href: "",
      location: "Alfarp, València",
      title: "Desarrollador Frontend & Tester (Dual)",
      logoUrl: "/geinfor.png",
      start: "June 2024",
      end: "August 2024",
      description:
        "Desarrollo técnico con Angular, TypeScript y Cypress. Resolución de problemas: identificación y corrección de bugs en entorno de producción. Trabajo en equipo bajo metodologías ágiles y control de versiones con GitLab.",
    },
  ],
  education: [
    {
      school: "Universitat Politècnica de València",
      href: "https://www.upv.es",
      degree: "Grado en Ingeniería Informática",
      logoUrl: "/upv.png",
      start: "2025",
      end: "Actualidad",
    },
    {
      school: "I.E.S. Mestre Ramón Esteve",
      href: "https://portal.edu.gva.es/iesmestreramonesteve/",
      degree: "DAW (Desarrollo de Aplicaciones Web) — Catadau, València",
      logoUrl: "/iesmre.png",
      start: "2023",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Contest Manager",
      href: "https://www.contestmanager.es/",
      dates: "2024 - Presente",
      description:
        "Aplicación web Full Stack para la gestión integral de concursos. Proyecto final de DAW, evolucionado a una arquitectura Full Stack con Nuxt y Nitro. Desarrollo de interfaces reactivas, gestión de estados complejos con Pinia y diseño de bases de datos en PostgreSQL.",
      technologies: ["Nuxt", "Nitro", "Vue 3", "Pinia", "Tailwind CSS", "PostgreSQL"],
      links: [] as { type: string; href: string; icon: LinkIconKey }[],
      image: "",
      video: "/mockup_contestmanager.mov",
    },
    {
      title: "Sonar",
      href: "",
      dates: "Julio 2026",
      description:
        "Chatbot interno de recomendación de maquinaria en lenguaje natural. Búsqueda híbrida (filtros SQL + similitud semántica) sobre embeddings vectoriales sirviendo un catálogo con Supabase (pgvector), con control de acceso por roles.",
      technologies: ["Nuxt", "Nitro", "TypeScript", "Supabase", "PostgreSQL", "pgvector"],
      links: [
        { type: "Código", href: "https://github.com/ommogi/Sonar", icon: "github" as LinkIconKey },
      ],
      image: "",
      video: "/mockup_sonar.mov",
    },
  ],
} as const;
