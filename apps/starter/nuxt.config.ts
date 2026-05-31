// AdminLTE 4 admin starter. Everything dashboard-related (the AdminLTE module,
// Pinia, layouts, auth store + middleware, mock auth API) is inherited from the
// @adminlte/dashboard layer — this app just adds its own pages, data and brand.
export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',

  extends: ['@adminlte/dashboard'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'AdminLTE Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'A Nuxt 4 admin dashboard starter built on AdminLTE 4.',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      appName: 'AdminLTE Starter',
    },
  },

  // Pick the preset for your host (Vercel/Netlify/Cloudflare auto-detect in CI):
  // nitro: { preset: 'node-server' },
})
