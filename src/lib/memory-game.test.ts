import { describe, it, expect } from 'vitest';
import { createDeck, memoryReducer, type MemoryState } from './memory-game';
const cards = [{id:0,label:'React.js'},{id:1,label:'Kotlin'},{id:2,label:'React.js'},{id:3,label:'Kotlin'}];
const initial: MemoryState = {cards,selected:[],matched:[],moves:0};
describe('skill match', () => {
 it('creates two cards for each skill', () => { const deck=createDeck(['React.js','Kotlin']); expect(deck).toHaveLength(4); expect(deck.filter(c=>c.label==='React.js')).toHaveLength(2); expect(new Set(deck.map(c=>c.id)).size).toBe(4); });
 it('matches identical skills and counts one move', () => { const s=memoryReducer(memoryReducer(initial,{type:'flip',id:0}),{type:'flip',id:2}); expect(s.matched).toEqual([0,2]); expect(s.moves).toBe(1); });
 it('does not match different skills and blocks a third flip', () => { const s=memoryReducer(memoryReducer(initial,{type:'flip',id:0}),{type:'flip',id:1}); expect(s.matched).toEqual([]); expect(memoryReducer(s,{type:'flip',id:2})).toBe(s); expect(memoryReducer(s,{type:'clear'}).selected).toEqual([]); });
 it('rejects double clicks and resets the score', () => { const s=memoryReducer(initial,{type:'flip',id:0}); expect(memoryReducer(s,{type:'flip',id:0})).toBe(s); expect(memoryReducer({...s,moves:7,matched:[2,3]},{type:'reset',cards})).toEqual(initial); });
});
