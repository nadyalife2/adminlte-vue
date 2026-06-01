---
title: Introduction
navTitle: Introduction
description: AdminLTE 4 for Vue 3 & Nuxt — a framework-agnostic component library, a Nuxt module, and a dashboard layer.
section: Getting started
icon: bi-rocket-takeoff
order: 1
---

**adminlte-vue** is a faithful port of [AdminLTE 4](https://adminlte.io) (Bootstrap 5.3) for
**Vue 3 & Nuxt**. It ships as three layered pieces so you can adopt as much or as little as you need:

## The packages

| Package | What it is |
| --- | --- |
| **`adminlte-vue`** | The framework-agnostic Vue 3 component library — works in any Vite / Vue 3 / Nuxt app. |
| **`@adminlte/nuxt`** | A thin Nuxt module: auto-registers the components, auto-imports the composables, injects the CSS + an SSR-safe color-mode script. |
| **`@adminlte/dashboard`** | A Nuxt **layer** — `extends` it to inherit a working admin shell (layouts, a cookie-backed auth store, RBAC, mock auth API). |

## Why three layers?

- Use **`adminlte-vue`** directly for full control in any Vue 3 app.
- Add **`@adminlte/nuxt`** in a Nuxt app to remove all the wiring boilerplate.
- `extends` **`@adminlte/dashboard`** when you want auth + a ready-made dashboard shell out of the box.

## Highlights

- **SSR-safe** — every browser API is isolated to `onMounted`/effects; no hydration mismatches.
- **Color mode** with a blocking head script (no flash of the wrong theme).
- **Composables + provide/inject** for state (no Pinia required in the library).
- **Heavy plugins are dynamic-imported** (ApexCharts, FullCalendar, Tabulator, Quill, …) and stay out of the default bundle.

> Looking to get going fast? Jump to [Installation](/getting-started/installation).
