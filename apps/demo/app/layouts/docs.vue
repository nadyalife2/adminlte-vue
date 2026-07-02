<script setup lang="ts">
// Docs-site styles live in a separate stylesheet since core 4.1.0 —
// applications never need it, so only this layout loads it (Nuxt inlines
// the layout's styles into the SSR payload and code-splits them on the
// client, so app pages never pay for it).
import '@adminlte/vue/css/docs'
import { docsMenu } from '~/lib/docsMenu'
</script>

<template>
  <DemoLayout :menu-items="docsMenu" body-class="docs-page">
    <slot />
  </DemoLayout>
</template>
