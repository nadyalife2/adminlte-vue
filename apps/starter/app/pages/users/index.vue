<script setup lang="ts">
import { computed, ref, watch } from 'vue'

definePageMeta({ middleware: 'auth', roles: ['admin'] })
const { t } = useI18n()
useSeoMeta({ title: () => `${t('users.title')} · AdminLTE Starter` })

type SortKey = 'id' | 'name' | 'email' | 'role' | 'status' | 'createdAt'

const search = ref('')
const q = ref('')
const sort = ref<SortKey>('id')
const dir = ref<'asc' | 'desc'>('asc')
const page = ref(1)
const size = ref(10)

// Debounce the search box into the fetched query, resetting to page 1.
let timer: ReturnType<typeof setTimeout>
watch(search, (v) => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    q.value = v
    page.value = 1
  }, 300)
})

const query = computed(() => ({ q: q.value, sort: sort.value, dir: dir.value, page: page.value, size: size.value }))
// useFetch re-runs whenever `query` changes → server-side search/sort/paginate.
const { data, pending, refresh } = await useFetch('/api/users', { query })

const rows = computed(() => data.value?.rows ?? [])
const total = computed(() => data.value?.total ?? 0)
const pageCount = computed(() => Math.max(1, Math.ceil(total.value / size.value)))
const from = computed(() => (total.value === 0 ? 0 : (page.value - 1) * size.value + 1))
const to = computed(() => Math.min(total.value, page.value * size.value))

function toggleSort(col: SortKey) {
  if (sort.value === col) dir.value = dir.value === 'asc' ? 'desc' : 'asc'
  else {
    sort.value = col
    dir.value = 'asc'
  }
  page.value = 1
}
function sortIcon(col: SortKey) {
  if (sort.value !== col) return 'bi-arrow-down-up text-secondary opacity-50'
  return dir.value === 'asc' ? 'bi-sort-down-alt' : 'bi-sort-up-alt'
}

const statusClass: Record<string, string> = {
  active: 'text-bg-success',
  invited: 'text-bg-warning',
  suspended: 'text-bg-secondary',
}

const deletingId = ref<number | null>(null)
async function onDelete(id: number, name: string) {
  if (!confirm(t('users.deleteConfirm', { name }))) return
  deletingId.value = id
  try {
    await $fetch(`/api/users/${id}`, { method: 'DELETE' })
    useToast().success(t('users.deleted', { name }))
    if (rows.value.length === 1 && page.value > 1) page.value -= 1
    await refresh()
  } finally {
    deletingId.value = null
  }
}

const columns = computed<{ key: SortKey; label: string }[]>(() => [
  { key: 'id', label: '#' },
  { key: 'name', label: t('common.name') },
  { key: 'email', label: t('common.email') },
  { key: 'role', label: t('common.role') },
  { key: 'status', label: t('common.status') },
  { key: 'createdAt', label: t('common.created') },
])
</script>

<template>
  <LteAppContent :title="$t('users.title')" :breadcrumbs="[{ label: $t('common.home'), href: '/' }, { label: $t('users.title') }]">
    <LteCard body-class="p-0">
      <template #header>
        <div class="input-group input-group-sm" style="max-width: 320px">
          <span class="input-group-text"><i class="bi bi-search" /></span>
          <input v-model="search" type="search" class="form-control" :placeholder="$t('users.searchPlaceholder')" >
        </div>
        <div class="card-tools">
          <NuxtLink to="/users/new" class="btn btn-primary btn-sm">
            <i class="bi bi-plus-lg me-1" />{{ $t('users.add') }}
          </NuxtLink>
        </div>
      </template>

      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
          <thead>
            <tr>
              <th
                v-for="c in columns"
                :key="c.key"
                role="button"
                class="user-select-none"
                @click="toggleSort(c.key)"
              >
                {{ c.label }} <i class="bi ms-1" :class="sortIcon(c.key)" />
              </th>
              <th class="text-end">{{ $t('common.actions') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="pending && !rows.length">
              <td colspan="7" class="text-center text-secondary py-4">{{ $t('common.loading') }}</td>
            </tr>
            <tr v-else-if="!rows.length">
              <td colspan="7" class="text-center text-secondary py-4">{{ $t('users.empty') }}</td>
            </tr>
            <tr v-for="u in rows" :key="u.id">
              <td class="text-secondary">{{ u.id }}</td>
              <td><NuxtLink :to="`/users/${u.id}`" class="fw-medium text-decoration-none">{{ u.name }}</NuxtLink></td>
              <td class="text-secondary">{{ u.email }}</td>
              <td>{{ u.role }}</td>
              <td><span class="badge" :class="statusClass[u.status]">{{ u.status }}</span></td>
              <td class="text-secondary">{{ u.createdAt }}</td>
              <td class="text-end text-nowrap">
                <NuxtLink :to="`/users/${u.id}`" class="btn btn-sm btn-outline-secondary" title="View"><i class="bi bi-eye" /></NuxtLink>
                <NuxtLink :to="`/users/${u.id}/edit`" class="btn btn-sm btn-outline-secondary ms-1" title="Edit"><i class="bi bi-pencil" /></NuxtLink>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-danger ms-1"
                  title="Delete"
                  :disabled="deletingId === u.id"
                  @click="onDelete(u.id, u.name)"
                >
                  <i class="bi bi-trash" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <template #footer>
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-secondary small">{{ $t('users.showing', { from, to, total }) }}</span>
          <nav>
            <ul class="pagination pagination-sm mb-0">
              <li class="page-item" :class="{ disabled: page <= 1 }">
                <button class="page-link" @click="page = Math.max(1, page - 1)">Prev</button>
              </li>
              <li class="page-item disabled"><span class="page-link">{{ page }} / {{ pageCount }}</span></li>
              <li class="page-item" :class="{ disabled: page >= pageCount }">
                <button class="page-link" @click="page = Math.min(pageCount, page + 1)">Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </template>
    </LteCard>
  </LteAppContent>
</template>
