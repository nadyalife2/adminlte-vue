<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '~/types/user'

definePageMeta({ middleware: 'auth', roles: ['admin'] })
const { t } = useI18n()

const route = useRoute()
const { data: user, error } = await useFetch<User>(`/api/users/${route.params.id}`)
if (error.value || !user.value) {
  throw createError({ statusCode: 404, statusMessage: 'User not found' })
}
useSeoMeta({ title: `${user.value.name} · AdminLTE Starter` })

const statusClass: Record<string, string> = {
  active: 'text-bg-success',
  invited: 'text-bg-warning',
  suspended: 'text-bg-secondary',
}

const deleting = ref(false)
async function onDelete() {
  if (!confirm(t('users.deleteConfirm', { name: user.value!.name }))) return
  deleting.value = true
  try {
    await $fetch(`/api/users/${route.params.id}`, { method: 'DELETE' })
    useToast().success(t('users.deleted', { name: user.value!.name }))
    await navigateTo('/users')
  } finally {
    deleting.value = false
  }
}
</script>

<template>
  <LteAppContent
    :title="user!.name"
    :breadcrumbs="[{ label: $t('common.home'), href: '/' }, { label: $t('users.title'), href: '/users' }, { label: user!.name }]"
  >
    <div class="row g-3">
      <div class="col-lg-5">
        <LteCard>
          <div class="text-center mb-3">
            <img src="/assets/img/user2-160x160.jpg" class="rounded-circle shadow" width="96" height="96" :alt="user!.name" >
          </div>
          <h5 class="text-center mb-0">{{ user!.name }}</h5>
          <p class="text-center text-secondary">{{ user!.role }}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between px-0">
              <span class="text-secondary">{{ $t('common.email') }}</span><span>{{ user!.email }}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between px-0">
              <span class="text-secondary">{{ $t('common.status') }}</span>
              <span class="badge" :class="statusClass[user!.status]">{{ user!.status }}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between px-0">
              <span class="text-secondary">{{ $t('common.created') }}</span><span>{{ user!.createdAt }}</span>
            </li>
          </ul>
          <div class="d-flex gap-2 mt-3">
            <NuxtLink :to="`/users/${user!.id}/edit`" class="btn btn-primary"><i class="bi bi-pencil me-1" />{{ $t('common.edit') }}</NuxtLink>
            <button class="btn btn-outline-danger" :disabled="deleting" @click="onDelete">
              <i class="bi bi-trash me-1" />{{ $t('common.delete') }}
            </button>
            <NuxtLink to="/users" class="btn btn-outline-secondary ms-auto">{{ $t('common.back') }}</NuxtLink>
          </div>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
