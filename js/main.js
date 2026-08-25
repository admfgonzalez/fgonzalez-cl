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
    navCursos: "Cursos",
    navProjects: "Proyectos",
    navHobbies: "Hobbies",
    navStack: "Stack",
    navContact: "Contacto",
    profileBio: "Auto-Leader & Senior Software Engineer con más de 10 años creando soluciones de software, liderando equipos técnicos y desarrollando proyectos de innovación.",
    btnAboutMe: "Sobre mí (Historia & Valores) ↗",
    expTitle1: "+10 AÑOS DE",
    expTitle2: "EXPERIENCIA",
    expTitleMain: "EXPERIENCIA",
    expBadge: "💼 +13 años en sector financiero & TI",
    expStat1Badge: "🏦 Finanzas & Banca",
    expStat1Num: "+13",
    expStat1Unit: "AÑOS",
    expStat1Label: "en Instituciones Financieras",
    expStat2Badge: "🚀 Liderazgo Técnico",
    expStat2Num: "+5",
    expStat2Unit: "AÑOS",
    expStat2Label: "como Líder Técnico",
    expStat3Badge: "📚 Formación Continua",
    expStat3Num: "+29",
    expStat3Unit: "CURSOS",
    expStat3Label: "Certificaciones & Cursos Técnicos",
    projTitle1: "PROYECTOS",
    projTitle2: "DESTACADOS",
    projBadge: "📐 Arquitecturas ajustadas a cada proyecto",
    pasTitle1: "INTERESES",
    pasTitle2: "& HOBBIES",
    pasBadge: "💡 Un maker de corazón",
    stackTitle1: "HERRAMIENTAS",
    stackTitle2: "& TECNOLOGÍAS",
    stackBadge: "⚡ +15 años en Java",
    contactTitle: "¿CONECTAMOS?",
    contactSubtitle: "Disponible para liderazgo de proyectos tecnológicos, arquitectura de sistemas y colaboración en software.",
    contactBadge: "🤝 Disponible para nuevos desafíos",
    btnEmail: "Enviar Email ✉️ (administrator@fgonzalez.cl)",
    btnLinkedIn: "LinkedIn ↗",
    btnLinkedInNav: "LinkedIn ↗",
    footerCopy: "© 2026 Francisco González. Todos los derechos reservados.",
    footerHost: "Hosting Estático en",
    verDetalles: "Ver detalles",
    saberMas: "Saber más",
    verMas: "Ver más ➕",
    verMenos: "Ver menos ➖",
    cursosTitle1: "CERTIFICACIONES &",
    cursosTitle2: "CURSOS",
    cursosBadge: "🎓 +29 Cursos & Especializaciones",
    skillsTitle: "⚡ Skills & Competencias",
    skillsSubtitle: "Habilidades Blandas & Dominio Técnico",
    coreSkillsTitle: "Competencias de Ingeniería",
    techSkillsTitle: "Nivel Técnico & Herramientas",
    heroesTitle: "⭐ Mis Héroes",
    heroesSubtitle: "Inspiración & Mentores",
    emailModalTitle: "Contactar por Email",
    emailModalSubtitle: "¿Cómo prefieres continuar? Puedes copiar la dirección de correo al portapapeles o abrir tu cliente de correo predeterminado.",
    btnCopyEmailTxt: "Copiar Correo (administrator@fgonzalez.cl)",
    btnOpenMailtoTxt: "Enviar con aplicación por defecto (mailto)",
    toastEmailCopiedTxt: "¡Correo administrator@fgonzalez.cl copiado al portapapeles! 📋",
    eduTitle: "🎓 Educación & Formación Académica",
    eduSubtitle: "Títulos Académicos & Titulaciones",
    locationText: "Gran Santiago, Chile",
    badgeCvText: "CV",
    btnDownloadCv: "📄 Ver / Descargar CV PDF ↗",
    btnCvNav: "CV PDF 📄"
  },
  en: {
    navExp: "Experience",
    navCursos: "Courses",
    navProjects: "Projects",
    navHobbies: "Hobbies",
    navStack: "Stack",
    navContact: "Contact",
    profileBio: "Auto-Leader & Senior Software Engineer with over 10 years building software solutions, leading tech teams, and developing innovative projects.",
    btnAboutMe: "About me (Story & Values) ↗",
    expTitle1: "+10 YEARS OF",
    expTitle2: "EXPERIENCE",
    expTitleMain: "EXPERIENCE",
    expBadge: "💼 +13 years in finance & IT sector",
    expStat1Badge: "🏦 Finance & Banking",
    expStat1Num: "+13",
    expStat1Unit: "YEARS",
    expStat1Label: "in Financial Institutions",
    expStat2Badge: "🚀 Tech Leadership",
    expStat2Num: "+5",
    expStat2Unit: "YEARS",
    expStat2Label: "as Technical Lead",
    expStat3Badge: "📚 Continuous Learning",
    expStat3Num: "+29",
    expStat3Unit: "COURSES",
    expStat3Label: "Certifications & Tech Courses",
    projTitle1: "FEATURED",
    projTitle2: "PROJECTS",
    projBadge: "📐 Architectures tailored to each project",
    pasTitle1: "INTERESTS",
    pasTitle2: "& HOBBIES",
    pasBadge: "💡 A true maker at heart",
    stackTitle1: "TOOLS",
    stackTitle2: "& TECH STACK",
    stackBadge: "⚡ +15 years in Java",
    contactTitle: "GET IN TOUCH",
    contactSubtitle: "Available for tech project leadership, systems architecture, and software collaboration.",
    contactBadge: "🤝 Open for technical leadership & collaboration",
    btnEmail: "Send Email ✉️ (administrator@fgonzalez.cl)",
    btnLinkedIn: "LinkedIn ↗",
    btnLinkedInNav: "LinkedIn ↗",
    footerCopy: "© 2026 Francisco González. All rights reserved.",
    footerHost: "Static Hosting on",
    verDetalles: "View details",
    saberMas: "Learn more",
    verMas: "Show more ➕",
    verMenos: "Show less ➖",
    cursosTitle1: "CERTIFICATIONS &",
    cursosTitle2: "COURSES",
    skillsTitle: "⚡ Skills & Competencies",
    skillsSubtitle: "Core Engineering & Technical Proficiency",
    coreSkillsTitle: "Engineering Competencies",
    techSkillsTitle: "Technical Level & Tools",
    heroesTitle: "⭐ My Heroes",
    heroesSubtitle: "Inspiration & Mentors",
    emailModalTitle: "Contact via Email",
    emailModalSubtitle: "How would you like to proceed? You can copy the email address to your clipboard or open your default mail application.",
    btnCopyEmailTxt: "Copy Email (administrator@fgonzalez.cl)",
    btnOpenMailtoTxt: "Send via default mail app (mailto)",
    toastEmailCopiedTxt: "Email administrator@fgonzalez.cl copied to clipboard! 📋",
    eduTitle: "🎓 Education & Academic Background",
    eduSubtitle: "Degrees & Academic Qualifications",
    locationText: "Santiago, Chile"
  }
};

