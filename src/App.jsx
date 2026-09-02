import { useEffect, useState } from "react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, MailIcon as Mail, ArrowUpRightIcon as ArrowUpRight, CopyIcon as Copy, CheckIcon as Check } from "./icons";
import { projects, skills, contact } from "./data";

const LINES = [
  { prompt: true, text: "whoami" },
  { prompt: false, text: "Alladi Amulya — MERN Stack Developer" },
  { prompt: false, text: "Designing, building, and deploying full-stack" },
  { prompt: false, text: "apps end to end — JavaScript from database to client." },
];

function useTypewriter(lines, speed = 18, lineDelay = 250) {
  const [rendered, setRendered] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        const { prompt, text } = lines[i];
        let acc = "";
        for (let c = 0; c < text.length; c++) {
          if (cancelled) return;
          acc += text[c];
          await new Promise((r) => setTimeout(r, speed));
          setRendered((prev) => {
            const next = [...prev];
            next[i] = { prompt, text: acc };
            return next;
          });
        }
        await new Promise((r) => setTimeout(r, lineDelay));
      }
      if (!cancelled) setDone(true);
    }
    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { rendered, done };
}

function Nav() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-ink/80 border-b border-line">
      <div className="max-w-3xl mx-auto px-6 md:px-0 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-sm tracking-tight text-cream">
          amulya<span className="text-gold">.</span>dev
        </a>
        <nav className="flex items-center gap-6 font-body text-sm text-slate">
          <a href="#work" className="hover:text-cream transition-colors">Work</a>
          <a href="#about" className="hover:text-cream transition-colors">About</a>
          <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const { rendered, done } = useTypewriter(LINES);

  return (
    <section id="top" className="max-w-3xl mx-auto px-6 md:px-0 pt-12 pb-8 md:pt-16 md:pb-10">
      <div className="rounded-lg border border-line bg-ink2 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4B5372]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#4B5372]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#4B5372]" />
          <span className="ml-3 font-mono text-xs text-slate">amulya@dev — zsh</span>
        </div>
        <div className="p-6 md:p-8 font-mono text-[13px] md:text-sm leading-relaxed min-h-[176px]">
          {rendered.map((line, i) => (
            <div key={i} className={line.prompt ? "text-gold" : "text-cream/90"}>
              {line.prompt && <span className="text-slate mr-2">$</span>}
              {line.text}
            </div>
          ))}
          <span className={`inline-block w-2 h-4 bg-gold align-middle ml-0.5 ${done ? "blink" : "opacity-0"}`} />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="inline-flex items-center gap-1.5 rounded-md bg-gold text-ink font-body font-medium text-sm px-4 py-2.5 hover:bg-golddim transition-colors"
        >
          View projects
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-1.5 rounded-md border border-line font-body text-sm text-cream px-4 py-2.5 hover:border-slate transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

function StatusDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
    </span>
  );
}

function ProjectEntry({ project }) {
  return (
    <div className="border-t border-line py-10 first:border-t-0 first:pt-0">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-slate">{project.n}</span>
          <h3 className="font-display text-xl md:text-2xl text-cream">{project.name}</h3>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-xs text-slate">
          <StatusDot />
          live
        </div>
      </div>

      <p className="font-body text-cream/70 text-[15px] leading-relaxed max-w-xl mb-2">
        {project.tagline}
      </p>
      <p className="font-body text-slate text-sm leading-relaxed max-w-xl mb-5">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-xs text-cream/80 border border-line rounded px-2 py-1"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-5 font-body text-sm">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-gold hover:text-golddim transition-colors"
        >
          Live demo <ArrowUpRight size={14} />
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-cream/80 hover:text-cream transition-colors"
        >
          Code {project.code2 ? "(frontend)" : ""} <ArrowUpRight size={14} />
        </a>
        {project.code2 && (
          <a
            href={project.code2}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-cream/80 hover:text-cream transition-colors"
          >
            Code (backend) <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="max-w-3xl mx-auto px-6 md:px-0 py-10 md:py-14 border-t border-line">
      <div className="flex items-baseline justify-between mb-2">
        <h2 className="font-display text-2xl md:text-3xl text-cream">Work</h2>
        <span className="font-mono text-xs text-slate">{projects.length} projects</span>
      </div>
      <p className="font-body text-slate text-sm max-w-md mb-6">
        Full-stack builds — from local-first tools to a MERN app with a live backend.
      </p>
      <div>
        {projects.map((p) => (
          <ProjectEntry key={p.n} project={p} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 md:px-0 py-16 md:py-20 border-t border-line">
      <h2 className="font-display text-2xl md:text-3xl text-cream mb-6">About</h2>
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3 font-body text-cream/70 text-[15px] leading-relaxed space-y-4">
          <p>
            I build full-stack web applications using the MERN stack —
            comfortable bridging front-end interfaces and back-end architecture,
            using JavaScript the whole way from database to client.
          </p>
          <p>
            I'm returning to the workforce after a maternity break, having
            spent the last 7 months completing an intensive MERN stack program
            through GUVI × HCL to sharpen my skills and ship real projects. I'm
            now looking for a full-time developer role.
          </p>
        </div>
        <div className="md:col-span-2">
          <h3 className="font-mono text-xs uppercase tracking-wide text-slate mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="font-mono text-xs text-cream/80 border border-line rounded px-2.5 py-1.5"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard may be unavailable; ignore silently
    }
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 md:px-0 py-16 md:py-24 border-t border-line">
      <h2 className="font-display text-2xl md:text-3xl text-cream mb-3">Let's work together</h2>
      <p className="font-body text-slate text-[15px] max-w-md mb-8">
        Open to full-time MERN / full-stack developer roles. Reach out — I
        usually reply within a day.
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
        <button
          onClick={copyEmail}
          className="inline-flex items-center justify-between gap-4 rounded-md bg-gold text-ink font-body font-medium text-sm px-4 py-2.5 hover:bg-golddim transition-colors"
        >
          {contact.email}
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>

      <div className="flex items-center gap-5">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-cream/70 hover:text-cream transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-cream/70 hover:text-cream transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={`mailto:${contact.email}`}
          aria-label="Email"
          className="text-cream/70 hover:text-cream transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-3xl mx-auto px-6 md:px-0 py-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-mono text-xs text-slate">© {new Date().getFullYear()} Alladi Amulya</span>
        <span className="font-mono text-xs text-slate">built with React + Tailwind</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink font-body">
      <Nav />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
