<script setup lang="ts">
import { computed } from 'vue'
import type { BootstrapTheme } from '../types/theme'
import { biClass, cn } from '../lib/class-name'
import { useCardWidget } from '../composables/use-card-widget'
import { treeviewTransition } from '../composables/use-treeview'

// Reactive props destructure (Vue 3.5) — destructured names stay reactive when
// read inside computed getters / the template.
const {
  title,
  icon,
  theme,
  variant = 'default',
  gradient,
  collapsible,
  defaultCollapsed,
  removable,
  maximizable,
  bodyClass,
  headerClass,
  footerClass,
} = defineProps<{
  title?: string
  icon?: string
  theme?: BootstrapTheme
  /**
   * Color treatment when `theme` is set:
   * - 'default' → colored header (`card-{theme}`)
   * - 'outline' → colored top border (`card-outline card-{theme}`)
   * - 'solid'   → fully colored card (`text-bg-{theme}`)
   */
  variant?: 'default' | 'outline' | 'solid'
  /** Add `bg-gradient` to the card (most visible with `variant: 'solid'`). */
  gradient?: boolean
  collapsible?: boolean
  defaultCollapsed?: boolean
  removable?: boolean
  maximizable?: boolean
  bodyClass?: string
  headerClass?: string
  footerClass?: string
}>()

const { isCollapsed, isMaximized, isRemoved, toggleCollapse, toggleMaximize, remove } =
  useCardWidget({ defaultCollapsed })

const cardClass = computed(() => {
  let base = 'card'
  if (theme) {
    if (variant === 'outline') base = `card card-outline card-${theme}`
    else if (variant === 'solid') base = `card text-bg-${theme}`
    else base = `card card-${theme}`
  }
  return cn(
    base,
    gradient && theme && 'bg-gradient',
    isCollapsed.value && 'collapsed-card',
    isMaximized.value && 'maximized-card'
  )
})

const hasTools = computed(() => collapsible || removable || maximizable)
const transition = treeviewTransition(300)
</script>

<template>
  <div v-if="!isRemoved" :class="cardClass">
    <div
      v-if="$slots.header || title || hasTools || $slots.title || $slots.tools"
      :class="cn('card-header', headerClass)"
    >
      <slot name="header">
        <h3 class="card-title">
          <slot name="title">
            <i v-if="icon" :class="cn(biClass(icon), 'me-1')"></i>{{ title }}
          </slot>
        </h3>
        <div class="card-tools">
          <slot name="tools" />
          <button
            v-if="collapsible"
            type="button"
            class="btn btn-tool"
            :title="isCollapsed ? 'Expand' : 'Collapse'"
            @click="toggleCollapse"
          >
            <i :class="['bi', isCollapsed ? 'bi-plus-lg' : 'bi-dash-lg']"></i>
          </button>
          <button
            v-if="maximizable"
            type="button"
            class="btn btn-tool"
            title="Maximize"
            @click="toggleMaximize"
          >
            <i :class="['bi', isMaximized ? 'bi-fullscreen-exit' : 'bi-fullscreen']"></i>
          </button>
          <button v-if="removable" type="button" class="btn btn-tool" title="Remove" @click="remove">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </slot>
    </div>

    <Transition v-bind="transition">
      <div v-show="!isCollapsed">
        <div :class="cn('card-body', bodyClass)">
          <slot />
        </div>
        <div v-if="$slots.footer" :class="cn('card-footer', footerClass)">
          <slot name="footer" />
        </div>
      </div>
    </Transition>
  </div>
</template>
