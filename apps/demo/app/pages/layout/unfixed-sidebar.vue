<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout :fixed-header="false" :fixed-sidebar="false" :fixed-footer="false">
    <LteAppContent
      title="Unfixed Layout"
      :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Unfixed Layout' }]"
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
