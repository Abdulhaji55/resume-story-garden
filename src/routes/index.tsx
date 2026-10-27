import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, projects, experience } from "@/lib/resume";
import { SkillsGame } from "@/components/SkillsGame";
import { ProjectExplorer } from "@/components/ProjectExplorer";
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
      <section className="relative border-b py-14 md:py-20">
        <div className="mb-10 flex flex-wrap justify-between gap-3 text-xs font-medium uppercase text-muted-foreground"><span>Software developer / Portfolio 2026</span><span>Tirunelveli, India</span></div>
        <h1 className="text-5xl font-bold leading-[1.05] sm:text-7xl lg:text-8xl">Abdul Hameed<br />Haji<span className="text-muted-foreground">.</span></h1>
        <div className="mt-10 flex flex-col justify-between gap-7 md:flex-row md:items-end"><p className="max-w-lg text-base leading-7 text-muted-foreground">I build thoughtful web experiences and native Android apps — bringing ideas to life with React, PostgreSQL, AWS and Kotlin.</p><div className="flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/projects">Explore my work <ArrowUpRight /></Link></Button><Button asChild variant="outline" size="lg"><a href="#play">Take a play break <Play /></a></Button></div></div>
      </section>
      <section className="grid gap-10 py-12 md:grid-cols-[1.1fr_1fr] md:gap-16 md:py-16">
        <div className="group overflow-hidden"><img src={deskImage} alt="Laptop displaying code on a minimalist desk" width={1200} height={800} className="aspect-[3/2] w-full object-cover grayscale transition duration-700 group-hover:scale-[1.03]" /></div>
        <div className="flex flex-col justify-between"><p className="text-xs font-medium uppercase text-muted-foreground">01 / Behind the work</p><div className="py-8"><h2 className="text-3xl font-bold leading-tight md:text-4xl">Web. Mobile.<br />Real-world impact.</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">{current?.role} at {current?.company}. Building interfaces, integrating APIs, and turning business requirements into working software.</p></div><div className="flex flex-wrap gap-6 border-t pt-5"><Link to="/about" className="flex items-center gap-2 text-sm font-semibold">Meet Abdul <ArrowUpRight size={16} /></Link><Link to="/experience" className="flex items-center gap-2 text-sm text-muted-foreground">The experience <ArrowUpRight size={16} /></Link><Link to="/skills" className="flex items-center gap-2 text-sm text-muted-foreground">The toolkit <ArrowUpRight size={16} /></Link></div></div>
      </section>
      <section className="pb-16 md:pb-24"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="mb-4 text-xs font-medium uppercase text-muted-foreground">02 / Selected work</p><h2 className="text-4xl font-bold md:text-5xl">Ideas, made real.</h2></div><Link to="/projects" className="flex shrink-0 items-center gap-2 text-xs font-semibold">All {projects.length} projects <ArrowUpRight size={16} /></Link></div><ProjectExplorer /></section>
      <SkillsGame />
      <section className="flex flex-wrap items-end justify-between gap-8 border-t py-16 md:py-24"><div><p className="mb-5 text-xs uppercase text-muted-foreground">Next / Let's connect</p><h2 className="text-4xl font-bold md:text-6xl">Your idea.<br />Our next project.</h2></div><Button asChild size="lg"><a href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight /></a></Button></section>
    </div>
  );
}
