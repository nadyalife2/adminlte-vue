<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({ middleware: 'auth' })
useSeoMeta({ title: 'Settings · AdminLTE Starter' })

const auth = useAuthStore()
const form = ref({
  name: auth.user?.name ?? '',
  email: auth.user?.email ?? '',
  notifications: true,
})
const saved = ref(false)

function onSave() {
  // Demo only — POST to your API here.
  saved.value = true
  setTimeout(() => (saved.value = false), 2000)
}
</script>

<template>
  <LteAppContent
    title="Settings"
    :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Settings' }]"
  >
    <div class="row">
      <div class="col-lg-8">
        <LteCard title="Profile settings" icon="bi-gear">
          <form @submit.prevent="onSave">
            <div class="mb-3">
              <label class="form-label" for="name">Name</label>
              <input id="name" v-model="form.name" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label" for="email">Email</label>
              <input id="email" v-model="form.email" type="email" class="form-control" />
            </div>
            <div class="form-check form-switch mb-3">
              <input id="notify" v-model="form.notifications" class="form-check-input" type="checkbox" />
              <label class="form-check-label" for="notify">Email notifications</label>
            </div>
            <button type="submit" class="btn btn-primary">Save changes</button>
            <span v-if="saved" class="ms-2 text-success"><i class="bi bi-check2" /> Saved</span>
          </form>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
