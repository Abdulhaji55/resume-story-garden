import { expect, it } from 'vitest';
import { parseAppearance, resolveDark, defaultAppearance } from './appearance';
it('supports explicit light and dark modes independent of the device', () => { expect(resolveDark('dark', false)).toBe(true); expect(resolveDark('light', true)).toBe(false); });
it('system appearance follows device preference', () => { expect(resolveDark('system', true)).toBe(true); expect(resolveDark('system', false)).toBe(false); });
it('retains disabled animation and effect settings', () => { expect(parseAppearance({theme:'dark',motion:false,effects:false})).toEqual({theme:'dark',motion:false,effects:false}); });
it('recovers safely from invalid saved preferences', () => { expect(parseAppearance({theme:'invalid',motion:'yes'})).toEqual(defaultAppearance); expect(parseAppearance(null)).toEqual(defaultAppearance); });
