<script setup lang="ts">
import { computed } from 'vue'
import type { ComponentSize } from '../types/theme'
import { cn } from '../lib/class-name'
import { useControlId } from '../composables/use-control-id'

const props = withDefaults(
  defineProps<{
    label?: string
    type?: string
    id?: string
    placeholder?: string
    error?: string
    fgroupClass?: string
    groupSize?: ComponentSize
    prepend?: string
    append?: string
    disabled?: boolean
    required?: boolean
  }>(),
  { type: 'text' }
)
const model = defineModel<string | number>()
defineOptions({ inheritAttrs: false })

const inputId = useControlId('lte-input', () => props.id)
const hasGroup = computed(() => !!props.prepend || !!props.append || !!props.error)
</script>

<template>
  <div :class="cn('mb-3', fgroupClass)">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>

    <div :class="hasGroup ? cn('input-group', groupSize && `input-group-${groupSize}`) : ''">
      <span v-if="prepend" class="input-group-text">{{ prepend }}</span>
      <input
        :id="inputId"
        :type="type"
        :value="model"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="cn('form-control', error && 'is-invalid')"
        v-bind="$attrs"
        @input="model = ($event.target as HTMLInputElement).value"
      />
      <span v-if="append" class="input-group-text">{{ append }}</span>
      <div v-if="error" class="invalid-feedback">{{ error }}</div>
    </div>

    <slot />
  </div>
</template>
