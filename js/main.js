/* ==========================================================================
   fgonzalez.cl - Sawad Framer Template Logic
   Handles portfolio interactions, modal detail dialogs, filter tabs
   ========================================================================== */

// Experience Data
const experienceData = [
  {
    id: "autoleader-bee",
    title: "Auto-Leader & Tech Lead",
    company: "Bee",
    date: "Reciente / Actualidad",
    summary: "Liderazgo técnico, arquitectura de soluciones ágiles y gestión de equipos distribuidos.",
    details: "Desempeño como Auto-Leader coordinando equipos de desarrollo, definiendo estándares de código, arquitectura de sistemas y garantizando entregables de alta calidad en entornos ágiles.",
    tags: ["Tech Lead", "Architecture", "Agile", "Management"]
  },
  {
    id: "java-senior-dev",
    title: "Java Senior Developer",
    company: "Desarrollo Enterprise",
    date: "Enterprise Backend",
    summary: "Desarrollo de aplicaciones backend robustas y de alto rendimiento en Java y Spring Boot.",
    details: "Diseño e implementación de microservicios, APIs RESTful, optimización de consultas SQL/NoSQL, integración de sistemas heredados y mantenimiento de plataformas empresariales críticas.",
    tags: ["Java", "Spring Boot", "APIs REST", "Backend", "SQL"]
  },
  {
    id: "coldfusion-dev",
    title: "ColdFusion Developer",
    company: "Trabajando.com",
    date: "Portales de Empleo",
    summary: "Desarrollo y mantenimiento de plataformas web de empleo masivas en ColdFusion.",
    details: "Mantenimiento y evolución del portal Trabajando.com en tecnología Adobe ColdFusion, optimizando rendimiento de servidor web, bases de datos y experiencia de usuario.",
    tags: ["ColdFusion", "SQL Server", "Trabajando.com", "High Traffic"]
  },
  {
    id: "asp-dev",
    title: "ASP & VBScript Developer",
    company: "Mira360",
    date: "Sistemas Web",
    summary: "Desarrollo web dinámico y aplicaciones a medida en Active Server Pages (ASP).",
    details: "Implementación de sitios web dinámicos, integración con bases de datos relacionales y mantenimiento de aplicaciones web en servidor Microsoft IIS.",
    tags: ["ASP", "VBScript", "IIS", "Mira360"]
  },
  {
    id: "php-junior-dev",
    title: "PHP Junior Developer",
    company: "Creear",
    date: "Desarrollo Web Agency",
    summary: "Desarrollo web frontend y backend en PHP y MySQL para proyectos digitales.",
    details: "Creación de sitios dinámicos, maquetación CSS/HTML, scripts backend en PHP y administración de MySQL en la agencia Creear.",
    tags: ["PHP", "MySQL", "HTML5/CSS3", "Creear"]
  }
];

// Projects Data
const projectsData = [
  {
    id: "zonekeyboards-site",
    title: "ZoneKeyboards.cl",
    category: "E-Commerce / Community",
    icon: "⌨️",
    summary: "Plataforma web y e-commerce dedicado a la comunidad de teclados mecánicos custom.",
    details: "Diseño y desarrollo de la plataforma ZoneKeyboards.cl para entusiastas de teclados custom, catálogo de productos, guías y experiencia de compra optimizada.",
    tags: ["E-Commerce", "UI/UX", "Keyboards"]
  },
  {
    id: "rubick-site",
    title: "Rubick.cl",
    category: "Speedcubing / Web Site",
    icon: "🧩",
    summary: "Plataforma web enfocada en velocidad, cubos Rubik y venta de coleccionables.",
    details: "Desarrollo web del sitio Rubick.cl, optimizado para catálogo interactivo, velocidad de carga y presentación de productos de velocidad y resolución de puzles.",
    tags: ["Web Dev", "Speedcubing", "Catalogo"]
  },
  {
    id: "category-calendar",
    title: "Category Calendar",
    category: "UI Component / JS",
    icon: "📅",
    summary: "Componente interactivo de calendario con categorización dinámica de eventos.",
    details: "Desarrollo de un plugin/demostración visual de calendario interactivo para organización y filtrado eficiente de actividades por categorías de color.",
    tags: ["JavaScript", "Calendar", "UI Component"]
  }
];

