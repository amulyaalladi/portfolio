export const projects = [
  {
    n: "01",
    name: "NotesApp",
    tagline: "Secure, full-stack note management with per-user data",
    desc: "A MERN notes platform where authenticated users can create, organize, tag, edit, and persist notes. JWT authentication protects user data while a REST API connects the React client to MongoDB.",
    stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Tailwind CSS"],
    live: "https://project1notesapp.netlify.app",
    frontend: "https://github.com/amulyaalladi/NotesApp.git",
    backend: "https://github.com/amulyaalladi/BE-notes.git"
  },
  {
    n: "02",
    name: "Smart Expense Tracker",
    tagline: "Personal finance dashboard with budgets and authentication",
    desc: "A full-stack expense tracker that keeps expenses and budgets scoped to authenticated users. Data is persisted in MongoDB through an Express REST API, with a responsive React interface for managing finances.",
    stack: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Tailwind CSS"],
    live: "https://smartexpesetracker.netlify.app",
    frontend: "https://github.com/amulyaalladi/SmartExpenseProject.git",
    backend: "https://github.com/amulyaalladi/expenseTrackerBackend.git"
  },
  {
    n: "03",
    name: "Real-Time News App",
    tagline: "Personalized news alerts with category and delivery preferences",
    desc: "A MERN news platform that lets users choose categories and notification preferences, then receive relevant updates by email. The frontend and backend are separated into deployable applications.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Email Service"],
    live: "https://realtimenews1.netlify.app",
    frontend: "https://github.com/amulyaalladi/newsportalFrotend.git",
    backend: "https://github.com/amulyaalladi/NewsPortalBackend.git"
  }
];

export const skills = {
  frontend: ["JavaScript (ES6+)", "React.js", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"],
  backend: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "JWT Authentication"],
  tools: ["Git & GitHub", "VS Code", "Postman", "npm", "Vite", "MongoDB Atlas", "Render", "Netlify", "Chrome DevTools"],
  soft: ["Problem Solving", "Communication", "Team Collaboration", "Adaptability", "Time Management", "Continuous Learning"]
};

export const skillsTeaser = ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit"];

export const certificates = [
  {
    title: "Full Stack Development Course With AI Tools",
    issuer: "GUVI × HCL",
    note: "IITM Incubated Company · Google for Education Partner",
    duration: "7 Months",
    issuedDate: "August 19, 2026",
    desc: "Completed an intensive full-stack development program covering the MERN stack and practical application development.",
    image: "certificate-guvi",
  },
];

export const contact = {
  email: "amulyaalladi@gmail.com",
  linkedin: "https://linkedin.com/in/alladiamulya",
  github: "https://github.com/amulyaalladi",
};
