<script setup lang="ts">
import { cn } from '../lib/class-name'
import { useControlId } from '../composables/use-control-id'
import LteFlatpickr from '../plugins/LteFlatpickr.vue'
import type { Options } from 'flatpickr/dist/types/options'

const props = defineProps<{
  label?: string
  id?: string
  placeholder?: string
  fgroupClass?: string
  options?: Partial<Options>
}>()
const model = defineModel<string>()

const inputId = useControlId('lte-flatpickr', () => props.id)
</script>

<template>
  <div :class="cn('mb-3', fgroupClass)">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <LteFlatpickr :id="inputId" v-model="model" :placeholder="placeholder" :options="options" />
  </div>
</template>
