/* ==========================================================================
   fgonzalez.cl - Sawad Framer Template Logic & Bilingual i18n
   Default Language: Spanish (es) | Optional Language: English (en)
   ========================================================================== */

// Active Language State (Default: 'es', persisted in localStorage)
let currentLang = localStorage.getItem('portfolioLang') || 'es';

// UI Dictionary
const i18n = {
  es: {
    navExp: "Experiencia",
    navProjects: "Proyectos",
    navHobbies: "Hobbies",
    navStack: "Stack",
    navContact: "Contacto",
    profileBio: "Auto-Leader & Senior Software Engineer con más de 10 años creando soluciones de software, liderando equipos técnicos y desarrollando proyectos de innovación.",
    btnAboutMe: "Sobre mí (Historia & Valores) ↗",
    expTitle1: "+10 AÑOS DE",
    expTitle2: "EXPERIENCIA",
    projTitle1: "PROYECTOS",
    projTitle2: "DESTACADOS",
    pasTitle1: "INTERESES",
    pasTitle2: "& HOBBIES",
    stackTitle1: "HERRAMIENTAS",
    stackTitle2: "& TECNOLOGÍAS",
    contactTitle: "¿CONECTAMOS?",
    contactSubtitle: "Disponible para liderazgo de proyectos tecnológicos, arquitectura de sistemas y colaboración en software.",
    btnEmail: "Enviar Email ✉️ (administrator@fgonzalez.cl)",
    btnLinkedIn: "LinkedIn ↗",
    btnLinkedInNav: "LinkedIn ↗",
    footerCopy: "© 2026 Francisco González. Todos los derechos reservados.",
    footerHost: "Hosting Estático en",
    verDetalles: "Ver detalles",
    saberMas: "Saber más",
    skillsTitle: "⚡ Skills & Competencias",
    skillsSubtitle: "Habilidades Blandas & Dominio Técnico",
    coreSkillsTitle: "Competencias de Ingeniería",
    techSkillsTitle: "Nivel Técnico & Herramientas",
    heroesTitle: "⭐ Mis Héroes",
    heroesSubtitle: "Inspiración & Mentores"
  },
  en: {
    navExp: "Experience",
    navProjects: "Projects",
    navHobbies: "Hobbies",
    navStack: "Stack",
    navContact: "Contact",
    profileBio: "Auto-Leader & Senior Software Engineer with over 10 years building software solutions, leading tech teams, and developing innovative projects.",
    btnAboutMe: "About me (Story & Values) ↗",
    expTitle1: "+10 YEARS OF",
    expTitle2: "EXPERIENCE",
    projTitle1: "FEATURED",
    projTitle2: "PROJECTS",
    pasTitle1: "INTERESTS",
    pasTitle2: "& HOBBIES",
    stackTitle1: "TOOLS",
    stackTitle2: "& TECH STACK",
    contactTitle: "GET IN TOUCH",
    contactSubtitle: "Available for tech project leadership, systems architecture, and software collaboration.",
    btnEmail: "Send Email ✉️ (administrator@fgonzalez.cl)",
    btnLinkedIn: "LinkedIn ↗",
    btnLinkedInNav: "LinkedIn ↗",
    footerCopy: "© 2026 Francisco González. All rights reserved.",
    footerHost: "Static Hosting on",
    verDetalles: "View details",
    saberMas: "Learn more",
    skillsTitle: "⚡ Skills & Competencies",
    skillsSubtitle: "Core Engineering & Technical Proficiency",
    coreSkillsTitle: "Engineering Competencies",
    techSkillsTitle: "Technical Level & Tools",
    heroesTitle: "⭐ My Heroes",
    heroesSubtitle: "Inspiration & Mentors"
  }
};

// About Me Modal Data (Bilingual)
const aboutMeData = {
  es: {
    id: "sobre-mi-modal",
    title: "Francisco González • Historia & Valores",
    company: "Software Engineer & Maker",
    date: "+10 Años de Trayectoria",
    image: "assets/heroes/foto_profile.jpg",
    details: "Hola, soy Francisco González, ingeniero de software y creador. Curioso por naturaleza respecto al conocimiento técnico, con altas habilidades para el aprendizaje autodidacta, empático y colaborador con mis compañeros de equipo.\n\nApasionado por trabajar en equipo, aportando constantemente nuevas ideas alineadas con tecnologías emergentes, patrones de arquitectura limpia y optimización de procesos de programación.",
    tags: ["Software Engineer", "Auto-Leader", "Maker", "Arquitectura Clean", "Trabajo en Equipo"]
  },
  en: {
    id: "sobre-mi-modal",
    title: "Francisco González • Story & Values",
    company: "Software Engineer & Maker",
    date: "+10 Years of Experience",
    image: "assets/heroes/foto_profile.jpg",
    details: "Hello, I'm Francisco González, a software engineer and maker. Naturally curious about technical knowledge, with strong self-learning skills, empathetic, and supportive with teammates.\n\nPassionate about teamwork, constantly bringing new ideas aligned with emerging technologies, clean architecture patterns, and programming process optimization.",
    tags: ["Software Engineer", "Auto-Leader", "Maker", "Clean Architecture", "Teamwork"]
  }
};

