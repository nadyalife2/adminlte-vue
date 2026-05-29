# Changelog

All notable changes to **adminlte-vue** (the library, the `@adminlte/nuxt` module, and the demo)
are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

_No unreleased changes yet._

## [0.1.0] - 2026-05-29

Initial release — an AdminLTE 4 / Bootstrap 5.3 admin dashboard for Vue 3 and Nuxt, ported from the
React and Laravel editions.

### Added — `adminlte-vue` (core library)

#### Layout
- `LteDashboardLayout` — the application shell and single provider host. Provides the sidebar,
  color-mode, and command-palette state to all descendants, and wires the raw-markup behaviors and
  accessibility helpers. Props: `fixedHeader`, `fixedSidebar`, `fixedFooter`, `layoutFixed`,
  `sidebarMini`, `sidebarTheme`, `sidebarBreakpoint`, `initialColorMode`, `dir`,
  `enableSidebarPersistence`, `currentPath`, `linkComponent`, `accordion`, plus topbar/footer/logo slots.
- `LteAuthLayout` — standalone login/register layout. `LteAppContent` — page wrapper with title and breadcrumbs.
- Lower-level pieces: `LteSidebar`, `LteSidebarBrand`, `LteSidebarNav`, `LteSidebarNavItem`
  (recursive), `LteSidebarOverlay`, `LteTopbar`, `LteFooter`, `LteColorModeToggle`,
  `LteFullscreenToggle`.

#### Widgets
- `LteCard` (collapse / maximize / remove), `LteSmallBox`, `LteInfoBox`, `LteAlert`, `LteCallout`,
  `LteProgress`, `LteProgressGroup`, `LteTimeline`, `LteRatings`, `LteProfileCard`,
  `LteDescriptionBlock`, `LteDirectChat`, `LteNavMessages`, `LteNavNotifications`, `LteNavTasks`,
  `LteToast`, `LteTabs` / `LteTab`, `LteAccordion` / `LteAccordionItem`, `LteBreadcrumb`,
  `LteCommandPalette` (+ `flattenMenuToCommands`).

#### Forms
- `LteButton`, `LteInput`, `LteTextarea`, `LteSelect`, `LteInputSwitch`, `LteInputColor`,
  `LteInputFile` (all `v-model`), plus `LteInputFlatpickr` and `LteInputTomSelect`.

#### Tools
- `LteModal` (`v-model`, teleported, ESC/backdrop), `LteWizard` / `LteWizardStep`.

#### Plugins (`adminlte-vue/plugins`)
- `LteApexChart`, `LteSparklineChart`, `LteDatatable`, `LteEditor`, `LteFlatpickr`, `LteTomSelect`,
  `LteCalendar`, `LteVectorMap`, `LteSortable`, `LteKanban` — each lazy-loads its library via dynamic
  `import()` and is SSR-safe.

#### Composables (provide/inject)
- `useSidebar`, `useColorMode`, `useCardWidget`, `useFullscreen`, `useDirectChat`, `useSortable`,
  `useCommandPalette`, `useTreeviewRegistry` / `treeviewTransition`, plus internal `useLteBehaviors`
  and `useAccessibility`.

#### Types
- `MenuNode` discriminated union (`header | item | group`), `BootstrapTheme`, `ColorMode`,
  `BreakpointSize`, `TopbarUser`, `TimelineItem`, `NavMessage`/`NavNotification`/`NavTask`, and more.

#### Build / packaging
- Vite library build → **ESM-only** with `.d.ts` (via `vite-plugin-dts` + `vue-tsc`), two entries
  (`.` and `./plugins`), and `./css` + `./css/rtl` exports (prebuilt AdminLTE CSS copied at build).
- All heavy plugin libs + `vue`/`bootstrap` are externalized and declared optional peer dependencies.

### Added — `@adminlte/nuxt` (module)
- Auto-registers all components (prefix configurable), auto-imports the composables, injects
  `adminlte-vue/css`, and loads Bootstrap's JS bundle on the client.
- A blocking inline head script sets `data-bs-theme` before first paint (no FOUC).
- `defaults` option (mirrors the Laravel config) surfaced via `useAdminlteConfig()`.

### Added — demo (`apps/demo`)
- Nuxt 4 app with 54 pages: 3 dashboards, widgets, UI elements, forms, tables, profile/projects/
  calendar/kanban/invoice/chat/file-manager/settings/pricing/FAQ/error pages, mailbox, 8 layout
  variants, 5 auth screens, 8 plugin demos, docs, and a theme generator.

### Notes
- Dark mode uses Bootstrap's native `data-bs-theme`; persistence keys are `lte-theme` (color mode)
  and `lte.sidebar.state` (sidebar collapse, opt-in).
- Library JS ships only `dist/css/adminlte.css`; consumers provide Bootstrap Icons, OverlayScrollbars,
  fonts, and plugin CSS (see the demo's `nuxt.config.ts`).

[Unreleased]: https://github.com/ColorlibHQ/adminlte-vue/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/ColorlibHQ/adminlte-vue/releases/tag/v0.1.0
