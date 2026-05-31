<script setup lang="ts">
import { computed } from 'vue'

definePageMeta({ middleware: 'auth' })
useSeoMeta({
  title: 'Dashboard · AdminLTE Starter',
  description: 'Overview of orders, visitors and recent activity.',
})

const auth = useAuthStore()

// Real data flow: SSR-fetched from the mock Nitro endpoints, hydrated on client.
const { data: statsData } = await useFetch('/api/dashboard/stats')
const { data: activityData } = await useFetch('/api/dashboard/activity')

const stats = computed(() => statsData.value?.stats ?? [])
const timeline = computed(() =>
  (activityData.value?.activity ?? []).map((a) => ({
    icon: a.icon,
    iconTheme: a.theme,
    time: a.time,
    title: `${a.who} ${a.action}`,
  }))
)
</script>

<template>
  <LteAppContent
    title="Dashboard"
    :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Dashboard' }]"
  >
    <div class="row g-3 mb-2">
      <div v-for="s in stats" :key="s.label" class="col-12 col-sm-6 col-lg-3">
        <LteSmallBox
          :theme="s.theme"
          :icon="s.icon"
          :title="s.value"
          :text="s.label"
          url="#"
          url-text="More info"
        />
      </div>
    </div>

    <div class="row g-3">
      <div class="col-lg-7">
        <LteCard title="Recent activity" icon="bi-activity">
          <LteTimeline :items="timeline" />
        </LteCard>
      </div>
      <div class="col-lg-5">
        <LteCard title="Welcome back" theme="primary" variant="outline">
          <p class="mb-1">
            Signed in as <strong>{{ auth.user?.name ?? 'Guest' }}</strong>
          </p>
          <p class="text-secondary mb-3">{{ auth.user?.email }}</p>
          <p class="mb-0">
            This dashboard is fetched from <code>/api/dashboard/*</code> on the server and
            guarded by the <code>auth</code> middleware — replace the mock endpoints with
            your backend.
          </p>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
