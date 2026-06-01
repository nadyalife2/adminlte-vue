import { removeUser } from '../../utils/users-db'

// DELETE /api/users/:id
export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))
  if (!removeUser(id)) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }
  return { ok: true }
})
