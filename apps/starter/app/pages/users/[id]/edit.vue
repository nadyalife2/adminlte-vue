<script setup lang="ts">
import { ref } from 'vue'
import type { User, UserInput } from '~/types/user'

definePageMeta({ middleware: 'auth', roles: ['admin'] })
const { t } = useI18n()

const route = useRoute()
const id = route.params.id as string
const { data: user, error } = await useFetch<User>(`/api/users/${id}`)
if (error.value || !user.value) {
  throw createError({ statusCode: 404, statusMessage: 'User not found' })
}
useSeoMeta({ title: () => `${t('users.edit')} · AdminLTE Starter` })

const form = ref<UserInput>({
  name: user.value.name,
  email: user.value.email,
  role: user.value.role,
  status: user.value.status,
})
const errors = ref<Record<string, string>>({})
const submitting = ref(false)

async function onSubmit() {
  errors.value = {}
  submitting.value = true
  try {
    await $fetch(`/api/users/${id}`, { method: 'PUT', body: form.value })
    useToast().success(t('users.saved'))
    await navigateTo(`/users/${id}`)
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
    :title="`${$t('common.edit')} · ${user!.name}`"
    :breadcrumbs="[
      { label: $t('common.home'), href: '/' },
      { label: $t('users.title'), href: '/users' },
      { label: user!.name, href: `/users/${id}` },
      { label: $t('common.edit') },
    ]"
  >
    <div class="row">
      <div class="col-lg-7">
        <LteCard :title="$t('users.edit')" icon="bi-pencil">
          <AppUserForm v-model="form" :errors="errors" :submitting="submitting" :submit-label="$t('common.saveChanges')" @submit="onSubmit" />
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
