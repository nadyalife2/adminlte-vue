import { describe, it, expect } from 'vitest'
import { getBoard, moveCard } from '../server/utils/board-db'

describe('board-db', () => {
  it('seeds four columns', () => {
    expect(getBoard().map((c) => c.id)).toEqual(['todo', 'doing', 'review', 'done'])
  })

  it('moves a card between columns', () => {
    const board = getBoard()
    const card = board[0]!.cards[0]!.id
    const ok = moveCard({ card, from: 'todo', to: 'done', newIndex: 0 })
    expect(ok).toBe(true)
    expect(getBoard().find((c) => c.id === 'todo')!.cards.some((x) => x.id === card)).toBe(false)
    expect(getBoard().find((c) => c.id === 'done')!.cards[0]!.id).toBe(card)
  })

  it('returns false for an unknown card', () => {
    expect(moveCard({ card: 'nope', from: 'todo', to: 'done', newIndex: 0 })).toBe(false)
  })
})
