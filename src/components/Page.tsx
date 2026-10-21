import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <header className="animate-rise pb-12 pt-16 md:pt-24">
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h1 className="text-5xl leading-[0.95] md:text-7xl">{title}</h1>
      {intro && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
    </header>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-xl border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent md:p-8 ${className}`}>{children}</div>;
}
