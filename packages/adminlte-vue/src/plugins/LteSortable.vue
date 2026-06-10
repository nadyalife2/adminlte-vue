<script setup lang="ts" generic="T">
import { useTemplateRef } from 'vue'
import type { PropType } from 'vue'
import type { Options, SortableEvent } from 'sortablejs'
import { useSortable } from '../composables/use-sortable'

const props = defineProps({
  tag: { type: String, default: 'div' },
  options: { type: Object as PropType<Options>, default: undefined },
})
const emit = defineEmits<{ end: [event: SortableEvent] }>()

// Runtime `type: Array` (see LteCalendar): keeps the auto-imported v-model
// resolving to `T[]` rather than `never[]` under Volar.
/** v-model — the ordered list. */
const model = defineModel({ type: Array as PropType<T[]>, default: () => [] })

// Explicit generic: the ref sits on a dynamic `<component :is>`, so the
// element type can't be inferred from the template.
const el = useTemplateRef<HTMLElement>('el')

useSortable(el, {
  options: {
    animation: 150,
    ...props.options,
    onEnd: (event: SortableEvent) => {
      const { oldIndex, newIndex } = event
      if (oldIndex != null && newIndex != null && oldIndex !== newIndex) {
        const next = [...model.value]
        next.splice(newIndex, 0, next.splice(oldIndex, 1)[0]!)
        model.value = next
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
