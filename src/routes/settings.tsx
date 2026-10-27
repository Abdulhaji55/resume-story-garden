import { createFileRoute } from '@tanstack/react-router';
import { Moon, Sun, Monitor, Sparkles, MousePointer2, RotateCcw, ArrowUpRight } from 'lucide-react';
import { PageHeader } from '@/components/Page';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useAppearance } from '@/components/AppearanceProvider';
export const Route = createFileRoute('/settings')({
  head: () => ({ meta: [
    { title: 'Appearance Settings — Abdul Hameed Haji' },
    { name: 'description', content: 'Personalize Abdul Haji’s portfolio with light, dark, system appearance and motion preferences.' },
    { property: 'og:title', content: 'Appearance Settings — Abdul Hameed Haji' },
    { property: 'og:description', content: 'Choose your portfolio appearance and animation preferences.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }), component: Settings,
});
function Settings() {
  const { preferences, update, reset, systemReduced } = useAppearance();
  return <>
    <PageHeader eyebrow="Make it yours" title={<>Your view.<br /><span className="text-muted-foreground">Your preferences.</span></>} />
    <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
      <div>
        <section className="border-t py-8"><h2 className="text-xl">Appearance</h2><div className="mt-6 grid grid-cols-3 gap-3">{([{ value: 'light', label: 'Light', icon: Sun }, { value: 'dark', label: 'Dark', icon: Moon }, { value: 'system', label: 'System', icon: Monitor }] as const).map(({value,label,icon:Icon}) => <Button key={value} onClick={() => update({ theme: value })} aria-pressed={preferences.theme === value} variant={preferences.theme === value ? 'default' : 'outline'} className="h-24 flex-col gap-3 whitespace-normal"><Icon className="!size-6" />{label}</Button>)}</div></section>
        <section className="border-t py-8"><div className="flex items-center justify-between gap-5"><label htmlFor="motion-setting" className="flex items-center gap-3 text-lg font-semibold"><Sparkles size={20} />Animations</label><Switch id="motion-setting" checked={preferences.motion} onCheckedChange={motion => update({ motion })} /></div>{systemReduced && <p className="mt-4 text-sm text-muted-foreground">Reduced motion is enabled on your device.</p>}</section>
        <section className="border-y py-8"><div className="flex items-center justify-between gap-5"><label htmlFor="effects-setting" className="flex items-center gap-3 text-lg font-semibold"><MousePointer2 size={20} />Interactive effects</label><Switch id="effects-setting" checked={preferences.effects} onCheckedChange={effects => update({ effects })} /></div></section>
        <Button onClick={reset} variant="outline" className="mt-8"><RotateCcw />Reset preferences</Button>
      </div>
      <section className="self-start border bg-secondary p-7 md:p-9" aria-label="Appearance preview"><p className="mb-10 text-xs uppercase text-muted-foreground">Live appearance</p><span className="preview-mark mb-7 inline-flex size-14 items-center justify-center border border-foreground font-mono text-xl">&lt;/&gt;</span><h2 className="text-3xl leading-tight">Same portfolio.<br />Your perspective.</h2><p className="mt-5 text-sm text-muted-foreground">Abdul Hameed Haji / Software Developer</p><div className="mt-9 flex items-center justify-between border-t pt-5 text-sm"><span className="capitalize">{preferences.theme} appearance</span><ArrowUpRight size={20} /></div></section>
    </div>
  </>;
}
