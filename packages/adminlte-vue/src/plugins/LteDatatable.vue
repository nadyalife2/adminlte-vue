<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    columns?: Array<Record<string, unknown>>
    data?: unknown[]
    /** Extra Tabulator options merged over { columns, data }. */
    options?: Record<string, unknown>
    height?: string
  }>(),
  { columns: () => [] as Array<Record<string, unknown>>, data: () => [] as unknown[] }
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Tabulator = any
const emit = defineEmits<{ ready: [table: Tabulator] }>()

const el = ref<HTMLElement | null>(null)
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
  { deep: true }
)

onBeforeUnmount(() => {
  table?.destroy()
  table = null
})
</script>

<template>
  <div ref="el"></div>
</template>
