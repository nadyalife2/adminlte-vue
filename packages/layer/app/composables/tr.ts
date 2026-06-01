/**
 * i18n-optional translate helper. If @nuxtjs/i18n is installed and the key
 * exists, returns the translation; otherwise returns the fallback. Lets the
 * layer's shell components localize when the consuming app has i18n, without
 * hard-depending on it.
 */
export function useTr() {
  const nuxtApp = useNuxtApp() as unknown as {
    $i18n?: { te: (k: string) => boolean; t: (k: string, named?: Record<string, unknown>) => string }
  }
  return (key: string, fallback: string, named?: Record<string, unknown>) => {
    const i18n = nuxtApp.$i18n
    return i18n && i18n.te(key) ? i18n.t(key, named ?? {}) : fallback
  }
}