// Core Engineering Skills (Bilingual)
const coreEngineeringSkills = {
  es: [
    { icon: "💡", name: "Resolución de problemas" },
    { icon: "👁️", name: "Visualización de ideas" },
    { icon: "💻", name: "Lenguajes de programación" },
    { icon: "🎯", name: "Atención al detalle" },
    { icon: "🤝", name: "Colaboración con desarrolladores" },
    { icon: "🌱", name: "Aprendizaje autodidacta" },
    { icon: "🧩", name: "Experiencia en POO" }
  ],
  en: [
    { icon: "💡", name: "Problem-solving skills" },
    { icon: "👁️", name: "Visualizing ideas" },
    { icon: "💻", name: "Programming languages" },
    { icon: "🎯", name: "Attention to detail" },
    { icon: "🤝", name: "Collaborating with other developers" },
    { icon: "🌱", name: "Self-development skills" },
    { icon: "🧩", name: "Experience on OOP" }
  ]
};

// Technical Skills (Bilingual levels)
const technicalSkills = {
  es: [
    { name: "Java", level: "Avanzado", percent: 90 },
    { name: "Javascript", level: "Intermedio", percent: 75 },
    { name: "Typescript", level: "Intermedio", percent: 70 },
    { name: "AngularJS", level: "Intermedio", percent: 65 },
    { name: "SQL", level: "Intermedio", percent: 75 },
    { name: "NoSQL", level: "Inicial", percent: 50 },
    { name: "CSS", level: "Intermedio", percent: 70 },
    { name: "UML", level: "Intermedio", percent: 75 },
    { name: "PHP", level: "Intermedio", percent: 75 },
    { name: "Wordpress", level: "Intermedio", percent: 70 },
    { name: "Docker", level: "Inicial", percent: 50 },
    { name: "GNU Bash", level: "Intermedio", percent: 70 },
    { name: "BPMN (JBPM / Activiti)", level: "Intermedio", percent: 70 },
    { name: "Git", level: "Intermedio", percent: 80 },
    { name: "Maven", level: "Intermedio", percent: 80 },
    { name: "OS (OSX / Linux)", level: "Intermedio", percent: 75 }
  ],
  en: [
    { name: "Java", level: "Advanced", percent: 90 },
    { name: "Javascript", level: "Intermediate", percent: 75 },
    { name: "Typescript", level: "Intermediate", percent: 70 },
    { name: "AngularJS", level: "Intermediate", percent: 65 },
    { name: "SQL", level: "Intermediate", percent: 75 },
    { name: "NoSQL", level: "Novice", percent: 50 },
    { name: "CSS", level: "Intermediate", percent: 70 },
    { name: "UML", level: "Intermediate", percent: 75 },
    { name: "PHP", level: "Intermediate", percent: 75 },
    { name: "Wordpress", level: "Intermediate", percent: 70 },
    { name: "Docker", level: "Novice", percent: 50 },
    { name: "GNU Bash", level: "Intermediate", percent: 70 },
    { name: "BPMN (JBPM / Activiti)", level: "Intermediate", percent: 70 },
    { name: "Git", level: "Intermediate", percent: 80 },
    { name: "Maven", level: "Intermediate", percent: 80 },
    { name: "OS (OSX / Linux)", level: "Intermediate", percent: 75 }
  ]
};

