<script setup lang="ts">
import { ref, computed } from 'vue'

const { data: sections } = await useAsyncData('docs-search', () =>
  queryCollectionSearchSections('docs')
)

const q = ref('')
const focused = ref(false)

const results = computed(() => {
  const term = q.value.trim().toLowerCase()
  if (term.length < 2) return []
  return (sections.value ?? [])
    .filter((s) => `${s.title} ${s.content}`.toLowerCase().includes(term))
    .slice(0, 8)
})

function go(id: string) {
  q.value = ''
  focused.value = false
  navigateTo(id)
}
function onBlur() {
  setTimeout(() => (focused.value = false), 150)
}
</script>

<template>
  <div class="docs-search position-relative d-none d-md-block">
    <div class="input-group input-group-sm">
      <span class="input-group-text bg-body"><i class="bi bi-search" /></span>
      <input
        v-model="q"
        type="search"
        class="form-control"
        placeholder="Search docs…"
        aria-label="Search docs"
        @focus="focused = true"
        @blur="onBlur"
      />
    </div>

    <div v-if="focused && results.length" class="docs-search-results card shadow-sm">
      <button
        v-for="r in results"
        :key="r.id"
        type="button"
        class="docs-search-item"
        @mousedown.prevent="go(r.id)"
      >
        <span class="fw-medium d-block">{{ r.title }}</span>
        <span class="small text-secondary d-block text-truncate">{{ r.content }}</span>
      </button>
    </div>
  </div>
</template>
