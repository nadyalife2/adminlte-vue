// https://nuxt.com/docs/api/configuration/nuxt-config

// Subpath deploy is gated behind EXPORT so local `pnpm dev:demo` stays at the
// domain root. `EXPORT=true nuxi generate` (the `export` script) produces a
// static `.output/public` configured for https://adminlte.io/themes/vue-nuxt/.
// Mirrors the React edition's next-react export. Nuxt's `app.baseURL` natively
// prefixes the router (every NuxtLink) and the build assets (`_nuxt/`); the long
// tail of raw `<a href="/…">` / `<img src="/assets/…">` is handled by the
// `subpath-links` client plugin, and dynamic image srcs at the data layer.
const isExport = process.env.EXPORT === 'true'
const base = isExport ? '/themes/vue-nuxt/' : '/'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  // Off so the showcase matches the original 1:1 (no floating dev overlay).
  devtools: { enabled: false },

  modules: ['@adminlte/nuxt'],

  // Exposed (client-side) for the subpath link/asset shim (runs after paint).
  // Empty at the domain root → the shim becomes a no-op.
  runtimeConfig: {
    public: {
      basePath: isExport ? '/themes/vue-nuxt' : '',
    },
  },

  // Compile-time base constant for `withBase()` (app/utils/withBase.ts). Used to
  // prefix initial-render image srcs AT THE SOURCE — the shim can't, since the
  // browser fetches a server-rendered `<img src>` before any client JS runs.
  // A literal define (not runtimeConfig) so it works in data arrays + templates
  // with no Nuxt-context requirement, and is fully inlined/tree-shaken at root.
  vite: {
    define: {
      __ADMINLTE_BASE__: JSON.stringify(isExport ? '/themes/vue-nuxt' : ''),
    },
  },

  // AdminLTE module options (mirrors the Laravel config array).
  adminlte: {
    defaults: {
      fixedHeader: true,
      fixedSidebar: true,
      sidebarTheme: 'dark',
      initialColorMode: 'light',
      enableSidebarPersistence: true,
    },
  },

  // Consumer-side CSS the library doesn't bundle (icons + sidebar scrollbar).
  // `adminlte-vue/css` is injected by the module before these.
  css: [
    'bootstrap-icons/font/bootstrap-icons.css',
    'overlayscrollbars/overlayscrollbars.css',
  ],

  app: {
    baseURL: base,
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'AdminLTE Vue — Demo',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AdminLTE 4 for Vue 3 and Nuxt — component demo.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        // The font files themselves come from gstatic — preconnect needs the
        // anonymous CORS handshake or the browser opens a second connection.
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap',
        },
      ],
    },
  },
})
