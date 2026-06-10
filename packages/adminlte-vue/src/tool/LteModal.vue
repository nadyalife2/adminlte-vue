<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, useTemplateRef, watch } from 'vue'
import type { BootstrapTheme } from '../types/theme'
import { cn } from '../lib/class-name'

const props = defineProps<{
  title?: string
  size?: 'sm' | 'lg' | 'xl'
  theme?: BootstrapTheme
  centered?: boolean
  scrollable?: boolean
  staticBackdrop?: boolean
}>()
const emit = defineEmits<{ close: [] }>()

/** v-model — open/closed. */
const model = defineModel<boolean>({ default: false })

const modalEl = useTemplateRef('modalEl')

const dialogClass = computed(() =>
  cn(
    'modal-dialog',
    props.size && `modal-${props.size}`,
    props.centered && 'modal-dialog-centered',
    props.scrollable && 'modal-dialog-scrollable'
  )
)

function close() {
  model.value = false
  emit('close')
}
function onBackdrop() {
  if (!props.staticBackdrop) close()
}

// --- focus management: trap Tab inside the dialog, restore focus on close ---
const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), ' +
  'textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
let restoreFocusTo: HTMLElement | null = null

function focusables(): HTMLElement[] {
  if (!modalEl.value) return []
  return Array.from(modalEl.value.querySelectorAll<HTMLElement>(FOCUSABLE))
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    if (!props.staticBackdrop) close()
    return
  }
  if (e.key !== 'Tab' || !modalEl.value) return
  const items = focusables()
  if (items.length === 0) {
    e.preventDefault()
    modalEl.value.focus()
    return
  }
  const first = items[0]!
  const last = items[items.length - 1]!
  const current = document.activeElement
  if (e.shiftKey && (current === first || current === modalEl.value)) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && current === last) {
    e.preventDefault()
    first.focus()
  }
}

// Lock body scroll, install the key handler, and move focus while open.
watch(model, (open) => {
  if (typeof document === 'undefined') return
  document.body.classList.toggle('modal-open', open)
  if (open) {
    document.addEventListener('keydown', onKeydown)
    restoreFocusTo = document.activeElement as HTMLElement | null
    nextTick(() => (focusables()[0] ?? modalEl.value)?.focus())
  } else {
    document.removeEventListener('keydown', onKeydown)
    restoreFocusTo?.focus()
    restoreFocusTo = null
  }
})

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.body.classList.remove('modal-open')
  document.removeEventListener('keydown', onKeydown)
})

// --- fade: drive Bootstrap's own `.fade`/`.show` transition from JS hooks ---
// The library ships no CSS of its own, so a named <Transition> class would do
// nothing. `show` stays in the static template classes (a non-animated mount is
// still visible); the hooks strip it, force a reflow, and re-add it so
// Bootstrap's `.fade` rules animate. Durations match Bootstrap: the dialog
// transform transitions over .3s on enter, opacity over .15s on leave.
const FADE_IN_MS = 300
const FADE_OUT_MS = 150

function fadeTargets(wrapper: Element): HTMLElement[] {
  return Array.from(wrapper.querySelectorAll<HTMLElement>('.modal, .modal-backdrop'))
}
function onEnter(wrapper: Element, done: () => void) {
  const targets = fadeTargets(wrapper)
  for (const t of targets) t.classList.remove('show')
  void (wrapper as HTMLElement).offsetHeight
  for (const t of targets) t.classList.add('show')
  window.setTimeout(done, FADE_IN_MS)
}
function onLeave(wrapper: Element, done: () => void) {
  for (const t of fadeTargets(wrapper)) t.classList.remove('show')
  window.setTimeout(done, FADE_OUT_MS)
}
</script>

<template>
  <Teleport to="body">
    <Transition :css="false" @enter="onEnter" @leave="onLeave">
      <div v-if="model">
        <div
          ref="modalEl"
          class="modal fade show d-block"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          :aria-label="title || undefined"
          @mousedown.self="onBackdrop"
        >
          <div :class="dialogClass" role="document">
            <div class="modal-content">
              <div v-if="title || $slots.header || $slots.title" :class="cn('modal-header', theme && `text-bg-${theme}`)">
                <slot name="header">
                  <h5 class="modal-title"><slot name="title">{{ title }}</slot></h5>
                  <button type="button" class="btn-close" aria-label="Close" @click="close"></button>
                </slot>
              </div>
              <div class="modal-body">
                <slot />
              </div>
              <div v-if="$slots.footer" class="modal-footer">
                <slot name="footer" :close="close" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-backdrop fade show"></div>
      </div>
    </Transition>
  </Teleport>
</template>
