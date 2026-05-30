<script setup lang="ts">
import { docsMenu } from '~/lib/docsMenu'
</script>

<template>
  <DemoLayout :menu-items="docsMenu" body-class="docs-page">
    <slot />
  </DemoLayout>
</template>
