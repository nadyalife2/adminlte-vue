// adminlte-vue documentation site (Nuxt 4 + @nuxt/content v3).

// Local dev stays at /docs/. `EXPORT=true nuxi generate` (the `export` script)
// builds for https://adminlte.io/themes/vue-nuxt/docs/ — it takes over the demo's
// /docs path (the demo's cloned AdminLTE docs are excluded from its deploy).
const isExport = process.env.EXPORT === 'true'
const base = isExport ? '/themes/vue-nuxt/docs/' : '/docs/'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  devtools: { enabled: false },

  modules: ['@nuxt/content'],

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/css/docs.css',
  ],

  app: {
    // Served under /docs so it can live at e.g. site.com/docs like other templates.
    baseURL: base,
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'AdminLTE Vue · Docs',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Documentation for AdminLTE Vue — AdminLTE 4 for Vue 3 & Nuxt.' },
      ],
    },
  },

  content: {
    build: {
      markdown: {
        toc: { depth: 3, searchDepth: 3 },
        highlight: {
          theme: { default: 'github-light', dark: 'github-dark' },
        },
      },
    },
  },
})
