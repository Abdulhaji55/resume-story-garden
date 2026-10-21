import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/resume';

export function ProjectExplorer() {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  if (!project) return null;
  return <div className="border-y py-8 md:py-12">
    <div className="mb-8 flex items-center justify-between"><span className="font-mono text-xs text-muted-foreground">0{index + 1} / 0{projects.length}</span><div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Previous project" onClick={() => setIndex((index + projects.length - 1) % projects.length)}><ArrowLeft /></Button><Button variant="outline" size="icon" aria-label="Next project" onClick={() => setIndex((index + 1) % projects.length)}><ArrowRight /></Button></div></div>
    <div key={project.name} className="animate-rise grid gap-8 md:grid-cols-2" aria-live="polite"><div><p className="mb-4 font-mono text-xs text-muted-foreground">{project.period}</p><h3 className="text-3xl font-bold leading-tight md:text-4xl">{project.name}</h3><div className="mt-6 flex flex-wrap gap-3">{project.tags.map(t => <span key={t} className="border-b pb-1 text-xs text-muted-foreground">{t}</span>)}</div></div><p className="text-sm leading-8 text-muted-foreground">{project.desc}</p></div>
  </div>;
}
