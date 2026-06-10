<script setup lang="ts">
import { cn } from '../lib/class-name'
import { useControlId } from '../composables/use-control-id'

const props = withDefaults(
  defineProps<{
    label?: string
    id?: string
    rows?: number
    placeholder?: string
    error?: string
    fgroupClass?: string
    disabled?: boolean
  }>(),
  { rows: 4 }
)
const model = defineModel<string>()
defineOptions({ inheritAttrs: false })

const inputId = useControlId('lte-textarea', () => props.id)
</script>

<template>
  <div :class="cn('mb-3', fgroupClass)">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <textarea
      :id="inputId"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="model"
      :class="cn('form-control', error && 'is-invalid')"
      v-bind="$attrs"
      @input="model = ($event.target as HTMLTextAreaElement).value"
    ></textarea>
    <div v-if="error" class="invalid-feedback d-block">{{ error }}</div>
  </div>
</template>
