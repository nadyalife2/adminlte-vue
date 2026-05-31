<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({ layout: 'auth' })
useHead({ bodyAttrs: { class: 'login-page bg-body-secondary' } })
useSeoMeta({ title: 'Sign in · AdminLTE Starter' })

const auth = useAuthStore()
const route = useRoute()

const email = ref('admin@example.com')
const password = ref('password')
const error = ref('')
const loading = ref(false)

async function onSubmit() {
  error.value = ''
  loading.value = true
  try {
    await auth.login(email.value, password.value)
    await navigateTo((route.query.redirect as string) || '/')
  } catch (e: unknown) {
    const err = e as { data?: { statusMessage?: string }; statusMessage?: string }
    error.value = err?.data?.statusMessage || err?.statusMessage || 'Login failed'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <LteAuthLayout auth-type="login" variant="v2" logo-href="/">
    <p class="login-box-msg">Sign in to start your session</p>

    <div v-if="error" class="alert alert-danger py-2" role="alert">{{ error }}</div>

    <form @submit.prevent="onSubmit">
      <div class="input-group mb-3">
        <input v-model="email" type="email" class="form-control" placeholder="Email" autocomplete="username" required />
        <div class="input-group-text"><span class="bi bi-envelope" /></div>
      </div>
      <div class="input-group mb-3">
        <input v-model="password" type="password" class="form-control" placeholder="Password" autocomplete="current-password" required />
        <div class="input-group-text"><span class="bi bi-lock-fill" /></div>
      </div>
      <div class="row">
        <div class="col-8 d-flex align-items-center">
          <div class="form-check">
            <input id="remember" class="form-check-input" type="checkbox" />
            <label class="form-check-label" for="remember">Remember Me</label>
          </div>
        </div>
        <div class="col-4">
          <button type="submit" class="btn btn-primary w-100" :disabled="loading">
            <span v-if="loading" class="spinner-border spinner-border-sm me-1" aria-hidden="true" />
            Sign In
          </button>
        </div>
      </div>
    </form>

    <p class="mt-3 mb-0 text-secondary small">
      Demo credentials: <code>admin@example.com</code> / <code>password</code>
    </p>
  </LteAuthLayout>
</template>
