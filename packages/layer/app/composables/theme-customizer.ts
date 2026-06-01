export type SidebarTheme = 'light' | 'dark'

/**
 * Persisted sidebar theme for the customizer panel. Cookie-backed so it's
 * SSR-readable (no flash). Color mode itself is owned by the library's
 * useColorMode(); this only covers the sidebar's light/dark treatment.
 */
export function useThemeCustomizer() {
  const sidebarTheme = useCookie<SidebarTheme>('lte.sidebar-theme', {
    default: () => 'dark',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
  })

  function setSidebarTheme(theme: SidebarTheme) {
    sidebarTheme.value = theme
  }

  return { sidebarTheme, setSidebarTheme }
}
