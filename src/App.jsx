import { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import {
  GithubIcon as Github,
  LinkedinIcon as Linkedin,
  MailIcon as Mail,
  ArrowUpRightIcon as ArrowUpRight,
  CopyIcon as Copy,
  CheckIcon as Check,
  DownloadIcon as Download,
  FileTextIcon as FileText,
  ExternalLinkIcon as ExternalLink,
} from "./icons";
import { projects, skills, skillsTeaser, certificates, contact } from "./data";
import amulyaPhoto from "./assets/amulya-photo.jpg";
import certGuviImg from "./assets/certificate-guvi.png";

const certificateImages = { "certificate-guvi": certGuviImg };
const RESUME_URL = "/resume.pdf";

function SectionLink({ hash, children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const handleClick = (e) => {
    if (isHome) return;
    e.preventDefault();
    navigate("/", { state: { scrollTo: hash } });
  };
  return <a href={isHome ? `#${hash}` : `/#${hash}`} onClick={handleClick}>{children}</a>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/85 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" onClick={close} className="font-display font-bold text-lg tracking-tight text-cream">
          amulya<span className="text-gold">.</span>dev
        </Link>
        <button className="md:hidden text-cream text-2xl" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? "×" : "☰"}
        </button>
        <nav className={`${open ? "flex" : "hidden"} md:flex absolute md:static top-16 left-0 right-0 md:w-auto bg-ink md:bg-transparent border-b md:border-0 border-line px-5 py-5 md:p-0 flex-col md:flex-row gap-5 md:gap-7 font-body text-sm text-slate`}>
          <SectionLink hash="about"><span onClick={close}>About</span></SectionLink>
          <SectionLink hash="resume"><span onClick={close}>Resume</span></SectionLink>
          <SectionLink hash="skills"><span onClick={close}>Skills</span></SectionLink>
          <SectionLink hash="projects"><span onClick={close}>Projects</span></SectionLink>
          <SectionLink hash="certificates"><span onClick={close}>Certificates</span></SectionLink>
          <SectionLink hash="contact"><span onClick={close} className="text-gold">Contact</span></SectionLink>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_20%,rgba(232,163,61,.14),transparent_32%),radial-gradient(circle_at_15%_45%,rgba(91,108,180,.12),transparent_28%)]" />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-20 md:pb-28 grid lg:grid-cols-[1.25fr_.75fr] gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-ink2/70 px-3 py-1.5 text-xs text-slate mb-7">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" /> Available for full-time opportunities
          </div>
          <p className="font-mono text-gold text-sm mb-4">Hello, I'm</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[.95] tracking-tight text-cream">
            Alladi Amulya<span className="text-gold">.</span>
          </h1>
          <h2 className="font-display text-2xl md:text-3xl text-slate mt-5">MERN Stack Developer</h2>
          <p className="font-body text-cream/65 text-base md:text-lg leading-relaxed max-w-2xl mt-7">
            I build responsive, user-focused full-stack web applications with React, Node.js, Express and MongoDB — from polished interfaces to secure REST APIs.
          </p>
          <div className="flex flex-wrap gap-3 mt-9">
            <a href="#projects" className="btn-primary">Explore projects <ArrowUpRight size={16} /></a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-secondary"><FileText size={16} /> View resume</a>
          </div>
          <div className="flex gap-5 mt-9">
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social"><Github size={19}/></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social"><Linkedin size={19}/></a>
            <a href={`mailto:${contact.email}`} aria-label="Email" className="social"><Mail size={19}/></a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gold/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-line bg-ink2 p-3 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src={amulyaPhoto} alt="Alladi Amulya" className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-[1.4rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-[.25em] text-gold mb-3">{eyebrow}</p>
      <h2 className="font-display font-bold text-3xl md:text-5xl text-cream tracking-tight">{title}</h2>
      {text && <p className="text-slate max-w-2xl mt-4 leading-relaxed">{text}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading eyebrow="01 / About me" title="A developer who cares about the details." />
      <div className="grid md:grid-cols-3 gap-5">
        <div className="md:col-span-2 glass-card p-7 md:p-9">
          <p className="text-cream/75 text-lg leading-8">
            I'm a MERN Stack Developer focused on building practical web products with clean UI, reliable APIs and maintainable code. I enjoy turning requirements into simple, intuitive experiences and connecting them to real backend systems.
          </p>
          <p className="text-slate leading-7 mt-5">
            My recent work includes authenticated productivity tools, personal finance dashboards and a news platform with personalized alerts. I work across the stack and am comfortable with React, state management, REST APIs, Node.js, Express and MongoDB.
          </p>
        </div>
        <div className="glass-card p-7 flex flex-col justify-between">
          <div>
            <p className="text-xs font-mono text-slate uppercase tracking-widest">What I bring</p>
            <ul className="mt-5 space-y-3 text-cream/75 text-sm">
              <li>✦ Responsive, accessible interfaces</li>
              <li>✦ Secure authentication & APIs</li>
              <li>✦ MongoDB-backed applications</li>
              <li>✦ Git-based development workflow</li>
            </ul>
          </div>
          <a href={`mailto:${contact.email}`} className="text-gold text-sm mt-8">Let's connect →</a>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section id="resume" className="section-shell">
      <SectionHeading eyebrow="02 / Resume" title="My resume, one click away." text="View the full resume in your browser or download a copy for your records." />
      <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="icon-box"><FileText size={24}/></div>
          <div>
            <h3 className="font-display text-xl text-cream">Alladi Amulya — Resume</h3>
            <p className="text-sm text-slate mt-1">MERN Stack Developer</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-primary"><ExternalLink size={16}/> View resume</a>
          <a href={RESUME_URL} download className="btn-secondary"><Download size={16}/> Download</a>
        </div>
      </div>
      
    </section>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="glass-card p-6 md:p-7 hover:-translate-y-1 transition-transform duration-300">
      <h3 className="font-display text-xl text-cream mb-5">{title}</h3>
      <div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="skill-pill">{item}</span>)}</div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading eyebrow="03 / Skills" title="Tools I use to build." text="A practical mix of technical skills and people skills used across my projects and development workflow." />
      <div className="grid md:grid-cols-2 gap-5">
        <SkillCard title="Frontend" items={skills.frontend} />
        <SkillCard title="Backend" items={skills.backend} />
        <SkillCard title="Tools & Deployment" items={skills.tools} />
        <SkillCard title="Soft Skills" items={skills.soft} />
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card group">
      <div className="flex justify-between items-start gap-4">
        <span className="font-mono text-sm text-gold">{project.n}</span>
        <span className="text-xs border border-line rounded-full px-3 py-1 text-slate">MERN</span>
      </div>
      <h3 className="font-display font-bold text-2xl text-cream mt-7">{project.name}</h3>
      <p className="text-gold/90 text-sm mt-2">{project.tagline}</p>
      <p className="text-slate text-sm leading-6 mt-4 min-h-[120px]">{project.desc}</p>
      <div className="flex flex-wrap gap-2 mt-5">{project.stack.map((s) => <span key={s} className="skill-pill">{s}</span>)}</div>
      <div className="border-t border-line mt-7 pt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm">
        <a href={project.live} target="_blank" rel="noreferrer" className="link-gold">Live demo <ArrowUpRight size={14}/></a>
        <a href={project.frontend} target="_blank" rel="noreferrer" className="link-muted">Frontend <Github size={14}/></a>
        <a href={project.backend} target="_blank" rel="noreferrer" className="link-muted">Backend <Github size={14}/></a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading eyebrow="04 / Projects" title="Things I've built." text="Three complete MERN applications with real authentication, APIs, databases and deployed frontends." />
      <div className="grid lg:grid-cols-3 gap-5">{projects.map((p) => <ProjectCard key={p.n} project={p} />)}</div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="section-shell">
      <SectionHeading eyebrow="05 / Certifications" title="Learning that backs the work." />
      <div className="grid md:grid-cols-[.8fr_1.2fr] gap-7 glass-card p-5 md:p-7 items-center">
        <img src={certificateImages[certificates[0].image]} alt="GUVI certificate" className="w-full rounded-xl border border-line" />
        <div>
          <p className="font-mono text-xs text-gold uppercase tracking-widest">{certificates[0].issuer}</p>
          <h3 className="font-display font-bold text-2xl text-cream mt-3">{certificates[0].title}</h3>
          <p className="text-slate text-sm mt-2">{certificates[0].duration} · Issued {certificates[0].issuedDate}</p>
          <p className="text-cream/70 leading-7 mt-5">{certificates[0].desc}</p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(contact.email); setCopied(true); setTimeout(() => setCopied(false), 1600); } catch {}
  };
  return (
    <section id="contact" className="section-shell pb-24">
      <SectionHeading eyebrow="06 / Contact" title="Let's build something useful." text="Have a role, project or opportunity in mind? Send me a message and I'll get back to you." />
      <div className="grid lg:grid-cols-[1fr_.75fr] gap-6">
        <form action={`mailto:${contact.email}`} method="post" encType="text/plain" className="glass-card p-7 md:p-9 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
          </div>
          <label>Message<textarea name="message" rows="6" required placeholder="Tell me about your opportunity..." /></label>
          <button type="submit" className="btn-primary">Send message <Mail size={16}/></button>
        </form>
        <div className="glass-card p-7 md:p-9">
          <p className="font-mono text-xs uppercase tracking-widest text-slate">Direct contact</p>
          <button onClick={copyEmail} className="mt-5 text-left w-full text-cream hover:text-gold transition-colors break-all">
            <span className="text-sm">{contact.email}</span>
            <span className="ml-2 inline-flex align-middle">{copied ? <Check size={15}/> : <Copy size={15}/>}</span>
          </button>
          <div className="h-px bg-line my-7" />
          <div className="space-y-4">
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contact-link"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={14}/></a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="contact-link"><Github size={18}/> GitHub <ArrowUpRight size={14}/></a>
            <a href={`mailto:${contact.email}`} className="contact-link"><Mail size={18}/> Email <ArrowUpRight size={14}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const location = useLocation();
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }), 50);
  }, [location.state]);
  return <><Hero/><About/><Resume/><Skills/><Projects/><Certificates/><Contact/></>;
}

function Footer() {
  return <footer className="border-t border-line"><div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate"><span>© {new Date().getFullYear()} Alladi Amulya</span><span>Built with React + Tailwind CSS</span></div></footer>;
}

export default function App() {
  return <div className="min-h-screen bg-ink font-body"><Nav/><Routes><Route path="/" element={<Home/>}/></Routes><Footer/></div>;
}
