import { computed } from 'vue'

export type DocsTheme = 'light' | 'dark'

/**
 * Cookie-backed color mode for the docs. The cookie is SSR-readable, so the
 * layout sets `data-bs-theme` on <html> during SSR (no flash of the wrong theme).
 */
export function useDocsTheme() {
  const theme = useCookie<DocsTheme>('docs-theme', {
    default: () => 'light',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
  })

  const isDark = computed(() => theme.value === 'dark')

  function set(value: DocsTheme) {
    theme.value = value
    if (import.meta.client) document.documentElement.setAttribute('data-bs-theme', value)
  }
  function toggle() {
    set(isDark.value ? 'light' : 'dark')
  }

  return { theme, isDark, set, toggle }
}
