import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <header className="animate-rise pb-14 pt-16 md:pb-16 md:pt-24">
      <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase text-accent"><span className="h-px w-8 bg-accent" />{eyebrow}</p>
      <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
      {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </header>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`border-t bg-card p-6 transition-colors md:p-10 ${className}`}>{children}</div>;
}
