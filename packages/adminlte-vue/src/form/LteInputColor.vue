<script setup lang="ts">
import { cn } from '../lib/class-name'
import { useControlId } from '../composables/use-control-id'

const props = defineProps<{
  label?: string
  id?: string
  fgroupClass?: string
  disabled?: boolean
}>()
const model = defineModel<string>()
defineOptions({ inheritAttrs: false })

const inputId = useControlId('lte-color', () => props.id)
</script>

<template>
  <div :class="cn('mb-3', fgroupClass)">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <input
      :id="inputId"
      type="color"
      class="form-control form-control-color"
      :value="model"
      :disabled="disabled"
      v-bind="$attrs"
      @input="model = ($event.target as HTMLInputElement).value"
    />
  </div>
</template>