// Experience Data (Bilingual)
const experienceData = {
  es: [
    {
      id: "autoleader-bee",
      title: "Auto-Leader & Tech Lead",
      company: "Bee",
      date: "Reciente / Actualidad",
      summary: "Liderazgo técnico, arquitectura de soluciones ágiles y gestión de equipos distribuidos.",
      details: "Desempeño como Auto-Leader coordinando equipos de desarrollo, definiendo estándares de código, arquitectura de sistemas y garantizando entregables de alta calidad en entornos ágiles.",
      image: "assets/portfolio/autoleader.jpg",
      tags: ["Tech Lead", "Architecture", "Agile", "Management"]
    },
    {
      id: "java-senior-dev",
      title: "Java Senior Developer",
      company: "Desarrollo Enterprise",
      date: "Enterprise Backend",
      summary: "Desarrollo de aplicaciones backend robustas y de alto rendimiento en Java y Spring Boot.",
      details: "Diseño e implementación de microservicios, APIs RESTful, optimización de consultas SQL/NoSQL, integración de sistemas heredados y mantenimiento de plataformas empresariales críticas.",
      image: "assets/portfolio/java_senior.jpg",
      tags: ["Java", "Spring Boot", "APIs REST", "Backend", "SQL"]
    },
    {
      id: "coldfusion-dev",
      title: "ColdFusion Developer",
      company: "Trabajando.com",
      date: "Portales de Empleo",
      summary: "Desarrollo y mantenimiento de plataformas web de empleo masivas en ColdFusion.",
      details: "Mantenimiento y evolución del portal Trabajando.com en tecnología Adobe ColdFusion, optimizando rendimiento de servidor web, bases de datos y experiencia de usuario.",
      image: "assets/portfolio/coldfusion.jpg",
      tags: ["ColdFusion", "SQL Server", "Trabajando.com", "High Traffic"]
    },
    {
      id: "asp-dev",
      title: "ASP & VBScript Developer",
      company: "Mira360",
      date: "Sistemas Web",
      summary: "Desarrollo web dinámico y aplicaciones a medida en Active Server Pages (ASP).",
      details: "Implementación de sitios web dinámicos, integración con bases de datos relacionales y mantenimiento de aplicaciones web en servidor Microsoft IIS.",
      image: "assets/portfolio/asp_mira360.png",
      tags: ["ASP", "VBScript", "IIS", "Mira360"]
    },
    {
      id: "php-junior-dev",
      title: "PHP Junior Developer",
      company: "Creear",
      date: "Desarrollo Web Agency",
      summary: "Desarrollo web frontend y backend en PHP y MySQL para proyectos digitales.",
      details: "Creación de sitios dinámicos, maquetación CSS/HTML, scripts backend en PHP y administración de MySQL en la agencia Creear.",
      image: "assets/portfolio/php_creear.png",
      tags: ["PHP", "MySQL", "HTML5/CSS3", "Creear"]
    }
  ],
  en: [
    {
      id: "autoleader-bee",
      title: "Auto-Leader & Tech Lead",
      company: "Bee",
      date: "Recent / Present",
      summary: "Technical leadership, agile solutions architecture, and distributed team management.",
      details: "Role as Auto-Leader coordinating development teams, defining code standards, systems architecture, and ensuring high-quality deliverables in agile environments.",
      image: "assets/portfolio/autoleader.jpg",
      tags: ["Tech Lead", "Architecture", "Agile", "Management"]
    },
    {
      id: "java-senior-dev",
      title: "Java Senior Developer",
      company: "Enterprise Development",
      date: "Enterprise Backend",
      summary: "Development of robust, high-performance backend applications in Java and Spring Boot.",
      details: "Design and implementation of microservices, RESTful APIs, SQL/NoSQL query optimization, legacy system integration, and maintenance of critical enterprise platforms.",
      image: "assets/portfolio/java_senior.jpg",
      tags: ["Java", "Spring Boot", "REST APIs", "Backend", "SQL"]
    },
    {
      id: "coldfusion-dev",
      title: "ColdFusion Developer",
      company: "Trabajando.com",
      date: "Job Portals",
      summary: "Development and maintenance of massive web job portals in ColdFusion.",
      details: "Maintenance and evolution of Trabajando.com portal built on Adobe ColdFusion technology, optimizing web server performance, databases, and user experience.",
      image: "assets/portfolio/coldfusion.jpg",
      tags: ["ColdFusion", "SQL Server", "Trabajando.com", "High Traffic"]
    },
    {
      id: "asp-dev",
      title: "ASP & VBScript Developer",
      company: "Mira360",
      date: "Web Systems",
      summary: "Dynamic web development and custom applications in Active Server Pages (ASP).",
      details: "Implementation of dynamic websites, relational database integration, and web application maintenance on Microsoft IIS web servers.",
      image: "assets/portfolio/asp_mira360.png",
      tags: ["ASP", "VBScript", "IIS", "Mira360"]
    },
    {
      id: "php-junior-dev",
      title: "PHP Junior Developer",
      company: "Creear",
      date: "Digital Agency",
      summary: "Frontend and backend web development in PHP and MySQL for digital projects.",
      details: "Creation of dynamic websites, HTML5/CSS3 layout, PHP backend scripts, and MySQL database management at Creear agency.",
      image: "assets/portfolio/php_creear.png",
      tags: ["PHP", "MySQL", "HTML5/CSS3", "Creear"]
    }
  ]
};

