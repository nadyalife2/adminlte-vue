// Mock "request password reset". A real app would generate a signed, expiring
// token and email a reset link. Always returns ok (don't leak which emails exist).
export default defineEventHandler(async (event) => {
  const { email } = await readBody<{ email?: string }>(event)
  if (!email) {
    throw createError({ statusCode: 422, statusMessage: 'Email is required.' })
  }
  return { ok: true }
})