// About Me Modal Data (Bilingual)
const aboutMeData = {
  es: {
    id: "sobre-mi-modal",
    title: "Francisco Jesús González Álvarez • Historia & Valores",
    company: "Líder Técnico & Maker Emprendedor",
    date: "+10 Años de Experiencia en Software Web",
    image: "assets/heroes/foto_profile.jpg",
    details: "¡Hola! Soy Francisco González, un apasionado desarrollador y Líder Técnico con más de 10 años de experiencia en la creación de soluciones de software para la web. Mi enfoque principal es encontrar formas innovadoras de resolver problemas y crear productos excepcionales para mis clientes.\n\nA lo largo de mi carrera, he trabajado con una amplia gama de lenguajes y arquitecturas (Java, Spring Boot, JavaScript, TypeScript, React, Node.js, ColdFusion, PHP, ASP, XML, JSON, SQL y BPMN 2.0 con motores Activiti y JBoss BPM), liderando equipos y modernizando plataformas hacia microservicios y automación DevOps.\n\nMi pasión se basa en la búsqueda constante de nuevos desafíos. Disfruto explorar tendencias tecnológicas de vanguardia como IA Generativa (Amazon Q, Prompt Engineering, AWS Cloud), prototipado y cultura Maker (impresión 3D, C con QMK/ZMK para teclados mecánicos). Me enorgullece crear soluciones robustas, escalables y con un impacto positivo real.",
    tags: ["Tech Lead", "Senior Software Engineer", "Amazon Q", "Prompt Engineering", "BPMN 2.0", "AWS", "Maker"]
  },
  en: {
    id: "sobre-mi-modal",
    title: "Francisco Jesús González Álvarez • Story & Values",
    company: "Technical Lead & Maker Entrepreneur",
    date: "+10 Years of Web Software Experience",
    image: "assets/heroes/foto_profile.jpg",
    details: "Hello! I'm Francisco González, a passionate developer and Technical Lead with over 10 years of experience creating web software solutions. My core focus is finding innovative ways to solve complex problems and building exceptional products for clients.\n\nThroughout my career, I have worked with a broad spectrum of tech stacks (Java, Spring Boot, JavaScript, TypeScript, React, Node.js, ColdFusion, PHP, ASP, XML, JSON, SQL, and BPMN 2.0 with Activiti & JBoss BPM engines), leading engineering teams and modernizing platforms into microservices and DevOps automation.\n\nDriven by continuous learning, I explore cutting-edge trends such as Generative AI (Amazon Q, Prompt Engineering, AWS Cloud), rapid prototyping, and a Maker mindset (3D printing, C with QMK/ZMK for custom mechanical keyboards). I pride myself on delivering robust, scalable, and high-impact software.",
    tags: ["Tech Lead", "Senior Software Engineer", "Amazon Q", "Prompt Engineering", "BPMN 2.0", "AWS", "Maker"]
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
    { icon: "🧩", name: "Experiencia en POO & BPMN" }
  ],
  en: [
    { icon: "💡", name: "Problem-solving skills" },
    { icon: "👁️", name: "Visualizing ideas" },
    { icon: "💻", name: "Programming languages" },
    { icon: "🎯", name: "Attention to detail" },
    { icon: "🤝", name: "Collaborating with other developers" },
    { icon: "🌱", name: "Self-development skills" },
    { icon: "🧩", name: "OOP & BPMN Experience" }
  ]
};

// Technical Skills (Bilingual levels)
const technicalSkills = {
  es: [
    { name: "Amazon Q & IA Generativa", level: "Avanzado", percent: 92 },
    { name: "Prompt Engineering", level: "Avanzado", percent: 90 },
    { name: "AWS Cloud (Lambda, S3, SQS)", level: "Intermedio", percent: 82 },
    { name: "Java & Spring Boot", level: "Avanzado", percent: 90 },
    { name: "BPMN 2.0 (Activiti / JBoss)", level: "Avanzado", percent: 85 },
    { name: "Microservicios & Docker", level: "Intermedio", percent: 80 },
    { name: "Javascript & Typescript", level: "Intermedio", percent: 80 },
    { name: "Angular / React", level: "Intermedio", percent: 75 },
    { name: "SQL & Databases", level: "Avanzado", percent: 85 },
    { name: "ColdFusion, PHP & ASP", level: "Intermedio", percent: 78 },
    { name: "Firmware C (QMK / ZMK)", level: "Intermedio", percent: 75 },
    { name: "Git & CI/CD DevOps", level: "Avanzado", percent: 85 }
  ],
  en: [
    { name: "Amazon Q & Generative AI", level: "Advanced", percent: 92 },
    { name: "Prompt Engineering", level: "Advanced", percent: 90 },
    { name: "AWS Cloud (Lambda, S3, SQS)", level: "Intermediate", percent: 82 },
    { name: "Java & Spring Boot", level: "Advanced", percent: 90 },
    { name: "BPMN 2.0 (Activiti / JBoss)", level: "Advanced", percent: 85 },
    { name: "Microservices & Docker", level: "Intermediate", percent: 80 },
    { name: "Javascript & Typescript", level: "Intermediate", percent: 80 },
    { name: "Angular / React", level: "Intermediate", percent: 75 },
    { name: "SQL & Databases", level: "Advanced", percent: 85 },
    { name: "ColdFusion, PHP & ASP", level: "Intermediate", percent: 78 },
    { name: "Firmware C (QMK / ZMK)", level: "Intermediate", percent: 75 },
    { name: "Git & CI/CD DevOps", level: "Advanced", percent: 85 }
  ]
};

