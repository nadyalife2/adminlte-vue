<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({ layout: 'auth' })
useHead({ bodyAttrs: { class: 'lockscreen bg-body-secondary' } })
useSeoMeta({ title: 'Locked · AdminLTE Starter' })

const auth = useAuthStore()
const password = ref('')
const error = ref('')
const loading = ref(false)

const name = computed(() => auth.user?.name ?? 'Your account')
const image = computed(() => auth.user?.image ?? '/assets/img/user2-160x160.jpg')

async function onUnlock() {
  error.value = ''
  // No known user (e.g. hard refresh while locked) → go to full login.
  if (!auth.user?.email) {
    await navigateTo('/login')
    return
  }
  loading.value = true
  try {
    await auth.login(auth.user.email, password.value)
    await navigateTo('/')
  } catch {
    error.value = 'Wrong password'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="lockscreen-wrapper">
    <div class="lockscreen-logo">
      <NuxtLink to="/"><b>Admin</b>LTE</NuxtLink>
    </div>

    <div class="lockscreen-name">{{ name }}</div>

    <div class="lockscreen-item">
      <div class="lockscreen-image">
        <img :src="image" :alt="name" />
      </div>

      <form class="lockscreen-credentials" @submit.prevent="onUnlock">
        <div class="input-group">
          <input
            v-model="password"
            type="password"
            class="form-control shadow-none"
            placeholder="password"
            autocomplete="current-password"
          />
          <div class="input-group-text border-0 bg-transparent px-1">
            <button type="submit" class="btn shadow-none" :disabled="loading">
              <i class="bi bi-arrow-right-circle text-body-secondary" />
            </button>
          </div>
        </div>
      </form>
    </div>

    <div v-if="error" class="text-danger text-center mb-2">{{ error }}</div>
    <div class="help-block text-center">Enter your password to retrieve your session</div>
    <div class="text-center">
      <NuxtLink to="/login" class="text-decoration-none">Or sign in as a different user</NuxtLink>
    </div>
  </div>
</template>
