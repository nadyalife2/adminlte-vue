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
   `definePageMeta({ middleware: 'auth' })`, or restrict by role with
   `definePageMeta({ middleware: 'auth', roles: ['admin'] })`.

## What's inside

| Area | Where |
| --- | --- |
| Auth (login/register/forgot/reset/lockscreen) + RBAC | inherited from `@adminlte/dashboard` |
| Users CRUD (search/sort/paginate, validation) | `app/pages/users`, `server/api/users` |
| Analytics / Calendar / Board (live, mock data) | `app/pages/{analytics,calendar,board}` |
| Toasts, theme customizer, route transitions | inherited from the layer |

## Testing

```bash
pnpm --filter adminlte-starter test    # Vitest — server util logic
```

## Deploy

The build output is a standard Nitro server (`node-server` preset by default):

```bash
pnpm --filter adminlte-starter build
node apps/starter/.output/server/index.mjs   # PORT=3000 HOST=0.0.0.0
```

- **Vercel / Netlify / Cloudflare** — auto-detected by their Nuxt support; or set
  a preset in `nuxt.config.ts` (`nitro: { preset: 'vercel' }`, `'netlify'`,
  `'cloudflare-pages'`, …).
- **Docker** — build from the repo root:

  ```bash
  docker build -f apps/starter/Dockerfile -t adminlte-starter .
  docker run -p 3000:3000 adminlte-starter
  ```
