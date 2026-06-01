import { describe, it, expect } from 'vitest'
import { listUsers, getUser, createUser, updateUser, removeUser } from '../server/utils/users-db'

describe('users-db', () => {
  it('paginates with a default page size of 10', () => {
    const { rows, total } = listUsers({})
    expect(rows).toHaveLength(10)
    expect(total).toBe(46)
  })

  it('filters by name or email (case-insensitive)', () => {
    const { rows } = listUsers({ q: 'sarah', size: 50 })
    expect(rows.length).toBeGreaterThan(0)
    expect(rows.every((u) => /sarah/i.test(u.name) || /sarah/i.test(u.email))).toBe(true)
  })

  it('sorts by a column in both directions', () => {
    const asc = listUsers({ sort: 'name', dir: 'asc', size: 50 }).rows.map((u) => u.name)
    const desc = listUsers({ sort: 'name', dir: 'desc', size: 50 }).rows.map((u) => u.name)
    expect(asc).toEqual([...asc].sort((a, b) => a.localeCompare(b)))
    expect(desc[0]).toBe(asc[asc.length - 1])
  })

  it('returns the requested page', () => {
    const p2 = listUsers({ page: 2, size: 10 })
    expect(p2.page).toBe(2)
    expect(p2.rows[0]!.id).toBe(11)
  })

  it('creates, updates and removes', () => {
    const created = createUser({ name: 'Tester', email: 't@example.com', role: 'Editor', status: 'active' })
    expect(getUser(created.id)?.name).toBe('Tester')

    updateUser(created.id, { name: 'Tester 2' })
    expect(getUser(created.id)?.name).toBe('Tester 2')

    expect(removeUser(created.id)).toBe(true)
    expect(getUser(created.id)).toBeNull()
  })
})
