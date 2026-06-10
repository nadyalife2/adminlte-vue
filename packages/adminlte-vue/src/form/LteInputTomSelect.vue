<script setup lang="ts">
import { cn } from '../lib/class-name'
import { useControlId } from '../composables/use-control-id'
import LteTomSelect from '../plugins/LteTomSelect.vue'

interface TomOption {
  value: string
  text: string
}

const props = defineProps<{
  label?: string
  id?: string
  options?: TomOption[]
  multiple?: boolean
  placeholder?: string
  fgroupClass?: string
}>()
const model = defineModel<string | string[]>()

const inputId = useControlId('lte-tomselect', () => props.id)
</script>

<template>
  <div :class="cn('mb-3', fgroupClass)">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <LteTomSelect
      v-model="model"
      :options="options"
      :multiple="multiple"
      :placeholder="placeholder"
    />
  </div>
</template>
