<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout :fixed-header="true" :fixed-sidebar="false" :fixed-footer="false">
    <LteAppContent
      title="Fixed Header"
      :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Fixed Header' }]"
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
