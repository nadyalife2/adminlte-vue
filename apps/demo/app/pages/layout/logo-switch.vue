<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout :sidebar-mini="true" :fixed-sidebar="true">
    <template #sidebar-brand>
      <div class="sidebar-brand">
        <NuxtLink to="/" class="brand-link logo-switch">
          <img
            src="/assets/img/AdminLTELogo.png"
            alt="AdminLTE Logo Small"
            class="brand-image-xl logo-xs opacity-75 shadow"
          />
          <img
            src="/assets/img/AdminLTEFullLogo.png"
            alt="AdminLTE Logo Large"
            class="brand-image-xs logo-xl opacity-75"
          />
        </NuxtLink>
      </div>
    </template>

    <LteAppContent
      title="Logo Switch"
      :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Logo Switch' }]"
    >
      <div class="row">
        <div class="col-12">
          <LteCard title="Title" collapsible removable>
            Start creating your amazing application!
            <template #footer>Footer</template>
          </LteCard>
        </div>
      </div>
    </LteAppContent>
  </DemoLayout>
</template>