// Tools Data
const toolsData = [
  { name: "Java Enterprise", role: "Backend & Microservicios", icon: "☕" },
  { name: "ColdFusion", role: "Adobe Web Application Server", icon: "⚡" },
  { name: "PHP & MySQL", role: "Desarrollo Web Backend", icon: "🐘" },
  { name: "JavaScript & HTML5", role: "Frontend Interactivo", icon: "🌐" },
  { name: "Impresión & Modelado 3D", role: "Prototipado CAD & Maker", icon: "🖨️" },
  { name: "Astronomía & Optica", role: "Telescopio Reflector 1200/160", icon: "🔭" },
  { name: "GitHub Pages", role: "Hosting Estático 100% Seguro", icon: "🛡️" },
  { name: "SQL & Databases", role: "SQL Server & Relacionales", icon: "💾" }
];

document.addEventListener("DOMContentLoaded", () => {
  // Render Experience List
  const experienceContainer = document.getElementById("experienceList");
  if (experienceContainer) {
    experienceContainer.innerHTML = experienceData.map(exp => `
      <div class="experience-card btn-exp-modal" data-id="${exp.id}">
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
    projectsContainer.innerHTML = projectsData.map(proj => `
      <div class="project-card-sawad btn-proj-modal" data-id="${proj.id}">
        <div>
          <div class="proj-top">
            <div class="proj-icon-badge">${proj.icon}</div>
            <span class="tag-pill" style="color:var(--accent-orange); border-color:rgba(244,108,56,0.3);">${proj.category}</span>
          </div>
          <h3 class="proj-title">${proj.title}</h3>
          <p class="proj-desc">${proj.summary}</p>
        </div>
        <div class="proj-footer">
          <span style="font-size:0.8rem; color:var(--text-muted);">Ver detalles</span>
          <span style="color:var(--accent-orange); font-weight:bold;">↗</span>
        </div>
      </div>
    `).join('');
  }

  // Render Tools Grid
  const toolsContainer = document.getElementById("toolsGrid");
  if (toolsContainer) {
    toolsContainer.innerHTML = toolsData.map(tool => `
      <div class="tool-card">
        <div class="tool-icon">${tool.icon}</div>
        <div>
          <div class="tool-name">${tool.name}</div>
          <div class="tool-role">${tool.role}</div>
        </div>
      </div>
    `).join('');
  }

  // Modal Setup
  const modal = document.getElementById("detailsModal");
  const modalClose = document.getElementById("modalClose");

  function openModalWithData(item) {
    if (!item || !modal) return;
    document.getElementById("modalIcon").textContent = item.icon || "⚡";
    document.getElementById("modalTitle").textContent = item.title;
    document.getElementById("modalCategory").textContent = (item.company || item.category || "") + " • " + (item.date || "");
    document.getElementById("modalDetails").textContent = item.details;
    
    const tagsContainer = document.getElementById("modalTags");
    if (tagsContainer && item.tags) {
      tagsContainer.innerHTML = item.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');
    }
    modal.classList.add("active");
  }

  // Attach Event Listeners for Experience Modals
  document.querySelectorAll(".btn-exp-modal").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      const item = experienceData.find(e => e.id === id);
      openModalWithData(item);
    });
  });

  // Attach Event Listeners for Project Modals
  document.querySelectorAll(".btn-proj-modal").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      const item = projectsData.find(p => p.id === id);
      openModalWithData(item);
    });
  });

  modalClose?.addEventListener("click", () => {
    modal?.classList.remove("active");
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
