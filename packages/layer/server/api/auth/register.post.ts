import { MOCK_USERS, issueToken } from '../../utils/auth-mock'

// Mock registration. A real app would persist the user + hash the password.
export default defineEventHandler(async (event) => {
  const { name, email, password } = await readBody<{
    name?: string
    email?: string
    password?: string
  }>(event)

  if (!name || !email || !password) {
    throw createError({ statusCode: 422, statusMessage: 'Name, email and password are required.' })
  }
  if (MOCK_USERS[email]) {
    throw createError({ statusCode: 409, statusMessage: 'That email is already registered.' })
  }

  const user = {
    name,
    email,
    image: '/assets/img/user2-160x160.jpg',
    role: 'Member',
    roles: ['user'],
  }
  return { token: issueToken(email), user }
})
