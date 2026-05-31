import { useAuthStore } from '../stores/auth'

// Hydrate the signed-in user from the token cookie on app start (SSR + client),
// so guarded pages and the topbar show the right user after a hard refresh.
export default defineNuxtPlugin(async () => {
  const auth = useAuthStore()
  if (auth.token && !auth.user) {
    await auth.fetchUser()
  }
})
