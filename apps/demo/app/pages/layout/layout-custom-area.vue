<script setup lang="ts">
definePageMeta({ layout: false })
</script>

<template>
  <DemoLayout :fixed-sidebar="true">
    <!-- App Content Top Area -->
    <div class="app-content-top-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div>App Content Top Area</div>
          </div>
          <div class="col-md-6 text-end">
            <button type="submit" class="btn btn-primary" name="save" value="create">Create Admin</button>
          </div>
        </div>
      </div>
    </div>

    <LteAppContent
      title="Layout Custom Area"
      :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Fixed Layout' }]"
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

    <!-- App Content Bottom Area -->
    <div class="app-content-bottom-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div>App Content Bottom Area</div>
          </div>
          <div class="col-md-6 text-end">
            <button type="submit" class="btn btn-secondary" name="save" value="create">Refresh</button>
          </div>
        </div>
      </div>
    </div>
  </DemoLayout>
</template>
