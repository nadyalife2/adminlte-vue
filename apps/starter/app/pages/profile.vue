<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
useSeoMeta({ title: 'Profile · AdminLTE Starter' })

const auth = useAuthStore()
</script>

<template>
  <LteAppContent
    title="Profile"
    :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Profile' }]"
  >
    <div class="row g-3">
      <div class="col-lg-4">
        <LteCard title="Account" icon="bi-person">
          <div class="text-center mb-3">
            <img
              :src="auth.user?.image ?? '/assets/img/user2-160x160.jpg'"
              class="rounded-circle shadow"
              width="96"
              height="96"
              :alt="auth.user?.name"
            />
          </div>
          <h5 class="text-center mb-0">{{ auth.user?.name ?? 'Guest' }}</h5>
          <p class="text-center text-secondary">{{ auth.user?.role }}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between px-0">
              <span class="text-secondary">Email</span><span>{{ auth.user?.email }}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between px-0">
              <span class="text-secondary">Role</span><span>{{ auth.user?.role }}</span>
            </li>
          </ul>
        </LteCard>
      </div>
      <div class="col-lg-8">
        <LteCard title="About this page" icon="bi-info-circle">
          <p class="mb-0">
            A protected route — the <code>auth</code> middleware redirects here to
            <code>/login</code> when there's no session, preserving the intended path via
            <code>?redirect=</code>. The user shown comes from the cookie-backed
            <code>useAuthStore()</code>, hydrated on the server.
          </p>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
