<script setup lang="ts">
import { cn } from '../lib/class-name'
import { useControlId } from '../composables/use-control-id'

interface SelectOption {
  value: string | number
  label: string
}

const props = withDefaults(
  defineProps<{
    label?: string
    id?: string
    options?: SelectOption[]
    error?: string
    fgroupClass?: string
    multiple?: boolean
    disabled?: boolean
  }>(),
  { options: () => [] }
)
const model = defineModel<string | number | Array<string | number>>()
defineOptions({ inheritAttrs: false })

const inputId = useControlId('lte-select', () => props.id)

function onChange(event: Event) {
  const el = event.target as HTMLSelectElement
  model.value = props.multiple ? Array.from(el.selectedOptions, (o) => o.value) : el.value
}
</script>

<template>
  <div :class="cn('mb-3', fgroupClass)">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <select
      :id="inputId"
      :multiple="multiple"
      :disabled="disabled"
      :class="cn('form-select', error && 'is-invalid')"
      v-bind="$attrs"
      @change="onChange"
    >
      <slot>
        <option
          v-for="opt in options"
          :key="opt.value"
          :value="opt.value"
          :selected="Array.isArray(model) ? model.includes(opt.value) : model === opt.value"
        >
          {{ opt.label }}
        </option>
      </slot>
    </select>
    <div v-if="error" class="invalid-feedback d-block">{{ error }}</div>
  </div>
</template>
