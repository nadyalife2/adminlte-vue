<script setup lang="ts">
definePageMeta({ middleware: 'auth', roles: ['admin'] })
useSeoMeta({ title: 'Administration · AdminLTE Starter' })

const auth = useAuthStore()
</script>

<template>
  <LteAppContent
    title="Administration"
    :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Administration' }]"
  >
    <div class="row g-3">
      <div class="col-lg-8">
        <LteCard title="Admin-only area" icon="bi-shield-lock" theme="danger" variant="outline">
          <p>
            This page declares <code>definePageMeta({ middleware: 'auth', roles: ['admin'] })</code>.
            The <code>auth</code> middleware lets it through only for users whose roles include
            <code>admin</code> — everyone else gets a 403. The sidebar entry is also hidden for
            non-admins via role-based menu filtering.
          </p>
          <p class="mb-0">
            Try it: sign in as <code>editor@example.com</code> / <code>password</code> — the
            "Administration" item disappears, and visiting <code>/admin</code> directly is blocked.
          </p>
        </LteCard>
      </div>
      <div class="col-lg-4">
        <LteCard title="Your access" icon="bi-person-badge">
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between px-0">
              <span class="text-secondary">User</span><span>{{ auth.user?.name }}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between px-0">
              <span class="text-secondary">Roles</span>
              <span>
                <span v-for="r in auth.roles" :key="r" class="badge text-bg-secondary ms-1">{{ r }}</span>
              </span>
            </li>
          </ul>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>
