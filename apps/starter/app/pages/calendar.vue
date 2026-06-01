<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
useSeoMeta({ title: 'Calendar · AdminLTE Starter' })

const { data: events, refresh } = await useFetch('/api/events')

// Click a day to add a quick event (persisted via the mock API).
async function onDateClick(arg: { dateStr: string }) {
  const title = window.prompt(`New event on ${arg.dateStr}:`)
  if (!title) return
  await $fetch('/api/events', { method: 'POST', body: { title, start: arg.dateStr } })
  await refresh()
}
</script>

<template>
  <LteAppContent title="Calendar" :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Calendar' }]">
    <LteCard title="Schedule" icon="bi-calendar3">
      <p class="text-secondary small">Click a date to add an event, or drag an event to move it.</p>
      <ClientOnly>
        <LteCalendar :events="events ?? []" @date-click="onDateClick" />
        <template #fallback>
          <div class="text-center text-secondary py-5"><i class="bi bi-calendar3 fs-1" /></div>
        </template>
      </ClientOnly>
    </LteCard>
  </LteAppContent>
</template>
