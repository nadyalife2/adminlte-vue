<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({ layout: 'auth' })
useHead({ bodyAttrs: { class: 'register-page bg-body-secondary' } })
useSeoMeta({ title: 'Register · AdminLTE Starter' })

const auth = useAuthStore()

const name = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')
const error = ref('')
const loading = ref(false)

async function onSubmit() {
  error.value = ''
  if (password.value !== confirm.value) {
    error.value = 'Passwords do not match.'
    return
  }
  loading.value = true
  try {
    await auth.register({ name: name.value, email: email.value, password: password.value })
    await navigateTo('/')
  } catch (e: unknown) {
    const err = e as { data?: { statusMessage?: string }; statusMessage?: string }
    error.value = err?.data?.statusMessage || err?.statusMessage || 'Registration failed'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <LteAuthLayout auth-type="register" variant="v2" logo-href="/">
    <p class="register-box-msg">Register a new membership</p>

    <div v-if="error" class="alert alert-danger py-2" role="alert">{{ error }}</div>

    <form @submit.prevent="onSubmit">
      <div class="input-group mb-3">
        <input v-model="name" type="text" class="form-control" placeholder="Full name" required />
        <div class="input-group-text"><span class="bi bi-person" /></div>
      </div>
      <div class="input-group mb-3">
        <input v-model="email" type="email" class="form-control" placeholder="Email" autocomplete="email" required />
        <div class="input-group-text"><span class="bi bi-envelope" /></div>
      </div>
      <div class="input-group mb-3">
        <input v-model="password" type="password" class="form-control" placeholder="Password" autocomplete="new-password" required />
        <div class="input-group-text"><span class="bi bi-lock-fill" /></div>
      </div>
      <div class="input-group mb-3">
        <input v-model="confirm" type="password" class="form-control" placeholder="Confirm password" autocomplete="new-password" required />
        <div class="input-group-text"><span class="bi bi-lock-fill" /></div>
      </div>
      <button type="submit" class="btn btn-primary w-100" :disabled="loading">
        <span v-if="loading" class="spinner-border spinner-border-sm me-1" aria-hidden="true" />
        Register
      </button>
    </form>

    <NuxtLink to="/login" class="d-block mt-3 text-center">I already have a membership</NuxtLink>
  </LteAuthLayout>
</template>
