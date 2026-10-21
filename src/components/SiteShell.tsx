import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { profile } from "@/lib/resume";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-2xl">AHH<span className="text-accent">.</span></Link>
          <div className="hidden gap-1 md:flex">
            {links.map((l) => (
              <Link key={l.to} to={l.to} activeOptions={{ exact: true }}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
                activeProps={{ className: "bg-primary text-primary-foreground hover:text-primary-foreground" }}>
                {l.label}
              </Link>
            ))}
          </div>
          <button onClick={() => setOpen(!open)} className="rounded-md border px-3 py-1 text-sm md:hidden" aria-label="Menu">
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <div className="flex flex-col border-t px-6 py-3 md:hidden">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
                className="py-2 text-muted-foreground" activeProps={{ className: "text-accent" }}>{l.label}</Link>
            ))}
          </div>
        )}
      </nav>
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-24">{children}</main>
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href={`mailto:${profile.email}`} className="hover:text-accent">{profile.email}</a>
        </div>
      </footer>
    </div>
  );
}
