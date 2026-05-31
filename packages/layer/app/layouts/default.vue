<script setup lang="ts">
import { computed, resolveComponent } from 'vue'
import type { AdminlteAppConfig } from '../types/app-config'
import { useAuthStore } from '../stores/auth'

/**
 * Default dashboard shell. Driven by the `adminlte` block of the app's
 * app.config.ts (brand / menu / topbar data) and the auth store (signed-in user
 * + sign-out). Apps get a working layout without writing any layout code.
 */
const appConfig = useAppConfig() as { adminlte?: AdminlteAppConfig }
const lte = computed(() => appConfig.adminlte ?? {})

const auth = useAuthStore()
const route = useRoute()
const NuxtLink = resolveComponent('NuxtLink')

const brand = computed(() => lte.value.brand ?? { text: 'AdminLTE 4', href: '/' })
const user = computed(
  () => auth.user ?? lte.value.user ?? { name: 'Guest', role: 'Member' }
)

function navigate(href: string) {
  return navigateTo(href)
}

async function onLogout() {
  try {
    await $fetch('/api/auth/logout', { method: 'POST' })
  } catch {
    /* ignore — clear client state regardless */
  }
  auth.logout()
  await navigateTo('/login')
}
</script>

<template>
  <LteDashboardLayout
    :menu-items="lte.menu ?? []"
    :current-path="route.path"
    :link-component="NuxtLink"
    :navigate="navigate"
    :logo="brand.logo"
    :brand-text="brand.text"
    :logo-href="brand.href ?? '/'"
    :user="user"
    @logout="onLogout"
    @profile="navigate('/profile')"
  >
    <template v-if="(lte.messages?.length ?? 0) > 0" #topbar-end>
      <LteNavMessages :messages="lte.messages!" />
      <LteNavNotifications v-if="lte.notifications?.length" :notifications="lte.notifications!" />
    </template>

    <slot />
  </LteDashboardLayout>
</template>
