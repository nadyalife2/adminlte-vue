// Re-export the auth store as a composable so it's auto-imported in consumer
// apps across the layer boundary (Nuxt auto-imports `composables/` reliably,
// whereas @pinia/nuxt's stores-dir scan doesn't always reach extended layers).
export { useAuthStore } from '../stores/auth'
export type { AuthUser } from '../stores/auth'
