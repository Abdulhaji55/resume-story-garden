import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <header className="animate-rise pb-10 pt-12 md:pt-16">
      <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase text-accent"><span className="h-px w-8 bg-accent" />{eyebrow}</p>
      <h1 className="max-w-4xl text-4xl leading-tight md:text-5xl">{title}</h1>
      {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </header>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-lg border bg-card p-6 shadow-soft transition-colors hover:border-accent/40 md:p-8 ${className}`}>{children}</div>;
}