// Projects Data (Bilingual)
const projectsData = {
  es: [
    {
      id: "zonekeyboards-site",
      title: "ZoneKeyboards.cl",
      category: "E-Commerce / Comunidad",
      icon: "⌨️",
      summary: "Plataforma web y e-commerce dedicado a la comunidad de teclados mecánicos custom.",
      details: "Diseño y desarrollo de la plataforma ZoneKeyboards.cl para entusiastas de teclados custom, catálogo de productos, guías y experiencia de compra optimizada.",
      image: "assets/portfolio/zonekeyboards.png",
      tags: ["E-Commerce", "UI/UX", "Keyboards"]
    },
    {
      id: "rubick-site",
      title: "Rubick.cl",
      category: "Speedcubing / Sitio Web",
      icon: "🧩",
      summary: "Plataforma web enfocada en velocidad, cubos Rubik y venta de coleccionables.",
      details: "Desarrollo web del sitio Rubick.cl, optimizado para catálogo interactivo, velocidad de carga y presentación de productos de velocidad y resolución de puzles.",
      image: "assets/portfolio/rubick.png",
      tags: ["Web Dev", "Speedcubing", "Catalogo"]
    },
    {
      id: "category-calendar",
      title: "Category Calendar",
      category: "Componente UI / JS",
      icon: "📅",
      summary: "Componente interactivo de calendario con categorización dinámica de eventos.",
      details: "Desarrollo de un plugin/demostración visual de calendario interactivo para organización y filtrado eficiente de actividades por categorías de color.",
      image: "assets/portfolio/category_calendar.png",
      tags: ["JavaScript", "Calendar", "UI Component"]
    }
  ],
  en: [
    {
      id: "zonekeyboards-site",
      title: "ZoneKeyboards.cl",
      category: "E-Commerce / Community",
      icon: "⌨️",
      summary: "Web platform and e-commerce dedicated to the custom mechanical keyboard community.",
      details: "Design and development of ZoneKeyboards.cl platform for custom keyboard enthusiasts, product catalog, guides, and optimized shopping experience.",
      image: "assets/portfolio/zonekeyboards.png",
      tags: ["E-Commerce", "UI/UX", "Keyboards"]
    },
    {
      id: "rubick-site",
      title: "Rubick.cl",
      category: "Speedcubing / Website",
      icon: "🧩",
      summary: "Web platform focused on speedcubing, Rubik's cubes, and collectible sales.",
      details: "Web development of Rubick.cl website, optimized for interactive catalog, fast load times, and presentation of speedsolving puzzle products.",
      image: "assets/portfolio/rubick.png",
      tags: ["Web Dev", "Speedcubing", "Catalog"]
    },
    {
      id: "category-calendar",
      title: "Category Calendar",
      category: "UI Component / JS",
      icon: "📅",
      summary: "Interactive calendar component with dynamic event categorization.",
      details: "Development of an interactive calendar visual plugin/demo for efficient activity organization and color-category filtering.",
      image: "assets/portfolio/category_calendar.png",
      tags: ["JavaScript", "Calendar", "UI Component"]
    }
  ]
};

