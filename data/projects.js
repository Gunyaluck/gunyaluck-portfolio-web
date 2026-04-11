// Data source for the Work section.
// Edit this file to add/update projects without touching HTML.
//
// links.github — either a single URL string, or an array of { label, url } for multiple repos
// (e.g. separate frontend and backend).

window.PROJECTS = [
  {
    id: "neatly",
    meta: "01 — 2026",
    title: "Neatly — Hotel Management System",
    description:
      "A full-stack hotel management platform for room bookings, housekeeping, and billing with AI chatbot concierge and analytics dashboard.",
    features:
      "Authentication | CRUD | RESTful API | Responsive Design",
    tags: ["Next.js", "React", "JavaScript", "Supabase", "Tailwind CSS", "Stripe"],
    links: {
      site: "https://neatly-final-project-1.vercel.app/",
      github: "https://github.com/parallell99/neatly-final-project-1",
    },
    thumb: {
      type: "img",
      src: "assets/images/neatly.png",
      alt: "Neatly hotel management system — UI preview with room cards and booking layout",
      width: 220,
      height: 160,
    },
  },
  {
    id: "merry-match",
    meta: "02 — 2026",
    title: "Merry Match — Online Dating Web App",
    description:
      "A modern dating web app with a Tinder-style swipe interface for discovering matches.",
    features: "Authentication | RESTful API | Real-time Chat | Admin Dashboard",
    tags: ["Vue.js", "Java", "Tailwind CSS", "SpringBoot", "PostgreSQL", "Supabase"],
    links: {
      site: "https://merry-match-project-vert.vercel.app",
      github: [
        { label: "github · frontend", url: "https://github.com/polarisden/merry-match-project" },
        { label: "github · backend", url: "https://github.com/polarisden/merry-mathch-BE" },
      ],
    },
    thumb: {
      type: "img",
      src: "assets/images/merrymatch.png",
      alt: "Merry Match — Online Dating Web App",
      width: 220,
      height: 160,
    },
  },
  {
    id: "dev-journal",
    meta: "03 — 2026",
    title: "Dev Journal — Personal Blog",
    description:
      "A personal web application for documenting and sharing development notes, tutorials, and learning progress.",
    features: "Authentication | CRUD | Responsive Design",
    tags: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Supabase",
      "Nginx",
      "PM2",
      "CI/CD",
    ],
    links: {
      site: "https://pjsdf.online",
      github: [
        { label: "github · frontend", url: "https://github.com/Gunyaluck/gunyaluck-dev-notes" },
        { label: "github · backend", url: "https://github.com/Gunyaluck/gunyaluck-dev-notes-backend" },
      ],
    },
    thumb: {
      type: "img",
      src: "assets/images/presonal-blog.png",
      alt: "Dev Journal — Personal Blog",
      width: 220,
      height: 160,
    },
  },{
    id: "kanban-task",
    meta: "04 — 2026",
    title: "Kanban Task Management App",
    description:
      "A full-stack Kanban application for managing tasks with drag-and-drop functionality and user authentication.",
    features: "Drag & Drop | Authentication | Task Progress Tracking | Responsive Design",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Prisma",
      "dnd-kit",
    ],
    links: {
      site: "https://kanban-task-management-web-app-pi.vercel.app",
      github: "https://github.com/Gunyaluck/Kanban-task-management-web-app",
    },
    thumb: {
      type: "img",
      src: "assets/images/kanban-task.png",
      alt: "Kanban Task Management App",
      width: 220,
      height: 160,
    },
  },
  {
    id: "portfolio",
    meta: "05 — 2026",
    title: "Portfolio Website",
    description:
      "Built a responsive portfolio website to showcase projects and technical skills, with a focus on clean UI, performance, and smooth user experience.",
    features:
      "Responsive Design | Interactive UI | Smooth Animations | Project Showcase",
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      site: "https://gunyaluck-portfolio-web-theta.vercel.app",
      github: "https://github.com/Gunyaluck/gunyaluck-portfolio-web",
    },
    thumb: {
      type: "img",
      src: "assets/images/portfolio.png",
      alt: "Portfolio Website",
      width: 220,
      height: 249,
    },
  },
];

