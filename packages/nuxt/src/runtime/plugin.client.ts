import { defineNuxtPlugin } from '#app'

/**
 * Loads Bootstrap's JS bundle on the client. Importing the package registers
 * Bootstrap's data-API delegated listeners, so `data-bs-toggle` markup
 * (dropdowns, modals, offcanvas) works without per-element initialization and
 * survives client-side navigation.
 */
export default defineNuxtPlugin(async () => {
  await import('bootstrap')
})
