import { addEvent } from '../utils/events-db'

// POST /api/events  → add an event
export default defineEventHandler(async (event) => {
  const body = await readBody<{ title?: string; start?: string; color?: string }>(event)
  if (!body.title || !body.start) {
    throw createError({ statusCode: 422, statusMessage: 'title and start are required' })
  }
  return addEvent({ title: body.title, start: body.start, color: body.color })
})
