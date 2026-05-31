# AdminLTE Starter (Nuxt 4)

A minimal, **clonable Nuxt 4 admin starter** built on AdminLTE 4. It extends the
[`@adminlte/dashboard`](../../packages/layer) layer, so the dashboard shell, layouts,
Pinia auth store, route middleware and mock auth API come for free — this app just
adds its brand, navigation, pages and data.

## What it demonstrates

- **`extends: ['@adminlte/dashboard']`** — inherit a working admin shell.
- **Auth flow** — `/login` → cookie-backed `useAuthStore()` → guarded pages via
  `definePageMeta({ middleware: 'auth' })`. Sign-out is wired through the topbar.
- **Real data** — pages `useFetch` the mock `server/api/dashboard/*` endpoints
  (SSR-rendered, hydrated on the client).
- **SEO** — per-page `useSeoMeta`.
- **Config & deploy** — `app.config.ts` branding/menu, `.env.example`,
  `runtimeConfig`, and a Nitro preset hook in `nuxt.config.ts`.

## Run

```bash
pnpm install
pnpm --filter adminlte-starter dev      # http://localhost:3000
```

Sign in with the demo credentials: **admin@example.com** / **password**.

## Make it yours

1. Rebrand + set your menu in [`app/app.config.ts`](app/app.config.ts).
2. Replace the mock endpoints in [`server/api`](server/api) and the layer's
   `/api/auth/*` with your backend.
3. Add pages under [`app/pages`](app/pages); guard them with
   `definePageMeta({ middleware: 'auth' })`.
