const projects = [
  {
    id: 1,
    en: {
      title: "Personal Portfolio Website",
      description:
        "A modern bilingual personal portfolio website designed to showcase my professional profile, technical skills, software projects, GitHub repositories, live demos, and contact information.",
    },
    es: {
      title: "Portafolio Web Personal",
      description:
        "Sitio web personal bilingüe y moderno diseñado para presentar mi perfil profesional, habilidades técnicas, proyectos de software, repositorios de GitHub, demos en vivo e información de contacto.",
    },
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript", "GitHub", "Vercel"],
    images: [
      "/portfolio/projects-view.png",
      "/portfolio/hero.png",
      "/portfolio/project-modal-azuay.png",
      "/portfolio/skills-view.png",
      "/portfolio/about-view.png",
      "/portfolio/projects-mobile.png",
      "/portfolio/hero-mobile.png",
    ],
    github: "https://github.com/NightMare2210/Mi-Portafolio-Daniel-Cabrera",
    demo: null,
    gradient: "from-cyan-500/20 to-blue-600/20",
    accent: "from-cyan-400 to-blue-500",
    details: {
      en: {
        overview:
          "A bilingual personal portfolio built from scratch with Next.js 16 App Router, Tailwind CSS v4 (CSS-native config: @import 'tailwindcss' + @theme inline, no tailwind.config.js), and plain JavaScript — no TypeScript. The i18n system is a custom React Context (LanguageContext) wrapping the entire layout, making all UI strings available in both EN and ES without any third-party i18n library. Data is cleanly separated: content.js holds all UI strings, projects.js holds project entries. Each project card opens a ProjectModal with a CSS-transitioned image carousel and thumbnail strip. Deployed on Vercel with zero-config CI/CD.",
        highlights: [
          "Tailwind CSS v4 CSS-native setup — @import 'tailwindcss' + @theme inline, no tailwind.config.js required",
          "Custom i18n via LanguageContext (use client) — wraps the full layout, no third-party library",
          "Data architecture: UI strings in content.js, project entries in projects.js — fully decoupled from components",
          "ProjectModal with CSS-transitioned image carousel, thumbnail strip, and keyboard/click navigation",
          "Dark navy (#0a0f1e) design system with cyan accent palette — fully responsive across all breakpoints",
          "Modular section architecture: Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer",
          "Plain JavaScript (no TypeScript) with Next.js App Router — deliberate choice to keep the stack lean",
          "Deployed on Vercel with automatic preview deployments on every push",
        ],
        role: "Sole developer — design, architecture, and implementation",
        context: "Personal project",
      },
      es: {
        overview:
          "Portafolio personal bilingüe construido desde cero con Next.js 16 App Router, Tailwind CSS v4 (configuración CSS-nativa: @import 'tailwindcss' + @theme inline, sin tailwind.config.js) y JavaScript puro — sin TypeScript. El sistema i18n es un React Context propio (LanguageContext) que envuelve todo el layout, exponiendo todos los strings en EN y ES sin ninguna librería externa. Los datos están separados: content.js contiene los strings de UI, projects.js los proyectos. Cada tarjeta abre un ProjectModal con carousel de imágenes con transiciones CSS y tira de thumbnails. Desplegado en Vercel con CI/CD automático.",
        highlights: [
          "Tailwind CSS v4 CSS-nativo — @import 'tailwindcss' + @theme inline, sin tailwind.config.js",
          "i18n con LanguageContext propio (use client) — envuelve el layout completo, sin librería externa",
          "Arquitectura de datos: strings de UI en content.js, proyectos en projects.js — completamente desacoplados de los componentes",
          "ProjectModal con carousel de imágenes con transiciones CSS, tira de thumbnails y navegación por clic o teclado",
          "Sistema de diseño dark navy (#0a0f1e) con paleta de acentos cyan — completamente responsivo",
          "Arquitectura modular por secciones: Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer",
          "JavaScript puro (sin TypeScript) con Next.js App Router — decisión deliberada para mantener el stack liviano",
          "Desplegado en Vercel con previews automáticos en cada push",
        ],
        role: "Desarrollador único — diseño, arquitectura e implementación",
        context: "Proyecto personal",
      },
    },
  },
  {
    id: 2,
    en: {
      title: "Azuay Hogar Inmobiliaria",
      description:
        "Professional real estate platform for Cuenca, Ecuador. Features a public property portal, admin dashboard, and superadmin panel with role-based JWT authentication. Includes property management with auto-generated codes (AZU-XXXX), multi-image upload (JPG, PNG, WEBP, HEIC), visit and offer tracking, activity logs, avatar management, and CSV export.",
    },
    es: {
      title: "Azuay Hogar Inmobiliaria",
      description:
        "Plataforma inmobiliaria profesional para Cuenca, Ecuador. Incluye portal público de propiedades, panel admin y panel superadmin con autenticación JWT por roles. Gestión de propiedades con códigos únicos (AZU-XXXX), subida de múltiples imágenes (JPG, PNG, WEBP, HEIC), seguimiento de visitas y ofertas, registro de actividad, gestión de avatares y exportación CSV.",
    },
    tech: ["React 18", "TypeScript", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "JWT", "Zustand", "TanStack Query", "Zod", "Leaflet", "Multer", "Tailwind CSS"],
    github: "https://github.com/brandocabrera",
    demo: null,
    images: [
      "/azuay/landing.png",
      "/azuay/properties-catalog.png",
      "/azuay/landing-scroll.png",
      "/azuay/admin-login.png",
      "/azuay/rental-catalog.png",
      "/azuay/client-login.png",
      "/azuay/superadmin-login.png",
      "/azuay/landing-mobile.png",
    ],
    gradient: "from-emerald-500/20 to-teal-600/20",
    accent: "from-emerald-400 to-teal-500",
    details: {
      en: {
        overview:
          "A full-stack real estate platform (v1.0.2) built for a client in Cuenca, Ecuador. The system handles the complete property lifecycle — from listing to sale — across three distinct user portals: a public property catalog, a client portal for buyers, and a back-office with separate Admin and Superadmin panels. Secured with dual JWT authentication (separate tokens for admins and clients), pluggable image storage (local or Supabase Storage), and Leaflet-powered geolocation. Built with React 18 + Vite on the frontend, Node.js + Express + Prisma ORM + PostgreSQL on the backend.",
        highlights: [
          "Three separate portals: public catalog, client portal (register/login/my-visits/my-offers), Admin panel, and Superadmin panel — each with its own JWT cookie and Zustand auth store",
          "Properties have auto-generated codes (AZU-XXXX), full lifecycle states (ACTIVE / INACTIVE / RESERVED / SOLD), and explicit publish control — sold properties stay published with a locked badge",
          "Multi-image upload (up to 20 images, 10 MB each, JPG/PNG/WEBP/HEIC) with drag-and-drop reorder, configurable cover image, and automatic cover promotion when the current cover is deleted (via Prisma transaction)",
          "Pluggable storage: local Multer diskStorage or Supabase Storage — switchable via a single env variable without code changes",
          "Interactive geolocation: location picker in the admin form and a public map (Leaflet) on property detail pages — latitude/longitude stored in the database",
          "Visit scheduling and offer management with rate limiting, minimum offer validation, email notification stubs (templates ready for SMTP), and status workflows (PENDING → CONFIRMED / ACCEPTED / REJECTED)",
          "Superadmin features: full CRUD of admin users, auto-generated email (nombre.apellido@azuayhogar.com), temp password sent by email, mandatory password change on first login enforced at the API middleware level",
          "Audit log visible only to Superadmin: records all sensitive actions (login, property changes, user management) with actor avatar, IP, and entity reference",
          "CSV export for clients, visits, and offers — UTF-8 BOM prepended for correct rendering in Spanish-locale Excel",
          "Security hardening: helmet with strict CSP, global rate limiter (300 req/15 min), login-specific rate limiter (10/15 min), 30s request timeout, 50 KB body limit",
        ],
        role: "Sole developer — backend (Node.js/Express/Prisma), frontend (React/Vite), database design, and deployment architecture",
        context: "Freelance / professional project",
      },
      es: {
        overview:
          "Plataforma inmobiliaria full-stack (v1.0.2) desarrollada para un cliente en Cuenca, Ecuador. El sistema gestiona el ciclo de vida completo de propiedades — desde la publicación hasta la venta — a través de tres portales distintos: catálogo público, portal de clientes para compradores y un back-office con paneles separados para Admin y Superadmin. Protegido con autenticación JWT dual (tokens separados para admins y clientes), almacenamiento de imágenes pluggable (local o Supabase Storage) y geolocalización con Leaflet. Construido con React 18 + Vite en el frontend, y Node.js + Express + Prisma ORM + PostgreSQL en el backend.",
        highlights: [
          "Tres portales separados: catálogo público, portal de clientes (registro/login/mis-visitas/mis-ofertas), panel Admin y panel Superadmin — cada uno con su propia cookie JWT y store de autenticación en Zustand",
          "Las propiedades tienen códigos autogenerados (AZU-XXXX), estados de ciclo de vida completos (ACTIVE / INACTIVE / RESERVED / SOLD) y control de publicación explícito — las propiedades vendidas permanecen publicadas con un badge bloqueado",
          "Upload múltiple de imágenes (hasta 20 imágenes, 10 MB c/u, JPG/PNG/WEBP/HEIC) con reordenamiento drag-and-drop, portada configurable y promoción automática de portada al eliminar la actual (vía transacción Prisma)",
          "Almacenamiento pluggable: Multer diskStorage local o Supabase Storage — intercambiable con una sola variable de entorno sin cambios de código",
          "Geolocalización interactiva: picker de ubicación en el formulario admin y mapa público (Leaflet) en el detalle de propiedad — latitud/longitud almacenados en la base de datos",
          "Agendamiento de visitas y gestión de ofertas con rate limiting, validación de oferta mínima, stubs de notificación por email (templates listos para SMTP) y flujos de estado (PENDING → CONFIRMED / ACCEPTED / REJECTED)",
          "Funciones de Superadmin: CRUD completo de admins, email autogenerado (nombre.apellido@azuayhogar.com), contraseña temporal enviada por email, cambio de contraseña obligatorio en el primer login forzado a nivel de middleware de API",
          "Registro de auditoría visible solo para Superadmin: registra todas las acciones sensibles (login, cambios de propiedades, gestión de usuarios) con avatar del actor, IP y referencia de entidad",
          "Exportación CSV de clientes, visitas y ofertas — BOM UTF-8 incluido para correcta visualización en Excel en configuración español-latinoamericana",
          "Seguridad robusta: helmet con CSP estricto, rate limiter global (300 req/15 min), rate limiter de login (10/15 min), timeout de request de 30s, límite de body de 50 KB",
        ],
        role: "Desarrollador único — backend (Node.js/Express/Prisma), frontend (React/Vite), diseño de base de datos y arquitectura de despliegue",
        context: "Proyecto freelance / profesional",
      },
    },
  },
  {
    id: 3,
    en: {
      title: "ATM Voice Chat Assistant",
      description:
        "A voice-integrated chat system designed to consult ATM errors, locations, and error history from a database of ATMs operating in Ecuador.",
    },
    es: {
      title: "Asistente de Chat por Voz para ATMs",
      description:
        "Sistema de chat con voz integrado diseñado para consultar errores, ubicaciones e historial de errores desde una base de datos de cajeros automáticos en Ecuador.",
    },
    tech: ["Python", "APIs", "Database", "Voice Interface", "Chat System", "AI-ready Architecture"],
    github: "https://github.com/brandocabrera",
    demo: null,
    gradient: "from-violet-500/20 to-purple-600/20",
    accent: "from-violet-400 to-purple-500",
    details: {
      en: {
        overview:
          "A voice-integrated chat assistant for ATMs operating across Ecuador. The system lets support staff query ATM error codes, machine locations, and error history through a conversational voice interface backed by a structured database. The architecture is AI-ready, designed to integrate an AI module as a future enhancement without restructuring.",
        highlights: [
          "Voice interface integrated into the chat flow for hands-free ATM queries",
          "Queries ATM errors, locations, and full error history from a structured database",
          "REST API layer decouples the voice/chat frontend from the data backend",
          "AI-ready architecture — the module boundary is already defined for future AI integration",
          "Built in Python with a focus on reliability and extensibility",
        ],
        role: "Developer — system design, backend integration, and voice interface",
        context: "Professional project",
      },
      es: {
        overview:
          "Asistente de chat con voz integrado para cajeros automáticos en Ecuador. El sistema permite al personal de soporte consultar códigos de error, ubicaciones de cajeros e historial de errores a través de una interfaz conversacional con voz respaldada por una base de datos estructurada. La arquitectura está preparada para IA, diseñada para integrar un módulo de inteligencia artificial en el futuro sin reestructurar el sistema.",
        highlights: [
          "Interfaz de voz integrada en el flujo de chat para consultas sin manos",
          "Consulta errores de ATM, ubicaciones e historial completo de errores desde una base de datos estructurada",
          "Capa de REST API que desacopla el frontend de voz/chat del backend de datos",
          "Arquitectura AI-ready — el límite del módulo ya está definido para futuras integraciones de IA",
          "Desarrollado en Python con foco en fiabilidad y extensibilidad",
        ],
        role: "Desarrollador — diseño del sistema, integración backend e interfaz de voz",
        context: "Proyecto profesional",
      },
    },
  },
  {
    id: 4,
    en: {
      title: "Computer Vision Tool for KUKA KR5-2",
      description:
        "Academic project implementing real-time object identification and classification integrated with a KUKA KR5-2 ARC HW industrial robot. OpenCV and ArUco markers detect objects and calculate their dimensions (cm) and X-Y coordinates. A PIC 16F18875 microcontroller relays the data via serial connection to the robot controller, which runs KRL programs generated in Python to position the arm and classify objects using an electromagnet end effector. Includes a graphical interface with individual and automatic classification modes.",
    },
    es: {
      title: "Herramienta de Visión Artificial para KUKA KR5-2",
      description:
        "Proyecto académico que implementa identificación y clasificación de objetos en tiempo real integrada con el robot industrial KUKA KR5-2 ARC HW. OpenCV y marcadores ArUco detectan objetos y calculan sus dimensiones (cm) y coordenadas X-Y. Un microcontrolador PIC 16F18875 transmite los datos vía serial al controlador del robot, que ejecuta programas KRL generados con Python para posicionar el brazo y clasificar objetos mediante un electroimán en el actuador final. Incluye interfaz gráfica con modos de clasificación individual y automática.",
    },
    tech: ["Python", "OpenCV", "ArUco Markers", "KRL", "C", "PIC 16F18875", "Computer Vision", "Robotics", "Serial Communication"],
    images: ["/kuka/image66.png", "/kuka/image35.jpeg", "/kuka/image65.png"],
    github: "https://github.com/NightMare2210/Technological-tool-for-identification-and-classification-of-objects-for-a-KUKA-KR5-2",
    demo: null,
    gradient: "from-orange-500/20 to-red-600/20",
    accent: "from-orange-400 to-red-500",
    details: {
      en: {
        overview:
          "An undergraduate thesis project developed in co-authorship with Cristian Jiménez, under the supervision of Ing. Paúl Andrés Chasi Pesantes, MSc. The system uses computer vision to detect objects in real time, calculate their dimensions and position, and drive a KUKA KR5-2 ARC HW industrial robot to classify them autonomously using an electromagnet end effector.",
        highlights: [
          "OpenCV + ArUco markers detect objects and compute Base × Altura (cm) and X-Y Cartesian coordinates in real time",
          "16×16 point workspace matrix maps vision coordinates to precise robot positions",
          "PIC 16F18875 microcontroller (C language) bridges the vision system and robot controller via serial communication",
          "Python generates KRL programs (.src + .dat) dynamically for the KUKA robot controller",
          "Electromagnet end effector picks and places objects for autonomous classification",
          "Graphical interface with individual classification mode and fully automatic mode",
        ],
        role: "Co-author — Brando Daniel Cabrera Bonilla (with Cristian Jiménez)",
        context: "Academic thesis (undergraduate)",
      },
      es: {
        overview:
          "Proyecto de tesis de pregrado desarrollado en coautoría con Cristian Jiménez, bajo la tutoría del Ing. Paúl Andrés Chasi Pesantes, MSc. El sistema utiliza visión artificial para detectar objetos en tiempo real, calcular sus dimensiones y posición, y controlar un robot industrial KUKA KR5-2 ARC HW para clasificarlos de forma autónoma mediante un electroimán como actuador final.",
        highlights: [
          "OpenCV + marcadores ArUco detectan objetos y calculan Base × Altura (cm) y coordenadas cartesianas X-Y en tiempo real",
          "Matriz de trabajo de 16×16 puntos mapea las coordenadas de visión a posiciones precisas del robot",
          "Microcontrolador PIC 16F18875 (lenguaje C) enlaza el sistema de visión y el controlador del robot vía comunicación serial",
          "Python genera programas KRL (.src + .dat) dinámicamente para el controlador del robot KUKA",
          "Electroimán como actuador final para tomar y colocar objetos en clasificación autónoma",
          "Interfaz gráfica con modo de clasificación individual y modo completamente automático",
        ],
        role: "Coautor — Brando Daniel Cabrera Bonilla (con Cristian Jiménez)",
        context: "Tesis académica (pregrado)",
      },
    },
  },
];

export default projects;
