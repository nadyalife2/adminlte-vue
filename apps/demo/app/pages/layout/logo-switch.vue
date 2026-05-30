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
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Title</h3>
              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-lte-toggle="card-collapse" title="Collapse">
                  <i data-lte-icon="expand" class="bi bi-plus-lg"></i>
                  <i data-lte-icon="collapse" class="bi bi-dash-lg"></i>
                </button>
                <button type="button" class="btn btn-tool" data-lte-toggle="card-remove" title="Remove">
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
            <div class="card-body">Start creating your amazing application!</div>
            <div class="card-footer">Footer</div>
          </div>
        </div>
      </div>
    </LteAppContent>
  </DemoLayout>
</template>
