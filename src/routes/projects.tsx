import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card } from "@/components/Page";
import { projects } from "@/lib/resume";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Abdul Hameed Haji" },
      { name: "description", content: "Projects by Abdul Hameed Haji: Studio Omsur, REVENT SCM ERP, INAI Platform and a College Bus Tracking System." },
      { property: "og:title", content: "Projects — Abdul Hameed Haji" },
      { property: "og:description", content: "Web, ERP, marketplace and IoT projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader eyebrow="Selected work" title={<>Projects I've <em className="text-accent">shipped.</em></>} />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Card key={p.name}>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span className="font-display text-3xl text-accent">0{i + 1}</span>
              <span>{p.period}</span>
            </div>
            <h2 className="mt-4 text-3xl">{p.name}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{p.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs">{t}</span>)}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
