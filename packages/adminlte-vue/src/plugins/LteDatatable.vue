<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue'
import type { PropType } from 'vue'

// Runtime prop declaration (see LteCalendar): `Array as PropType<…>` emits a
// runtime `type: Array`, so the auto-imported component's array props resolve
// to their element type instead of `never[]` under Volar.
const props = defineProps({
  /** Reactive after mount — changes are applied via `table.setColumns()`. */
  columns: { type: Array as PropType<Array<Record<string, unknown>>>, default: () => [] },
  data: { type: Array as PropType<unknown[]>, default: () => [] },
  /**
   * Extra Tabulator options merged over { columns, data }. Mount-only — changes
   * after mount are ignored (use the `getTable()` instance for runtime tweaks).
   */
  options: { type: Object as PropType<Record<string, unknown>>, default: undefined },
  /** Mount-only. */
  height: { type: String, default: undefined },
  /**
   * Watch `data` deeply (recursive traversal — costly for large datasets).
   * Off by default: replace the array immutably to trigger an update.
   */
  deepWatch: { type: Boolean, default: false },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Tabulator = any
const emit = defineEmits<{ ready: [table: Tabulator] }>()

const el = useTemplateRef('el')
let table: Tabulator = null

onMounted(async () => {
  if (!el.value) return
  const { TabulatorFull } = await import('tabulator-tables')
  if (!el.value) return
  table = new TabulatorFull(el.value, {
    layout: 'fitColumns',
    height: props.height,
    columns: props.columns,
    data: props.data,
    ...props.options,
  })
  table.on('tableBuilt', () => emit('ready', table))
})

defineExpose({
  /** The underlying Tabulator instance (null until mounted). */
  getTable: () => table,
})

watch(
  () => props.data,
  (data) => table?.replaceData(data as never[]),
  { deep: props.deepWatch }
)
watch(
  () => props.columns,
  (columns) => table?.setColumns(columns)
)

onBeforeUnmount(() => {
  table?.destroy()
  table = null
})
</script>

<template>
  <div ref="el"></div>
</template>
