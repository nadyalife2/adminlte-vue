import type { AdminlteAppConfig } from './types/app-config'

// Default branding + a starter menu. Consuming apps override any of this in
// their own app.config.ts (Nuxt deep-merges app configs across layers).
export default defineAppConfig({
  adminlte: {
    brand: {
      logo: '/assets/img/AdminLTELogo.png',
      text: 'AdminLTE 4',
      href: '/',
    },
    user: {
      name: 'Guest',
      role: 'Member',
    },
    // Empty by default — consumers provide their menu in app.config.ts. (Nuxt
    // deep-merges app configs by *concatenating* arrays, so a non-empty default
    // here would duplicate the consumer's menu.)
    menu: [],
    messages: [],
    notifications: [],
  } satisfies AdminlteAppConfig,
})
