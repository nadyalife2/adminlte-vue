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