// Experience Data (Bilingual - Full Authentic LinkedIn Career History)
const experienceData = {
  es: [
    {
      id: "soaint-tech-lead",
      title: "Technical Lead",
      company: "SOAINT",
      date: "Ago 2023 - Presente (3 años 1 mes)",
      summary: "Líder técnico de la aplicación bancaria de importante institución financiera en Chile.",
      details: "Líder técnico, encargado de hacer la mejor aplicación bancaria de Chile para importante institución bancaria. Arquitectura de soluciones microservicios, definición de estándares de desarrollo y gestión de equipo técnico.",
      image: "assets/portfolio/soaint_logo.png",
      tags: ["Tech Lead", "Microservices", "Java", "Banking", "Remote"]
    },
    {
      id: "zonekeyboards-tpm",
      title: "Technical Project Manager",
      company: "ZoneKeyboards",
      date: "Ene 2021 - Ago 2023 (2 años 8 meses)",
      summary: "Desarrollo e integración del portal e-commerce de teclados mecánicos custom.",
      details: "Encargado de mantenimiento, desarrollo e integración del portal de ventas en empresa dedicada a la creación de teclados mecánicos personalizados para el desarrollo de software utilizando tecnologías como React, NodeJS, MongoDB y C (firmware QMK y ZMK).",
      image: "assets/portfolio/zonekeyboards.png",
      tags: ["React", "NodeJS", "MongoDB", "QMK/ZMK", "E-Commerce"]
    },
    {
      id: "beemind-tpm",
      title: "Technical Project Manager",
      company: "BeeMind",
      date: "Sep 2015 - Dic 2020 (5 años 4 meses)",
      summary: "Migración de arquitectura legacy GWT a Microservicios Spring Boot, Angular y DevOps.",
      details: "Investigación, planificación y desarrollo de migración del Frontend GWT y Backend Java sobre JBossESB a nuevas tecnologías: Frontend con Angular (Metronic) y Backend con Microservicios en Spring Boot (Spring Security, Docker, SSO, API Gateway). Responsable de la automatización de procesos CI/CD DevOps entre entorno de desarrollo y producción.",
      image: "assets/portfolio/autoleader.jpg",
      tags: ["Angular", "Spring Boot", "Microservices", "Docker", "DevOps", "SSO"]
    },
    {
      id: "beemind-senior-dev",
      title: "Senior Developer (BPMN 2.0)",
      company: "BeeMind",
      date: "Oct 2012 - Ago 2015 (2 años 11 meses)",
      summary: "Diseño e integración de flujos de trabajo BPMN 2.0 con Activiti BPMN y JBoss BPM.",
      details: "Desarrollé nuevas funcionalidades de software, diseñando, creando e integrando de forma genérica, paramétrica y flexible flujos de trabajo bajo el estándar BPMN 2.0 con motores como Activiti BPMN y JBoss BPM tanto en frontend como backend.",
      image: "assets/portfolio/autoleader.jpg",
      tags: ["BPMN 2.0", "Activiti BPMN", "JBoss BPM", "Java", "Workflow"]
    },
    {
      id: "beemind-java-dev",
      title: "Java Developer",
      company: "BeeMind / Banco Penta",
      date: "Ene 2012 - Sep 2012 (9 meses)",
      summary: "Desarrollo de interfaces Java GWT para plataforma financiera de Banco Penta.",
      details: "Desarrollo de interfaces web con Java GWT para nuevo producto perteneciente a Banco Penta. Optimización de rendimiento del sistema y mejora de experiencia de usuario en entorno bancario.",
      image: "assets/portfolio/java_senior.jpg",
      tags: ["Java", "GWT", "Linux", "Banco Penta"]
    },
    {
      id: "trabajando-coldfusion",
      title: "Junior ColdFusion Developer",
      company: "Trabajando.com",
      date: "Sep 2011 - Dic 2011 (4 meses)",
      summary: "Mantenimiento y desarrollo del portal masivo de empleo en Adobe ColdFusion.",
      details: "Desarrollo y mantenimiento del portal de empleo masivo Trabajando.com utilizando tecnología Adobe ColdFusion, optimizando consultas a SQL Server y disponibilidad de plataforma.",
      image: "assets/portfolio/coldfusion.jpg",
      tags: ["ColdFusion", "SQL Server", "Trabajando.com", "Alta Concurrencia"]
    },
    {
      id: "mira360-asp",
      title: "Junior ASP Web Developer",
      company: "Mira 360",
      date: "Abr 2011 - Ago 2011 (5 meses)",
      summary: "Desarrollo de software de gestión de información en ASP y jQuery para Retail.",
      details: "Optimización de software de gestión de información para empresas de Retail. Desarrollo de soluciones web con ASP, JavaScript y librerías jQuery.",
      image: "assets/portfolio/asp_mira360.png",
      tags: ["ASP", "JavaScript", "jQuery", "Retail"]
    },
    {
      id: "creear-php",
      title: "Desarrollador Practicante (PHP)",
      company: "Creear Ltda.",
      date: "Abr 2010 - Sep 2010 (6 meses)",
      summary: "Desarrollo de portal de administración escolar en PHP y MySQL.",
      details: "Participación en el diseño e implementación de portal web de administración escolar utilizando PHP y MySQL, sentando las bases de arquitectura web.",
      image: "assets/portfolio/php_creear.png",
      tags: ["PHP", "MySQL", "HTML5", "Educación"]
    },
    {
      id: "colegium-soporte",
      title: "Soporte Técnico",
      company: "Colegium S.A.",
      date: "Ago 2007 - Dic 2007 (5 meses)",
      summary: "Soporte técnico a clientes, control de calidad QA y desarrollo de informes en 4D.",
      details: "Mi primera experiencia en el rubro tecnológico. Responsable de brindar soluciones a diversas consultas y problemas planteados por los clientes, además de llevar a cabo actividades de control de calidad en el software de administración escolar y desarrollo de pequeños informes en base de datos 4D.",
      image: "assets/portfolio/bachelor_degree.jpg",
      tags: ["Soporte Técnico", "QA Testing", "Reportes 4D", "Educación"]
    }
  ],
  en: [
    {
      id: "soaint-tech-lead",
      title: "Technical Lead",
      company: "SOAINT",
      date: "Aug 2023 - Present (3 yrs 1 mo)",
      summary: "Technical Lead for the top mobile/web banking platform of a major Chilean bank.",
      details: "Technical Lead in charge of building the best banking application in Chile for a major financial institution. Microservices solutions architecture, code standards definition, and engineering team leadership.",
      image: "assets/portfolio/soaint_logo.png",
      tags: ["Tech Lead", "Microservices", "Java", "Banking", "Remote"]
    },
    {
      id: "zonekeyboards-tpm",
      title: "Technical Project Manager",
      company: "ZoneKeyboards",
      date: "Jan 2021 - Aug 2023 (2 yrs 8 mos)",
      summary: "Development and integration of custom mechanical keyboard e-commerce portal.",
      details: "Responsible for maintenance, development, and integration of the sales portal for custom mechanical keyboards engineered for developers, using React, NodeJS, MongoDB, and C (QMK & ZMK firmware).",
      image: "assets/portfolio/zonekeyboards.png",
      tags: ["React", "NodeJS", "MongoDB", "QMK/ZMK", "E-Commerce"]
    },
    {
      id: "beemind-tpm",
      title: "Technical Project Manager",
      company: "BeeMind",
      date: "Sep 2015 - Dec 2020 (5 yrs 4 mos)",
      summary: "Migration from legacy GWT architecture to Spring Boot Microservices, Angular, and DevOps.",
      details: "Research, planning, and execution of system migration from legacy GWT Frontend and Java JBossESB Backend to modern Angular (Metronic) Frontend and Spring Boot Microservices Backend (Spring Security, Docker, SSO, API Gateway). Managed DevOps CI/CD pipeline automation.",
      image: "assets/portfolio/autoleader.jpg",
      tags: ["Angular", "Spring Boot", "Microservices", "Docker", "DevOps", "SSO"]
    },
    {
      id: "beemind-senior-dev",
      title: "Senior Developer (BPMN 2.0)",
      company: "BeeMind",
      date: "Oct 2012 - Aug 2015 (2 yrs 11 mos)",
      summary: "BPMN 2.0 workflow design & integration with Activiti BPMN & JBoss BPM.",
      details: "Developed new software functionality, designing, creating, and integrating generic, parametric, and flexible workflows under the BPMN 2.0 standard using Activiti BPMN and JBoss BPM engines across frontend and backend.",
      image: "assets/portfolio/autoleader.jpg",
      tags: ["BPMN 2.0", "Activiti BPMN", "JBoss BPM", "Java", "Workflow"]
    },
    {
      id: "beemind-java-dev",
      title: "Java Developer",
      company: "BeeMind / Banco Penta",
      date: "Jan 2012 - Sep 2012 (9 mos)",
      summary: "Java GWT web interface development for Banco Penta financial platform.",
      details: "Web interface development with Java GWT for a new banking product for Banco Penta. System performance optimization and user experience enhancement in a corporate banking environment.",
      image: "assets/portfolio/java_senior.jpg",
      tags: ["Java", "GWT", "Linux", "Banco Penta"]
    },
    {
      id: "trabajando-coldfusion",
      title: "Junior ColdFusion Developer",
      company: "Trabajando.com",
      date: "Sep 2011 - Dec 2011 (4 mos)",
      summary: "Maintenance and development of high-traffic job portal in Adobe ColdFusion.",
      details: "Maintenance and development for Trabajando.com mass job portal built on Adobe ColdFusion, optimizing SQL Server database queries and system reliability.",
      image: "assets/portfolio/coldfusion.jpg",
      tags: ["ColdFusion", "SQL Server", "Trabajando.com", "High Concurrency"]
    },
    {
      id: "mira360-asp",
      title: "Junior ASP Web Developer",
      company: "Mira 360",
      date: "Apr 2011 - Aug 2011 (5 mos)",
      summary: "Development of retail information management web software in ASP and jQuery.",
      details: "Optimization and development of management software for retail enterprises using Active Server Pages (ASP), JavaScript, and jQuery libraries.",
      image: "assets/portfolio/asp_mira360.png",
      tags: ["ASP", "JavaScript", "jQuery", "Retail"]
    },
    {
      id: "creear-php",
      title: "PHP Developer Intern",
      company: "Creear Ltda.",
      date: "Apr 2010 - Sep 2010 (6 mos)",
      summary: "School management web portal development in PHP and MySQL.",
      details: "Active involvement in design and implementation of a school management web portal using PHP and MySQL, establishing fundamental web development principles.",
      image: "assets/portfolio/php_creear.png",
      tags: ["PHP", "MySQL", "HTML5", "Education"]
    },
    {
      id: "colegium-soporte",
      title: "Technical Support Specialist",
      company: "Colegium S.A.",
      date: "Aug 2007 - Dec 2007 (5 mos)",
      summary: "Customer support, QA software testing, and 4D database report creation.",
      details: "First professional technology experience. Responsible for resolving customer technical inquiries, quality control of school management software, and 4D database report generation.",
      image: "assets/portfolio/bachelor_degree.jpg",
      tags: ["Support", "QA Testing", "4D Reports", "Education"]
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
      id: "isp-torrecontrol",
      title: "isptorrecontrol.cl",
      category: "Gestión de Eventos & Accesos",
      icon: "🛡️",
      summary: "Plataforma integral de gestión de eventos, control de acceso de proveedores e identificación de personas.",
      details: "Sistema especializado de Torre de Control para operaciones de seguridad privada. Permite la gestión centralizada de eventos, acreditación y control de acceso de proveedores en tiempo real, registro operativo e identificación de personas.",
      image: "assets/portfolio/isptorrecontrol.png",
      tags: ["Gestión de Eventos", "Acceso Proveedores", "Identificación ID", "Seguridad"]
    },
    {
      id: "agendamientos-dap",
      title: "agendamientosdap.cl",
      category: "Agendamiento de Proveedores",
      icon: "🏢",
      summary: "Plataforma de agendamiento de citas y gestión de proveedores para oficinas de DAP (Dirección de Atención Primaria).",
      details: "Sistema web de coordinación y agendamiento para proveedores de la red de oficinas de DAP (Dirección de Atención Primaria). Optimiza la programación de visitas corporativas, control de horarios de atención, gestión de turnos e integración administrativa.",
      image: "assets/portfolio/agendamientosdap.png",
      tags: ["Agendamiento", "Proveedores", "DAP Atención Primaria", "Web App"]
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
      id: "isp-torrecontrol",
      title: "isptorrecontrol.cl",
      category: "Event & Access Management",
      icon: "🛡️",
      summary: "Comprehensive platform for event management, vendor access control, and identity verification.",
      details: "Specialized Control Tower system for private security operations. Enables centralized event management, real-time vendor access accreditation, operational logs, and identity verification.",
      image: "assets/portfolio/isptorrecontrol.png",
      tags: ["Event Management", "Vendor Access", "ID Verification", "Security"]
    },
    {
      id: "agendamientos-dap",
      title: "agendamientosdap.cl",
      category: "Vendor Scheduling System",
      icon: "🏢",
      summary: "Appointment scheduling and vendor management platform for DAP (Primary Healthcare Directorate) offices.",
      details: "Web platform for vendor appointment coordination and scheduling tailored for the DAP (Dirección de Atención Primaria) office network. Streamlines corporate visit bookings, service hours control, shift management, and administrative integration.",
      image: "assets/portfolio/agendamientosdap.png",
      tags: ["Scheduling", "Vendor Management", "DAP Healthcare", "Web App"]
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
      quote: "Puedes abandonar tu propio cuerpo, pero nunca debes abandonar tu honor.",
      image: "assets/heroes/musashi.jpg"
    },
    {
      id: "ada-lovelace",
      name: "Ada Lovelace",
      title: "Matemática & Primera Programadora",
      quote: "Nunca estoy realmente satisfecha de entender algo; porque, por bien que lo entienda, mi comprensión sólo puede ser una fracción infinitesimal de todo lo que quiero entender sobre las conexiones y relaciones que se me ocurren...",
      image: "assets/heroes/ada_lovelace.jpg"
    },
    {
      id: "satoshi-iwata",
      name: "Satoshi Iwata",
      title: "Programador & Ex-Presidente de Nintendo",
      quote: "En mi tarjeta de presentación, soy un presidente corporativo. En mi mente, soy un desarrollador de juegos. Pero en mi corazón, soy un gamer.",
      image: "assets/heroes/satoshi_iwata.jpg"
    },
    {
      id: "steve-wozniak",
      name: "Steve Wozniak",
      title: "Cofundador de Apple & Leyenda Hardware",
      quote: "Soldar componentes, ensamblar los chips, diseñarlos, dibujarlos en tableros de diseño... fue una pasión tan grande en mi vida.",
      image: "assets/heroes/steve_wozniak.jpg"
    },
    {
      id: "linus-torvalds",
      name: "Linus Torvalds",
      title: "Creador de Linux Kernel & Git",
      quote: "La mayoría de los buenos programadores no programan porque esperan recibir un pago o la adulación del público, sino porque es divertido programar.",
      image: "assets/heroes/linus_torvalds.jpg"
    },
    {
      id: "federico-faggin",
      name: "Federico Faggin",
      title: "Físico & Co-inventor del Intel 4004",
      quote: "La creatividad, la ética, el libre albedrío y el amor gozoso sólo pueden provenir de la conciencia.",
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
      quote: "Creativity, ethics, free will, and joyful love can only come from consciousness.",
      image: "assets/heroes/federico_faggin.jpg"
    }
  ]
};

