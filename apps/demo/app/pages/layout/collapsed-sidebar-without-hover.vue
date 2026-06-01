<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout :sidebar-mini="true" :fixed-sidebar="true" body-class="sidebar-without-hover">
    <CollapseSidebarOnMount />
    <LteAppContent
      title="Collapsed Sidebar Without Hover"
      :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Collapsed Sidebar Without Hover' }]"
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
