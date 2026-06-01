# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`adminlte-vue` — an **AdminLTE 4 / Bootstrap 5.3** admin dashboard for **Vue 3 & Nuxt**. It is a
faithful port of the official React (`adminlte-react`) and Laravel (`adminlte-laravel`) editions.

This is a **pnpm monorepo** (`pnpm-workspace.yaml` → `packages/*`, `apps/*`):

- **`packages/adminlte-vue`** — the publishable, **framework-agnostic** Vue 3 component library
  (works in any Vite / Nuxt / Vue 3 app). Built with Vite library mode → ESM + `.d.ts`.
- **`packages/nuxt`** (`@adminlte/nuxt`) — a thin Nuxt module that auto-registers the components,
  auto-imports the composables, injects the CSS, initializes Bootstrap's JS client-side, and adds an
  SSR-safe color-mode head script. Built with `@nuxt/module-builder`.
- **`apps/demo`** — a Nuxt 4 demo that dogfoods the library + module via `workspace:*`. **It is the
  pristine 1:1 clone of the official AdminLTE demo (incl. 26 docs pages) — keep it that way; do not
  refactor its pages.** Uses its own `DemoLayout`.
- **`apps/docs`** (`adminlte-docs`) — the documentation site (Nuxt 4 + **@nuxt/content v3**,
  better-sqlite3). Markdown lives in `content/**` (numeric-prefixed for order; `section` front-matter
  drives the sidebar grouping); a custom docs layout provides header/search/color-mode, a
  section-grouped sidebar, a TOC, and reading-order prev/next (via `useDocsPages`). Documents the
  Vue/Nuxt port itself. Run with `pnpm dev:docs` / `pnpm build:docs`.

**Correctness gates** (all must pass): `pnpm --filter adminlte-vue type-check` (`vue-tsc --noEmit`),
`pnpm --filter adminlte-vue test` (Vitest — jsdom + @vue/test-utils), `pnpm lint` (ESLint 9 flat
config over `packages/*/src`; `apps/**` excluded), `pnpm build:demo`, and `pnpm build:docs`.

## Commands

From the repo root:

```bash
pnpm install              # install all workspace deps
pnpm build                # build packages/* in dependency order (lib → nuxt module)
pnpm build:demo           # production build of the demo (the strongest SSR/hydration check)
pnpm dev                  # parallel watch of all packages
pnpm dev:demo             # run the Nuxt demo (nuxi dev)
pnpm type-check           # type-check every package
```

Per package:

```bash
pnpm --filter adminlte-vue build        # vite build (ESM + dts + copy-css)
pnpm --filter adminlte-vue dev          # vite build --watch
pnpm --filter adminlte-vue type-check   # vue-tsc --noEmit  ← primary library gate
pnpm --filter @adminlte/nuxt build      # nuxt-module-build
pnpm --filter @adminlte/nuxt dev        # nuxt-module-build --stub (live src in the demo)
```

The demo consumes the library's built `dist/`. After editing library source, rebuild it (or keep
`pnpm --filter adminlte-vue dev` running) before the demo reflects the change. To verify end to end:
`pnpm build:demo` then `node apps/demo/.output/server/index.mjs`.

## The build pipeline

**Library (`packages/adminlte-vue`, Vite library mode — `vite.config.ts`):**

1. `@vitejs/plugin-vue` compiles `.vue` SFCs (`<script setup lang="ts">`). **Do not switch to
   tsup/esbuild** — esbuild can't compile SFCs (that's why the React port could use tsup and we
   can't).
