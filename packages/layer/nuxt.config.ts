// The dashboard layer. Any Nuxt app that `extends` this inherits:
//   - the AdminLTE module (components, composables, CSS, theme script)
//   - Pinia (for the auth store)
//   - the default dashboard + auth layouts, the auth store and route middleware
//   - mock /api/auth/* endpoints (replace with a real backend in your app)
// Apps override branding, the menu and the user via their own app.config.ts.
import { fileURLToPath } from 'node:url'

const r = (p: string) => fileURLToPath(new URL(p, import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',

  modules: ['@adminlte/nuxt', '@pinia/nuxt'],

  // Smooth route transitions (CSS in app/assets/css/app.css). No `out-in` mode:
  // it blanks pages that use top-level `await` (Suspense) on client-side nav.
  app: {
    pageTransition: { name: 'page' },
  },

  adminlte: {
    defaults: {
      fixedHeader: true,
      fixedSidebar: true,
      sidebarTheme: 'dark',
      initialColorMode: 'auto',
      enableSidebarPersistence: true,
    },
  },

  // Consumer-side CSS the component library doesn't bundle.
  css: [
    'bootstrap-icons/font/bootstrap-icons.css',
    'overlayscrollbars/overlayscrollbars.css',
    r('./app/assets/css/app.css'),
  ],
})
