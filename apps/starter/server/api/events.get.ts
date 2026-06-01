import { listEvents } from '../utils/events-db'

// GET /api/events  → calendar events
export default defineEventHandler(() => listEvents())
