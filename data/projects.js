// Data source for the Work section.
// Edit this file to add/update projects without touching HTML.

window.PROJECTS = [
  {
    id: "neatly",
    meta: "01 — 2026",
    title: "Neatly — Hotel Management System",
    description:
      "A full-stack hotel management platform for room bookings, housekeeping, and billing with AI chatbot concierge and analytics dashboard.",
    features:
      "Authentication | CRUD | RESTful API | Responsive Design",
    tags: ["next.js", "react", "javascript", "supabase", "tailwind CSS", "stripe"],
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
    tags: ["vue.js", "java"],
    links: {
      site: null,
      github: "https://github.com/Gunyaluck/gunyaluck-dev-notes",
    },
    thumb: {
      type: "canvas",
      id: "cv2",
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
      "react",
      "tailwind CSS",
      "vite",
      "node.js",
      "supabase",
      "nginx",
      "PM2",
      "CI/CD",
    ],
    links: {
      site: "https://pjsdf.online",
      github: "https://github.com/Gunyaluck/gunyaluck-dev-notes",
    },
    thumb: {
      type: "img",
      src: "assets/images/presonal-blog.png",
      alt: "Dev Journal — Personal Blog",
      width: 220,
      height: 160,
    },
  },
  {
    id: "portfolio",
    meta: "04 — 2026",
    title: "Portfolio Website",
    description:
      "Built a responsive portfolio website to showcase projects and technical skills, with a focus on clean UI, performance, and smooth user experience.",
    features:
      "Responsive Design | Interactive UI | Smooth Animations | Project Showcase",
    tags: ["html", "CSS", "javascript"],
    links: {
      site: null,
      github: "https://github.com/parallell99/gunyaluck-portfolio-web",
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