// Hobbies & Passions Data (Bilingual)
const passionsData = {
  es: [
    {
      id: "3d-printing",
      title: "Impresión & Modelado 3D",
      category: "Maker / Prototipado",
      icon: "🖨️",
      summary: "Diseño de modelos 3D, prototipado rápido e impresión tridimensional.",
      details: "Modelado CAD de piezas mecánicas, accesorios custom, ajuste de parámetros de laminado (Slicing) y fabricación aditiva FDM/Resina.",
      image: "assets/portfolio/3d_printing.jpg",
      tags: ["3D Printing", "CAD", "Prototyping"]
    },
    {
      id: "telescope-1200",
      title: "Telescopio Reflector 1200/160",
      category: "Astronomía Aficionada",
      icon: "🔭",
      summary: "Observación astronómica, astrofotografía y proyectos ópticos.",
      details: "Exploración del cielo nocturno, observación planetaria y de espacio profundo utilizando un telescopio reflector focal 1200mm y apertura 160mm.",
      image: "assets/portfolio/telescope.jpg",
      tags: ["Astronomy", "Optics", "Stargazing"]
    },
    {
      id: "bachelor-degree",
      title: "Bachelor Degree",
      category: "Educación",
      icon: "🎓",
      summary: "Grado académico profesional en Ciencias de la Computación / Ingeniería.",
      details: "Formación académica en algoritmos, estructuras de datos, ingeniería de software, bases de datos y arquitectura de computadores.",
      image: "assets/portfolio/bachelor_degree.jpg",
      tags: ["Degree", "Computer Science", "Engineering"]
    },
    {
      id: "courses",
      title: "Cursos & Libros de Ingeniería",
      category: "Formación Continua",
      icon: "📚",
      summary: "Capacitación continua en nuevas tecnologías, arquitecturas y patrones.",
      details: "Actualización constante en desarrollo web moderno, arquitecturas cloud, seguridad informática y metodologías ágiles de trabajo.",
      image: "assets/portfolio/courses.jpg",
      tags: ["Learning", "Books", "Tech Trends"]
    },
    {
      id: "video-games",
      title: "Videojuegos & Gaming",
      category: "Entretenimiento",
      icon: "🎮",
      summary: "Análisis de mecánicas de juego, e-sports y pasión por los videojuegos.",
      details: "Afición por la cultura del videojuego, estrategia, desarrollo indie y análisis del game design en títulos modernos y retro.",
      image: "assets/portfolio/videogames.jpg",
      tags: ["Gaming", "Game Design", "Culture"]
    },
    {
      id: "hobbies-moto",
      title: "Hobbies & Motociclismo",
      category: "Personal",
      icon: "🏍️",
      summary: "Rutas en motocicleta, mecánica básica y actividades al aire libre.",
      details: "Pasión por los viajes sobre ruedas, mantenimiento básico de motocicletas y actividades de esparcimiento personal.",
      image: "assets/portfolio/hobbies_moto.png",
      tags: ["Motorsports", "Outdoors", "Lifestyle"]
    }
  ],
  en: [
    {
      id: "3d-printing",
      title: "3D Printing & Modeling",
      category: "Maker / Prototyping",
      icon: "🖨️",
      summary: "3D model design, rapid prototyping, and additive manufacturing.",
      details: "CAD modeling of mechanical parts, custom accessories, slicing parameter tuning, and FDM/Resin additive manufacturing.",
      image: "assets/portfolio/3d_printing.jpg",
      tags: ["3D Printing", "CAD", "Prototyping"]
    },
    {
      id: "telescope-1200",
      title: "1200/160 Reflector Telescope",
      category: "Amateur Astronomy",
      icon: "🔭",
      summary: "Astronomical observation, astrophotography, and optical projects.",
      details: "Night sky exploration, planetary observation, and deep space imaging using a 1200mm focal length, 160mm aperture reflector telescope.",
      image: "assets/portfolio/telescope.jpg",
      tags: ["Astronomy", "Optics", "Stargazing"]
    },
    {
      id: "bachelor-degree",
      title: "Bachelor Degree",
      category: "Education",
      icon: "🎓",
      summary: "Professional degree in Computer Science / Engineering.",
      details: "Academic foundation in algorithms, data structures, software engineering, databases, and computer architecture.",
      image: "assets/portfolio/bachelor_degree.jpg",
      tags: ["Degree", "Computer Science", "Engineering"]
    },
    {
      id: "courses",
      title: "Engineering Courses & Books",
      category: "Continuous Learning",
      icon: "📚",
      summary: "Ongoing training in modern tech, architectures, and software design patterns.",
      details: "Continuous learning in modern web development, cloud architectures, cybersecurity, and agile methodologies.",
      image: "assets/portfolio/courses.jpg",
      tags: ["Learning", "Books", "Tech Trends"]
    },
    {
      id: "video-games",
      title: "Video Games & Gaming",
      category: "Entertainment",
      icon: "🎮",
      summary: "Game mechanics analysis, e-sports, and passion for gaming.",
      details: "Enthusiasm for gaming culture, strategy, indie game development, and game design analysis across retro and modern titles.",
      image: "assets/portfolio/videogames.jpg",
      tags: ["Gaming", "Game Design", "Culture"]
    },
    {
      id: "hobbies-moto",
      title: "Hobbies & Motorsports",
      category: "Personal",
      icon: "🏍️",
      summary: "Motorcycle road trips, basic mechanics, and outdoor activities.",
      details: "Passion for road trips on two wheels, basic motorcycle maintenance, and outdoor recreational lifestyle.",
      image: "assets/portfolio/hobbies_moto.png",
      tags: ["Motorsports", "Outdoors", "Lifestyle"]
    }
  ]
};

