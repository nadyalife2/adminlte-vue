import { userFromToken } from '../../utils/auth-mock'

// Mock "current user" endpoint. Resolves the user from the bearer token the
// auth store sends. A real app would verify the JWT / look up the session.
export default defineEventHandler((event) => {
  const auth = getHeader(event, 'authorization') ?? ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  const user = userFromToken(token)
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthenticated' })
  }
  return user
})
