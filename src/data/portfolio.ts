/* 
  ========================================
  DATA FILE - Portfolio Information
  ========================================
  Contenido honesto y realista para desarrollador en formación.
  Edita este archivo para personalizar tu portfolio.
*/

export const personalInfo = {
  name: "Sacha Figueredo",
  title: "Desarrollador Full Stack",
  // Propuesta de valor orientada a cliente
  valueProposal: "Creo páginas web que funcionan. Tu proyecto, entregado en tiempo y con atención personalizada.",
  email: "sachadev7@gmail.com",
  github: "https://github.com/sachafigue",
  linkedin: "https://www.linkedin.com/in/sacha-figueredo-developer/",
  instagram: "https://www.instagram.com/sacha_dev7",
  tiktok: "https://www.tiktok.com/@sachadev7",
  whatsapp: "https://wa.me/+542942357488",
};

// Tecnologías reales que estás aprendiendo
export const technologies = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🚀" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Git", icon: "📚" },
];

// Proyectos reales y simples (2-4 proyectos)
// No inventes proyectos complejos - muestra lo que realmente has hecho
export const projects = [
  {
    id: 1,
    name: "APP de Tareas",
    description: "Aplicación simple para crear, editar y eliminar tareas. Mi primer proyecto full-stack usando lo básico de React y Node.js.",
    technologies: ["React", "Node.js", "Express"],
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    name: "Landing Page",
    description: "Página web estática para un proyecto pessoal. Aprendí HTML, CSS básico y Tailwind.",
    technologies: ["HTML", "CSS", "Tailwind"],
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    name: "API de Notas",
    description: "API REST básica que permite crear, leer, actualizar y eliminar notas. Mi primer contacto con bases de datos.",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    name: "Portafolio Personal",
    description: "Este mismo sitio. Lo hice para practicar React, TypeScript y Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com",
  },
];

// Servicios orientados a resultados para clientes
export const services = [
  {
    id: 1,
    title: "Tu web presence",
    description: "Una página web que presenta tu negocio 24/7. Lo que necesitás para que gente te encuentre.",
    icon: "web",
  },
  {
    id: 2,
    title: "Landing pages",
    description: "Páginas enfocadas en una cosa: que tu cliente haga una acción. Comprar, contactarte, etc.",
    icon: "layout",
  },
  {
    id: 3,
    title: "APIs y sistemas",
    description: "Backends simples para conectar tu app, app o automatizar tareas.",
    icon: "server",
  },
  {
    id: 4,
    title: "Mantenimiento",
    description: "Actualicemos y melhoremos tu web existente. Lo que ya tenés, funcionando mejor.",
    icon: "wrench",
  },
];