// My Heroes Data (Bilingual)
const heroesData = {
  es: [
    {
      id: "musashi",
      name: "Musashi Miyamoto",
      title: "Estratega & Filósofo Samurai",
      quote: "You may abandon your own body but you must preserve your honour.",
      image: "assets/heroes/musashi.jpg"
    },
    {
      id: "ada-lovelace",
      name: "Ada Lovelace",
      title: "Matemática & Primera Programadora",
      quote: "I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand...",
      image: "assets/heroes/ada_lovelace.jpg"
    },
    {
      id: "satoshi-iwata",
      name: "Satoshi Iwata",
      title: "Programador & Ex-Presidente de Nintendo",
      quote: "I am a corporate president. In my mind, I am a game developer. But in my heart, I am a gamer.",
      image: "assets/heroes/satoshi_iwata.jpg"
    },
    {
      id: "steve-wozniak",
      name: "Steve Wozniak",
      title: "Cofundador de Apple & Leyenda Hardware",
      quote: "Soldering things together, putting the chips together, designing them... it was so much a passion in my life.",
      image: "assets/heroes/steve_wozniak.jpg"
    },
    {
      id: "linus-torvalds",
      name: "Linus Torvalds",
      title: "Creador de Linux Kernel & Git",
      quote: "Most good programmers do programming not because they expect to get paid, but because it is fun to program.",
      image: "assets/heroes/linus_torvalds.jpg"
    },
    {
      id: "federico-faggin",
      name: "Federico Faggin",
      title: "Físico & Co-inventor del Intel 4004",
      quote: "Those work can be done easily, if you are doing that repeatedly.",
      image: "assets/heroes/federico_faggin.jpg"
    }
  ],
  en: [
    {
      id: "musashi",
      name: "Musashi Miyamoto",
      title: "Samurai Strategist & Philosopher",
      quote: "You may abandon your own body but you must preserve your honour.",
      image: "assets/heroes/musashi.jpg"
    },
    {
      id: "ada-lovelace",
      name: "Ada Lovelace",
      title: "Mathematician & First Computer Programmer",
      quote: "I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand...",
      image: "assets/heroes/ada_lovelace.jpg"
    },
    {
      id: "satoshi-iwata",
      name: "Satoshi Iwata",
      title: "Programmer & Former Nintendo President",
      quote: "I am a corporate president. In my mind, I am a game developer. But in my heart, I am a gamer.",
      image: "assets/heroes/satoshi_iwata.jpg"
    },
    {
      id: "steve-wozniak",
      name: "Steve Wozniak",
      title: "Apple Co-founder & Hardware Legend",
      quote: "Soldering things together, putting the chips together, designing them... it was so much a passion in my life.",
      image: "assets/heroes/steve_wozniak.jpg"
    },
    {
      id: "linus-torvalds",
      name: "Linus Torvalds",
      title: "Creator of Linux Kernel & Git",
      quote: "Most good programmers do programming not because they expect to get paid, but because it is fun to program.",
      image: "assets/heroes/linus_torvalds.jpg"
    },
    {
      id: "federico-faggin",
      name: "Federico Faggin",
      title: "Physicist & Co-inventor of Intel 4004",
      quote: "Those work can be done easily, if you are doing that repeatedly.",
      image: "assets/heroes/federico_faggin.jpg"
    }
  ]
};

