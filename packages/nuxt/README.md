# @colorlib/adminlte-nuxt

The Nuxt module for [`@colorlib/adminlte-vue`](../adminlte-vue). Auto-registers all components, auto-imports
the composables, injects the CSS, initializes Bootstrap's JS client-side, and sets up **SSR-safe
dark mode** (no flash).

## Install

```bash
npm i @colorlib/adminlte-nuxt @colorlib/adminlte-vue bootstrap
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@colorlib/adminlte-nuxt'],
  adminlte: {
    defaults: {
      sidebarTheme: 'dark',
      fixedHeader: true,
      fixedSidebar: true,
      initialColorMode: 'auto',
      enableSidebarPersistence: false,
    },
  },
  // icons + sidebar scrollbar CSS the library doesn't bundle
  css: ['bootstrap-icons/font/bootstrap-icons.css', 'overlayscrollbars/overlayscrollbars.css'],
})
```

Components (`<LteDashboardLayout>`, `<LteCard>`, …) and composables (`useSidebar`,
`useColorMode`, …) are then available everywhere without imports. Read the layout defaults at
runtime with `useAdminlteConfig()`.

## Options

| Option | Default | Description |
| --- | --- | --- |
| `prefix` | `'Lte'` | Component name prefix used for auto-registration. |
| `components` | `true` | Auto-register all components globally. |
| `composables` | `true` | Auto-import the composables. |
| `css` | `true` | Inject `@colorlib/adminlte-vue/css`. |
| `bootstrap` | `true` | Load Bootstrap's JS bundle client-side. |
| `themeScript` | `true` | Inject a blocking head script that sets `data-bs-theme` before first paint (avoids FOUC). |
| `defaults` | see config | Layout/theme defaults, surfaced via `useAdminlteConfig()`. |

## How SSR-safe theming works

A small blocking inline `<head>` script reads `localStorage['lte-theme']` (falling back to the OS
preference) and sets `data-bs-theme` on `<html>` **before the page paints** — so dark-mode users
never see a white flash. The `useColorMode` composable owns reactive updates after hydration.

MIT licensed.
