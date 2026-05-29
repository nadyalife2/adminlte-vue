<script setup lang="ts">
import type { BootstrapTheme } from '../types/theme'
import type { NavMessage } from '../types/widgets'

withDefaults(
  defineProps<{
    messages: NavMessage[]
    badgeColor?: BootstrapTheme
    count?: number | string
    seeAllUrl?: string
    seeAllText?: string
  }>(),
  { badgeColor: 'danger', seeAllUrl: '#', seeAllText: 'See All Messages' }
)
</script>

<template>
  <li class="nav-item dropdown">
    <a class="nav-link" data-bs-toggle="dropdown" href="#">
      <i class="bi bi-chat-text"></i>
      <span v-if="messages.length" :class="`navbar-badge badge text-bg-${badgeColor}`">{{ count ?? messages.length }}</span>
    </a>
    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
      <template v-for="(msg, idx) in messages" :key="idx">
        <a :href="msg.url || '#'" class="dropdown-item">
          <div class="d-flex">
            <div v-if="msg.image" class="flex-shrink-0">
              <img :src="msg.image" alt="User Avatar" class="img-size-50 rounded-circle me-3" />
            </div>
            <div class="flex-grow-1">
              <h3 class="dropdown-item-title">
                {{ msg.from }}
                <span v-if="msg.star" :class="`float-end fs-7 text-${msg.star}`"><i class="bi bi-star-fill"></i></span>
              </h3>
              <p class="fs-7">{{ msg.text }}</p>
              <p v-if="msg.time" class="fs-7 text-secondary"><i class="bi bi-clock-fill me-1"></i> {{ msg.time }}</p>
            </div>
          </div>
        </a>
        <div class="dropdown-divider"></div>
      </template>
      <a :href="seeAllUrl" class="dropdown-item dropdown-footer">{{ seeAllText }}</a>
    </div>
  </li>
</template>
