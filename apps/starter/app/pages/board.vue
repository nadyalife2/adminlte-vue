<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
useSeoMeta({ title: 'Board · AdminLTE Starter' })

const { data: columns } = await useFetch('/api/board')

// Sortable already moved the DOM; persist the change to the mock API.
async function onMove(payload: { card: string; from: string; to: string; newIndex: number }) {
  await $fetch('/api/board/move', { method: 'POST', body: payload })
}
</script>

<template>
  <LteAppContent title="Board" :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Board' }]">
    <p class="text-secondary small">Drag cards between columns — moves persist to the mock API.</p>
    <ClientOnly>
      <LteKanban :columns="columns ?? []" @move="onMove" />
      <template #fallback>
        <div class="text-center text-secondary py-5"><i class="bi bi-kanban fs-1" /></div>
      </template>
    </ClientOnly>
  </LteAppContent>
</template>
