export const projects = [
  {
    n: "01",
    name: "NotesApp",
    tagline: "Full-stack note-taking app with secure, per-user authentication",
    desc: "Converted from a local-only prototype into a full MERN application. Users register and log in with JWT-based authentication, then create, tag, and organize notes that are persisted per-user in MongoDB through a REST API — replacing the earlier browser-only storage.",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Mongoose", "JWT Auth", "Tailwind CSS"],
    live: "https://project1notesapp.netlify.app",
    code: "https://github.com/amulyaalladi/NotesApp.git",
    code2: "https://github.com/amulyaalladi/BE-notes.git"
  },
  {
    n: "02",
    name: "Smart Expense Tracker",
    tagline: "Full-stack expense tracker with per-user budgets and secure auth",
    desc: "Converted from a local-only prototype into a full MERN application. Expenses and budgets are now scoped to each authenticated user and stored in MongoDB via a Mongoose-backed REST API, with JWT login and registration replacing browser storage entirely.",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Mongoose", "JWT Auth", "Tailwind CSS"],
    live: "https://smartexpesetracker.netlify.app",
    code: "https://github.com/amulyaalladi/SmartExpenseProject.git",
    code2: "https://github.com/amulyaalladi/expenseTrackerBackend.git"
  },
  {
    n: "03",
    name: "Real-Time News App",
    tagline: "Full-stack news alerts with customizable delivery preferences",
    desc: "A real-time news alert system that delivers breaking updates based on user-chosen categories and frequency, with notifications sent by email. Built as a full MERN application with a separate frontend and backend.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "Email service"],
    live: "https://realtimenews1.netlify.app",
    code: "https://github.com/amulyaalladi/newsportalFrotend.git",
    code2: "https://github.com/amulyaalladi/NewsPortalBackend.git",
  }
];

// Skills are split into two groups, shown on the dedicated /skills page:
// - technical: languages, frameworks, and core concepts
// - tools: the surrounding tooling used to build/ship the MERN stack projects
export const skills = {
  technical: [
    "JavaScript (ES6+)",
    "React.js",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "JWT Authentication",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
  tools: [
    "Git & GitHub",
    "VS Code",
    "Postman",
    "npm",
    "Vite",
    "MongoDB Atlas",
    "Render",
    "Netlify",
    "Chrome DevTools",
  ],
};

// Short teaser shown inline on the About section, linking through to the
// full /skills page rather than duplicating the whole list there.
export const skillsTeaser = ["React", "Node.js", "Express", "MongoDB", "Redux"];

export const certificates = [
  {
    title: "Full Stack Development Course With AI Tools",
    issuer: "GUVI × HCL",
    note: "An IITM Incubated Company · Google for Education Partner",
    duration: "7 Months",
    issuedDate: "August 19, 2026",
    signatory: "Arun Prakash M, Founder and CEO, GUVI Geek Network",
    desc: "Awarded on completing all modules of GUVI × HCL's intensive Full Stack Development program — the training referenced in About, covering the MERN stack end to end and forming the foundation for the full-stack projects showcased in Work.",
    image: "certificate-guvi",
  },
];

export const contact = {
  email: "amulyaalladi@gmail.com",
  linkedin: "https://linkedin.com/in/alladiamulya",
  github: "https://github.com/amulyaalladi",
};
