<script setup lang="ts">
const { theme, isDark, toggle } = useDocsTheme()

// SSR-applied from the cookie → no flash of the wrong theme.
useHead({ htmlAttrs: { 'data-bs-theme': () => theme.value } })
</script>

<template>
  <div class="docs-shell">
    <header class="docs-header navbar">
      <div class="container-fluid px-3 px-lg-4 h-100 d-flex align-items-center">
        <NuxtLink to="/" class="navbar-brand">
          <span class="docs-brand-badge"><i class="bi bi-hexagon-fill" /></span>
          AdminLTE Vue
          <span class="badge text-bg-secondary fw-normal ms-1" style="font-size: 0.62rem">docs</span>
        </NuxtLink>

        <div class="ms-auto d-flex align-items-center gap-1">
          <DocsSearch />
          <button
            type="button"
            class="btn btn-sm btn-link text-body"
            :title="isDark ? 'Switch to light' : 'Switch to dark'"
            @click="toggle"
          >
            <i class="bi" :class="isDark ? 'bi-sun' : 'bi-moon-stars'" />
          </button>
          <a
            href="https://github.com/ColorlibHQ/adminlte-vue"
            target="_blank"
            rel="noopener"
            class="btn btn-sm btn-link text-body"
            title="GitHub"
          >
            <i class="bi bi-github" />
          </a>
        </div>
      </div>
    </header>

    <div class="docs-body px-3 px-lg-4">
      <aside class="docs-sidebar">
        <DocsNav />
      </aside>
      <main class="docs-main">
        <slot />
      </main>
      <aside class="docs-rail">
        <DocsToc />
      </aside>
    </div>
  </div>
</template>
