<script setup lang="ts">
import { computed } from 'vue'

// Renders only when @nuxtjs/i18n is present (otherwise $i18n is undefined).
interface I18nLocale {
  code: string
  name?: string
}
const nuxtApp = useNuxtApp() as unknown as {
  $i18n?: {
    locale: { value: string }
    locales: { value: I18nLocale[] }
    setLocale: (code: string) => Promise<void> | void
  }
}
const i18n = nuxtApp.$i18n
const locales = computed<I18nLocale[]>(() => i18n?.locales?.value ?? [])
const current = computed(() => i18n?.locale?.value)
function select(code: string) {
  i18n?.setLocale(code)
}
</script>

<template>
  <li v-if="i18n && locales.length > 1" class="nav-item dropdown">
    <a href="#" class="nav-link dropdown-toggle" title="Language" data-bs-toggle="dropdown" @click.prevent>
      <i class="bi bi-translate" />
    </a>
    <ul class="dropdown-menu dropdown-menu-end">
      <li v-for="l in locales" :key="l.code">
        <a
          href="#"
          class="dropdown-item"
          :class="{ active: l.code === current }"
          @click.prevent="select(l.code)"
        >
          {{ l.name ?? l.code }}
        </a>
      </li>
    </ul>
  </li>
</template>
