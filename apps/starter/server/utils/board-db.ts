// In-memory kanban board. Moves are persisted so a reload reflects the order.
export interface BoardCard {
  id: string
  title: string
  text?: string
}
export interface BoardColumn {
  id: string
  title: string
  theme?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
  cards: BoardCard[]
}

let BOARD: BoardColumn[] = [
  {
    id: 'todo',
    title: 'To do',
    theme: 'secondary',
    cards: [
      { id: 'c1', title: 'Spec the public API' },
      { id: 'c2', title: 'Design empty states' },
      { id: 'c3', title: 'Audit dependencies' },
    ],
  },
  {
    id: 'doing',
    title: 'In progress',
    theme: 'primary',
    cards: [
      { id: 'c4', title: 'Build the users module' },
      { id: 'c5', title: 'Wire up charts' },
    ],
  },
  { id: 'review', title: 'Review', theme: 'warning', cards: [{ id: 'c6', title: 'RBAC middleware' }] },
  { id: 'done', title: 'Done', theme: 'success', cards: [{ id: 'c7', title: 'Auth flow' }] },
]

export function getBoard(): BoardColumn[] {
  return BOARD
}

export function moveCard(p: { card: string; from: string; to: string; newIndex: number }): boolean {
  const fromCol = BOARD.find((c) => c.id === p.from)
  const toCol = BOARD.find((c) => c.id === p.to)
  if (!fromCol || !toCol) return false
  const idx = fromCol.cards.findIndex((c) => c.id === p.card)
  if (idx === -1) return false
  const [card] = fromCol.cards.splice(idx, 1)
  toCol.cards.splice(Math.max(0, Math.min(p.newIndex, toCol.cards.length)), 0, card!)
  return true
}
