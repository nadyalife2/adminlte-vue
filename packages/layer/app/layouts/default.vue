<script setup lang="ts">
import { computed, resolveComponent } from 'vue'
import type { AdminlteAppConfig, AppMenuNode } from '../types/app-config'
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
const { sidebarTheme } = useThemeCustomizer()

// RBAC menu filtering: drop entries the signed-in user's roles can't access
// (recursively; empty groups are removed). Items without `roles` are public.
function filterByRole(nodes: AppMenuNode[]): AppMenuNode[] {
  return nodes
    .map((n) => (n.type === 'group' ? { ...n, children: filterByRole(n.children as AppMenuNode[]) } : n))
    .filter((n) => {
      if (n.roles && !auth.hasAnyRole(n.roles)) return false
      if (n.type === 'group' && n.children.length === 0) return false
      return true
    })
}
const menu = computed(() => filterByRole(lte.value.menu ?? []))

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
  <div>
    <NuxtLoadingIndicator color="var(--bs-primary)" />
    <LteDashboardLayout
      :menu-items="menu"
      :current-path="route.path"
      :link-component="NuxtLink"
      :navigate="navigate"
      :logo="brand.logo"
      :brand-text="brand.text"
      :logo-href="brand.href ?? '/'"
      :sidebar-theme="sidebarTheme"
      :user="user"
      @logout="onLogout"
      @profile="navigate('/profile')"
    >
      <template #topbar-end>
        <LteNavMessages v-if="lte.messages?.length" :messages="lte.messages" />
        <LteNavNotifications v-if="lte.notifications?.length" :notifications="lte.notifications" />
        <li class="nav-item">
          <button
            type="button"
            class="nav-link"
            title="Customize"
            data-bs-toggle="offcanvas"
            data-bs-target="#themeCustomizer"
          >
            <i class="bi bi-palette" />
          </button>
        </li>
      </template>

      <slot />
      <!-- Inside the layout so it can inject color-mode state from LteDashboardLayout. -->
      <AppThemeCustomizer />
    </LteDashboardLayout>
    <AppToaster />
  </div>
</template>
