import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X, Code2, Settings, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppearanceProvider, useAppearance } from "@/components/AppearanceProvider";
import { MotionEffects } from "@/components/MotionEffects";
import { profile } from "@/lib/resume";

const links = [
  { to: "/", label: "Overview" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return <AppearanceProvider><ShellContent>{children}</ShellContent></AppearanceProvider>;
}

function ShellContent({ children }: { children: ReactNode }) {
  const { preferences, update } = useAppearance();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <MotionEffects />
      <nav className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 md:px-8">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Abdul Haji home">
            <span className="flex size-9 items-center justify-center rounded-none bg-primary text-primary-foreground"><Code2 size={20} /></span>
            <span className="font-display text-base font-semibold">abdul<span className="text-accent">.haji</span></span>
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => <Link key={l.to} to={l.to} activeOptions={{ exact: true }} className="border-b-2 border-transparent py-2 text-sm font-medium text-muted-foreground transition hover:text-primary" activeProps={{ className: "border-accent text-primary" }}>{l.label}</Link>)}
          </div>
          <Button asChild size="sm" className="ml-auto hidden sm:inline-flex lg:ml-0"><Link to="/contact">Let's talk <ArrowUpRight /></Link></Button>
          <Button asChild variant="ghost" size="icon" title="Appearance settings"><Link to="/settings" aria-label="Appearance settings" onClick={() => setOpen(false)}><Settings /></Link></Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex" title="Toggle light and dark" aria-label="Toggle light and dark" onClick={() => update({ theme: preferences.theme === "dark" ? "light" : "dark" })}>{preferences.theme === "dark" ? <Sun /> : <Moon />}</Button>
          <Button variant="outline" size="icon" onClick={() => setOpen(!open)} className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
        </div>
        {open && <div className="grid grid-cols-2 gap-1 border-t px-5 py-3 lg:hidden">{links.map((l) => <Link key={l.to} to={l.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }} className="rounded-md px-3 py-3 text-sm text-muted-foreground" activeProps={{ className: "bg-secondary text-primary" }}>{l.label}</Link>)}</div>}
      </nav>
      <main className="mx-auto w-full max-w-7xl flex-1 px-5 pb-16 md:px-8">{children}</main>
      <footer className="border-t"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-7 text-xs text-muted-foreground md:px-8"><span>© {new Date().getFullYear()} {profile.name}</span><span className="hidden sm:block">Code with purpose.</span><a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-accent">Get in touch <ArrowUpRight size={14} /></a></div></footer>
    </div>
  );
}
