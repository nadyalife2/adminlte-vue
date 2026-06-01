import { moveCard } from '../../utils/board-db'

// POST /api/board/move  → persist a drag between columns
export default defineEventHandler(async (event) => {
  const body = await readBody<{ card: string; from: string; to: string; newIndex: number }>(event)
  moveCard(body)
  return { ok: true }
})
