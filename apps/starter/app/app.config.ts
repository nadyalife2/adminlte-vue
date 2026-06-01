// Rebrand the inherited dashboard layer + define this app's navigation. Nuxt
// deep-merges this over the layer's defaults, so only the keys here change.
export default defineAppConfig({
  adminlte: {
    brand: {
      logo: '/assets/img/AdminLTELogo.png',
      text: 'AdminLTE',
      href: '/',
    },
    // `text` values are i18n keys (translated by the layer; they fall back to the
    // literal key if i18n is absent). See i18n/locales/*.json.
    menu: [
      { type: 'item', text: 'nav.dashboard', href: '/', icon: 'bi-speedometer2' },
      { type: 'header', text: 'nav.features' },
      { type: 'item', text: 'nav.analytics', href: '/analytics', icon: 'bi-graph-up' },
      { type: 'item', text: 'nav.calendar', href: '/calendar', icon: 'bi-calendar3' },
      { type: 'item', text: 'nav.board', href: '/board', icon: 'bi-kanban' },
      { type: 'header', text: 'nav.account' },
      { type: 'item', text: 'nav.profile', href: '/profile', icon: 'bi-person' },
      { type: 'item', text: 'nav.settings', href: '/settings', icon: 'bi-gear' },
      { type: 'header', text: 'nav.admin' },
      { type: 'item', text: 'nav.users', href: '/users', icon: 'bi-people', roles: ['admin'] },
      { type: 'item', text: 'nav.administration', href: '/admin', icon: 'bi-shield-lock', roles: ['admin'] },
    ],
    notifications: [
      { text: 'New sale recorded', icon: 'bi-bag-check', time: '3 mins' },
      { text: 'Server load nominal', icon: 'bi-hdd-rack', time: '1 hour' },
    ],
  },
})
