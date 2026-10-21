import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdul Haji — Portfolio & Resume" },
      { name: "description", content: "Personal portfolio and resume of Abdul Haji: experience, skills, projects and contact." },
      { property: "og:title", content: "Abdul Haji — Portfolio & Resume" },
      { property: "og:description", content: "Experience, skills, projects and contact details." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// ===== Edit your resume details here =====
const profile = {
  name: "Abdul Haji",
  role: "Full-Stack Developer",
  location: "India",
  email: "abdul@example.com",
  phone: "+91 00000 00000",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  summary:
    "I build fast, thoughtful web applications with React and Node.js — from clean interfaces to reliable APIs.",
};

const experience = [
  { role: "Software Developer", company: "Company Name", period: "2024 — Present", points: ["Built responsive React interfaces used by thousands of users.", "Designed REST APIs with Node.js and Express."] },
  { role: "Web Developer Intern", company: "Another Company", period: "2023 — 2024", points: ["Shipped landing pages and internal dashboards.", "Improved page load times by 40%."] },
];

const education = [
  { degree: "B.Tech in Computer Science", school: "Your University", period: "2019 — 2023" },
];

const skills = ["React", "TypeScript", "JavaScript", "Node.js", "Express", "MongoDB", "SQL", "Tailwind CSS", "Git", "REST APIs"];

const projects = [
  { name: "Project One", desc: "A short description of what this project does and the impact it had.", tech: "React · Node.js", link: "#" },
  { name: "Project Two", desc: "A short description of what this project does and the impact it had.", tech: "Next · MongoDB", link: "#" },
  { name: "Project Three", desc: "A short description of what this project does and the impact it had.", tech: "TypeScript · API", link: "#" },
];
// ==========================================

function Section({ id, n, title, children }: { id: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="grid gap-8 border-t py-16 md:grid-cols-[200px_1fr]">
      <div className="text-sm uppercase tracking-widest text-muted-foreground">
        <span className="text-accent">{n}</span> — {title}
      </div>
      <div>{children}</div>
    </section>
  );
}

function Index() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <nav className="flex items-center justify-between py-6 text-sm">
        <span className="font-display text-2xl">{profile.name.split(" ").map((w) => w[0]).join("")}.</span>
        <div className="hidden gap-6 text-muted-foreground sm:flex">
          {["about", "experience", "skills", "projects", "contact"].map((s) => (
            <a key={s} href={`#${s}`} className="capitalize transition-colors hover:text-accent">{s}</a>
          ))}
        </div>
      </nav>

      <header className="animate-rise py-20 md:py-32">
        <p className="mb-6 text-sm uppercase tracking-widest text-muted-foreground">{profile.role} · {profile.location}</p>
        <h1 className="text-6xl leading-[0.95] md:text-8xl">
          Hi, I'm {profile.name.split(" ")[0]}.<br />
          <em className="text-accent">I build for the web.</em>
        </h1>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#contact" className="rounded-md bg-primary px-6 py-3 text-sm text-primary-foreground transition hover:bg-accent">Get in touch</a>
          <a href="#experience" className="rounded-md border px-6 py-3 text-sm transition hover:border-accent hover:text-accent">View resume</a>
        </div>
      </header>

      <Section id="about" n="01" title="About">
        <p className="font-display text-3xl leading-snug md:text-4xl">{profile.summary}</p>
      </Section>

      <Section id="experience" n="02" title="Experience">
        <div className="space-y-10">
          {experience.map((e) => (
            <div key={e.role + e.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-3xl">{e.role} <span className="text-muted-foreground">at {e.company}</span></h3>
                <span className="text-sm text-muted-foreground">{e.period}</span>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
          <div className="pt-4">
            <p className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">Education</p>
            {education.map((ed) => (
              <div key={ed.degree} className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl">{ed.degree} <span className="text-muted-foreground">— {ed.school}</span></h3>
                <span className="text-sm text-muted-foreground">{ed.period}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" n="03" title="Skills">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="rounded-full border px-4 py-2 text-sm transition hover:border-accent hover:text-accent">{s}</span>
          ))}
        </div>
      </Section>

      <Section id="projects" n="04" title="Projects">
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <a key={p.name} href={p.link} className="group rounded-lg border bg-card p-6 transition hover:-translate-y-1 hover:border-accent">
              <h3 className="text-3xl group-hover:text-accent">{p.name} ↗</h3>
              <p className="mt-2 text-muted-foreground">{p.desc}</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{p.tech}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section id="contact" n="05" title="Contact">
        <a href={`mailto:${profile.email}`} className="font-display text-4xl underline decoration-accent underline-offset-8 transition hover:text-accent md:text-6xl">
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-6 text-muted-foreground">
          <span>{profile.phone}</span>
          <a href={profile.linkedin} className="hover:text-accent">LinkedIn</a>
          <a href={profile.github} className="hover:text-accent">GitHub</a>
        </div>
      </Section>

      <footer className="border-t py-8 text-sm text-muted-foreground">© {new Date().getFullYear()} {profile.name}</footer>
    </div>
  );
}
