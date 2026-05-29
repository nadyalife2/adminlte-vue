<div align="center">

# AdminLTE Vue

**[AdminLTE 4](https://adminlte.io) + Bootstrap 5.3 admin dashboard for Vue 3 & Nuxt.**

45+ typed components · composables (no Pinia) · dark mode · ⌘K command palette · SSR-safe theming

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Vue 3](https://img.shields.io/badge/Vue-3.5+-42b883.svg)](https://vuejs.org)
[![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82.svg)](https://nuxt.com)
[![Bootstrap 5.3](https://img.shields.io/badge/Bootstrap-5.3-7952B3.svg)](https://getbootstrap.com)

</div>

A faithful Vue/Nuxt port of [AdminLTE 4](https://github.com/ColorlibHQ/AdminLTE), mirroring the
official [React](https://github.com/ColorlibHQ/adminlte-react) and
[Laravel](https://github.com/ColorlibHQ/adminlte-laravel) editions. Use the framework-agnostic
component library in any Vue 3 app, or drop in the Nuxt module for zero-config auto-imports and
SSR-safe theming.

## Packages

This is a pnpm monorepo:

| Package | Path | Description |
| --- | --- | --- |
| [`adminlte-vue`](./packages/adminlte-vue) | `packages/adminlte-vue` | Framework-agnostic Vue 3 component library — works in any Vite / Nuxt / Vue 3 app. |
| [`@adminlte/nuxt`](./packages/nuxt) | `packages/nuxt` | Nuxt module: auto-imports, CSS injection, Bootstrap init, SSR-safe dark mode. |
| `demo` | `apps/demo` | Nuxt 4 demo app showcasing every component and page. |

## Features

- 🧩 **45+ components** across layout, widgets, forms, and tools — all typed with `<script setup lang="ts">`.
- 🪝 **Composables, not jQuery** — `useSidebar`, `useColorMode`, `useCardWidget`, `useFullscreen`, … via `provide`/`inject`.
- 🌙 **Native dark mode** through Bootstrap's `data-bs-theme`, with a blocking head script so there's no flash on SSR.
- ⌘ **Command palette** (⌘K / Ctrl+K) generated from your menu.
- 📊 **Plugin wrappers** — ApexCharts, Tabulator, Quill, Flatpickr, Tom Select, FullCalendar, jsVectorMap, SortableJS — lazy-loaded and SSR-safe.
- ♿ **Accessibility** — skip links, live region, reduced-motion support out of the box.
- 🎨 **No SCSS to maintain** — styling comes from the prebuilt `admin-lte` package.

## Quick start — Nuxt

```bash
npm i @adminlte/nuxt adminlte-vue bootstrap
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@adminlte/nuxt'],
  adminlte: {
    defaults: { sidebarTheme: 'dark', fixedHeader: true, fixedSidebar: true, initialColorMode: 'auto' },
  },
  css: ['bootstrap-icons/font/bootstrap-icons.css', 'overlayscrollbars/overlayscrollbars.css'],
})
```

```vue
<!-- app/layouts/default.vue -->
<script setup lang="ts">
import type { MenuNode } from 'adminlte-vue'
const route = useRoute()
const NuxtLink = resolveComponent('NuxtLink')
const menu: MenuNode[] = [
  { type: 'item', text: 'Dashboard', href: '/', icon: 'bi-speedometer' },
  { type: 'group', text: 'Pages', icon: 'bi-files', children: [
    { type: 'item', text: 'Profile', href: '/profile' },
  ] },
]
</script>

<template>
  <LteDashboardLayout :menu-items="menu" :current-path="route.path" :link-component="NuxtLink">
    <slot />
  </LteDashboardLayout>
</template>
```

```vue
<!-- app/pages/index.vue -->
<template>
  <LteAppContent title="Dashboard">
    <div class="row">
      <div class="col-lg-3 col-6"><LteSmallBox title="150" text="New Orders" theme="primary" icon="bi-bag" url="#" /></div>
    </div>
    <LteCard title="Welcome" collapsible>It works!</LteCard>
  </LteAppContent>
</template>
```

Components and composables are auto-imported by the module — no `import` statements needed.

## Quick start — plain Vue 3 (Vite)

```bash
npm i adminlte-vue bootstrap
```

```ts
// main.ts
import { createApp } from 'vue'
import AdminLteVue from 'adminlte-vue'
import 'adminlte-vue/css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap' // dropdowns/modals/offcanvas
import App from './App.vue'

createApp(App).use(AdminLteVue).mount('#app')
```

Pass `:current-path` from your router and `:link-component="RouterLink"` to `<LteDashboardLayout>`.

## Components

**Layout** — `LteDashboardLayout`, `LteAuthLayout`, `LteAppContent`, `LteSidebar`,
`LteSidebarBrand`, `LteSidebarNav`, `LteSidebarNavItem`, `LteSidebarOverlay`, `LteTopbar`,
`LteFooter`, `LteColorModeToggle`, `LteFullscreenToggle`

**Widgets** — `LteCard`, `LteSmallBox`, `LteInfoBox`, `LteAlert`, `LteCallout`, `LteProgress`,
`LteProgressGroup`, `LteTimeline`, `LteRatings`, `LteProfileCard`, `LteDescriptionBlock`,
`LteDirectChat`, `LteNavMessages`, `LteNavNotifications`, `LteNavTasks`, `LteToast`, `LteTabs`,
`LteTab`, `LteAccordion`, `LteAccordionItem`, `LteBreadcrumb`, `LteCommandPalette`

**Forms** — `LteButton`, `LteInput`, `LteTextarea`, `LteSelect`, `LteInputSwitch`, `LteInputColor`,
`LteInputFile`, `LteInputFlatpickr`, `LteInputTomSelect`

**Tools** — `LteModal`, `LteWizard`, `LteWizardStep`

**Plugins** (`adminlte-vue/plugins`) — `LteApexChart`, `LteSparklineChart`, `LteDatatable`,
`LteEditor`, `LteFlatpickr`, `LteTomSelect`, `LteCalendar`, `LteVectorMap`, `LteSortable`,
`LteKanban`

## Composables

| Composable | Purpose |
| --- | --- |
| `useSidebar()` | Sidebar collapse / mobile-overlay / mini state + `toggle/collapse/expand`. |
| `useColorMode()` | `colorMode` / `resolvedMode` / `setColorMode` (light · dark · auto). |
| `useCardWidget()` | Per-card collapse / maximize / remove. |
| `useFullscreen()` | Fullscreen API wrapper. |
| `useDirectChat()` | Direct-chat contacts pane toggle. |
| `useSortable(el, opts)` | SortableJS on a ref (lazy-loaded). |
| `useCommandPalette()` | Open/close the ⌘K palette. |
| `treeviewTransition(speed)` | Height transition hooks for the sidebar treeview. |

`useSidebar` / `useColorMode` / `useCommandPalette` are provided by `<LteDashboardLayout>`.

## Dark mode

Dark mode toggles Bootstrap's `data-bs-theme` on `<html>` and persists the preference under the
`lte-theme` localStorage key. Under Nuxt, the module injects a blocking inline head script that sets
the attribute before first paint — **no flash of the wrong theme**. Add `<LteColorModeToggle>` (it's
already in `<LteTopbar>`) for a light/dark/auto switcher.

## Development

```bash
pnpm install
pnpm build        # build the library + Nuxt module (dependency order)
pnpm dev:demo     # run the demo at http://localhost:3000
```

See [CLAUDE.md](./CLAUDE.md) for the full architecture, build pipeline, and conventions.

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Same matrix as Bootstrap 5.3.

## Contributing

Issues and PRs welcome. After changes, run `pnpm --filter adminlte-vue type-check` and
`pnpm build:demo` (the SSR/hydration gate). See [CLAUDE.md](./CLAUDE.md) for where things live and
the three touch-points for adding a component.

## License

[MIT](./LICENSE) — like AdminLTE itself.

## Resources

- [AdminLTE](https://adminlte.io) · [GitHub](https://github.com/ColorlibHQ/AdminLTE)
- [adminlte-react](https://github.com/ColorlibHQ/adminlte-react) · [adminlte-laravel](https://github.com/ColorlibHQ/adminlte-laravel)
- [Vue 3](https://vuejs.org) · [Nuxt](https://nuxt.com) · [Bootstrap 5.3](https://getbootstrap.com)
