<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue'

interface TomOption {
  value: string
  text: string
}

const props = withDefaults(
  defineProps<{
    options?: TomOption[]
    multiple?: boolean
    placeholder?: string
    /** Extra TomSelect settings. */
    settings?: Record<string, unknown>
  }>(),
  { options: () => [] }
)

/** v-model — selected value(s). */
const model = defineModel<string | string[]>()

const el = useTemplateRef('el')
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let instance: any = null

onMounted(async () => {
  if (!el.value) return
  const { default: TomSelect } = await import('tom-select')
  if (!el.value) return
  instance = new TomSelect(el.value, {
    options: props.options,
    placeholder: props.placeholder,
    ...props.settings,
    onChange: (value: string | string[]) => (model.value = value),
  })
  if (model.value != null) instance.setValue(model.value as string, true)
})

watch(model, (value) => {
  if (instance && value != null) instance.setValue(value as string, true)
})

onBeforeUnmount(() => {
  instance?.destroy()
  instance = null
})
</script>

<template>
  <select ref="el" :multiple="multiple">
    <option v-for="opt in options" :key="opt.value" :value="opt.value">{{ opt.text }}</option>
  </select>
</template>
