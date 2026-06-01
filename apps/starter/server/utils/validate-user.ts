import type { UserInput } from './users-db'

const ROLES = ['Admin', 'Editor', 'Viewer']
const STATUSES = ['active', 'invited', 'suspended']

// Shared server-side validation. Returns a field→message map (empty = valid).
export function validateUser(body: Partial<UserInput>): Record<string, string> {
  const errors: Record<string, string> = {}
  if (!body.name || !body.name.trim()) errors.name = 'Name is required.'
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) errors.email = 'A valid email is required.'
  if (!body.role || !ROLES.includes(body.role)) errors.role = 'Pick a role.'
  if (!body.status || !STATUSES.includes(body.status)) errors.status = 'Pick a status.'
  return errors
}
