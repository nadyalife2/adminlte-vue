<script setup lang="ts">
import { ref } from 'vue'
import type { UserInput } from '~/types/user'

definePageMeta({ middleware: 'auth', roles: ['admin'] })
const { t } = useI18n()
useSeoMeta({ title: () => `${t('users.create')} · AdminLTE Starter` })

const form = ref<UserInput>({ name: '', email: '', role: 'Viewer', status: 'active' })
const errors = ref<Record<string, string>>({})
const submitting = ref(false)

async function onSubmit() {
  errors.value = {}
  submitting.value = true
  try {
    const created = await $fetch('/api/users', { method: 'POST', body: form.value })
    useToast().success(t('users.created', { name: created.name }))
    await navigateTo(`/users/${created.id}`)
  } catch (e: unknown) {
    const err = e as { data?: { data?: { errors?: Record<string, string> } } }
    errors.value = err?.data?.data?.errors ?? {}
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <LteAppContent
    :title="$t('users.create')"
    :breadcrumbs="[{ label: $t('common.home'), href: '/' }, { label: $t('users.title'), href: '/users' }, { label: $t('common.create') }]"
  >
    <div class="row">
      <div class="col-lg-7">
        <LteCard :title="$t('users.create')" icon="bi-person-plus">
          <AppUserForm v-model="form" :errors="errors" :submitting="submitting" :submit-label="$t('users.create')" @submit="onSubmit" />
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
