// Mock logout. The client clears its cookie; a real app would also invalidate
// the server-side session here.
export default defineEventHandler(() => ({ ok: true }))
