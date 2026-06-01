import { listUsers, type User } from '../../utils/users-db'

// GET /api/users?q=&sort=&dir=&page=&size=  → server-side search / sort / paginate
export default defineEventHandler((event) => {
  const q = getQuery(event)
  return listUsers({
    q: typeof q.q === 'string' ? q.q : '',
    sort: (q.sort as keyof User) || 'id',
    dir: q.dir === 'desc' ? 'desc' : 'asc',
    page: Number(q.page) || 1,
    size: Number(q.size) || 10,
  })
})
