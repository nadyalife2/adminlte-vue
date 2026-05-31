import { useAuthStore } from '../stores/auth'

// Named middleware: pages opt in with `definePageMeta({ middleware: 'auth' })`.
// Redirects unauthenticated visitors to /login, preserving the intended path.
export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  if (!auth.isAuthenticated) {
    return navigateTo({ path: '/login', query: { redirect: to.fullPath } })
  }
})
