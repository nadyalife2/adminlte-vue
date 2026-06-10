<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue'
import type { Instance } from 'flatpickr/dist/types/instance'
import type { Options } from 'flatpickr/dist/types/options'

const props = defineProps<{
  placeholder?: string
  options?: Partial<Options>
}>()

/** v-model — selected date(s) as a string. */
const model = defineModel<string>({ default: '' })

const el = useTemplateRef('el')
let picker: Instance | null = null

onMounted(async () => {
  if (!el.value) return
  const { default: flatpickr } = await import('flatpickr')
  if (!el.value) return
  picker = flatpickr(el.value, {
    ...props.options,
    defaultDate: model.value || undefined,
    onChange: (_dates, dateStr) => (model.value = dateStr),
  })
})

watch(model, (value) => {
  if (picker && value !== el.value?.value) picker.setDate(value, false)
})

onBeforeUnmount(() => {
  picker?.destroy()
  picker = null
})
</script>

<template>
  <input ref="el" type="text" class="form-control" :placeholder="placeholder" :value="model" />
</template>
