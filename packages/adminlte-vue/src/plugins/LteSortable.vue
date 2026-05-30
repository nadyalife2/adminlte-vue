<script setup lang="ts" generic="T">
import { ref } from 'vue'
import type { PropType } from 'vue'
import type { Options, SortableEvent } from 'sortablejs'
import { useSortable } from '../composables/use-sortable'

// Runtime prop declaration (see LteCalendar): emits a runtime `type: Array` so
// the auto-imported v-model resolves to `T[]` rather than `never[]`.
const props = defineProps({
  /** v-model — the ordered list. */
  modelValue: { type: Array as PropType<T[]>, default: () => [] },
  tag: { type: String, default: 'div' },
  options: { type: Object as PropType<Options>, default: undefined },
})
const emit = defineEmits<{ 'update:modelValue': [value: T[]]; end: [event: SortableEvent] }>()

const el = ref<HTMLElement | null>(null)

useSortable(el, {
  options: {
    animation: 150,
    ...props.options,
    onEnd: (event: SortableEvent) => {
      const { oldIndex, newIndex } = event
      if (oldIndex != null && newIndex != null && oldIndex !== newIndex) {
        const next = [...props.modelValue]
        next.splice(newIndex, 0, next.splice(oldIndex, 1)[0]!)
        emit('update:modelValue', next)
      }
      emit('end', event)
    },
  },
})
</script>

<template>
  <component :is="tag" ref="el">
    <slot />
  </component>
</template>
