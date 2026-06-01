<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({ layout: 'auth' })
useHead({ bodyAttrs: { class: 'login-page bg-body-secondary' } })
useSeoMeta({ title: 'Forgot password · AdminLTE Starter' })

const email = ref('')
const sent = ref(false)
const error = ref('')
const loading = ref(false)

async function onSubmit() {
  error.value = ''
  loading.value = true
  try {
    await $fetch('/api/auth/forgot-password', { method: 'POST', body: { email: email.value } })
    sent.value = true
  } catch (e: unknown) {
    const err = e as { data?: { statusMessage?: string }; statusMessage?: string }
    error.value = err?.data?.statusMessage || err?.statusMessage || 'Request failed'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <LteAuthLayout auth-type="login" variant="v2" logo-href="/">
    <p class="login-box-msg">Forgot your password? Here you can recover it.</p>

    <div v-if="sent" class="alert alert-success py-2" role="alert">
      If an account exists for <strong>{{ email }}</strong>, a reset link is on its way.
    </div>
    <template v-else>
      <div v-if="error" class="alert alert-danger py-2" role="alert">{{ error }}</div>
      <form @submit.prevent="onSubmit">
        <div class="input-group mb-3">
          <input v-model="email" type="email" class="form-control" placeholder="Email" autocomplete="email" required />
          <div class="input-group-text"><span class="bi bi-envelope" /></div>
        </div>
        <button type="submit" class="btn btn-primary w-100" :disabled="loading">
          <span v-if="loading" class="spinner-border spinner-border-sm me-1" aria-hidden="true" />
          Request new password
        </button>
      </form>
    </template>

    <NuxtLink to="/login" class="d-block mt-3 text-center">Back to login</NuxtLink>
  </LteAuthLayout>
</template>
