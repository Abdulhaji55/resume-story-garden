import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Card } from "@/components/Page";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/resume";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abdul Hameed Haji" },
      { name: "description", content: "Get in touch with Abdul Hameed Haji by email or phone." },
      { property: "og:title", content: "Contact — Abdul Hameed Haji" },
      { property: "og:description", content: "Email, phone and location." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: "Location", value: profile.location },
  ];
  return (
    <>
      <PageHeader eyebrow="Contact" title={<>Let's build something <em className="text-accent">together.</em></>} intro="Have a project or role in mind? I'd love to hear about it." />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((i) => (
          <Card key={i.label}>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{i.label}</p>
            {i.href ? <a href={i.href} className="mt-3 block break-words text-lg hover:text-accent">{i.value}</a> : <p className="mt-3 text-xl">{i.value}</p>}
          </Card>
        ))}
      </div>
      <Button asChild className="mt-10"><a href={`mailto:${profile.email}`}>Send me an email <ArrowUpRight /></a></Button>
    </>
  );
}
