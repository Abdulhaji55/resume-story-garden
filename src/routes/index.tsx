import { createFileRoute, Link } from "@tanstack/react-router";
import { profile, projects, experience } from "@/lib/resume";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdul Hameed Haji — Software Developer" },
      { name: "description", content: "Portfolio of Abdul Hameed Haji, a frontend-focused Software Developer skilled in React, PostgreSQL, AWS and Kotlin." },
      { property: "og:title", content: "Abdul Hameed Haji — Software Developer" },
      { property: "og:description", content: "React, PostgreSQL, AWS and Android developer based in Tirunelveli, India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const stats = [
    { n: "1+", l: "Years professional" },
    { n: `${projects.length}`, l: "Featured projects" },
    { n: "Web + Mobile", l: "Platforms shipped" },
  ];
  return (
    <>
      <section className="animate-rise grid items-end gap-12 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" /> Open to opportunities
          </p>
          <h1 className="text-6xl leading-[0.92] md:text-8xl">
            Abdul Hameed<br /><em className="text-accent">Haji.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            {profile.role} crafting responsive interfaces with React, solid backends on PostgreSQL & AWS, and native Android apps in Kotlin.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/projects" className="rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground transition hover:bg-accent">See my work</Link>
            <Link to="/contact" className="rounded-full border px-7 py-3 text-sm transition hover:border-accent hover:text-accent">Contact me</Link>
          </div>
        </div>
        <div className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-soft">
          <p className="text-xs uppercase tracking-widest opacity-60">Currently</p>
          <p className="mt-2 font-display text-3xl">{experience[0]!.role}</p>
          <p className="opacity-80">{experience[0]!.company}</p>
          <div className="my-6 h-px bg-primary-foreground/20" />
          <p className="text-sm opacity-80">{profile.location}</p>
        </div>
      </section>

      <section className="grid gap-4 border-y py-10 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.l}>
            <p className="font-display text-5xl">{s.n}</p>
            <p className="text-sm text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </section>

      <section className="py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-4xl md:text-5xl">Recent projects</h2>
          <Link to="/projects" className="text-sm text-accent hover:underline">View all →</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Link key={p.name} to="/projects" className="group rounded-xl border bg-card p-6 transition hover:-translate-y-1 hover:border-accent">
              <p className="text-xs text-muted-foreground">{p.period}</p>
              <h3 className="mt-3 text-2xl group-hover:text-accent">{p.name}</h3>
              <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
