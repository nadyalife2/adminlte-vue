<script setup lang="ts">
import { onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue'
import type QuillType from 'quill'

const props = withDefaults(
  defineProps<{
    placeholder?: string
    theme?: string
    /** Quill modules option (e.g. custom toolbar). */
    modules?: Record<string, unknown>
    readOnly?: boolean
  }>(),
  { theme: 'snow' }
)

/** v-model — HTML string. */
const model = defineModel<string>({ default: '' })

const el = useTemplateRef('el')
let quill: QuillType | null = null

onMounted(async () => {
  if (!el.value) return
  const { default: Quill } = await import('quill')
  if (!el.value) return
  quill = new Quill(el.value, {
    theme: props.theme,
    placeholder: props.placeholder,
    readOnly: props.readOnly,
    modules: props.modules ?? {
      toolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'clean'],
      ],
    },
  })
  if (model.value) quill.root.innerHTML = model.value
  quill.on('text-change', () => {
    model.value = quill!.root.innerHTML
  })
})

watch(model, (html) => {
  if (quill && html !== quill.root.innerHTML) quill.root.innerHTML = html ?? ''
})

onBeforeUnmount(() => {
  quill = null
})
</script>

<template>
  <div ref="el"></div>
</template>
