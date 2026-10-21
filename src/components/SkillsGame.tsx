import { useEffect, useReducer, useState } from 'react';
import { RotateCcw, Play, Check, Code2, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { skills } from '@/lib/resume';
import { createDeck, memoryReducer } from '@/lib/memory-game';

const labels = skills.flatMap(s => s.items).filter(s => ['React.js', 'JavaScript', 'HTML', 'CSS', 'PostgreSQL', 'Kotlin'].includes(s));
export function SkillsGame() {
  const [started, setStarted] = useState(false);
  const [state, dispatch] = useReducer(memoryReducer, { cards: [], selected: [], matched: [], moves: 0 });
  const complete = state.cards.length > 0 && state.matched.length === state.cards.length;
  useEffect(() => {
    if (state.selected.length !== 2) return;
    const timer = setTimeout(() => dispatch({ type: 'clear' }), 800);
    return () => clearTimeout(timer);
  }, [state.selected]);
  function start() { dispatch({ type: 'reset', cards: createDeck(labels) }); setStarted(true); }
  return (
    <section id="play" className="scroll-mt-28 border-t py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div><p className="mb-5 text-xs font-semibold uppercase text-muted-foreground">03 / A little off-script</p><h2 className="text-4xl font-bold leading-tight md:text-5xl">Serious about code.<br /><span className="text-muted-foreground">Always up for play.</span></h2><p className="mt-6 text-sm text-muted-foreground">Skill match</p><div className="mt-6 flex gap-8 text-sm"><span>Pairs <strong className="ml-2 text-foreground">{state.matched.length / 2} / {labels.length}</strong></span><span>Moves <strong className="ml-2 text-foreground">{state.moves}</strong></span></div><Button onClick={start} variant={started ? 'outline' : 'default'} className="mt-7">{started ? <RotateCcw /> : <Play />}{started ? 'Restart game' : 'Play skill match'}</Button><p aria-live="polite" className="mt-6 min-h-6 text-sm font-semibold">{complete ? 'Perfect match. All six pairs found!' : started ? 'Find the matching pairs.' : ''}</p></div>
        <div className="relative grid grid-cols-3 gap-3 sm:grid-cols-4" aria-label="Skill matching board">
          {(started ? state.cards : Array.from({ length: 12 }, (_, id) => ({ id, label: '' }))).map(card => {
            const matched = state.matched.includes(card.id);
            const revealed = matched || state.selected.includes(card.id);
            return <Button key={card.id} onClick={() => dispatch({ type: 'flip', id: card.id })} disabled={!started || matched || state.selected.length === 2} variant="outline" data-card-id={card.id} aria-label={revealed ? `${card.label}${matched ? ' matched' : ''}` : `Reveal card ${card.id + 1}`} aria-pressed={revealed} className={`aspect-square h-auto min-w-0 whitespace-normal rounded-none p-2 text-xs font-bold shadow-none transition duration-300 sm:text-sm ${revealed ? 'border-primary bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground disabled:opacity-100' : 'bg-secondary hover:border-primary'}`}>{revealed ? <span className="flex flex-col items-center gap-2">{matched && <Check size={16} />}{card.label}</span> : <Code2 className="!size-7 text-muted-foreground" />}</Button>;
          })}
          {complete && <div className="pointer-events-none absolute -top-4 right-0 flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground"><Trophy size={20} /></div>}
        </div>
      </div>
    </section>
  );
}
