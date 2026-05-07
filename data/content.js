const content = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      name: "Brando Daniel Cabrera Bonilla",
      title: "Software Developer · Python Backend · AI & Architecture",
      description:
        "I build robust backend systems, intelligent APIs, and full-stack applications — with a strong focus on clean architecture, AI integration, and scalable design.",
      cta: {
        projects: "View Projects",
        cv: "Download CV",
        contact: "Contact Me",
      },
    },
    about: {
      title: "About Me",
      body: "I'm a software developer focused on Python backend development, FastAPI, automation, and AI integration. I've built a full-stack real estate platform (Azuay Hogar — React + Node.js + PostgreSQL), a computer vision system integrated with a KUKA KR5-2 industrial robot (OpenCV + KRL + PIC microcontroller) as my undergraduate thesis, and a voice-enabled ATM assistant for a CMS company. I work with AI-assisted development daily — using the Anthropic SDK, OpenAI, and Gemini in real production contexts. Currently pursuing a Master's in Software with a specialization in System Architecture.",
    },
    skills: {
      title: "Skills",
      groups: [
        {
          label: "Backend",
          items: ["Python", "FastAPI", "Flask", "Node.js", "Express", "REST APIs", "JSON", "SQL", "PostgreSQL", "MySQL"],
        },
        {
          label: "Frontend",
          items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Vite"],
        },
        {
          label: "Tools",
          items: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Prisma ORM", "pgAdmin", "Linux", "CRM Systems"],
        },
        {
          label: "AI",
          items: ["OpenAI", "Claude", "Gemini", "Anthropic SDK", "Computer Vision", "OpenCV", "AI-assisted development", "Prompt Engineering", "AI Integrations"],
        },
        {
          label: "Software Architecture",
          items: ["System Design", "API Architecture", "Database Design", "Modular Architecture", "Scalable Applications"],
        },
        {
          label: "Embedded & Robotics",
          items: ["Arduino", "PIC Microcontrollers", "KRL (KUKA Robot Language)", "Serial Communication", "C"],
        },
      ],
    },
    projects: {
      title: "Projects",
      github: "GitHub",
      demo: "Live Demo",
      viewDetails: "View Details",
      close: "Close",
      highlights: "Key Highlights",
      role: "Role",
      context: "Context",
      overview: "Overview",
    },
    experience: {
      title: "Experience & Education",
      educationLabel: "Education",
      experienceLabel: "Experience",
      education: [
        {
          degree: "Master's Degree in Software",
          specialization: "Specialization in System Architecture",
          status: "In progress",
        },
      ],
      items: [
        "Full-stack real estate platform — Azuay Hogar Inmobiliaria (React + Node.js + PostgreSQL)",
        "Computer vision system for KUKA KR5-2 industrial robot (OpenCV + KRL + PIC microcontroller)",
        "ATM voice chat assistant for CMS company (Python + voice interface + structured DB)",
        "Python backend development — APIs, automation, and AI integrations",
        "Freelance web development — custom solutions for clients",
        "Master's in Software (System Architecture) — in progress",
      ],
    },
    contact: {
      title: "Contact Me",
      subtitle: "Let's connect — feel free to reach out.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      whatsappLabel: "WhatsApp",
      sending: "Sending...",
      successMsg: "Message sent successfully!",
      errorMsg: "Something went wrong. Please try again.",
    },
    footer: {
      built: "Built with Next.js and Tailwind CSS.",
      description: "Designed to present software projects, technical skills, and professional experience.",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      name: "Brando Daniel Cabrera Bonilla",
      title: "Desarrollador de Software · Python Backend · IA y Arquitectura",
      description:
        "Construyo sistemas backend robustos, APIs inteligentes y aplicaciones full-stack — con foco en arquitectura limpia, integración de IA y diseño escalable.",
      cta: {
        projects: "Ver proyectos",
        cv: "Descargar CV",
        contact: "Contactarme",
      },
    },
    about: {
      title: "Sobre mí",
      body: "Soy desarrollador de software enfocado en Python backend, FastAPI, automatización e integración de IA. Construí una plataforma inmobiliaria full-stack (Azuay Hogar — React + Node.js + PostgreSQL), un sistema de visión artificial integrado con un robot industrial KUKA KR5-2 (OpenCV + KRL + microcontrolador PIC) como tesis de grado, y un asistente de voz para ATMs para una empresa CMS. Trabajo con desarrollo asistido por IA en contextos reales — Anthropic SDK, OpenAI y Gemini en producción. Actualmente curso una Maestría en Software con mención en Arquitectura de Sistemas.",
    },
    skills: {
      title: "Habilidades",
      groups: [
        {
          label: "Backend",
          items: ["Python", "FastAPI", "Flask", "Node.js", "Express", "REST APIs", "JSON", "SQL", "PostgreSQL", "MySQL"],
        },
        {
          label: "Frontend",
          items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Vite"],
        },
        {
          label: "Herramientas",
          items: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Prisma ORM", "pgAdmin", "Linux", "Sistemas CRM"],
        },
        {
          label: "IA",
          items: ["OpenAI", "Claude", "Gemini", "Anthropic SDK", "Computer Vision", "OpenCV", "Desarrollo asistido por IA", "Prompt Engineering", "Integraciones de IA"],
        },
        {
          label: "Arquitectura de Software",
          items: ["Diseño de Sistemas", "Arquitectura de APIs", "Diseño de Bases de Datos", "Arquitectura Modular", "Aplicaciones Escalables"],
        },
        {
          label: "Embebidos y Robótica",
          items: ["Arduino", "Microcontroladores PIC", "KRL (KUKA Robot Language)", "Comunicación Serial", "C"],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      github: "GitHub",
      demo: "Demo en vivo",
      viewDetails: "Ver detalles",
      close: "Cerrar",
      highlights: "Puntos clave",
      role: "Rol",
      context: "Contexto",
      overview: "Descripción",
    },
    experience: {
      title: "Experiencia y Educación",
      educationLabel: "Educación",
      experienceLabel: "Experiencia",
      education: [
        {
          degree: "Maestría en Software",
          specialization: "Mención en Arquitectura de Sistemas",
          status: "En curso",
        },
      ],
      items: [
        "Plataforma inmobiliaria full-stack — Azuay Hogar Inmobiliaria (React + Node.js + PostgreSQL)",
        "Sistema de visión artificial para robot industrial KUKA KR5-2 (OpenCV + KRL + microcontrolador PIC)",
        "Asistente de chat por voz para ATMs — empresa CMS (Python + interfaz de voz + base de datos estructurada)",
        "Desarrollo backend en Python — APIs, automatización e integraciones de IA",
        "Desarrollo web freelance — soluciones a medida para clientes",
        "Maestría en Software (Arquitectura de Sistemas) — en curso",
      ],
    },
    contact: {
      title: "Contactarme",
      subtitle: "Conectemos — no dudes en escribirme.",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar mensaje",
      emailLabel: "Correo",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      whatsappLabel: "WhatsApp",
      sending: "Enviando...",
      successMsg: "¡Mensaje enviado correctamente!",
      errorMsg: "Algo salió mal. Por favor, intentá de nuevo.",
    },
    footer: {
      built: "Construido con Next.js y Tailwind CSS.",
      description: "Diseñado para presentar proyectos de software, habilidades técnicas y experiencia profesional.",
      rights: "Todos los derechos reservados.",
    },
  },
};

export default content;