// Tools Data (Bilingual)
const toolsData = {
  es: [
    { name: "Java Enterprise", role: "Backend & Microservicios", icon: "☕" },
    { name: "ColdFusion", role: "Adobe Web Application Server", icon: "⚡" },
    { name: "PHP & MySQL", role: "Desarrollo Web Backend", icon: "🐘" },
    { name: "JavaScript & HTML5", role: "Frontend Interactivo", icon: "🌐" },
    { name: "Impresión & Modelado 3D", role: "Prototipado CAD & Maker", icon: "🖨️" },
    { name: "Astronomía & Óptica", role: "Telescopio Reflector 1200/160", icon: "🔭" },
    { name: "GitHub Pages", role: "Despliegue & Hosting Estático", icon: "🚀" },
    { name: "SQL & Databases", role: "SQL Server & Relacionales", icon: "💾" }
  ],
  en: [
    { name: "Java Enterprise", role: "Backend & Microservices", icon: "☕" },
    { name: "ColdFusion", role: "Adobe Web Application Server", icon: "⚡" },
    { name: "PHP & MySQL", role: "Backend Web Development", icon: "🐘" },
    { name: "JavaScript & HTML5", role: "Interactive Frontend", icon: "🌐" },
    { name: "3D Printing & Modeling", role: "CAD Prototyping & Maker", icon: "🖨️" },
    { name: "Astronomy & Optics", role: "1200/160 Reflector Telescope", icon: "🔭" },
    { name: "GitHub Pages", role: "Static Deployment & Hosting", icon: "🚀" },
    { name: "SQL & Databases", role: "SQL Server & Relational DBs", icon: "💾" }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("detailsModal");
  const modalClose = document.getElementById("modalClose");

  // Track currently active modal item if open
  let activeModalItem = null;

  // Function to apply UI translations to static HTML elements
  function updateStaticTranslations() {
    const dict = i18n[currentLang];
    document.querySelectorAll("[data-i18n]").forEach(elem => {
      const key = elem.getAttribute("data-i18n");
      if (dict[key]) {
        elem.innerHTML = dict[key];
      }
    });

    // Update document HTML lang attribute
    document.documentElement.lang = currentLang;

    // Update language switcher active toggle buttons
    const btnEs = document.getElementById("btnLangEs");
    const btnEn = document.getElementById("btnLangEn");
    if (btnEs && btnEn) {
      if (currentLang === "es") {
        btnEs.classList.add("active");
        btnEn.classList.remove("active");
      } else {
        btnEn.classList.add("active");
        btnEs.classList.remove("active");
      }
    }
  }

  // Function to render all dynamic content lists
  function renderAllSections() {
    const dict = i18n[currentLang];

    // Render Experience List
    const experienceContainer = document.getElementById("experienceList");
    if (experienceContainer) {
      experienceContainer.innerHTML = experienceData[currentLang].map(exp => `
        <div class="experience-card btn-exp-modal" data-id="${exp.id}">
          <img src="${exp.image}" alt="${exp.title}" class="exp-thumb-box" loading="lazy">
          <div class="exp-main">
            <h3 class="exp-title">${exp.title}</h3>
            <div class="exp-company">${exp.company} • <span class="exp-date">${exp.date}</span></div>
            <p class="exp-desc">${exp.summary}</p>
            <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
              ${exp.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
            </div>
          </div>
          <div class="arrow-action-btn">↗</div>
        </div>
      `).join('');
    }

    // Render Projects Grid
    const projectsContainer = document.getElementById("projectsGrid");
    if (projectsContainer) {
      projectsContainer.innerHTML = projectsData[currentLang].map(proj => `
        <div class="project-card-sawad btn-proj-modal" data-id="${proj.id}">
          <div>
            <img src="${proj.image}" alt="${proj.title}" class="card-img-thumb" loading="lazy">
            <div class="proj-top">
              <div class="proj-icon-badge">${proj.icon}</div>
              <span class="tag-pill" style="color:var(--accent-orange); border-color:rgba(244,108,56,0.3);">${proj.category}</span>
            </div>
            <h3 class="proj-title">${proj.title}</h3>
            <p class="proj-desc">${proj.summary}</p>
          </div>
          <div class="proj-footer">
            <span style="font-size:0.8rem; color:var(--text-muted);">${dict.verDetalles}</span>
            <span style="color:var(--accent-orange); font-weight:bold;">↗</span>
          </div>
        </div>
      `).join('');
    }

    // Render Passions Grid
    const passionsContainer = document.getElementById("passionsGrid");
    if (passionsContainer) {
      passionsContainer.innerHTML = passionsData[currentLang].map(pas => `
        <div class="project-card-sawad btn-pas-modal" data-id="${pas.id}">
          <div>
            <img src="${pas.image}" alt="${pas.title}" class="card-img-thumb" loading="lazy">
            <div class="proj-top">
              <div class="proj-icon-badge">${pas.icon}</div>
              <span class="tag-pill" style="color:var(--accent-lime); border-color:rgba(197,255,65,0.3);">${pas.category}</span>
            </div>
            <h3 class="proj-title">${pas.title}</h3>
            <p class="proj-desc">${pas.summary}</p>
          </div>
          <div class="proj-footer">
            <span style="font-size:0.8rem; color:var(--text-muted);">${dict.saberMas}</span>
            <span style="color:var(--accent-lime); font-weight:bold;">↗</span>
          </div>
        </div>
      `).join('');
    }

    // Render Tools Grid
    const toolsContainer = document.getElementById("toolsGrid");
    if (toolsContainer) {
      toolsContainer.innerHTML = toolsData[currentLang].map(tool => `
        <div class="tool-card">
          <div class="tool-icon">${tool.icon}</div>
          <div>
            <div class="tool-name">${tool.name}</div>
            <div class="tool-role">${tool.role}</div>
          </div>
        </div>
      `).join('');
    }

    // Re-attach Event Listeners for Modals
    attachModalListeners();
  }

  // Function to open modal dialog
  function openModalWithData(item) {
    if (!item || !modal) return;
    activeModalItem = item;
    const dict = i18n[currentLang];

    const previewImg = document.getElementById("modalImgPreview");
    if (previewImg) {
      if (item.image) {
        previewImg.src = item.image;
        previewImg.style.display = "block";
      } else {
        previewImg.style.display = "none";
      }
    }

    document.getElementById("modalTitle").textContent = item.title;
    document.getElementById("modalCategory").textContent = (item.company || item.category || "") + (item.date ? " • " + item.date : "");
    document.getElementById("modalDetails").innerText = item.details;
    
    const tagsContainer = document.getElementById("modalTags");
    if (tagsContainer && item.tags) {
      tagsContainer.innerHTML = item.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');
    }

    // Render Skills & My Heroes inside About Me Modal if open
    const extraContent = document.getElementById("modalExtraContent");
    if (extraContent) {
      if (item.id === "sobre-mi-modal") {
        extraContent.innerHTML = `
          <!-- Section 1: Skills & Competencias -->
          <div style="margin-top: 2rem; padding-top: 1.75rem; border-top: 1px solid var(--border-dark);">
            <h4 style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800; color: var(--text-white); margin-bottom: 0.2rem;">
              ${dict.skillsTitle}
            </h4>
            <div style="font-size: 0.85rem; color: var(--accent-orange); font-weight: 600; margin-bottom: 1.25rem;">
              ${dict.skillsSubtitle}
            </div>

            <!-- Soft / Core Engineering Skills -->
            <div style="margin-bottom: 1.75rem;">
              <h5 style="font-size: 0.95rem; color: var(--text-white); margin-bottom: 0.75rem; font-family: var(--font-heading);">${dict.coreSkillsTitle}</h5>
              <div style="display: flex; gap: 0.55rem; flex-wrap: wrap;">
                ${coreEngineeringSkills[currentLang].map(s => `
                  <span class="skill-soft-pill">${s.icon} ${s.name}</span>
                `).join('')}
              </div>
            </div>

            <!-- Technical Skills Grid -->
            <div>
              <h5 style="font-size: 0.95rem; color: var(--text-white); margin-bottom: 1rem; font-family: var(--font-heading);">${dict.techSkillsTitle}</h5>
              <div class="skills-tech-grid">
                ${technicalSkills[currentLang].map(tech => `
                  <div class="skill-tech-item">
                    <div class="skill-tech-header">
                      <span class="skill-tech-name">${tech.name}</span>
                      <span class="skill-tech-level">${tech.level}</span>
                    </div>
                    <div class="skill-bar-bg">
                      <div class="skill-bar-fill" style="width: ${tech.percent}%;"></div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Section 2: My Heroes -->
          <div style="margin-top: 2.25rem; padding-top: 1.75rem; border-top: 1px solid var(--border-dark);">
            <h4 style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800; color: var(--text-white); margin-bottom: 0.2rem;">
              ${dict.heroesTitle}
            </h4>
            <div style="font-size: 0.85rem; color: var(--accent-orange); font-weight: 600; margin-bottom: 1.25rem;">
              ${dict.heroesSubtitle}
            </div>
            <div class="heroes-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.25rem;">
              ${heroesData[currentLang].map(hero => `
                <div class="hero-quote-card">
                  <img src="${hero.image}" alt="${hero.name}" class="hero-card-avatar" loading="lazy">
                  <div class="hero-card-content">
                    <h5 class="hero-card-name" style="font-size:1.1rem; margin-bottom:0.15rem;">${hero.name}</h5>
                    <div class="hero-card-role" style="font-size:0.8rem; margin-bottom:0.5rem;">${hero.title}</div>
                    <blockquote class="hero-card-quote" style="font-size:0.85rem;">“${hero.quote}”</blockquote>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      } else {
        extraContent.innerHTML = "";
      }
    }

    modal.classList.add("active");
  }

  // Function to attach click listeners to card items
  function attachModalListeners() {
    document.querySelectorAll(".btn-exp-modal").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        const item = experienceData[currentLang].find(e => e.id === id);
        openModalWithData(item);
      });
    });

    document.querySelectorAll(".btn-proj-modal").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        const item = projectsData[currentLang].find(p => p.id === id);
        openModalWithData(item);
      });
    });

    document.querySelectorAll(".btn-pas-modal").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        const item = passionsData[currentLang].find(p => p.id === id);
        openModalWithData(item);
      });
    });
  }

  // Function to set application language
  function setLanguage(lang) {
    if (lang !== 'es' && lang !== 'en') return;
    currentLang = lang;
    localStorage.setItem('portfolioLang', lang);

    updateStaticTranslations();
    renderAllSections();

    // If modal is active, update modal content in new language
    if (modal && modal.classList.contains("active") && activeModalItem) {
      const itemId = activeModalItem.id;
      if (itemId === "sobre-mi-modal") {
        openModalWithData(aboutMeData[currentLang]);
      } else {
        let updatedItem = experienceData[currentLang].find(e => e.id === itemId) ||
                          projectsData[currentLang].find(p => p.id === itemId) ||
                          passionsData[currentLang].find(p => p.id === itemId);
        if (updatedItem) {
          openModalWithData(updatedItem);
        }
      }
    }
  }

  // Language Switcher Click Event Handlers
  document.getElementById("btnLangEs")?.addEventListener("click", (e) => {
    e.stopPropagation();
    setLanguage("es");
  });

  document.getElementById("btnLangEn")?.addEventListener("click", (e) => {
    e.stopPropagation();
    setLanguage("en");
  });

  // About Me Modal trigger handlers
  const btnAboutMeModal = document.getElementById("btnAboutMeModal");
  btnAboutMeModal?.addEventListener("click", (e) => {
    e.stopPropagation();
    openModalWithData(aboutMeData[currentLang]);
  });

  const profileCard = document.getElementById("profileCard");
  profileCard?.addEventListener("click", (e) => {
    if (!e.target.closest('.profile-socials')) {
      openModalWithData(aboutMeData[currentLang]);
    }
  });

  document.querySelectorAll('a[href="#sobre-mi"]').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openModalWithData(aboutMeData[currentLang]);
    });
  });

  modalClose?.addEventListener("click", () => {
    modal?.classList.remove("active");
    activeModalItem = null;
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      activeModalItem = null;
    }
  });

  // Initialize Portfolio with default/persisted language
  updateStaticTranslations();
  renderAllSections();
});
