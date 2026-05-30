<script setup lang="ts">
import { computed } from 'vue'
import type { BootstrapTheme } from '../types/theme'
import { biClass, cn } from '../lib/class-name'

const props = withDefaults(
  defineProps<{
    title?: string | number
    text?: string
    icon?: string
    theme?: BootstrapTheme
    iconTheme?: BootstrapTheme
    /**
     * - `default` — white box with a colored icon chip.
     * - `solid`   — the whole box is colored (`text-bg-{theme}`), plain icon.
     */
    variant?: 'default' | 'solid'
    /** Adds `bg-gradient` (only meaningful with `variant="solid"`). */
    gradient?: boolean
    /** Extra classes on the `.info-box` root (e.g. shadow utilities). */
    boxClass?: string
    /** Small unit rendered after the number, e.g. `%`. */
    unit?: string
    progress?: number
    progressText?: string
  }>(),
  { theme: 'info', variant: 'default' }
)

const boxClasses = computed(() =>
  cn(
    'info-box',
    props.variant === 'solid' && `text-bg-${props.theme}`,
    props.variant === 'solid' && props.gradient && 'bg-gradient',
    props.boxClass
  )
)
const iconClass = computed(() =>
  props.variant === 'solid'
    ? 'info-box-icon'
    : `info-box-icon text-bg-${props.iconTheme ?? props.theme} shadow-sm`
)
// In a solid (already-colored) box the progress bar keeps the default fill.
const barClass = computed(() =>
  props.variant === 'solid' ? 'progress-bar' : `progress-bar bg-${props.theme}`
)
</script>

<template>
  <div :class="boxClasses">
    <span v-if="icon" :class="iconClass">
      <i :class="biClass(icon)" aria-hidden="true"></i>
    </span>
    <div class="info-box-content">
      <span v-if="text" class="info-box-text">{{ text }}</span>
      <span v-if="title != null" class="info-box-number">{{ title }} <small v-if="unit">{{ unit }}</small></span>
      <slot />
      <template v-if="progress != null">
        <div class="progress">
          <div :class="barClass" :style="{ width: `${progress}%` }"></div>
        </div>
        <span v-if="progressText" class="progress-description">{{ progressText }}</span>
      </template>
    </div>
  </div>
</template>
