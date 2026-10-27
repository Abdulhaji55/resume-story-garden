export type Appearance = { theme: 'light' | 'dark' | 'system'; motion: boolean; effects: boolean };
export const defaultAppearance: Appearance = { theme: 'system', motion: true, effects: true };
export function parseAppearance(value: unknown): Appearance {
  if (!value || typeof value !== 'object') return { ...defaultAppearance };
  const v = value as Record<string, unknown>;
  return { theme: v.theme === 'light' || v.theme === 'dark' || v.theme === 'system' ? v.theme : 'system', motion: typeof v.motion === 'boolean' ? v.motion : true, effects: typeof v.effects === 'boolean' ? v.effects : true };
}
export function resolveDark(theme: Appearance['theme'], systemDark: boolean) { return theme === 'dark' || (theme === 'system' && systemDark); }
