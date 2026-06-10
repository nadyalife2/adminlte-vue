<script setup lang="ts">
import type { BootstrapTheme } from '../types/theme'
import { useControlId } from '../composables/use-control-id'

const props = defineProps<{
  label?: string
  id?: string
  theme?: BootstrapTheme
  disabled?: boolean
}>()
const model = defineModel<boolean>()
defineOptions({ inheritAttrs: false })

const inputId = useControlId('lte-switch', () => props.id)
</script>

<template>
  <div class="form-check form-switch">
    <input
      :id="inputId"
      class="form-check-input"
      type="checkbox"
      role="switch"
      :checked="model"
      :disabled="disabled"
      v-bind="$attrs"
      @change="model = ($event.target as HTMLInputElement).checked"
    />
    <label v-if="label" class="form-check-label" :for="inputId">{{ label }}</label>
  </div>
</template>
