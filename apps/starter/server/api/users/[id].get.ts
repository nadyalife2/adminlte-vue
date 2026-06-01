import { getUser } from '../../utils/users-db'

// GET /api/users/:id
export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))
  const user = getUser(id)
  if (!user) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }
  return user
})
