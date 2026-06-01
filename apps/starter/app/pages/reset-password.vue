<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({ layout: 'auth' })
const { t } = useI18n()
useHead({ bodyAttrs: { class: 'login-page bg-body-secondary' } })
useSeoMeta({ title: () => `${t('auth.changePassword')} · AdminLTE Starter` })

const route = useRoute()
const password = ref('')
const confirm = ref('')
const error = ref('')
const loading = ref(false)

async function onSubmit() {
  error.value = ''
  if (password.value !== confirm.value) {
    error.value = t('auth.passwordsNoMatch')
    return
  }
  loading.value = true
  try {
    await $fetch('/api/auth/reset-password', {
      method: 'POST',
      body: { token: route.query.token ?? 'demo-token', password: password.value },
    })
    await navigateTo('/login')
  } catch (e: unknown) {
    const err = e as { data?: { statusMessage?: string }; statusMessage?: string }
    error.value = err?.data?.statusMessage || err?.statusMessage || 'Reset failed'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <LteAuthLayout auth-type="login" variant="v2" logo-href="/">
    <p class="login-box-msg">{{ $t('auth.chooseNewPassword') }}</p>

    <div v-if="error" class="alert alert-danger py-2" role="alert">{{ error }}</div>

    <form @submit.prevent="onSubmit">
      <div class="input-group mb-3">
        <input v-model="password" type="password" class="form-control" :placeholder="$t('auth.newPassword')" autocomplete="new-password" required />
        <div class="input-group-text"><span class="bi bi-lock-fill" /></div>
      </div>
      <div class="input-group mb-3">
        <input v-model="confirm" type="password" class="form-control" :placeholder="$t('auth.confirmPassword')" autocomplete="new-password" required />
        <div class="input-group-text"><span class="bi bi-lock-fill" /></div>
      </div>
      <button type="submit" class="btn btn-primary w-100" :disabled="loading">
        <span v-if="loading" class="spinner-border spinner-border-sm me-1" aria-hidden="true" />
        {{ $t('auth.changePassword') }}
      </button>
    </form>

    <NuxtLink to="/login" class="d-block mt-3 text-center">{{ $t('auth.backToLogin') }}</NuxtLink>
  </LteAuthLayout>
</template>
