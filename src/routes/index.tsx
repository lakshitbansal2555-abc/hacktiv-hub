import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  AtSign,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Radar,
  Send,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";
import resumeAsset from "../assets/lakshit-bansal-resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lakshit Bansal | Cybersecurity & Automation Developer" },
      { name: "description", content: "Explore Lakshit Bansal's cybersecurity portfolio: defensive security, Python automation, CTF tooling, backend engineering, and open-source work." },
      { property: "og:title", content: "Lakshit Bansal | Cybersecurity & Automation Developer" },
      { property: "og:description", content: "Defensive security, automation, CTF tooling, backend engineering, and open-source work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const githubUrl = "https://github.com/lakshitbansal2555-abc";
const linkedinUrl = "https://linkedin.com/in/lakshit-bansal-828402384";
const emailUrl = "mailto:lakshitbansal09@gmail.com";

const skillGroups: Array<[string, string[]]> = [
  ["Languages", ["Python", "Java", "C", "C++"]],
  ["Frameworks", ["FastAPI", "Flask"]],
  ["Databases", ["SQLAlchemy", "MySQL", "Firebase"]],
  ["Cybersecurity", ["Networking", "Digital Forensics", "Threat Analysis"]],
  ["Data Science", ["Pandas", "Matplotlib", "Visualisation"]],
  ["Tools", ["Git", "Linux", "Telegram API", "Gmail API"]],
];

const projects = [
  { title: "Student Help Portal", description: "Academic resource manager for assignments, notes, authentication, and student access.", tags: ["Python", "Flask", "MySQL"] },
  { title: "CampusCare", description: "A database-backed issue tracker that helps students report and follow campus resolutions.", tags: ["Python", "Flask", "MySQL"] },
  { title: "CampusConnect", description: "Community platform concept for bringing campus conversations, updates, and people together.", tags: ["Python", "Web App"] },
  { title: "Election Guide", description: "Civic information tool that makes election research easier to navigate and understand.", tags: ["JavaScript", "Civic Tech"] },
  { title: "E-commerce Backend", description: "Python backend foundation for catalog, user, and transaction workflows.", tags: ["Python", "Backend"] },
  { title: "Telegram Automation Bot", description: "Automates notifications, commands, and information retrieval for Telegram users.", tags: ["Python", "Telegram API"] },
  { title: "Gmail Automation Tool", description: "Sends automated reminders and notifications through a reliable Gmail workflow.", tags: ["Python", "Gmail API"] },
  { title: "GuardianPulse AI", description: "Security-alert translator concept that turns technical signals into plain-language insights.", tags: ["Python", "Security AI"] },
];

const experience = [
  ["Mar 2025 — May 2025", "Cybersecurity Intern", "Launched Organization", "Built exposure to defensive security fundamentals, vulnerability awareness, and threat analysis."],
  ["2025", "Cybersecurity Intern", "Future Intern", "Worked through real-world security scenarios, incident response, and defensive best practices."],
  ["2025", "Data Science Intern", "Future Intern", "Applied Python analysis and visualization techniques to practical datasets."],
  ["2025", "Java Development Intern", "Codec", "Built Java applications focused on object-oriented design, backend logic, and coding assignments."],
  ["2025", "Data Science Intern", "Upskills", "Practised data cleaning, analysis, and visualization with Pandas and Matplotlib."],
  ["2025 — Present", "Tech Intern", "Uptoskill", "Contributing to cybersecurity research, vulnerability analysis, and security documentation."],
  ["2025 — Present", "Project Intern", "Central University of Jammu", "Collaborating on applied cybersecurity and software development projects."],
];

function Portfolio() {
  const [typedLine, setTypedLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const terminalLines = ["$ whoami", "$ status: securing systems...", "$ focus: automation + defense"];

  useEffect(() => {
    const target = terminalLines[lineIndex] ?? terminalLines[0];
    if (typedLine.length < target.length) {
      const timer = window.setTimeout(() => setTypedLine(target.slice(0, typedLine.length + 1)), 48);
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(() => {
      setTypedLine("");
      setLineIndex((current) => (current + 1) % terminalLines.length);
    }, 1700);
    return () => window.clearTimeout(timer);
  }, [lineIndex, typedLine]);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => item.classList.add("reveal"));
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-terminal text-terminal-foreground terminal-grid terminal-scanlines">
      <header className="sticky top-0 z-20 border-b border-border/70 bg-terminal/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="font-display text-sm font-semibold tracking-[0.14em] text-neon" aria-label="Lakshit Bansal home">LB<span className="text-cyan">_</span></a>
          <nav className="hidden items-center gap-7 font-display text-[11px] uppercase tracking-[0.16em] text-terminal-muted md:flex" aria-label="Primary navigation">
            <a className="transition-colors hover:text-neon" href="#about">about</a>
            <a className="transition-colors hover:text-neon" href="#work">work</a>
            <a className="transition-colors hover:text-neon" href="#labs">labs</a>
            <a className="transition-colors hover:text-neon" href="#contact">contact</a>
          </nav>
          <a href={emailUrl} className="inline-flex items-center gap-2 border border-neon/50 px-3 py-2 font-display text-[11px] uppercase tracking-[0.12em] text-neon transition-all hover:bg-neon hover:text-primary-foreground" aria-label="Email Lakshit Bansal">
            <span className="hidden sm:inline">init_contact</span><Send size={13} />
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3 font-display text-xs uppercase tracking-[0.18em] text-neon"><span className="h-px w-10 bg-neon" /> available for security & automation work</div>
            <p className="mb-4 font-display text-sm text-cyan">Hello, I&apos;m</p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.04] tracking-tight text-terminal-foreground sm:text-7xl lg:text-8xl">Lakshit<br /><span className="text-neon text-glow">Bansal.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-terminal-muted">Cybersecurity &amp; Automation Developer building defensive systems, security tooling, and dependable backend workflows.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center gap-2 bg-neon px-5 py-3 font-display text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground transition-all hover:shadow-[0_0_26px_color-mix(in_oklab,var(--color-neon)_35%,transparent)]">View Projects <ArrowUpRight size={15} /></a>
              <a href={resumeAsset.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-border px-5 py-3 font-display text-xs font-semibold uppercase tracking-[0.1em] text-terminal-foreground transition-colors hover:border-neon hover:text-neon">View Resume <FileText size={15} /></a>
              <a href={resumeAsset.url} download="Lakshit-Bansal-CV.pdf" className="inline-flex items-center gap-2 border border-border px-5 py-3 font-display text-xs font-semibold uppercase tracking-[0.1em] text-terminal-muted transition-colors hover:border-cyan hover:text-cyan">Download CV <Download size={15} /></a>
            </div>
            <div className="mt-12 flex items-center gap-5 text-terminal-muted">
              <a href={githubUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-neon" aria-label="GitHub"><Github size={19} /></a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-neon" aria-label="LinkedIn"><Linkedin size={19} /></a>
              <a href={emailUrl} className="transition-colors hover:text-neon" aria-label="Email"><Mail size={19} /></a>
              <span className="h-4 w-px bg-border" />
              <span className="font-display text-[11px] tracking-[0.08em] text-terminal-muted">Punjab, India</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:justify-self-end">
            <div className="absolute -inset-10 bg-neon/5 blur-3xl" aria-hidden="true" />
            <div className="relative border border-neon/35 bg-terminal-panel panel-glow">
              <div className="flex items-center justify-between border-b border-border px-4 py-3 font-display text-[10px] tracking-[0.12em] text-terminal-muted"><span className="flex items-center gap-2"><Terminal size={13} className="text-neon" /> bash — lakshit@secure</span><span className="text-neon">●●●</span></div>
              <div className="min-h-[290px] p-6 font-display text-sm leading-8 sm:min-h-[340px] sm:p-8">
                <div className="mb-10 text-terminal-muted">// terminal session started<br /><span className="text-neon">// encryption: active</span></div>
                <div className="text-cyan">{typedLine}<span className="ml-1 inline-block h-5 w-2 translate-y-1 animate-pulse bg-neon" /></div>
                <div className="mt-10 grid grid-cols-2 gap-3 border-t border-border pt-5 text-[11px] text-terminal-muted"><span>location <b className="font-normal text-terminal-foreground">IN</b></span><span>uptime <b className="font-normal text-terminal-foreground">24/7</b></span><span>threats <b className="font-normal text-neon">monitored</b></span><span>mode <b className="font-normal text-cyan">defensive</b></span></div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 font-display text-[10px] uppercase tracking-[0.1em] text-terminal-muted"><span className="flex items-center gap-2"><Shield size={14} className="text-neon" /> defense</span><span className="flex items-center gap-2"><Zap size={14} className="text-amber" /> automate</span><span className="flex items-center gap-2"><Radar size={14} className="text-cyan" /> analyze</span></div>
          </div>
        </div>
        <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-display text-[10px] uppercase tracking-[0.18em] text-terminal-muted transition-colors hover:text-neon md:flex">scroll to explore <ArrowDown size={14} className="animate-bounce" /></a>
      </section>

      <section id="about" className="border-t border-border/60 bg-terminal-panel/40">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div data-reveal className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="01 / profile" title="Built to think like a defender." />
            <div className="max-w-3xl">
              <p className="text-2xl leading-relaxed text-terminal-foreground sm:text-3xl">Cybersecurity-focused Computer Science student at Central University of Jammu, turning curiosity into <span className="text-neon">practical defense.</span></p>
              <p className="mt-7 max-w-2xl leading-8 text-terminal-muted">I work across defensive security, threat analysis, and Python automation — shaped by multiple industry internships, CTF challenges, hackathons, and an open-source contribution to a production FastAPI backend.</p>
              <div className="mt-10 grid gap-5 border-t border-border pt-6 sm:grid-cols-2"><div><span className="font-display text-xs text-neon">EDUCATION</span><p className="mt-2 text-sm text-terminal-foreground">B.Tech — Computer Science (Cyber Security)</p><p className="mt-1 text-sm text-terminal-muted">Central University of Jammu · 2025 — 2029</p></div><div><span className="font-display text-xs text-cyan">CURRENT SIGNAL</span><p className="mt-2 text-sm text-terminal-foreground">2nd semester · CTFs · hackathons</p><p className="mt-1 text-sm text-terminal-muted">Building security tooling in public.</p></div></div>
            </div>
          </div>
          <div data-reveal className="mt-24">
            <SectionHeading eyebrow="02 / capabilities" title="A practical security stack." />
            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{skillGroups.map(([group, skills]) => <div key={group} className="bg-terminal p-6 transition-colors hover:bg-terminal-panel"><div className="mb-5 flex items-center justify-between font-display text-xs uppercase tracking-[0.12em]"><span className="text-terminal-foreground">{group}</span><ChevronRight size={14} className="text-neon" /></div><div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="border border-border px-2.5 py-1.5 font-display text-[11px] text-terminal-muted">{skill}</span>)}</div></div>)}</div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div data-reveal>
          <SectionHeading eyebrow="03 / selected work" title="Systems with a purpose." />
          <div className="mt-12 border border-neon/40 bg-terminal-panel panel-glow">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-4 font-display text-[11px] uppercase tracking-[0.12em]"><span className="flex items-center gap-2 text-neon"><Braces size={14} /> open_source / featured</span><span className="text-terminal-muted">PR merged</span></div>
            <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div><h3 className="font-display text-2xl text-terminal-foreground">IntelliView Orchestrator</h3><p className="mt-2 font-display text-sm text-cyan">FastAPI Backend · SQLAlchemy</p><p className="mt-5 max-w-xl leading-7 text-terminal-muted">Refactored API endpoints around a reusable <span className="font-display text-terminal-foreground">get_db()</span> dependency-injection pattern, replacing manual session handling and adding unit tests for the service-layer change.</p><a href="https://github.com/rajat-wyrm/intelliview-orchestrator" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.12em] text-neon hover:underline">View contribution <ExternalLink size={14} /></a></div>
              <div className="grid grid-cols-3 gap-3 font-display text-center text-[10px] uppercase tracking-[0.1em] text-terminal-muted"><div className="border border-border p-4"><Code2 size={17} className="mx-auto mb-3 text-neon" /><span>refactor</span></div><div className="border border-border p-4"><Check size={17} className="mx-auto mb-3 text-cyan" /><span>tests</span></div><div className="border border-border p-4"><Github size={17} className="mx-auto mb-3 text-amber" /><span>merged</span></div></div>
            </div>
          </div>
        </div>
        <div data-reveal className="mt-20">
          <div className="flex items-end justify-between gap-6"><SectionHeading eyebrow="04 / project archive" title="Projects in the field." /><a href={githubUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 font-display text-xs uppercase tracking-[0.1em] text-terminal-muted transition-colors hover:text-neon sm:flex">all repositories <ArrowUpRight size={14} /></a></div>
          <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{projects.map((project, index) => <a key={project.title} href={githubUrl} target="_blank" rel="noreferrer" className="group flex min-h-64 flex-col bg-terminal p-6 transition-colors hover:bg-terminal-panel"><div className="flex items-center justify-between font-display text-[10px] text-terminal-muted"><span>0{index + 1}</span><ArrowUpRight size={15} className="text-border transition-colors group-hover:text-neon" /></div><h3 className="mt-auto pt-10 font-display text-base text-terminal-foreground transition-colors group-hover:text-neon">{project.title}</h3><p className="mt-3 text-sm leading-6 text-terminal-muted">{project.description}</p><div className="mt-5 flex flex-wrap gap-1.5">{project.tags.map((tag) => <span key={tag} className="font-display text-[10px] text-cyan">#{tag.replaceAll(" ", "")}</span>)}</div></a>)}</div>
        </div>
      </section>

      <section id="labs" className="border-y border-border/60 bg-terminal-panel/40">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div data-reveal className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeading eyebrow="05 / security labs" title="Always testing the perimeter." /><div><div className="border border-border bg-terminal p-6 font-display text-sm leading-8 text-terminal-muted"><div><span className="text-neon">lakshit@ctf</span>:<span className="text-cyan">~</span>$ ./run_profile.sh</div><div className="mt-4 text-terminal-foreground">[+] loading competition history...</div><div className="text-terminal-foreground">[+] parsing custom tooling...</div><div className="text-neon">[✓] defensive mindset: active</div><div className="mt-4 border-t border-border pt-4 text-terminal-muted">&gt; ranked <span className="text-amber">Top 4–5</span> in university CTFs<br />&gt; ranked <span className="text-amber">Top 9–10</span> individually / ~70–80 participants<br />&gt; scripts: flag discovery · log analysis · network scanning</div><span className="mt-3 inline-block h-4 w-2 animate-pulse bg-neon align-middle" /></div><div className="mt-6 grid gap-4 sm:grid-cols-3"><Stat value="4–5" label="university CTF rank" /><Stat value="9–10" label="individual rank" /><Stat value="06" label="internships completed" /></div></div></div></div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div data-reveal className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeading eyebrow="06 / experience" title="Learning by shipping." /><div className="border-l border-border">{experience.map(([date, role, company, impact]) => <div key={`${role}-${company}`} className="relative border-b border-border/60 py-6 pl-7 first:pt-0 last:border-b-0"><span className="absolute -left-[5px] top-1 h-2 w-2 bg-neon shadow-[0_0_12px_var(--color-neon)]" /><p className="font-display text-[11px] uppercase tracking-[0.12em] text-neon">{date}</p><div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1"><h3 className="font-display text-lg text-terminal-foreground">{role}</h3><span className="text-sm text-cyan">@ {company}</span></div><p className="mt-2 max-w-2xl text-sm leading-6 text-terminal-muted">{impact}</p></div>)}</div></div></section>

      <section id="contact" className="border-t border-neon/20 bg-terminal-panel/40"><div className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div data-reveal className="mb-12 max-w-2xl"><SectionHeading eyebrow="07 / contact" title="Let’s secure what’s next." /><p className="mt-6 text-lg leading-8 text-terminal-muted">Open to conversations around cybersecurity, automation, backend engineering, and meaningful technical collaborations.</p></div><div data-reveal className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"><ContactCard icon={<Github size={20} />} label="GitHub" value="lakshitbansal2555-abc" href={githubUrl} /><ContactCard icon={<Linkedin size={20} />} label="LinkedIn" value="connect with me" href={linkedinUrl} /><ContactCard icon={<AtSign size={20} />} label="Email" value="lakshitbansal09@gmail.com" href={emailUrl} /><ContactCard icon={<Download size={20} />} label="Resume" value="view / download CV" href={resumeAsset.url} download /> </div></div></section>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 font-display text-[10px] uppercase tracking-[0.13em] text-terminal-muted sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>Designed &amp; Built by Lakshit Bansal</span><span className="text-neon">Cybersecurity · Automation · Security Research</span></div></footer>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div><p className="mb-4 font-display text-[11px] uppercase tracking-[0.16em] text-neon">{eyebrow}</p><h2 className="max-w-sm font-display text-3xl leading-tight text-terminal-foreground sm:text-4xl">{title}</h2></div>;
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="border border-border bg-terminal p-4"><p className="font-display text-2xl text-neon">{value}</p><p className="mt-2 text-xs leading-5 text-terminal-muted">{label}</p></div>;
}

function ContactCard({ icon, label, value, href, download = false }: { icon: React.ReactNode; label: string; value: string; href: string; download?: boolean }) {
  return <a href={href} target={download ? undefined : "_blank"} rel={download ? undefined : "noreferrer"} download={download ? "Lakshit-Bansal-CV.pdf" : undefined} className="group bg-terminal p-6 transition-colors hover:bg-terminal-panel"><div className="flex items-center justify-between"><span className="text-neon">{icon}</span><ArrowUpRight size={15} className="text-border transition-colors group-hover:text-neon" /></div><p className="mt-10 font-display text-xs uppercase tracking-[0.12em] text-terminal-muted">{label}</p><p className="mt-2 truncate text-sm text-terminal-foreground">{value}</p></a>;
}