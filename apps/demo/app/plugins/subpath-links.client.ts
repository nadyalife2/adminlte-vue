// Port of the React edition's <SubpathLinks/> shim.
//
// Nuxt's `app.baseURL` already prefixes the router (every NuxtLink) and the
// build assets (`_nuxt/`). What it does NOT touch is the long tail of literal
// `<a href="/…">` and `<img src="/assets/…">` strings baked into the 1:1 demo
// markup. When the demo is exported under a subpath (EXPORT=true →
// /themes/vue-nuxt), this client plugin rewrites those to include the base.
//
// Idempotent and a no-op at the domain root (local dev / non-export builds), so
// the showcase pages keep using plain "/…" paths and stay 1:1 with the original.
// Reactive/controlled `:src` bindings (which re-render and revert a DOM patch)
// are prefixed at the data layer instead — see index2.vue.
export default defineNuxtPlugin((nuxtApp) => {
  const base = useRuntimeConfig().public.basePath
  if (!base) return

  const prefix = () => {
    document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach((el) => {
      const href = el.getAttribute('href') || ''
      if (href.startsWith('//') || href === base || href.startsWith(base + '/')) return
      el.setAttribute('href', base + href)
    })
    document.querySelectorAll<HTMLImageElement>('img[src^="/assets"]').forEach((el) => {
      const src = el.getAttribute('src') || ''
      if (src.startsWith(base + '/')) return
      el.setAttribute('src', base + src)
    })
  }

  // Run after each page render (initial hydration + every client-side nav).
  nuxtApp.hook('page:finish', () => nextTick(prefix))
})
