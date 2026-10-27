import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { defaultAppearance, parseAppearance, resolveDark, type Appearance } from '@/lib/appearance';
const AppearanceContext = createContext<{ preferences: Appearance; update: (patch: Partial<Appearance>) => void; reset: () => void; systemReduced: boolean } | null>(null);
export function AppearanceProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<Appearance>(defaultAppearance);
  const [ready, setReady] = useState(false);
  const [systemReduced, setSystemReduced] = useState(false);
  useEffect(() => {
    try { setPreferences(parseAppearance(JSON.parse(localStorage.getItem('portfolio-appearance') || 'null'))); } catch { /* Defaults work without browser storage. */ }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    const dark = matchMedia('(prefers-color-scheme: dark)');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      document.documentElement.classList.toggle('dark', resolveDark(preferences.theme, dark.matches));
      document.documentElement.dataset.motion = preferences.motion && !reduced.matches ? 'full' : 'reduced';
      document.documentElement.dataset.effects = preferences.effects ? 'on' : 'off';
      document.documentElement.style.colorScheme = resolveDark(preferences.theme, dark.matches) ? 'dark' : 'light';
      setSystemReduced(reduced.matches);
    };
    apply();
    try { localStorage.setItem('portfolio-appearance', JSON.stringify(preferences)); } catch { /* Storage may be blocked. */ }
    dark.addEventListener('change', apply); reduced.addEventListener('change', apply);
    return () => { dark.removeEventListener('change', apply); reduced.removeEventListener('change', apply); };
  }, [preferences, ready]);
  return <AppearanceContext.Provider value={{ preferences, update: patch => setPreferences(p => ({ ...p, ...patch })), reset: () => setPreferences({ ...defaultAppearance }), systemReduced }}>{children}</AppearanceContext.Provider>;
}
export function useAppearance() {
  const value = useContext(AppearanceContext);
  if (!value) throw new Error('Appearance settings need their provider');
  return value;
}
