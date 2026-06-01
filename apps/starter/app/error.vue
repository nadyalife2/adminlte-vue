<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const { t } = useI18n()
useHead({ bodyAttrs: { class: 'bg-body-secondary' } })

const title = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return t('error.notFound')
    case 403:
      return t('error.denied')
    default:
      return t('error.generic')
  }
})
</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center vh-100 text-center px-3">
    <h1 class="display-1 fw-bold text-primary">{{ error.statusCode }}</h1>
    <h2 class="h4 mb-2">{{ title }}</h2>
    <p class="text-secondary mb-4">{{ error.message }}</p>
    <button class="btn btn-primary" @click="clearError({ redirect: '/' })">
      <i class="bi bi-house me-1" /> {{ $t('error.backHome') }}
    </button>
  </div>
</template>
