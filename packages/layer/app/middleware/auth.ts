import { useAuthStore } from '../stores/auth'

// Named middleware: pages opt in with `definePageMeta({ middleware: 'auth' })`.
// Redirects unauthenticated visitors to /login (preserving the intended path),
// and enforces RBAC when a page declares `roles: [...]` in its meta.
export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()

  if (!auth.isAuthenticated) {
    return navigateTo({ path: '/login', query: { redirect: to.fullPath } })
  }

  const required = (to.meta.roles as string[] | undefined) ?? []
  if (!auth.hasAnyRole(required)) {
    throw createError({ statusCode: 403, statusMessage: 'You do not have access to this page.' })
  }
})
