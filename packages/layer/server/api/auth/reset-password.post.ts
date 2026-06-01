// Mock "reset password". A real app would verify the reset token and update the
// stored password hash.
export default defineEventHandler(async (event) => {
  const { token, password } = await readBody<{ token?: string; password?: string }>(event)
  if (!token || !password) {
    throw createError({ statusCode: 422, statusMessage: 'Token and new password are required.' })
  }
  return { ok: true }
})
