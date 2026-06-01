import { createUser, type UserInput } from '../../utils/users-db'
import { validateUser } from '../../utils/validate-user'

// POST /api/users  → create
export default defineEventHandler(async (event) => {
  const body = await readBody<Partial<UserInput>>(event)
  const errors = validateUser(body)
  if (Object.keys(errors).length) {
    throw createError({ statusCode: 422, statusMessage: 'Validation failed', data: { errors } })
  }
  return createUser(body as UserInput)
})
