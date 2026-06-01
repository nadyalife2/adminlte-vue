<script setup lang="ts">
import { computed } from 'vue'

// Lives in a Bootstrap offcanvas toggled from the topbar. Drives the library's
// color mode + the persisted sidebar theme.
const { colorMode, setColorMode } = useColorMode()
const { sidebarTheme, setSidebarTheme } = useThemeCustomizer()
const tr = useTr()

const modes = computed(() => [
  { value: 'light', icon: 'bi-sun', label: tr('customizer.light', 'Light') },
  { value: 'dark', icon: 'bi-moon-stars', label: tr('customizer.dark', 'Dark') },
  { value: 'auto', icon: 'bi-circle-half', label: tr('customizer.auto', 'Auto') },
] as const)
const current = computed(() => colorMode.value)
</script>

<template>
  <div id="themeCustomizer" class="offcanvas offcanvas-end" tabindex="-1" aria-labelledby="themeCustomizerLabel">
    <div class="offcanvas-header border-bottom">
      <h5 id="themeCustomizerLabel" class="offcanvas-title">
        <i class="bi bi-palette me-2" />{{ tr('customizer.title', 'Customize') }}
      </h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div class="offcanvas-body">
      <h6 class="text-secondary text-uppercase small">{{ tr('customizer.colorMode', 'Color mode') }}</h6>
      <div class="btn-group w-100 mb-4" role="group" aria-label="Color mode">
        <button
          v-for="m in modes"
          :key="m.value"
          type="button"
          class="btn"
          :class="current === m.value ? 'btn-primary' : 'btn-outline-secondary'"
          @click="setColorMode(m.value)"
        >
          <i class="bi me-1" :class="m.icon" />{{ m.label }}
        </button>
      </div>

      <h6 class="text-secondary text-uppercase small">{{ tr('customizer.sidebar', 'Sidebar') }}</h6>
      <div class="btn-group w-100" role="group" aria-label="Sidebar theme">
        <button
          type="button"
          class="btn"
          :class="sidebarTheme === 'dark' ? 'btn-primary' : 'btn-outline-secondary'"
          @click="setSidebarTheme('dark')"
        >
          <i class="bi bi-moon-stars me-1" />{{ tr('customizer.dark', 'Dark') }}
        </button>
        <button
          type="button"
          class="btn"
          :class="sidebarTheme === 'light' ? 'btn-primary' : 'btn-outline-secondary'"
          @click="setSidebarTheme('light')"
        >
          <i class="bi bi-sun me-1" />{{ tr('customizer.light', 'Light') }}
        </button>
      </div>

      <p class="text-secondary small mt-4 mb-0">{{ tr('customizer.saved', 'Your choices are saved and restored on your next visit.') }}</p>
    </div>
  </div>
</template>
