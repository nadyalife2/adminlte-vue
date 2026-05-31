// Rebrand the inherited dashboard layer + define this app's navigation. Nuxt
// deep-merges this over the layer's defaults, so only the keys here change.
export default defineAppConfig({
  adminlte: {
    brand: {
      logo: '/assets/img/AdminLTELogo.png',
      text: 'Starter',
      href: '/',
    },
    menu: [
      { type: 'item', text: 'Dashboard', href: '/', icon: 'bi-speedometer2' },
      { type: 'header', text: 'ACCOUNT' },
      { type: 'item', text: 'Profile', href: '/profile', icon: 'bi-person' },
      { type: 'item', text: 'Settings', href: '/settings', icon: 'bi-gear' },
    ],
    notifications: [
      { text: 'New sale recorded', icon: 'bi-bag-check', time: '3 mins' },
      { text: 'Server load nominal', icon: 'bi-hdd-rack', time: '1 hour' },
    ],
  },
})
