<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout dir="rtl" :fixed-sidebar="true">
    <LteAppContent
      title="Layout RTL"
      :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Layout RTL' }]"
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
