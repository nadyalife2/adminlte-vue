<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
const { t } = useI18n()
useSeoMeta({ title: () => `${t('calendar.title')} · AdminLTE Starter` })

const { data: events, refresh } = await useFetch('/api/events')

// Click a day to add a quick event (persisted via the mock API).
async function onDateClick(arg: { dateStr: string }) {
  const title = window.prompt(t('calendar.prompt', { date: arg.dateStr }))
  if (!title) return
  await $fetch('/api/events', { method: 'POST', body: { title, start: arg.dateStr } })
  await refresh()
}
</script>

<template>
  <LteAppContent :title="$t('calendar.title')" :breadcrumbs="[{ label: $t('common.home'), href: '/' }, { label: $t('calendar.title') }]">
    <LteCard :title="$t('calendar.schedule')" icon="bi-calendar3">
      <p class="text-secondary small">{{ $t('calendar.hint') }}</p>
      <ClientOnly>
        <LteCalendar :events="events ?? []" @date-click="onDateClick" />
        <template #fallback>
          <div class="text-center text-secondary py-5"><i class="bi bi-calendar3 fs-1" /></div>
        </template>
      </ClientOnly>
    </LteCard>
  </LteAppContent>
</template>
