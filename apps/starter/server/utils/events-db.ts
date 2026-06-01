// In-memory calendar events, seeded into the current month so the calendar
// always has something to show. Replace with your datastore.
export interface CalEvent {
  id: string
  title: string
  start: string
  color?: string
}

function seed(): CalEvent[] {
  const now = new Date()
  const ym = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
  const day = (d: number) => `${ym}-${String(d).padStart(2, '0')}`
  return [
    { id: '1', title: 'Team standup', start: day(3), color: '#0d6efd' },
    { id: '2', title: 'Design review', start: day(8) },
    { id: '3', title: 'Release v2.1', start: day(14), color: '#198754' },
    { id: '4', title: '1:1 with Sarah', start: day(20) },
    { id: '5', title: 'Sprint demo', start: day(25), color: '#dc3545' },
  ]
}

const EVENTS: CalEvent[] = seed()
let nextId = 100

export function listEvents(): CalEvent[] {
  return EVENTS
}

export function addEvent(input: { title: string; start: string; color?: string }): CalEvent {
  const event: CalEvent = { id: String(nextId++), ...input }
  EVENTS.push(event)
  return event
}
