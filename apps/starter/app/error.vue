<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
useHead({ bodyAttrs: { class: 'bg-body-secondary' } })

const isNotFound = props.error.statusCode === 404
</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center vh-100 text-center px-3">
    <h1 class="display-1 fw-bold text-primary">{{ error.statusCode }}</h1>
    <h2 class="h4 mb-2">
      {{ isNotFound ? 'Page not found' : 'Something went wrong' }}
    </h2>
    <p class="text-secondary mb-4">{{ error.message }}</p>
    <button class="btn btn-primary" @click="clearError({ redirect: '/' })">
      <i class="bi bi-house me-1" /> Back to dashboard
    </button>
  </div>
</template>
