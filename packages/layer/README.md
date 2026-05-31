# @adminlte/dashboard

An **AdminLTE 4 dashboard starter as a [Nuxt Layer](https://nuxt.com/docs/getting-started/layers)**.
Extend it and you inherit a working admin shell — the AdminLTE module (components,
composables, CSS, SSR-safe theme script), Pinia, a default dashboard + auth layout,
a cookie-backed auth store with route middleware, and mock `/api/auth/*` endpoints.

## Usage

```bash
pnpm add @adminlte/dashboard @pinia/nuxt pinia
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  extends: ['@adminlte/dashboard'],
})
```

Then rebrand and supply your menu in `app.config.ts`:

```ts
export default defineAppConfig({
  adminlte: {
    brand: { text: 'Acme Admin', logo: '/logo.png', href: '/' },
    menu: [
      { type: 'item', text: 'Dashboard', href: '/', icon: 'bi-speedometer2' },
      // …
    ],
  },
})
```

## What you get

| Piece | Where | Notes |
|---|---|---|
| Dashboard shell | `layouts/default.vue` | config-driven menu / brand / user, wired sign-out |
| Auth layout | `layouts/auth.vue` | centered shell for login/lockscreen pages |
| Auth store | `stores/auth.ts` | cookie-backed, SSR-readable (`useAuthStore()`) |
| Route guard | `middleware/auth.ts` | `definePageMeta({ middleware: 'auth' })` |
| Mock auth API | `server/api/auth/*` | replace with your backend |

Protect a page and read the user:

```vue
<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
const auth = useAuthStore()
</script>
```

The mock login accepts `admin@example.com` / `password`.
