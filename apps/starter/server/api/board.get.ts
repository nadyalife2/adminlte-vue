import { getBoard } from '../utils/board-db'

// GET /api/board  → kanban columns + cards
export default defineEventHandler(() => getBoard())