2. `vite-plugin-dts` (backed by `vue-tsc`) emits the `.d.ts` tree. It globs **`src/**`** only —
   ambient module declarations must live in `src/shims.d.ts`, **not** root `env.d.ts` (which the dts
   program doesn't see).
3. A `closeBundle` hook copies `admin-lte/dist/css/adminlte.css` (+ `.rtl.css`) → `dist/css/`
   (exposed as the `./css` and `./css/rtl` exports). Mirrors the React port's `copy-css` step.

Output is **ESM-only** with **two entries**: `index` (`.`) and `plugins` (`./plugins`). The split
keeps the heavy plugin libs out of the default import.

> **Gotcha — `build.minify: false`.** Vite lib-mode esbuild minification produced a duplicate-
> identifier collision in a shared chunk (`LteTomSelect`). Libraries should ship readable ESM and let
> the consuming app minify, so minify is disabled. Keep it off.

Heavy plugin libs (`apexcharts`, `tabulator-tables`, `quill`, `flatpickr`, `tom-select`,
`sortablejs`, `jsvectormap`, `overlayscrollbars`, `@fullcalendar/*`) plus `vue`/`bootstrap` are
`external` in `rollupOptions` and declared **optional** `peerDependencies` — never bundled.

## Architecture

### State = composables + provide/inject (no Pinia)
This is the Vue analog of the React port's Context + hooks. **`LteDashboardLayout` is the single
provider host**: in `setup()` it calls `provideSidebar()`, `provideColorMode()`,
`provideCommandPalette()`, and installs `useLteBehaviors()` + `useAccessibility()`. Descendants
(`LteTopbar`, `LteSidebar`, `LteColorModeToggle`, …) consume via `useSidebar()` / `useColorMode()` /
`useCommandPalette()`, which `inject` and throw a clear error if used outside the layout. Injection
keys are module-singleton `Symbol`s in `src/composables/keys.ts` — **this is why the library is
ESM-only** (a dual ESM/CJS build could duplicate the Symbols and break injection).

Per-component state (`useCardWidget`, `useFullscreen`, `useDirectChat`, treeview open-state) is
local, not provided.

### SSR-safety rules (the crux — don't break these)
Every browser-API access (`window`, `document`, `localStorage`, `matchMedia`) is isolated inside
`onMounted` / `watchEffect` / event handlers, never at module top level or synchronously in `setup`.
Specific patterns:

- **Color mode** writes `data-bs-theme` on `<html>` and persists the preference under the
  **`lte-theme`** localStorage key. To avoid a flash, `@adminlte/nuxt` injects a **blocking inline
  head script** (the `themeScript` option) that sets the attribute before first paint;
  `useColorMode` only owns reactive updates after hydration. The toggle glyph is rendered under
  `<ClientOnly>` in the demo.
- **Sidebar collapse** persists (opt-in, default off) under **`lte.sidebar.state`**. Body layout
  classes (`layout-fixed`, `sidebar-expand-lg`, `sidebar-collapse`, `sidebar-mini`, …) are toggled on
  `document.body` from a `watchEffect` inside `provideSidebar` — `<body>` lives **outside** the Vue
  app tree, so this is hydration-safe (no class-mismatch warnings).
- **Window size** for the push-menu breakpoint starts as `null` (treated as desktop) so SSR renders
  deterministically; the resize listener attaches in `onMounted`.

### Single menu structure drives nav + command palette
`src/types/menu.ts` defines `MenuNode` — a discriminated union of `header | item | group` (groups
nest `MenuNode[]`). The same array feeds the recursive `LteSidebarNavItem` tree **and**
`flattenMenuToCommands()` for the ⌘K palette. The recursive item self-references in its own template
(Vue supports recursive SFCs by filename).

### Routing decoupling
The core library is framework-agnostic, so it takes a **`currentPath`** prop (active-link detection)
and a **`linkComponent`** prop (default `'a'`) instead of importing a router. The demo passes
`useRoute().path` and `resolveComponent('NuxtLink')`, and a `navigate` callback (`navigateTo`) for the
command palette.

### Dynamic-import plugin pattern
Heavy libs are **never** statically imported. Each wrapper in `src/plugins/*.vue` does
`await import(...)` inside `onMounted`, guards `if (!el.value) return` (component may unmount before
the import resolves), and destroys the instance in `onBeforeUnmount`. **`LteApexChart.vue` is the
reference implementation.** In the demo, wrap these components in **`<ClientOnly>`** with a
`#fallback`. Consumers install the matching lib as their own dep + load its CSS.

### Nuxt module (`packages/nuxt/src/module.ts`)
`defineNuxtModule` with `configKey: 'adminlte'`. It: pushes `adminlte-vue` into `build.transpile`
(mandatory — SFC ESM breaks SSR externalization otherwise); adds `bootstrap`/`@popperjs/core` to
`vite.optimizeDeps.include`; auto-registers components via `addComponent({ export, filePath:
'adminlte-vue' | 'adminlte-vue/plugins' })`; auto-imports composables via `addImports`; pushes
`adminlte-vue/css` into `nuxt.options.css`; injects the theme head script; and adds a `.client`
plugin that imports `bootstrap` (its data-API delegation powers dropdowns/modals/offcanvas).

### Demo (Nuxt 4, `apps/demo`)
Nuxt 4 `app/` srcDir convention — pages in `app/pages`, layouts in `app/layouts`. Components and
composables are **auto-imported by the module** (no imports in pages). Route → layout is chosen with
`definePageMeta({ layout })`: dashboard pages use the default layout (`DemoLayout` wraps
`LteDashboardLayout`); `examples/*` use `layout: 'auth'`; the `layout/*` variant pages use
`layout: false` and render `<DemoLayout :fixed-* …>` directly to showcase a flag.

## Code style

- `<script setup lang="ts">` SFCs. **`Lte` prefix** on every component (matches AdminLTE's `lte.*`
  runtime namespace and satisfies Vue's multi-word-name rule). Composables are unprefixed `useX`.
- **No `<style scoped>`** — styling comes entirely from the prebuilt AdminLTE CSS; components are
  class-only. (The one exception, `LteCommandPalette`, uses inline `:style` objects to avoid emitting
  a component CSS file.)
- `verbatimModuleSyntax` is on → use `import type` for type-only imports.
- Use the `cn()` / `biClass()` helpers in `src/lib/class-name.ts` for class composition.

### Adding a component (three touch-points)
1. Create the SFC under the right folder: `src/layout` / `widget` / `form` / `tool` (core) or
   `src/plugins` (wraps a 3rd-party lib).
2. Export it from the barrel: `src/index.ts` (and add it to the `components` map so `app.use()`
   registers it globally) — or `src/plugins/index.ts` for a plugin wrapper.
3. Add its name to `CORE_COMPONENTS` (or `PLUGIN_COMPONENTS`) in `packages/nuxt/src/module.ts` so the
   Nuxt module auto-registers it.

Add public types to `src/types/*` (re-exported by `src/types/index.ts`). After any library change,
run `pnpm --filter adminlte-vue type-check` and `pnpm build:demo`.
