<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
const { t } = useI18n()
useSeoMeta({ title: () => `${t('board.title')} · AdminLTE Starter` })

const { data: columns } = await useFetch('/api/board')

// Sortable already moved the DOM; persist the change to the mock API.
async function onMove(payload: { card: string; from: string; to: string; newIndex: number }) {
  await $fetch('/api/board/move', { method: 'POST', body: payload })
}
</script>

<template>
  <LteAppContent :title="$t('board.title')" :breadcrumbs="[{ label: $t('common.home'), href: '/' }, { label: $t('board.title') }]">
    <p class="text-secondary small">{{ $t('board.hint') }}</p>
    <ClientOnly>
      <LteKanban :columns="columns ?? []" @move="onMove" />
      <template #fallback>
        <div class="text-center text-secondary py-5"><i class="bi bi-kanban fs-1" /></div>
      </template>
    </ClientOnly>
  </LteAppContent>
</template>
