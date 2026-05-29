<script setup lang="ts">
import type { TimelineItem } from '../types/widgets'
import { biClass } from '../lib/class-name'

defineProps<{ items: TimelineItem[] }>()
</script>

<template>
  <div class="timeline">
    <div v-for="(item, idx) in items" :key="idx">
      <i
        :class="['bi', biClass(item.icon || 'bi-circle-fill'), `bg-${item.iconTheme || 'primary'}`]"
        aria-hidden="true"
      ></i>
      <div class="timeline-item">
        <span class="time"><i class="bi bi-clock"></i> {{ item.time }}</span>
        <h3 class="timeline-header">
          <a v-if="item.url" :href="item.url">{{ item.title }}</a>
          <template v-else>{{ item.title }}</template>
        </h3>
        <div v-if="item.body" class="timeline-body" v-html="item.body"></div>
        <div v-if="item.footer" class="timeline-footer" v-html="item.footer"></div>
      </div>
    </div>
  </div>
</template>
