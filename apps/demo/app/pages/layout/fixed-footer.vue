<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout :fixed-footer="true" :fixed-header="false" :fixed-sidebar="false">
    <LteAppContent
      title="Fixed Footer"
      :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Fixed Footer' }]"
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
