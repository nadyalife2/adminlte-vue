<script setup lang="ts">
import { ref } from 'vue'
import type { UserInput } from '~/types/user'

definePageMeta({ middleware: 'auth', roles: ['admin'] })
useSeoMeta({ title: 'New user · AdminLTE Starter' })

const form = ref<UserInput>({ name: '', email: '', role: 'Viewer', status: 'active' })
const errors = ref<Record<string, string>>({})
const submitting = ref(false)

async function onSubmit() {
  errors.value = {}
  submitting.value = true
  try {
    const created = await $fetch('/api/users', { method: 'POST', body: form.value })
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
    title="New user"
    :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Users', href: '/users' }, { label: 'New' }]"
  >
    <div class="row">
      <div class="col-lg-7">
        <LteCard title="Create user" icon="bi-person-plus">
          <AppUserForm v-model="form" :errors="errors" :submitting="submitting" submit-label="Create user" @submit="onSubmit" />
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
