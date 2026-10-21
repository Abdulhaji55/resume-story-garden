import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card } from "@/components/Page";
import { profile, education } from "@/lib/resume";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abdul Hameed Haji" },
      { name: "description", content: "Professional summary, education and languages of Abdul Hameed Haji." },
      { property: "og:title", content: "About — Abdul Hameed Haji" },
      { property: "og:description", content: "Professional summary, education and languages." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About me" title={<>Turning business needs into <em className="text-accent">working software.</em></>} />
      <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
        <Card><p className="text-xs uppercase tracking-widest text-muted-foreground">Professional summary</p><p className="mt-4 text-lg leading-relaxed">{profile.summary}</p></Card>
        <div className="space-y-6">
          <Card>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Education</p>
            {education.map((e) => (
              <div key={e.degree} className="mt-4">
                <h3 className="text-2xl">{e.degree}</h3>
                <p className="text-muted-foreground">{e.school}</p>
                <p className="mt-1 text-sm text-accent">{e.period}</p>
              </div>
            ))}
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Languages</p>
            <div className="mt-4 flex gap-2">{profile.languages.map((l) => <span key={l} className="rounded-md bg-secondary px-4 py-1.5 text-sm">{l}</span>)}</div>
          </Card>
        </div>
      </div>
    </>
  );
}
