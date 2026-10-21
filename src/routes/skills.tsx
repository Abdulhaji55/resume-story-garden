import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card } from "@/components/Page";
import { skills } from "@/lib/resume";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Abdul Hameed Haji" },
      { name: "description", content: "Technical skills: React.js, JavaScript, PostgreSQL, AWS, Kotlin, Android Studio and more." },
      { property: "og:title", content: "Skills — Abdul Hameed Haji" },
      { property: "og:description", content: "Frontend, cloud, database, mobile and soft skills." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <>
      <PageHeader eyebrow="Technical skills" title={<>My <em className="text-accent">toolkit.</em></>} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <Card key={s.group}>
            <h2 className="text-2xl">{s.group}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {s.items.map((i) => <span key={i} className="rounded-full border px-3 py-1.5 text-sm">{i}</span>)}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
