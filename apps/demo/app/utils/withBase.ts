// Compile-time subpath base, injected by Vite `define` in nuxt.config.ts.
// '' at the domain root (local dev / non-export), '/themes/vue-nuxt' under EXPORT.
declare const __ADMINLTE_BASE__: string

/**
 * Prefixes an absolute app path (`/assets/...`, `/foo`) with the subpath-export
 * base so it resolves when the demo is hosted at https://adminlte.io/themes/vue-nuxt/.
 *
 * Use this for any image src that renders on initial load — the browser fetches
 * a server-rendered `<img src="/assets/…">` before client JS runs, so the
 * after-paint shim (subpath-links.client.ts) can't prevent a first-load 404.
 * A no-op at the domain root, so wrapped markup stays byte-identical there (1:1).
 * Auto-imported (Nuxt globs app/utils/*).
 */
export function withBase(path: string): string {
  const base = __ADMINLTE_BASE__
  if (!base || !path.startsWith('/') || path.startsWith(base + '/')) return path
  return base + path
}
