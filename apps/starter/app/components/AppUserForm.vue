<script setup lang="ts">
import type { UserInput } from '~/types/user'

const model = defineModel<UserInput>({ required: true })
defineProps<{
  errors?: Record<string, string>
  submitting?: boolean
  submitLabel?: string
}>()
const emit = defineEmits<{ submit: [] }>()
</script>

<template>
  <form novalidate @submit.prevent="emit('submit')">
    <div class="mb-3">
      <label class="form-label" for="f-name">{{ $t('common.name') }}</label>
      <input
        id="f-name"
        v-model="model.name"
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors?.name }"
      />
      <div v-if="errors?.name" class="invalid-feedback">{{ errors.name }}</div>
    </div>

    <div class="mb-3">
      <label class="form-label" for="f-email">{{ $t('common.email') }}</label>
      <input
        id="f-email"
        v-model="model.email"
        type="email"
        class="form-control"
        :class="{ 'is-invalid': errors?.email }"
      />
      <div v-if="errors?.email" class="invalid-feedback">{{ errors.email }}</div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-3">
        <label class="form-label" for="f-role">{{ $t('common.role') }}</label>
        <select id="f-role" v-model="model.role" class="form-select" :class="{ 'is-invalid': errors?.role }">
          <option>Admin</option>
          <option>Editor</option>
          <option>Viewer</option>
        </select>
        <div v-if="errors?.role" class="invalid-feedback">{{ errors.role }}</div>
      </div>
      <div class="col-md-6 mb-3">
        <label class="form-label" for="f-status">{{ $t('common.status') }}</label>
        <select id="f-status" v-model="model.status" class="form-select" :class="{ 'is-invalid': errors?.status }">
          <option value="active">Active</option>
          <option value="invited">Invited</option>
          <option value="suspended">Suspended</option>
        </select>
        <div v-if="errors?.status" class="invalid-feedback">{{ errors.status }}</div>
      </div>
    </div>

    <div class="d-flex gap-2 mt-2">
      <button type="submit" class="btn btn-primary" :disabled="submitting">
        <span v-if="submitting" class="spinner-border spinner-border-sm me-1" aria-hidden="true" />
        {{ submitLabel ?? $t('common.save') }}
      </button>
      <NuxtLink to="/users" class="btn btn-outline-secondary">{{ $t('common.cancel') }}</NuxtLink>
    </div>
  </form>
</template>
