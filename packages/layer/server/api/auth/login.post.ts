// Mock login. Replace with a real credential check + session/JWT in your app.
// Demo credentials: admin@example.com / password
const DEMO_USER = {
  name: 'Alexander Pierce',
  email: 'admin@example.com',
  image: '/assets/img/user2-160x160.jpg',
  role: 'Administrator',
}

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody<{ email?: string; password?: string }>(event)

  if (email !== DEMO_USER.email || password !== 'password') {
    throw createError({ statusCode: 401, statusMessage: 'Invalid email or password' })
  }

  // A real app would sign a JWT / create a session here.
  const token = `mock.${Buffer.from(email).toString('base64url')}`
  return { token, user: DEMO_USER }
})
