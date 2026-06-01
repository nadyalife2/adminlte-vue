<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout :fixed-header="true" :fixed-sidebar="true" :fixed-footer="true">
    <LteAppContent
      title="Fixed Complete"
      :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Fixed Complete' }]"
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
