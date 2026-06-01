// In-memory mock "users" table. Survives within a running server process; swap
// for a real database in your app — the route handlers only use these helpers.
export type UserRole = 'Admin' | 'Editor' | 'Viewer'
export type UserStatus = 'active' | 'invited' | 'suspended'

export interface User {
  id: number
  name: string
  email: string
  role: UserRole
  status: UserStatus
  createdAt: string
}

export interface UserInput {
  name: string
  email: string
  role: UserRole
  status: UserStatus
}

const FIRST = [
  'Alex', 'Sarah', 'Devon', 'Esther', 'Cameron', 'Jane', 'Marcus', 'Lena', 'Omar', 'Priya',
  'Noah', 'Mia', 'Liam', 'Zoe', 'Hiro', 'Ava', 'Ravi', 'Nina', 'Theo', 'Maya',
  'Felix', 'Grace', 'Diego', 'Ivy', 'Sven', 'Tara', 'Kofi', 'Lucia', 'Aria', 'Pavel',
]
const LAST = [
  'Pierce', 'Mehta', 'Lane', 'Howard', 'Williamson', 'Cooper', 'Reyes', 'Novak', 'Khan', 'Patel',
  'Bauer', 'Santos', 'Nguyen', 'Okafor', 'Rossi', 'Larsen', 'Adeyemi', 'Kim', 'Moreau', 'Costa',
]
const ROLES: UserRole[] = ['Admin', 'Editor', 'Viewer']
const STATUSES: UserStatus[] = ['active', 'active', 'active', 'invited', 'suspended']

function seed(): User[] {
  const out: User[] = []
  for (let i = 0; i < 46; i++) {
    const first = FIRST[i % FIRST.length]!
    const last = LAST[(i * 7) % LAST.length]!
    const name = `${first} ${last}`
    const day = String((i % 27) + 1).padStart(2, '0')
    const month = String((i % 12) + 1).padStart(2, '0')
    out.push({
      id: i + 1,
      name,
      email: `${first}.${last}`.toLowerCase() + `${i}@example.com`,
      role: ROLES[i % ROLES.length]!,
      status: STATUSES[i % STATUSES.length]!,
      createdAt: `2025-${month}-${day}`,
    })
  }
  return out
}

let USERS: User[] = seed()

export interface ListQuery {
  q?: string
  sort?: keyof User
  dir?: 'asc' | 'desc'
  page?: number
  size?: number
}

export function listUsers(query: ListQuery) {
  const q = (query.q ?? '').trim().toLowerCase()
  const sort = (query.sort ?? 'id') as keyof User
  const dir = query.dir === 'desc' ? -1 : 1
  const page = Math.max(1, Number(query.page) || 1)
  const size = Math.min(100, Math.max(1, Number(query.size) || 10))

  let rows = USERS
  if (q) {
    rows = rows.filter((u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q))
  }
  rows = [...rows].sort((a, b) => {
    const av = a[sort]
    const bv = b[sort]
    return (av < bv ? -1 : av > bv ? 1 : 0) * dir
  })

  const total = rows.length
  const start = (page - 1) * size
  return { rows: rows.slice(start, start + size), total, page, size }
}

export function getUser(id: number) {
  return USERS.find((u) => u.id === id) ?? null
}

export function createUser(input: UserInput): User {
  const id = USERS.reduce((m, u) => Math.max(m, u.id), 0) + 1
  const now = new Date().toISOString().slice(0, 10)
  const user: User = { id, ...input, createdAt: now }
  USERS.unshift(user)
  return user
}

export function updateUser(id: number, input: Partial<UserInput>): User | null {
  const user = getUser(id)
  if (!user) return null
  Object.assign(user, input)
  return user
}

export function removeUser(id: number): boolean {
  const before = USERS.length
  USERS = USERS.filter((u) => u.id !== id)
  return USERS.length < before
}
