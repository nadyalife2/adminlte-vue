import { describe, it, expect } from 'vitest'
import { validateUser } from '../server/utils/validate-user'

describe('validateUser', () => {
  it('passes a valid payload', () => {
    expect(validateUser({ name: 'Jane', email: 'jane@example.com', role: 'Editor', status: 'active' })).toEqual({})
  })

  it('flags every missing/invalid field', () => {
    const errors = validateUser({ name: '', email: 'nope', role: undefined, status: undefined })
    expect(Object.keys(errors).sort()).toEqual(['email', 'name', 'role', 'status'])
  })

  it('rejects a malformed email', () => {
    const errors = validateUser({ name: 'Jane', email: 'jane@', role: 'Admin', status: 'active' })
    expect(errors.email).toBeTruthy()
    expect(errors.name).toBeUndefined()
  })
})
