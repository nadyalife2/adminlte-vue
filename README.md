# AdminLTE Vue

[AdminLTE 4](https://adminlte.io) for **Vue 3** and **Nuxt** — a faithful port of the
canonical AdminLTE template, mirroring the structure of the official React (`adminlte-react`)
and Laravel (`adminlte-laravel`) ports.

This is a pnpm monorepo containing three packages:

| Package | Path | Description |
| --- | --- | --- |
| [`adminlte-vue`](./packages/adminlte-vue) | `packages/adminlte-vue` | Framework-agnostic Vue 3 component library (works in any Vite / Nuxt / Vue 3 app). |
| [`@adminlte/nuxt`](./packages/nuxt) | `packages/nuxt` | Thin Nuxt module: auto-imports components & composables, injects CSS, initializes Bootstrap, and handles SSR-safe theming. |
| `demo` | `apps/demo` | Nuxt 4 demo app showcasing every component and page. |

## Quick start

```bash
pnpm install
pnpm build        # build the library + nuxt module (in dependency order)
pnpm dev:demo     # run the demo app
```

## Architecture

- **State** is managed with composables + `provide`/`inject` (mirrors the React port's
  Context + hooks — no Pinia dependency).
- **Styling** comes from the prebuilt `admin-lte` npm package (Bootstrap 5.3 + AdminLTE CSS);
  the library ships no SCSS of its own.
- **Dark mode** uses Bootstrap's native `[data-bs-theme]` attribute on `<html>`.
- **Interactive behaviors** (push-menu, treeview, card-widget, fullscreen, direct-chat) are
  reimplemented as composables, replacing AdminLTE's vanilla-JS plugins.

See [`packages/adminlte-vue/README.md`](./packages/adminlte-vue/README.md) for the component
API and [`packages/nuxt/README.md`](./packages/nuxt/README.md) for Nuxt usage.

## License

MIT
