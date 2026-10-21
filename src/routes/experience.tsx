import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/Page";
import { experience } from "@/lib/resume";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Abdul Hameed Haji" },
      { name: "description", content: "Professional experience of Abdul Hameed Haji as a Software Developer at NutMeg Software Solutions." },
      { property: "og:title", content: "Experience — Abdul Hameed Haji" },
      { property: "og:description", content: "Software Developer at NutMeg Software Solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageHeader eyebrow="Professional experience" title={<>Where I've <em className="text-accent">built.</em></>} />
      <div className="relative border-l pl-8 md:pl-12">
        {experience.map((e) => (
          <article key={e.company} className="relative pb-12">
            <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-4 border-background bg-accent md:-left-[57px]" />
            <p className="text-sm text-accent">{e.period}</p>
            <h2 className="mt-1 text-4xl">{e.role}</h2>
            <p className="text-lg text-muted-foreground">{e.company}</p>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {e.points.map((p) => (
                <li key={p} className="rounded-lg border bg-card p-5 text-sm leading-relaxed">{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
}
