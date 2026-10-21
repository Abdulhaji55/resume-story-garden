import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, MapPin, Code2, Smartphone, Layers, BriefcaseBusiness } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, projects, experience } from "@/lib/resume";
import deskImage from "@/assets/developer-desk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Abdul Hameed Haji — Software Developer" },
    { name: "description", content: "Portfolio of Abdul Hameed Haji, a frontend-focused Software Developer skilled in React, PostgreSQL, AWS and Kotlin." },
    { property: "og:title", content: "Abdul Hameed Haji — Software Developer" },
    { property: "og:description", content: "React, PostgreSQL, AWS and Android developer based in Tirunelveli, India." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

function Home() {
  const current = experience[0];
  return (
    <div className="animate-rise">
      <section className="grid gap-8 py-12 md:grid-cols-[1.4fr_1fr] md:items-end md:py-14">
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase text-accent"><span className="h-px w-7 bg-accent" />Software developer / Portfolio</p>
          <h1 className="text-4xl leading-[1.15] sm:text-5xl lg:text-6xl">Abdul Hameed<br /><span className="text-accent">Haji<span className="text-gold">.</span></span></h1>
        </div>
        <div className="md:pb-1">
          <p className="max-w-md text-sm leading-7 text-muted-foreground">I build thoughtful web experiences and native Android apps — bringing ideas to life with React, PostgreSQL, AWS and Kotlin.</p>
          <div className="mt-6 flex flex-wrap gap-3"><Button asChild><Link to="/projects">Explore my work <ArrowUpRight /></Link></Button><Button asChild variant="outline"><Link to="/about">A little about me <ArrowRight /></Link></Button></div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-12">
        <div className="relative min-h-64 overflow-hidden rounded-lg md:col-span-7 md:min-h-80">
          <img src={deskImage} alt="Laptop on an emerald desk displaying code" width={1200} height={800} className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute bottom-5 left-5 flex items-center gap-2 rounded-md border border-primary-foreground/20 bg-primary px-3 py-2 text-xs text-primary-foreground"><Code2 size={15} />Crafting for web & mobile</span>
        </div>
        <div className="flex flex-col justify-between rounded-lg bg-primary p-6 text-primary-foreground md:col-span-5 md:p-8">
          <div className="flex items-center justify-between"><p className="text-xs font-medium uppercase opacity-70">Currently building at</p><BriefcaseBusiness size={21} className="text-gold" /></div>
          <div className="py-7"><h2 className="max-w-xs text-3xl leading-tight">{current?.company}</h2><p className="mt-3 text-sm opacity-70">{current?.role} <span className="px-1">·</span> Since February 2025</p></div>
          <Link to="/experience" className="flex items-center justify-between border-t border-primary-foreground/20 pt-4 text-sm">My experience <ArrowUpRight size={20} /></Link>
        </div>
        <Link to="/skills" className="group flex flex-col justify-between rounded-lg border bg-card p-6 md:col-span-4"><div className="mb-6 flex items-center justify-between"><span className="text-xs font-semibold uppercase text-muted-foreground">My toolkit</span><Code2 size={20} className="text-accent" /></div><h2 className="text-xl">Web meets mobile.</h2><p className="mt-2 text-xs leading-6 text-muted-foreground">React.js / JavaScript / Kotlin / AWS</p><div className="mt-5 flex items-center justify-between text-xs text-accent">View all skills <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-1" /></div></Link>
        <Link to="/projects" className="group flex items-center justify-between rounded-lg border bg-card p-6 md:col-span-4"><div><p className="text-xs font-semibold uppercase text-muted-foreground">Selected work</p><p className="my-3 font-display text-5xl font-semibold text-primary">0{projects.length}<span className="ml-2 text-gold">↗</span></p><p className="text-sm text-muted-foreground">Projects. Real-world solutions.</p></div><Layers size={32} strokeWidth={1} className="text-accent" /></Link>
        <div className="flex flex-col justify-between rounded-lg bg-secondary p-6 md:col-span-4"><MapPin size={22} className="text-accent" /><div className="mt-6"><p className="text-xs font-semibold uppercase text-muted-foreground">Based in</p><h2 className="mt-2 text-xl">Tirunelveli, India</h2><p className="mt-2 text-xs text-muted-foreground">Tamil Nadu <span className="px-1">·</span> English & Tamil</p></div></div>
      </section>

      <section className="pt-14">
        <div className="mb-6 flex items-end justify-between gap-4"><div><p className="mb-2 text-xs font-semibold uppercase text-accent">From idea to implementation</p><h2 className="text-2xl md:text-3xl">Selected projects</h2></div><Link to="/projects" className="flex shrink-0 items-center gap-2 text-xs font-semibold text-accent">All projects <ArrowUpRight size={16} /></Link></div>
        <div className="grid gap-4 md:grid-cols-3">{projects.slice(0, 3).map((p, i) => <Link key={p.name} to="/projects" className="group rounded-lg border bg-card p-6 transition hover:border-accent"><div className="flex items-center justify-between"><span className="text-xs font-medium text-muted-foreground">0{i + 1} / {p.tags[0]}</span><ArrowUpRight size={18} className="text-accent" /></div><h3 className="mt-7 text-lg leading-7 group-hover:text-accent">{p.name}</h3><p className="mt-3 line-clamp-3 text-xs leading-6 text-muted-foreground">{p.desc}</p><p className="mt-5 border-t pt-4 text-xs text-muted-foreground">{p.period}</p></Link>)}</div>
      </section>
      <section className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t pt-9"><div><p className="text-xs uppercase text-muted-foreground">Have something in mind?</p><h2 className="mt-2 text-2xl">Let's build something great.</h2></div><Button asChild><a href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight /></a></Button></section>
    </div>
  );
}
