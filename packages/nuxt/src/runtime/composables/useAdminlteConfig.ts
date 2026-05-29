import { useRuntimeConfig } from '#app'
import type { AdminlteLayoutDefaults } from '../../module'

/**
 * Read the AdminLTE layout defaults configured via `nuxt.config.ts` →
 * `adminlte.defaults`. Mirrors the config-driven approach of the Laravel port.
 */
export function useAdminlteConfig(): AdminlteLayoutDefaults {
  const config = useRuntimeConfig()
  return (config.public.adminlte ?? {}) as AdminlteLayoutDefaults
}
