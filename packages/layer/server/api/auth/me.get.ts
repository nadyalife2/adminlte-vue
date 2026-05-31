// Mock "current user" endpoint. Resolves the user from the bearer token the
// auth store sends. A real app would verify the JWT / look up the session.
const DEMO_USER = {
  name: 'Alexander Pierce',
  email: 'admin@example.com',
  image: '/assets/img/user2-160x160.jpg',
  role: 'Administrator',
}

export default defineEventHandler((event) => {
  const auth = getHeader(event, 'authorization') ?? ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : ''
  if (!token.startsWith('mock.')) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthenticated' })
  }
  return DEMO_USER
})
