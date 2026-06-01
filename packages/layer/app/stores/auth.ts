import { defineStore } from 'pinia'
import { computed } from 'vue'

export interface AuthUser {
  name: string
  email: string
  image?: string
  role?: string
  /** Role keys used for RBAC checks (e.g. ['admin']). */
  roles?: string[]
}

/**
 * Cookie-backed auth store. The token cookie is SSR-readable, so guards and the
 * topbar resolve the signed-in user on the server too. The /api/auth/* endpoints
 * are mocked by this layer — point them at a real backend in your app.
 */
export const useAuthStore = defineStore('auth', () => {
  const token = useCookie<string | null>('auth-token', {
    default: () => null,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
  })
  const user = useState<AuthUser | null>('auth:user', () => null)

  const isAuthenticated = computed(() => !!token.value)
  const roles = computed(() => user.value?.roles ?? [])
  const isAdmin = computed(() => roles.value.includes('admin'))

  function hasRole(role: string) {
    return roles.value.includes(role)
  }
  function hasAnyRole(required: string[]) {
    return required.length === 0 || required.some((r) => roles.value.includes(r))
  }

  async function login(email: string, password: string) {
    const res = await $fetch('/api/auth/login', { method: 'POST', body: { email, password } })
    token.value = res.token
    user.value = res.user
    return res.user
  }

  async function register(payload: { name: string; email: string; password: string }) {
    const res = await $fetch('/api/auth/register', { method: 'POST', body: payload })
    token.value = res.token
    user.value = res.user
    return res.user
  }

  /** Hydrate the user from the token (e.g. on app start / hard refresh). */
  async function fetchUser() {
    if (!token.value) return null
    if (user.value) return user.value
    try {
      user.value = await $fetch('/api/auth/me', {
        headers: { authorization: `Bearer ${token.value}` },
      })
    } catch {
      logout()
    }
    return user.value
  }

  function logout() {
    token.value = null
    user.value = null
  }

  return {
    token,
    user,
    isAuthenticated,
    roles,
    isAdmin,
    hasRole,
    hasAnyRole,
    login,
    register,
    fetchUser,
    logout,
  }
})
