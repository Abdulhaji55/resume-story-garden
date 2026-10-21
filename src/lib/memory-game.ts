export type MemoryCard = { id: number; label: string };
export type MemoryState = { cards: MemoryCard[]; selected: number[]; matched: number[]; moves: number };
export type MemoryAction = { type: 'flip'; id: number } | { type: 'clear' } | { type: 'reset'; cards: MemoryCard[] };
export function createDeck(labels: string[]): MemoryCard[] {
  const cards = [...labels, ...labels].map((label, id) => ({ id, label }));
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = cards[i]; const b = cards[j];
    if (a && b) { cards[i] = b; cards[j] = a; }
  }
  return cards;
}
export function memoryReducer(state: MemoryState, action: MemoryAction): MemoryState {
  if (action.type === 'reset') return { cards: action.cards, selected: [], matched: [], moves: 0 };
  if (action.type === 'clear') return { ...state, selected: [] };
  if (state.selected.length === 2 || state.matched.includes(action.id) || state.selected.includes(action.id)) return state;
  const card = state.cards.find(c => c.id === action.id);
  if (!card) return state;
  const selected = [...state.selected, action.id];
  if (selected.length === 1) return { ...state, selected };
  const first = state.cards.find(c => c.id === selected[0]);
  const match = first?.label === card.label;
  return { ...state, selected, moves: state.moves + 1, matched: match ? [...state.matched, ...selected] : state.matched };
}