// Tools Data (Bilingual)
const toolsData = {
  es: [
    { name: "Amazon Q & AWS Cloud", role: "IA Generativa, Lambda, S3, SQS & CLI", icon: "🤖" },
    { name: "Java Enterprise & Spring", role: "Backend Microservicios", icon: "☕" },
    { name: "BPMN 2.0 Workflows", role: "Activiti BPMN & JBoss BPM", icon: "🔄" },
    { name: "Prompt Engineering", role: "Desarrollo con LLMs & Amazon Q", icon: "⚡" },
    { name: "JavaScript & TypeScript", role: "Angular, React & Frontend", icon: "🌐" },
    { name: "ColdFusion, PHP & ASP", role: "Desarrollo Web Full Stack", icon: "🐘" },
    { name: "Impresión 3D & QMK/ZMK", role: "Maker, CAD & Firmware C", icon: "🖨️" },
    { name: "SQL & Relacionales", role: "SQL Server, MySQL & DBs", icon: "💾" }
  ],
  en: [
    { name: "Amazon Q & AWS Cloud", role: "Generative AI, Lambda, S3, SQS & CLI", icon: "🤖" },
    { name: "Java Enterprise & Spring", role: "Microservices Backend", icon: "☕" },
    { name: "BPMN 2.0 Workflows", role: "Activiti BPMN & JBoss BPM", icon: "🔄" },
    { name: "Prompt Engineering", role: "Development with LLMs & Amazon Q", icon: "⚡" },
    { name: "JavaScript & TypeScript", role: "Angular, React & Frontend", icon: "🌐" },
    { name: "ColdFusion, PHP & ASP", role: "Full Stack Web Development", icon: "🐘" },
    { name: "3D Printing & QMK/ZMK", role: "Maker, CAD & C Firmware", icon: "🖨️" },
    { name: "SQL & Relational DBs", role: "SQL Server, MySQL & DBs", icon: "💾" }
  ]
};

