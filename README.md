# 🚀 fgonzalez.cl - Sitio Web Personal & Portafolio Profesional

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Sitio web personal y portafolio interactivo de **Francisco González** (Auto-Leader & Senior Software Engineer). Diseñado para presentar de manera dinámica y moderna la trayectoria profesional, proyectos destacados, certificaciones, stack tecnológico y vías de contacto.

🌐 **Sitio Web:** [https://fgonzalez.cl](https://fgonzalez.cl)

---

## ✨ Características Principales

- **🎨 Diseño Moderno & Estilo Framer/Sawad:** Interfaz con estética tipo *glassmorphism*, degradados sutiles, efectos micro-interactivos y tipografía refinada.
- **🌐 Sistema Bilingüe (i18n):** Cambio dinámico de idioma entre **Español (ES)** y **Inglés (EN)** sin recargar la página, con almacenamiento de preferencia en `localStorage`.
- **✨ Fondo Animado Interactivo (`Canvas 2D`):** Red de partículas interactivas conectadas por nodos que responden al movimiento del cursor del usuario (`js/bg.js`).
- **📱 100% Responsivo:** Adaptado para una experiencia óptima en dispositivos móviles, tablets y monitores de alta resolución.
- **💼 Secciones del Portafolio:**
  - **Experiencia Laboral:** Visualización de trayectoria (+13 años en instituciones financieras, +5 años como Líder Técnico).
  - **Certificaciones & Cursos:** Muestra dinámica de formación continua (+29 cursos y certificaciones).
  - **Proyectos Destacados:** Galería de proyectos con detalles técnicos y enlaces.
  - **Intereses & Hobbies:** Espacio personal e intereses fuera del ámbito profesional.
  - **Stack Tecnológico:** Herramientas, lenguajes y metodologías dominadas.
  - **Sobre Mí & Héroes:** Modales interactivos detallando historia personal, valores y mentores de inspiración.
  - **Contacto:** Enlaces directos a LinkedIn y correo electrónico.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico:** Estructura limpia y accesible siguiendo mejores prácticas de SEO.
- **CSS3 Vanilla:** Variables CSS (`custom properties`), CSS Grid, Flexbox y animaciones keyframe sin dependencias pesadas de frameworks.
- **JavaScript (ES6+ Vanilla):** Lógica modular de i18n, renderizado dinámico de tarjetas, control de modales e interacción en canvas.
- **GitHub Pages:** Alojamiento de sitio estático con configuración de dominio personalizado (`CNAME`).

---

## 📁 Estructura del Proyecto

```text
fgonzalez-cl/
├── assets/                          # Recursos multimedia (íconos, avatares, favicons)
│   ├── heroes/                      # Fotografías e imágenes de perfil
│   └── icons/                       # Logos y favicons del sitio
├── css/
│   └── style.css                    # Hoja de estilos global y diseño responsivo
├── js/
│   ├── bg.js                        # Animación Canvas de partículas interactivas
│   └── main.js                      # Lógica principal, diccionario i18n y modales
├── .nojekyll                        # Omite el procesamiento de Jekyll en GitHub Pages
├── CNAME                            # Dominio personalizado (fgonzalez.cl)
├── index.html                       # Documento HTML principal
└── README.md                        # Documentación del proyecto
```

---

## 💻 Ejecución Local

No se requieren dependencias de Node.js ni procesos de compilación. Para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/fgonzalez-cl.git
   cd fgonzalez-cl
   ```

2. **Abrir en el navegador:**
   - Puedes abrir directamente el archivo `index.html` en cualquier navegador web moderno.
   - O utilizar una extensión de servidor local como **Live Server** en VS Code o ejecutar mediante `npx`:
     ```bash
     npx serve .
     ```

---

## 🚀 Despliegue

El proyecto se encuentra desplegado utilizando **GitHub Pages** con el archivo `CNAME` apuntando al dominio personalizado `fgonzalez.cl`.

Cualquier cambio realizado en la rama principal (`main` / `master`) se refleja automáticamente en producción.

---

## 📧 Contacto

- **Nombre:** Francisco González
- **Rol:** Auto-Leader & Senior Software Engineer
- **LinkedIn:** [https://www.linkedin.com/in/fgonzalezalvarez/](https://www.linkedin.com/in/fgonzalezalvarez/)
- **Correo Electrónico:** [administrator@fgonzalez.cl](mailto:administrator@fgonzalez.cl)

---

© 2026 Francisco González. Todos los derechos reservados.
