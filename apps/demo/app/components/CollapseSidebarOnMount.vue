<script setup lang="ts">
import { onMounted } from 'vue'
import { useSidebar } from '@colorlib/adminlte-vue'

// Rendered inside <LteDashboardLayout>, so the sidebar injection resolves.
// Collapses the sidebar once mounted — used by the "Collapsed Sidebar" demo
// to start in the collapsed state like the original AdminLTE page.
const sidebar = useSidebar()
onMounted(() => sidebar.collapse())
</script>

<template>
  <span class="d-none" aria-hidden="true" />
</template>
