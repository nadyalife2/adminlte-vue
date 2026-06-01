import { updateUser, type UserInput } from '../../utils/users-db'
import { validateUser } from '../../utils/validate-user'

// PUT /api/users/:id  → update
export default defineEventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  const body = await readBody<Partial<UserInput>>(event)
  const errors = validateUser(body)
  if (Object.keys(errors).length) {
    throw createError({ statusCode: 422, statusMessage: 'Validation failed', data: { errors } })
  }
  const user = updateUser(id, body)
  if (!user) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }
  return user
})
