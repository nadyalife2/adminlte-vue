// Mock user directory + token helpers. Replace this whole file with your real
// auth (DB lookup + JWT/session) — the route handlers only depend on these.
export interface MockUser {
  name: string
  email: string
  image?: string
  role?: string
  roles: string[]
}

export const MOCK_USERS: Record<string, { password: string; user: MockUser }> = {
  'admin@example.com': {
    password: 'password',
    user: {
      name: 'Alexander Pierce',
      email: 'admin@example.com',
      image: '/assets/img/user2-160x160.jpg',
      role: 'Administrator',
      roles: ['admin'],
    },
  },
  'editor@example.com': {
    password: 'password',
    user: {
      name: 'Sarah Mehta',
      email: 'editor@example.com',
      image: '/assets/img/user2-160x160.jpg',
      role: 'Editor',
      roles: ['editor'],
    },
  },
}

export function issueToken(email: string): string {
  return `mock.${Buffer.from(email).toString('base64url')}`
}

export function emailFromToken(token: string): string | null {
  if (!token?.startsWith('mock.')) return null
  try {
    return Buffer.from(token.slice(5), 'base64url').toString('utf8')
  } catch {
    return null
  }
}

export function userFromToken(token: string): MockUser | null {
  const email = emailFromToken(token)
  return email ? (MOCK_USERS[email]?.user ?? null) : null
}
