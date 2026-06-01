import { MOCK_USERS, issueToken } from '../../utils/auth-mock'

// Mock login. Replace with a real credential check + session/JWT in your app.
// Demo credentials: admin@example.com or editor@example.com — password "password".
export default defineEventHandler(async (event) => {
  const { email, password } = await readBody<{ email?: string; password?: string }>(event)
  const record = email ? MOCK_USERS[email] : undefined

  if (!record || record.password !== password) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid email or password' })
  }

  return { token: issueToken(record.user.email), user: record.user }
})