// Courses & Certifications Data (Bilingual - from LinkedIn)
const coursesData = {
  es: [
    {
      id: "amazon-q-dev-assessment",
      title: "Amazon Q Developer Fundamentals Knowledge Badge Assessment",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "🏆",
      tags: ["AWS", "Amazon Q", "IA", "Badge"]
    },
    {
      id: "amazon-q-soft-dev",
      title: "Software Development with Amazon Q Developer",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "💻",
      tags: ["AWS", "Amazon Q", "Prompt Engineering", "IA"]
    },
    {
      id: "amazon-q-setup",
      title: "Setup Amazon Q Developer",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "⚙️",
      tags: ["AWS", "Amazon Q", "DevOps", "IA"]
    },
    {
      id: "amazon-q-prompt-eng",
      title: "Prompt Engineering with Amazon Q Developer",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "🤖",
      tags: ["AWS", "Amazon Q", "Prompt Engineering", "IA"]
    },
    {
      id: "amazon-q-ops",
      title: "Managing Operations on AWS with Amazon Q Developer",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "☁️",
      tags: ["AWS", "Amazon Q", "Cloud", "Operations"]
    },
    {
      id: "amazon-q-gitlab",
      title: "GitLab Duo with Amazon Q",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "🦊",
      tags: ["AWS", "GitLab", "Amazon Q", "CI/CD"]
    },
    {
      id: "amazon-q-customization",
      title: "Customization in Amazon Q Developer",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "🛠️",
      tags: ["AWS", "Amazon Q", "Customization", "IA"]
    },
    {
      id: "amazon-q-cli",
      title: "Amazon Q Developer Command Line Interface (CLI)",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "🖥️",
      tags: ["AWS", "Amazon Q", "CLI", "Terminal"]
    },
    {
      id: "apiux-ia-academy",
      title: "Curso IA Academy",
      issuer: "Apiux Tech",
      date: "Feb 2026",
      icon: "🧠",
      tags: ["Apiux", "IA", "Prompt Engineering", "Academy"]
    },
    {
      id: "aws-lambda",
      title: "Introduction to AWS Lambda",
      issuer: "Coursera",
      date: "Jul 2024",
      icon: "🏗️",
      tags: ["AWS", "Cloud", "Serverless", "Lambda"]
    },
    {
      id: "aws-s3-cost",
      title: "AWS PartnerCast - Cost Optimization Guidelines for Amazon S3",
      issuer: "Amazon Web Services (AWS)",
      date: "Abr 2024",
      icon: "☁️",
      tags: ["AWS", "S3", "Cloud", "Cost Optimization"]
    },
    {
      id: "aws-sqs",
      title: "Introduction to Amazon Simple Queue Service (SQS)",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2024",
      icon: "📨",
      tags: ["AWS", "SQS", "Cloud", "Queues"]
    },
    {
      id: "aws-cloudwatch",
      title: "Basic of Amazon Cloudwatch (AWS Partner-led Support)",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2024",
      icon: "📈",
      tags: ["AWS", "CloudWatch", "Cloud", "Monitoring"]
    },
    {
      id: "aws-sns",
      title: "Amazon Simple Notification Service (SNS) - Troubleshooting",
      issuer: "Amazon Web Services (AWS)",
      date: "Feb 2024",
      icon: "🔔",
      tags: ["AWS", "SNS", "Cloud", "Messaging"]
    },
    {
      id: "prompt-engineering",
      title: "Curso de Prompt Engineering con ChatGPT",
      issuer: "Platzi",
      date: "Sep 2023",
      icon: "🤖",
      tags: ["IA", "Prompt Engineering", "ChatGPT", "LLM"]
    },
    {
      id: "java-spring-security",
      title: "Curso de Java Spring Security: Autenticación y Seguridad Web",
      issuer: "Platzi",
      date: "Ago 2023",
      icon: "🔐",
      tags: ["Java", "Spring Security", "Auth", "Backend"]
    },
    {
      id: "terminal-cli",
      title: "Curso de Introducción a la Terminal y Línea de Comandos",
      issuer: "Platzi",
      date: "Ago 2023",
      icon: "🖥️",
      tags: ["CLI", "Terminal", "Linux", "Bash"]
    },
    {
      id: "regex",
      title: "Curso de Expresiones Regulares",
      issuer: "Platzi",
      date: "Ago 2023",
      icon: "🧮",
      tags: ["Regex", "Programación", "Backend"]
    },
    {
      id: "jenkins",
      title: "Curso Básico de Jenkins",
      issuer: "Platzi",
      date: "Ago 2023",
      icon: "⚙️",
      tags: ["Jenkins", "CI/CD", "DevOps"]
    },
    {
      id: "java-testing",
      title: "Curso Básico de Testing en Java",
      issuer: "Platzi",
      date: "Mar 2021",
      icon: "✅",
      tags: ["Java", "Testing", "JUnit", "Backend"]
    },
    {
      id: "java-spring",
      title: "Curso de Java Spring",
      issuer: "Platzi",
      date: "Mar 2021",
      icon: "🌱",
      tags: ["Java", "Spring Framework", "Backend"]
    },
    {
      id: "postgresql",
      title: "Curso de PostgreSQL",
      issuer: "Platzi",
      date: "Mar 2021",
      icon: "🐘",
      tags: ["PostgreSQL", "SQL", "Bases de Datos"]
    },
    {
      id: "java-persistence",
      title: "Curso de Java SE Persistencia de Datos",
      issuer: "Platzi",
      date: "Feb 2021",
      icon: "💾",
      tags: ["Java", "JPA", "Hibernate", "Bases de Datos"]
    },
    {
      id: "sql-mysql",
      title: "Curso Práctico de SQL y MySQL",
      issuer: "Platzi",
      date: "Feb 2021",
      icon: "🗄️",
      tags: ["SQL", "MySQL", "Bases de Datos"]
    },
    {
      id: "java-oop",
      title: "Curso de Java SE Orientado a Objetos",
      issuer: "Platzi",
      date: "Nov 2020",
      icon: "🧩",
      tags: ["Java", "POO", "Programación"]
    },
    {
      id: "java-english",
      title: "Curso de Inglés Básico A1: Conversaciones Cortas y Habituales",
      issuer: "Platzi",
      date: "Nov 2020",
      icon: "🇬🇧",
      tags: ["Inglés", "Idioma", "A1"]
    },
    {
      id: "git-github",
      title: "Curso Profesional de Git y GitHub",
      issuer: "Platzi",
      date: "Oct 2020",
      icon: "🐙",
      tags: ["Git", "GitHub", "Control de Versiones"]
    },
    {
      id: "tech-gerentes",
      title: "Curso de Tecnología para Gerentes y Directores",
      issuer: "Platzi",
      date: "Oct 2020",
      icon: "📊",
      tags: ["Management", "Tecnología", "Liderazgo"]
    },
    {
      id: "arduino-electronics",
      title: "Electrones en Acción: Electrónica y Arduinos para tus propios Inventos",
      issuer: "Coursera",
      date: "Dic 2015",
      icon: "🤖",
      tags: ["Arduino", "Electrónica", "Hardware", "C"]
    }
  ],
  en: [
    {
      id: "amazon-q-dev-assessment",
      title: "Amazon Q Developer Fundamentals Knowledge Badge Assessment",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "🏆",
      tags: ["AWS", "Amazon Q", "AI", "Badge"]
    },
    {
      id: "amazon-q-soft-dev",
      title: "Software Development with Amazon Q Developer",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "💻",
      tags: ["AWS", "Amazon Q", "Prompt Engineering", "AI"]
    },
    {
      id: "amazon-q-setup",
      title: "Setup Amazon Q Developer",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "⚙️",
      tags: ["AWS", "Amazon Q", "DevOps", "AI"]
    },
    {
      id: "amazon-q-prompt-eng",
      title: "Prompt Engineering with Amazon Q Developer",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "🤖",
      tags: ["AWS", "Amazon Q", "Prompt Engineering", "AI"]
    },
    {
      id: "amazon-q-ops",
      title: "Managing Operations on AWS with Amazon Q Developer",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "☁️",
      tags: ["AWS", "Amazon Q", "Cloud", "Operations"]
    },
    {
      id: "amazon-q-gitlab",
      title: "GitLab Duo with Amazon Q",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "🦊",
      tags: ["AWS", "GitLab", "Amazon Q", "CI/CD"]
    },
    {
      id: "amazon-q-customization",
      title: "Customization in Amazon Q Developer",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "🛠️",
      tags: ["AWS", "Amazon Q", "Customization", "AI"]
    },
    {
      id: "amazon-q-cli",
      title: "Amazon Q Developer Command Line Interface (CLI)",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2026",
      icon: "🖥️",
      tags: ["AWS", "Amazon Q", "CLI", "Terminal"]
    },
    {
      id: "apiux-ia-academy",
      title: "AI Academy Course",
      issuer: "Apiux Tech",
      date: "Feb 2026",
      icon: "🧠",
      tags: ["Apiux", "AI", "Prompt Engineering", "Academy"]
    },
    {
      id: "aws-lambda",
      title: "Introduction to AWS Lambda",
      issuer: "Coursera",
      date: "Jul 2024",
      icon: "🏗️",
      tags: ["AWS", "Cloud", "Serverless", "Lambda"]
    },
    {
      id: "aws-s3-cost",
      title: "AWS PartnerCast - Cost Optimization Guidelines for Amazon S3",
      issuer: "Amazon Web Services (AWS)",
      date: "Apr 2024",
      icon: "☁️",
      tags: ["AWS", "S3", "Cloud", "Cost Optimization"]
    },
    {
      id: "aws-sqs",
      title: "Introduction to Amazon Simple Queue Service (SQS)",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2024",
      icon: "📨",
      tags: ["AWS", "SQS", "Cloud", "Queues"]
    },
    {
      id: "aws-cloudwatch",
      title: "Basic of Amazon Cloudwatch (AWS Partner-led Support)",
      issuer: "Amazon Web Services (AWS)",
      date: "Mar 2024",
      icon: "📈",
      tags: ["AWS", "CloudWatch", "Cloud", "Monitoring"]
    },
    {
      id: "aws-sns",
      title: "Amazon Simple Notification Service (SNS) - Troubleshooting",
      issuer: "Amazon Web Services (AWS)",
      date: "Feb 2024",
      icon: "🔔",
      tags: ["AWS", "SNS", "Cloud", "Messaging"]
    },
    {
      id: "prompt-engineering",
      title: "Prompt Engineering with ChatGPT Course",
      issuer: "Platzi",
      date: "Sep 2023",
      icon: "🤖",
      tags: ["AI", "Prompt Engineering", "ChatGPT", "LLM"]
    },
    {
      id: "java-spring-security",
      title: "Java Spring Security: Authentication & Web Security",
      issuer: "Platzi",
      date: "Aug 2023",
      icon: "🔐",
      tags: ["Java", "Spring Security", "Auth", "Backend"]
    },
    {
      id: "terminal-cli",
      title: "Introduction to Terminal & Command Line",
      issuer: "Platzi",
      date: "Aug 2023",
      icon: "🖥️",
      tags: ["CLI", "Terminal", "Linux", "Bash"]
    },
    {
      id: "regex",
      title: "Regular Expressions Course",
      issuer: "Platzi",
      date: "Aug 2023",
      icon: "🧮",
      tags: ["Regex", "Programming", "Backend"]
    },
    {
      id: "jenkins",
      title: "Jenkins Fundamentals",
      issuer: "Platzi",
      date: "Aug 2023",
      icon: "⚙️",
      tags: ["Jenkins", "CI/CD", "DevOps"]
    },
    {
      id: "java-testing",
      title: "Java Testing Fundamentals",
      issuer: "Platzi",
      date: "Mar 2021",
      icon: "✅",
      tags: ["Java", "Testing", "JUnit", "Backend"]
    },
    {
      id: "java-spring",
      title: "Java Spring Framework",
      issuer: "Platzi",
      date: "Mar 2021",
      icon: "🌱",
      tags: ["Java", "Spring Framework", "Backend"]
    },
    {
      id: "postgresql",
      title: "PostgreSQL Course",
      issuer: "Platzi",
      date: "Mar 2021",
      icon: "🐘",
      tags: ["PostgreSQL", "SQL", "Databases"]
    },
    {
      id: "java-persistence",
      title: "Java SE Data Persistence",
      issuer: "Platzi",
      date: "Feb 2021",
      icon: "💾",
      tags: ["Java", "JPA", "Hibernate", "Databases"]
    },
    {
      id: "sql-mysql",
      title: "Practical SQL & MySQL",
      issuer: "Platzi",
      date: "Feb 2021",
      icon: "🗄️",
      tags: ["SQL", "MySQL", "Databases"]
    },
    {
      id: "java-oop",
      title: "Java SE Object-Oriented Programming",
      issuer: "Platzi",
      date: "Nov 2020",
      icon: "🧩",
      tags: ["Java", "OOP", "Programming"]
    },
    {
      id: "java-english",
      title: "Basic English A1: Short & Everyday Conversations",
      issuer: "Platzi",
      date: "Nov 2020",
      icon: "🇬🇧",
      tags: ["English", "Language", "A1"]
    },
    {
      id: "git-github",
      title: "Professional Git & GitHub",
      issuer: "Platzi",
      date: "Oct 2020",
      icon: "🐙",
      tags: ["Git", "GitHub", "Version Control"]
    },
    {
      id: "tech-gerentes",
      title: "Technology for Managers & Directors",
      issuer: "Platzi",
      date: "Oct 2020",
      icon: "📊",
      tags: ["Management", "Technology", "Leadership"]
    },
    {
      id: "arduino-electronics",
      title: "Electrons in Action: Electronics & Arduinos for Your Own Inventions",
      issuer: "Coursera",
      date: "Dec 2015",
      icon: "🤖",
      tags: ["Arduino", "Electronics", "Hardware", "C"]
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("detailsModal");
  const modalClose = document.getElementById("modalClose");

  // Track currently active modal item if open
  let activeModalItem = null;

  // Section Expansion State & Initial Item Limits
  const sectionExpanded = {
    exp: false,
    courses: false,
    proj: false,
    pas: false
  };

  // Function to determine initial card limit based on responsive layout
  function getInitialLimit(sectionKey) {
    if (sectionKey === 'exp') return 3;
    const width = window.innerWidth;
    // On 2-column screens (tablet / medium resolution), show 4 cards (2 full rows x 2 columns)
    if (width <= 992 && width > 640) {
      return 4;
    }
    return 3; // Desktop (3 cards = 1 full row) or Mobile
  }

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
    const expAll = experienceData[currentLang];
    const expLimit = getInitialLimit('exp');
    const expVisible = sectionExpanded.exp ? expAll : expAll.slice(0, expLimit);
    const experienceContainer = document.getElementById("experienceList");
    if (experienceContainer) {
      experienceContainer.innerHTML = expVisible.map(exp => `
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

    const wrapExp = document.getElementById("wrapMoreExp");
    const txtExp = document.getElementById("txtMoreExp");
    if (wrapExp && txtExp) {
      if (expAll.length > expLimit) {
        wrapExp.style.display = "flex";
        const rem = expAll.length - expLimit;
        txtExp.innerText = sectionExpanded.exp ? dict.verMenos : `${dict.verMas} (${rem})`;
      } else {
        wrapExp.style.display = "none";
      }
    }

    // Helper to convert date string (e.g. "Jul 2024", "Mar 2021", "2024") into a numeric score for sorting
    function parseDateToScore(dateStr) {
      if (!dateStr) return 0;
      const parts = dateStr.trim().split(/\s+/);
      if (parts.length === 1) {
        const yr = parseInt(parts[0], 10);
        return isNaN(yr) ? 0 : yr * 100;
      }
      const months = {
        ene: 1, jan: 1, feb: 2, mar: 3, abr: 4, apr: 4,
        may: 5, jun: 6, jul: 7, ago: 8, aug: 8, sep: 9,
        oct: 10, nov: 11, dic: 12, dec: 12
      };
      const mKey = parts[0].toLowerCase().substring(0, 3);
      const month = months[mKey] || 1;
      const yr = parseInt(parts[1], 10) || 0;
      return yr * 100 + month;
    }

    // Render Courses & Certifications Grid (sorted newest first)
    const coursesAll = [...coursesData[currentLang]].sort((a, b) => parseDateToScore(b.date) - parseDateToScore(a.date));
    const coursesLimit = getInitialLimit('courses');
    const coursesVisible = sectionExpanded.courses ? coursesAll : coursesAll.slice(0, coursesLimit);
    const coursesContainer = document.getElementById("coursesGrid");
    if (coursesContainer) {
      coursesContainer.innerHTML = coursesVisible.map(course => `
        <div class="course-card-sawad">
          <div class="course-top">
            <div class="course-icon-badge">${course.icon}</div>
            <span class="course-issuer">${course.issuer}</span>
          </div>
          <div class="course-title">${course.title}</div>
          <div class="course-meta">${course.date}</div>
          <div style="display:flex; gap:0.35rem; flex-wrap:wrap; margin-top:auto;">
            ${course.tags.map(t => `<span class="tag-pill" style="font-size:0.72rem; padding:0.2rem 0.55rem;">${t}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }

    const wrapCourses = document.getElementById("wrapMoreCourses");
    const txtCourses = document.getElementById("txtMoreCourses");
    if (wrapCourses && txtCourses) {
      if (coursesAll.length > coursesLimit) {
        wrapCourses.style.display = "flex";
        const rem = coursesAll.length - coursesLimit;
        txtCourses.innerText = sectionExpanded.courses ? dict.verMenos : `${dict.verMas} (${rem})`;
      } else {
        wrapCourses.style.display = "none";
      }
    }

    // Render Projects Grid
    const projAll = projectsData[currentLang];
    const projLimit = getInitialLimit('proj');
    const projVisible = sectionExpanded.proj ? projAll : projAll.slice(0, projLimit);
    const projectsContainer = document.getElementById("projectsGrid");
    if (projectsContainer) {
      projectsContainer.innerHTML = projVisible.map(proj => `
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

    const wrapProj = document.getElementById("wrapMoreProjects");
    const txtProj = document.getElementById("txtMoreProjects");
    if (wrapProj && txtProj) {
      if (projAll.length > projLimit) {
        wrapProj.style.display = "flex";
        const rem = projAll.length - projLimit;
        txtProj.innerText = sectionExpanded.proj ? dict.verMenos : `${dict.verMas} (${rem})`;
      } else {
        wrapProj.style.display = "none";
      }
    }

    // Render Passions Grid
    const pasAll = passionsData[currentLang];
    const pasLimit = getInitialLimit('pas');
    const pasVisible = sectionExpanded.pas ? pasAll : pasAll.slice(0, pasLimit);
    const passionsContainer = document.getElementById("passionsGrid");
    if (passionsContainer) {
      passionsContainer.innerHTML = pasVisible.map(pas => `
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

    const wrapPas = document.getElementById("wrapMorePassions");
    const txtPas = document.getElementById("txtMorePassions");
    if (wrapPas && txtPas) {
      if (pasAll.length > pasLimit) {
        wrapPas.style.display = "flex";
        const rem = pasAll.length - pasLimit;
        txtPas.innerText = sectionExpanded.pas ? dict.verMenos : `${dict.verMas} (${rem})`;
      } else {
        wrapPas.style.display = "none";
      }
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

          <!-- Section 2: Education & Academic Background -->
          <div style="margin-top: 2.25rem; padding-top: 1.75rem; border-top: 1px solid var(--border-dark);">
            <h4 style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800; color: var(--text-white); margin-bottom: 0.2rem;">
              ${dict.eduTitle}
            </h4>
            <div style="font-size: 0.85rem; color: var(--accent-orange); font-weight: 600; margin-bottom: 1.25rem;">
              ${dict.eduSubtitle}
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem;">
              <div style="background: var(--bg-dark-secondary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-dark);">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.4rem;">
                  <span style="font-size: 1.15rem; font-weight: 800; color: var(--text-white);">Duoc UC</span>
                  <span class="tag-pill" style="color:var(--accent-orange); border-color:rgba(244,108,56,0.3); font-size:0.75rem;">2004 - 2010</span>
                </div>
                <div style="font-size: 0.95rem; font-weight: 700; color: var(--accent-orange);">Ingeniería en Informática</div>
                <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.4rem; line-height:1.5;">
                  Computer and Information Sciences, General.<br>Formación integral en ingeniería de software, arquitectura de sistemas, algoritmos y bases de datos.
                </div>
              </div>

              <div style="background: var(--bg-dark-secondary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-dark);">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.4rem;">
                  <span style="font-size: 1.05rem; font-weight: 800; color: var(--text-white);">Liceo Industrial Chileno Alemán</span>
                  <span class="tag-pill" style="color:var(--accent-lime); border-color:rgba(197,255,65,0.3); font-size:0.75rem;">2000 - 2004</span>
                </div>
                <div style="font-size: 0.95rem; font-weight: 700; color: var(--accent-lime);">Técnico Nivel Medio en Electrónica</div>
                <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.4rem; line-height:1.5;">
                  Especialización técnica en circuitos electrónicos, microcontroladores y fundamentos de programación.
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3: My Heroes -->
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
    // Update CV icon link target
    const cvUrl = lang === 'en' ? 'http://localhost:3000/cv?lang=en' : 'http://localhost:3000/cv';
    document.querySelectorAll('.btn-cv-pdf-link').forEach(el => {
      el.href = cvUrl;
    });
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

  // Show More / Show Less Event Handlers
  document.getElementById("btnMoreExp")?.addEventListener("click", () => {
    sectionExpanded.exp = !sectionExpanded.exp;
    renderAllSections();
  });

  document.getElementById("btnMoreCourses")?.addEventListener("click", () => {
    sectionExpanded.courses = !sectionExpanded.courses;
    renderAllSections();
  });

  document.getElementById("btnMoreProjects")?.addEventListener("click", () => {
    sectionExpanded.proj = !sectionExpanded.proj;
    renderAllSections();
  });

  document.getElementById("btnMorePassions")?.addEventListener("click", () => {
    sectionExpanded.pas = !sectionExpanded.pas;
    renderAllSections();
  });

  // Floating Back to Top Button Event Handlers
  const btnScrollTop = document.getElementById("btnScrollTop");
  if (btnScrollTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btnScrollTop.classList.add("visible");
      } else {
        btnScrollTop.classList.remove("visible");
      }
    }, { passive: true });

    btnScrollTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }


  // Email Choice Modal Logic (Copy to Clipboard or mailto)
  const emailModal = document.getElementById("emailActionModal");
  const emailModalClose = document.getElementById("emailModalClose");
  const btnCopyEmail = document.getElementById("btnCopyEmail");
  const btnOpenMailto = document.getElementById("btnOpenMailto");
  const toastEmailCopied = document.getElementById("toastEmailCopied");

  function openEmailChoiceModal(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (toastEmailCopied) toastEmailCopied.style.display = "none";
    if (emailModal) emailModal.classList.add("active");
  }

  // Attach event listener to all email links and buttons
  document.querySelectorAll('a[href^="mailto:"]:not(#btnOpenMailto), #btnContactEmail, .btn-email-action').forEach(elem => {
    elem.addEventListener("click", openEmailChoiceModal);
  });

  emailModalClose?.addEventListener("click", () => {
    emailModal?.classList.remove("active");
  });

  emailModal?.addEventListener("click", (e) => {
    if (e.target === emailModal) {
      emailModal.classList.remove("active");
    }
  });

  btnCopyEmail?.addEventListener("click", (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText("administrator@fgonzalez.cl").then(() => {
      if (toastEmailCopied) {
        toastEmailCopied.style.display = "block";
        setTimeout(() => {
          toastEmailCopied.style.display = "none";
          emailModal?.classList.remove("active");
        }, 1800);
      }
    }).catch(err => {
      console.error("Error al copiar correo:", err);
    });
  });

  btnOpenMailto?.addEventListener("click", (e) => {
    e.stopPropagation();
    emailModal?.classList.remove("active");
    // Explicitly open default OS mail client via mailto
    window.location.href = "mailto:administrator@fgonzalez.cl";
  });

    // Handle window resize for dynamic responsive card limits
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      renderAllSections();
    }, 150);
  });


  // 🕹️ Konami Code SNES Arcade Easter Egg Handler
  const konamiCodeSequence = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA"
  ];
  let konamiPosition = 0;

  const snesArcadeModal = document.getElementById("snesArcadeModal");
  const snesArcadeClose = document.getElementById("snesArcadeClose");
  const snesArcadeFrame = document.getElementById("snesArcadeFrame");

  function openSnesArcadeModal() {
    if (snesArcadeModal) {
      snesArcadeModal.classList.add("active");
    }

    if (snesArcadeFrame) {
      // Reload iframe content each time modal opens for clean WebAssembly execution
      const romPath = 'assets/files/Macross-Scrambled-Valkyrie-SNES.zip';
      
      const frameHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    html, body { margin:0; padding:0; width:100%; height:100%; background:#000; overflow:hidden; }
    #game { width:100%; height:100%; }
  </style>
</head>
<body>
  <div id="game"></div>
  <script>
    window.EJS_player = '#game';
    window.EJS_core = 'snes';
    window.EJS_gameName = 'Macross: Scrambled Valkyrie';
    window.EJS_gameUrl = '${romPath}';
    window.EJS_pathtodata = 'https://cdn.emulatorjs.org/stable/data/';
    window.EJS_color = '#f46c38';
    window.EJS_startOnLoaded = true;
  </script>
  <script src="https://cdn.emulatorjs.org/stable/data/loader.js"></script>
</body>
</html>`;

      snesArcadeFrame.srcdoc = frameHtml;
    }
  }

  function closeSnesArcadeModal() {
    if (snesArcadeModal) {
      snesArcadeModal.classList.remove("active");
    }
    if (snesArcadeFrame) {
      snesArcadeFrame.srcdoc = "";
    }
  }

  snesArcadeClose?.addEventListener("click", closeSnesArcadeModal);

  snesArcadeModal?.addEventListener("click", (e) => {
    if (e.target === snesArcadeModal) {
      closeSnesArcadeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    const code = e.code;
    const key = e.key ? e.key.toLowerCase() : "";
    const expected = konamiCodeSequence[konamiPosition];

    let isMatch = false;
    if (code === expected) {
      isMatch = true;
    } else if (expected === "KeyB" && (key === "b" || code === "KeyB")) {
      isMatch = true;
    } else if (expected === "KeyA" && (key === "a" || code === "KeyA")) {
      isMatch = true;
    }

    if (isMatch) {
      konamiPosition++;
      if (konamiPosition === konamiCodeSequence.length) {
        konamiPosition = 0;
        openSnesArcadeModal();
      }
    } else {
      konamiPosition = 0;
    }
  });

    // Initialize Portfolio with default/persisted language
  updateStaticTranslations();
  renderAllSections();
});
