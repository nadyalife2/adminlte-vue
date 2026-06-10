<script setup lang="ts">
import { cn } from '../lib/class-name'
import { useControlId } from '../composables/use-control-id'

const props = defineProps<{
  label?: string
  id?: string
  accept?: string
  multiple?: boolean
  fgroupClass?: string
  disabled?: boolean
}>()
const model = defineModel<FileList | null>()
defineOptions({ inheritAttrs: false })

const inputId = useControlId('lte-file', () => props.id)
</script>

<template>
  <div :class="cn('mb-3', fgroupClass)">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <input
      :id="inputId"
      type="file"
      class="form-control"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      v-bind="$attrs"
      @change="model = ($event.target as HTMLInputElement).files"
    />
  </div>
</template>
